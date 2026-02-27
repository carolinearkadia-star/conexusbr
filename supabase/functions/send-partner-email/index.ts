import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

const RECIPIENT_EMAIL = "cilene@conexusbr.com";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { empresa, responsavel, email, telefone, areaAtuacao, tipoParceria, interesse, mensagem } = await req.json();

    // Build email body
    const body = `
Nova solicitação de parceria - Conexus BR

Empresa: ${empresa}
Responsável: ${responsavel}
Email: ${email}
Telefone: ${telefone || "Não informado"}
Área de atuação: ${areaAtuacao || "Não informado"}
Tipo de parceria: ${tipoParceria || "Não informado"}
Interesse: ${interesse || "Não informado"}
Mensagem: ${mensagem || "Não informado"}
    `.trim();

    // Use Supabase's built-in SMTP to send via the Auth admin API
    // We'll use the Resend-compatible approach with fetch
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing Supabase environment variables");
    }

    // Since we don't have a third-party email service, we'll store the submission
    // in the database and send a notification. For now, let's use the database approach.
    // We'll create a simple submissions table approach.

    const { createClient } = await import("https://esm.sh/@supabase/supabase-js@2");
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { error } = await supabase.from("partner_submissions").insert({
      empresa,
      responsavel,
      email,
      telefone,
      area_atuacao: areaAtuacao,
      tipo_parceria: tipoParceria,
      interesse,
      mensagem,
    });

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Submission saved successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error processing partner submission:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
