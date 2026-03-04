import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const WEB3FORMS_KEY = "bdc0fc15-b8ad-474c-b8d4-757c3534990a";
const RECIPIENT_EMAIL = "cilene@conexusbr.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { nome, empresa, email, telefone, tipoProjeto, descricao } = await req.json();

    if (!nome || !email) {
      throw new Error("Nome e email são obrigatórios.");
    }

    // Send email via Web3Forms
    const web3Res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `Novo contato - ${nome} | Conexus BR`,
        from_name: "Conexus BR - Fale Conosco",
        to: RECIPIENT_EMAIL,
        nome,
        empresa: empresa || "Não informado",
        email,
        telefone: telefone || "Não informado",
        tipo_projeto: tipoProjeto || "Não informado",
        descricao: descricao || "Não informado",
      }),
    });

    const web3Data = await web3Res.json();
    if (!web3Res.ok || !web3Data.success) {
      throw new Error(`Web3Forms error: ${JSON.stringify(web3Data)}`);
    }

    // Also save to database
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
      await supabase.from("contact_submissions").insert({
        nome, empresa, email, telefone, tipo_projeto: tipoProjeto, descricao,
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: msg }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
