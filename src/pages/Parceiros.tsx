import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const parceiros = [
{
  name: "CADService",
  description: "Manufatura de placas eletrônicas (SMT e PTH).",
  url: "#"
},
{
  name: "ICAPE",
  description: "Fabricação global de PCBs.",
  url: "#"
},
{
  name: "FITec",
  description: "Fundação para Inovações Tecnológicas.",
  url: "#"
}];


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
    mensagem: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mensagem enviada!", description: "Entraremos em contato em breve." });
    setForm({ empresa: "", responsavel: "", email: "", telefone: "", areaAtuacao: "", tipoParceria: "", interesse: "", mensagem: "" });
  };

  return (
    <div className="pt-20">
      {/* Parceiros atuais */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Rede
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
              Nossos Parceiros
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {parceiros.map((p, i) =>
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border p-8 flex flex-col bg-primary">

                <h3 className="text-lg font-bold text-secondary">{p.name}</h3>
                <p className="mt-2 text-sm flex-1 text-primary-foreground">{p.description}</p>
                <Button variant="outline" size="sm" className="mt-6 w-fit" asChild>
                  <a href={p.url}>
                    Saiba mais <ExternalLink size={14} />
                  </a>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Formulário novo parceiro */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

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
    </div>);

};

export default ParceirosPage;