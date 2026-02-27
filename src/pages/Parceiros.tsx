import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PartnersCarousel from "@/components/PartnersCarousel";

const ParceirosPage = () => {
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ empresa: "", responsavel: "", email: "", telefone: "", areaAtuacao: "", tipoParceria: "", interesse: "", mensagem: "" });
  };

  return (
    <div className="pt-20">
      {/* Carrossel de Parceiros - mesmo da Home */}
      <PartnersCarousel />

      {/* Formulário novo parceiro */}
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

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Input placeholder="Nome da empresa" value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} required />
                <Input placeholder="Nome do responsável" value={form.responsavel} onChange={(e) => setForm({ ...form, responsavel: e.target.value })} required />
                <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                <Input placeholder="Telefone" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
                <Input placeholder="Área de atuação" value={form.areaAtuacao} onChange={(e) => setForm({ ...form, areaAtuacao: e.target.value })} />
                <Input placeholder="Tipo de parceria oferecida" value={form.tipoParceria} onChange={(e) => setForm({ ...form, tipoParceria: e.target.value })} />
              </div>
              <Input placeholder="Interesse de parceria" value={form.interesse} onChange={(e) => setForm({ ...form, interesse: e.target.value })} />
              <Textarea placeholder="Mensagem" rows={4} value={form.mensagem} onChange={(e) => setForm({ ...form, mensagem: e.target.value })} />
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Quero me conectar
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ParceirosPage;
