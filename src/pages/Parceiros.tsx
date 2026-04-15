import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PartnersCarousel from "@/components/PartnersCarousel";
import { supabase } from "@/integrations/supabase/client";

const ParceirosPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    empresa: "",
    responsavel: "",
    email: "",
    telefone: "",
    areaAtuacao: "",
    tipoParceria: "",
    interesse: "",
    mensagem: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.empresa.trim() || !form.responsavel.trim() || !form.email.trim()) {
      toast({ title: "Campos obrigatórios", description: "Preencha empresa, responsável e email.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-partner-email", { body: form });
      if (error) throw error;
      if (data && !data.success) throw new Error(data.error || "Erro ao enviar");

      setSent(true);
      setForm({ empresa: "", responsavel: "", email: "", telefone: "", areaAtuacao: "", tipoParceria: "", interesse: "", mensagem: "" });
    } catch (err) {
      console.error("Error submitting form:", err);
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <SEOHead title="Parceiros Estratégicos | Conexus" description="Nossa rede de parceiros estratégicos inclui líderes em manufatura de placas, design de PCB e gestão de custos. Conexões de elite para o seu projeto técnico." />
    <div className="pt-20">
      <PartnersCarousel />

      <section className="section-padding bg-muted/30">
        <div className="container-narrow max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
              Quer se conectar como parceiro?
            </h2>
            <p className="mt-3 text-muted-foreground text-center">
              Preencha o formulário abaixo e entraremos em contato.
            </p>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center space-y-4 py-16"
              >
                <CheckCircle className="text-green-500 w-16 h-16" />
                <h3 className="text-2xl font-bold text-foreground">Mensagem enviada com sucesso!</h3>
                <p className="text-muted-foreground">Entraremos em contato em breve. Obrigado!</p>
                <Button variant="outline" onClick={() => setSent(false)}>Enviar outra mensagem</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input placeholder="Nome da empresa *" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} required />
                  <Input placeholder="Nome do responsável *" value={form.responsavel} onChange={(e) => setForm({ ...form, responsavel: e.target.value })} required />
                  <Input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                  <Input placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                  <Input placeholder="Área de atuação" value={form.areaAtuacao} onChange={(e) => setForm({ ...form, areaAtuacao: e.target.value })} />
                  <Input placeholder="Tipo de parceria oferecida" value={form.tipoParceria} onChange={(e) => setForm({ ...form, tipoParceria: e.target.value })} />
                </div>
                <Input placeholder="Interesse de parceria" value={form.interesse} onChange={(e) => setForm({ ...form, interesse: e.target.value })} />
                <Textarea placeholder="Mensagem" rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
                <Button variant="hero" size="lg" type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Quero me conectar"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParceirosPage;
