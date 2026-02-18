import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContatoPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    email: "",
    telefone: "",
    tipoProjeto: "",
    descricao: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Retornaremos em breve." });
    setForm({ nome: "", empresa: "", email: "", telefone: "", tipoProjeto: "", descricao: "" });
  };

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
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
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              <Input placeholder="Nome" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} required />
              <Input placeholder="Empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
              <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              <Input placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
              <Input placeholder="Tipo de projeto" value={form.tipoProjeto} onChange={(e) => setForm({ ...form, tipoProjeto: e.target.value })} />
              <Textarea placeholder="Descrição da necessidade" rows={5} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Enviar mensagem
              </Button>
            </motion.form>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground mb-4">Informações de contato</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Hudson Benedicto</p>
                      <p className="text-muted-foreground text-sm">(19) 99794-2136</p>
                      <a href="mailto:hudson@conexusbr.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">hudson@conexusbr.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-secondary mt-1 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-sm">Cilene Paleari Faria</p>
                      <p className="text-muted-foreground text-sm">(19) 99232-0961</p>
                      <a href="mailto:cilene@conexusbr.com" className="text-muted-foreground text-sm hover:text-foreground transition-colors">cilene@conexusbr.com</a>
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
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContatoPage;
