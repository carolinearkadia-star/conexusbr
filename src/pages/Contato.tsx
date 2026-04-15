import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContatoPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tipoProjeto: "",
    descricao: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.nome.trim() || !form.email.trim()) {
      toast({ title: "Campos obrigatórios", description: "Preencha pelo menos nome e email.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", { body: form });
      if (error) throw error;
      if (data && !data.success) throw new Error(data.error || "Erro ao enviar");

      setSent(true);
      setForm({ nome: "", empresa: "", email: "", telefone: "", tipoProjeto: "", descricao: "" });
    } catch (err) {
      console.error("Error:", err);
      toast({ title: "Erro ao enviar", description: "Tente novamente mais tarde.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <SEOHead title="Fale Conosco | Conexus" description="Pronto para impulsionar seu produto eletrônico? Entre em contato com os especialistas da Conexus e descubra como nosso hub técnico pode gerar valor ao seu projeto." />
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Contato
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
              Fale Conosco
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Estamos prontos para entender seu projeto e propor as melhores conexões.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {sent ?
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center text-center space-y-4 py-12">
              
                <CheckCircle className="text-green-500 w-16 h-16" />
                <h3 className="text-2xl font-bold text-foreground">Mensagem enviada com sucesso!</h3>
                <p className="text-muted-foreground">Retornaremos em breve. Obrigado pelo contato!</p>
                <Button variant="outline" onClick={() => setSent(false)}>Enviar outra mensagem</Button>
              </motion.div> :

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5">
                <Input placeholder="Nome *" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
                <Input placeholder="Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
                <Input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                <Input placeholder="Tipo de projeto" value={form.tipoProjeto} onChange={(e) => setForm({ ...form, tipoProjeto: e.target.value })} />
                <Textarea placeholder="Descrição da necessidade" rows={5} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
                <Button variant="hero" size="lg" type="submit" className="w-full" disabled={loading}>
                  {loading ? "Enviando..." : "Enviar mensagem"}
                </Button>
              </motion.form>
            }

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Informações de contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Cilene Paleari Faria</p>
                      <a href="tel:+5519990147479" className="text-muted-foreground text-sm hover:text-foreground transition-colors block">(19) 99014-7479</a>
                      <a href="mailto:cilene@conexusbr.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors block">cilene@conexusbr.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Hudson Benedicto</p>
                      <a className="text-muted-foreground text-sm hover:text-foreground transition-colors block" href="tel:+5519999531659">(19) 99953-1659</a>
                      <a href="mailto:hudson@conexusbr.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors block">hudson@conexusbr.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <a href="https://www.conexusbr.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-foreground transition-colors">www.conexusbr.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="whatsapp" size="lg" className="w-full" asChild>
                <a target="_blank" rel="noopener noreferrer" href="https://wa.me/5519990147479">
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>);

};

export default ContatoPage;