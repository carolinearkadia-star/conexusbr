import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import PartnerModal, { type PartnerData } from "@/components/PartnerModal";
import logoCadservice from "@/assets/logo-cadservice.png";
import icapeOffice from "@/assets/icape-office.webp";
import icapeQuality from "@/assets/icape-quality.webp";
import logoIcape from "@/assets/logo-icape.svg";
import fitecSolar from "@/assets/fitec-solar.png";
import fitecLab from "@/assets/fitec-lab.jpg";
import jtcpcbLayout from "@/assets/jtcpcb-layout.webp";
import jtcpcbPcb from "@/assets/jtcpcb-pcb.webp";
import logoJtcpcb from "@/assets/logo-jtcpcb.png";
import logoFitec from "@/assets/logo-fitec.png";

const parceiros: PartnerData[] = [
  {
    name: "CADService",
    subtitle: "Parceiro Estratégico",
    logo: logoCadservice,
    description: "Manufatura de placas eletrônicas (SMT e PTH).",
    fullDescription:
      "A CADService é especializada na manufatura de placas eletrônicas, oferecendo serviços completos de montagem SMT (Surface Mount Technology) e PTH (Pin Through Hole).\n\nCom infraestrutura moderna e processos certificados, a empresa garante qualidade e agilidade na produção de protótipos e lotes de produção.",
    url: "https://www.cadservice.com.br/",
    media: [
      { type: "image", src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800", alt: "Placa eletrônica" },
      { type: "image", src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800", alt: "Tecnologia" },
    ],
  },
  {
    name: "ICAPE",
    subtitle: "Parceiro Estratégico",
    logo: logoIcape,
    description: "Fabricação global de PCBs.",
    fullDescription:
      "A ICAPE é referência mundial na fabricação de PCBs (Printed Circuit Boards), atendendo clientes em diversos setores da indústria eletrônica.\n\nCom presença global e parcerias com as melhores fábricas, garante qualidade, rastreabilidade e prazos competitivos.",
    url: "https://www.icape-group.com/pt-pt/",
    media: [
      { type: "image", src: icapeOffice, alt: "Escritório ICAPE" },
      { type: "image", src: icapeQuality, alt: "Controle de qualidade ICAPE" },
    ],
  },
  {
    name: "FITec",
    logo: logoFitec,
    subtitle: "Parceiro Estratégico",
    description: "Fundação para Inovações Tecnológicas.",
    fullDescription:
      "A FITec – Fundação para Inovações Tecnológicas – atua no desenvolvimento de soluções inovadoras em parceria com a indústria e a academia.\n\nCom foco em pesquisa aplicada e transferência de tecnologia, a fundação contribui para o avanço tecnológico do setor produtivo brasileiro.",
    url: "http://www.fitec.org.br/home",
    media: [
      { type: "image", src: fitecSolar, alt: "Projeto de energia solar FITec" },
      { type: "image", src: fitecLab, alt: "Laboratório de pesquisa FITec" },
    ],
  },
  {
    name: "JTCPCB",
    logo: logoJtcpcb,
    subtitle: "Parceiro Estratégico",
    description: "Layout e Design de Placas Eletrônicas.",
    fullDescription:
      "A JTCPBC é especializada em layout e design de placas eletrônicas, oferecendo soluções personalizadas para projetos de alta complexidade.\n\nCom engenheiros experientes e ferramentas de ponta, entrega projetos otimizados para manufaturabilidade e desempenho.",
    url: "https://jtcpcb.com/",
    media: [
      { type: "image", src: jtcpcbLayout, alt: "Layout de PCB" },
      { type: "image", src: jtcpcbPcb, alt: "Placa de circuito impresso" },
    ],
  },
];

const ParceirosPage = () => {
  const { toast } = useToast();
  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null);
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
      {/* Parceiros atuais */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              REDE DE NEGÓCIOS
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
              Nossos Parceiros
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {parceiros.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-border p-8 flex flex-col bg-primary items-start"
              >
                {p.logo && (
                  <img src={p.logo} alt={p.name} className="object-contain mb-4 h-12" />
                )}
                <h3 className="text-lg font-bold text-secondary">{p.name}</h3>
                <p className="mt-2 text-sm flex-1 text-primary-foreground">{p.description}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-6 w-fit"
                  onClick={() => setSelectedPartner(p)}
                >
                  Saiba mais <ExternalLink size={14} />
                </Button>
              </motion.div>
            ))}
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

      {/* Partner Modal */}
      <PartnerModal
        partner={selectedPartner}
        open={!!selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
    </div>
  );
};

export default ParceirosPage;
