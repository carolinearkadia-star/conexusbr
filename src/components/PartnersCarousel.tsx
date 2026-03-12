import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import PartnerModal, { type PartnerData } from "@/components/PartnerModal";

import logoCadservice from "@/assets/logo-cadservice.png";
import logoIcape from "@/assets/logo-icape.svg";
import logoFitec from "@/assets/logo-fitec.png";
import logoJtcpcb from "@/assets/logo-jtcpcb.png";
import cadserviceSmt from "@/assets/cadservice-smt.jpg";
import cadserviceFabrica from "@/assets/cadservice-fabrica.jpg";
import icapeOffice from "@/assets/icape-office.webp";
import icapeQuality from "@/assets/icape-quality.webp";
import fitecSolar from "@/assets/fitec-solar.png";
import fitecLab from "@/assets/fitec-lab.jpg";
import jtcpcbLayout from "@/assets/jtcpcb-layout.webp";
import jtcpcbPcb from "@/assets/jtcpcb-pcb.webp";
import logoOctea from "@/assets/logo-octea.svg";
import octeaGestao from "@/assets/octea-gestao.webp";
import octeaDigital from "@/assets/octea-digital.webp";

interface CarouselPartner extends PartnerData {
  logoClass: string;
}

const partners: CarouselPartner[] = [
  {
    name: "CADService",
    subtitle: "Parceiro Estratégico",
    logo: logoCadservice,
    description: "Líder em Manufatura de Placas Eletrônicas.",
    fullDescription:
      "A CADService é especializada na manufatura de placas eletrônicas, oferecendo serviços completos de montagem SMT (Surface Mount Technology) e PTH (Pin Through Hole).\n\nCom infraestrutura moderna e processos certificados, a empresa garante qualidade e agilidade na produção de protótipos e lotes de produção.",
    url: "https://www.cadservice.com.br/",
    media: [
      { type: "image", src: cadserviceSmt, alt: "Linha de montagem SMT CADService" },
      { type: "image", src: cadserviceFabrica, alt: "Fábrica CADService" },
    ],
    logoClass: "scale-[3] sm:scale-[5]",
  },
  {
    name: "ICAPE",
    subtitle: "Parceiro Estratégico",
    logo: logoIcape,
    description: "Líder em fabricação global de placas e customização de componentes.",
    fullDescription:
      "A ICAPE é referência mundial na fabricação de PCBs (Printed Circuit Boards), atendendo clientes em diversos setores da indústria eletrônica.\n\nCom presença global e parcerias com as melhores fábricas, garante qualidade, rastreabilidade e prazos competitivos.",
    url: "https://www.icape-group.com/pt-pt/",
    media: [
      { type: "image", src: icapeOffice, alt: "Escritório ICAPE" },
      { type: "image", src: icapeQuality, alt: "Controle de qualidade ICAPE" },
    ],
    logoClass: "",
  },
  {
    name: "OCTEA",
    subtitle: "Parceiro Estratégico",
    logo: logoOctea,
    description: "Especialista em gestão inteligente para redução de custos e eficiência operacional.",
    fullDescription:
      "A OCTEA é especialista em gestão inteligente, oferecendo soluções para otimização de recursos e transformação de negócios.\n\nCom foco em redução de custos com contratos de TI e telecom e eficiência operacional, a empresa ajuda organizações a alcançarem resultados sustentáveis através de metodologias comprovadas e tecnologia de ponta.",
    url: "https://octea.com.br/",
    media: [
      { type: "image", src: octeaGestao, alt: "Gestão de custos OCTEA" },
      { type: "image", src: octeaDigital, alt: "Transformação digital OCTEA" },
    ],
    logoClass: "scale-[4] sm:scale-[6.5]",
  },
  {
    name: "FITec Labs",
    subtitle: "Parceiro Estratégico",
    logo: logoFitec,
    description: "ICT para desenvolvimento de projetos com incentivos governamentais.",
    fullDescription:
      "A FITec – Fundação para Inovações Tecnológicas – atua no desenvolvimento de soluções inovadoras em parceria com a indústria e a academia.\n\nCom foco em pesquisa aplicada e transferência de tecnologia, a fundação contribui para o avanço tecnológico do setor produtivo brasileiro.",
    url: "https://www.fitec.org.br",
    media: [
      { type: "image", src: fitecSolar, alt: "Projeto de energia solar FITec" },
      { type: "image", src: fitecLab, alt: "Laboratório de pesquisa FITec" },
    ],
    logoClass: "",
  },
  {
    name: "JTCPCB",
    subtitle: "Parceiro Estratégico",
    logo: logoJtcpcb,
    description: "Layout e Design de Placas Eletrônicas.",
    fullDescription:
      "A JTCPBC é especializada em layout e design de placas eletrônicas, oferecendo soluções personalizadas para projetos de alta complexidade.\n\nCom engenheiros experientes e ferramentas de ponta, entrega projetos otimizados para manufaturabilidade e desempenho.",
    url: "https://jtcpcb.com/",
    media: [
      { type: "image", src: jtcpcbLayout, alt: "Layout de PCB" },
      { type: "image", src: jtcpcbPcb, alt: "Placa de circuito impresso" },
    ],
    logoClass: "scale-[2]",
  },
];

const PartnersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedPartner, setSelectedPartner] = useState<PartnerData | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    setScrollProgress(Math.max(0, Math.min(1, emblaApi.scrollProgress())));
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
    return () => {
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <>
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(216, 86%, 10%) 0%, hsl(216, 86%, 14%) 100%)" }}
      >
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(322, 76%, 55%)" }}>
              Rede de Negócios
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Nossos Parceiros</h2>
            <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
              Empresas especialistas que fazem parte do nosso hub técnico.
            </p>
          </motion.div>

          <div className="relative px-8 md:px-10">
            <button onClick={scrollPrev} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" aria-label="Anterior">
              <ChevronLeft size={18} />
            </button>
            <button onClick={scrollNext} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all" aria-label="Próximo">
              <ChevronRight size={18} />
            </button>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-6">
                {partners.map((partner) => (
                  <div key={partner.name} className="flex-[0_0_100%] min-w-0 pl-6 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                    <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center text-center hover:bg-white/10 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_8px_30px_-12px_hsl(322,76%,55%,0.3)] transition-all duration-300 h-full">
                      <div className="h-16 flex items-center justify-center mb-6 w-full overflow-visible">
                        <img src={partner.logo} alt={partner.name} className={`object-contain max-h-full max-w-[180px] ${partner.logoClass}`} />
                      </div>
                      <h3 className="text-xl font-bold" style={{ color: "hsl(322, 76%, 55%)" }}>{partner.name}</h3>
                      <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{partner.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-6 border-white/20 text-white/70 hover:border-secondary hover:text-secondary bg-transparent transition-colors"
                        onClick={() => setSelectedPartner(partner)}
                      >
                        Saiba mais <ExternalLink size={14} />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-150" style={{ width: `${scrollProgress * 100}%`, background: "hsl(322, 76%, 55%)" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerModal
        partner={selectedPartner}
        open={!!selectedPartner}
        onClose={() => setSelectedPartner(null)}
      />
    </>
  );
};

export default PartnersCarousel;
