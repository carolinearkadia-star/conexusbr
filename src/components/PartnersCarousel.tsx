import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import logoCadservice from "@/assets/logo-cadservice.png";
import logoIcape from "@/assets/logo-icape.svg";
import logoFitec from "@/assets/logo-fitec.png";
import logoJtcpcb from "@/assets/logo-jtcpcb.png";

const partners = [
  {
    name: "CADService",
    logo: logoCadservice,
    description: "Manufatura de placas eletrônicas (SMT e PTH).",
    url: "https://www.cadservice.com.br/",
    logoClass: "scale-[2.2] origin-left brightness-110",
  },
  {
    name: "ICAPE",
    logo: logoIcape,
    description: "Fabricação global de PCBs.",
    url: "https://www.icape-group.com/pt-pt/",
    logoClass: "",
  },
  {
    name: "FITec Labs",
    logo: logoFitec,
    description: "Fundação para Inovações Tecnológicas.",
    url: "http://www.fitec.org.br/home",
    logoClass: "",
  },
  {
    name: "JTCPCB",
    logo: logoJtcpcb,
    description: "Layout e Design de Placas Eletrônicas.",
    url: "https://jtcpcb.com/",
    logoClass: "",
  },
];

const PartnersCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    onScroll();
    emblaApi.on("select", onSelect);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("scroll", onScroll);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect, onScroll]);

  return (
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
          <span
            className="text-sm font-semibold uppercase tracking-widest"
            style={{ color: "hsl(322, 76%, 55%)" }}
          >
            Rede de Negócios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
            Nossos Parceiros
          </h2>
          <p className="mt-4 text-white/50 text-lg max-w-xl mx-auto">
            Empresas especialistas que fazem parte do nosso hub técnico.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative px-8 md:px-10">
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-white/20 text-white/70 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={18} />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col items-center text-center hover:bg-white/10 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_8px_30px_-12px_hsl(322,76%,55%,0.3)] transition-all duration-300 h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center justify-center mb-6 w-full overflow-visible">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`object-contain max-h-full max-w-[180px] ${partner.logoClass}`}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold" style={{ color: "hsl(322, 76%, 55%)" }}>
                      {partner.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">
                      {partner.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-6 border-white/20 text-white/70 hover:border-secondary hover:text-secondary bg-transparent transition-colors"
                      asChild
                    >
                      <a href={partner.url} target="_blank" rel="noopener noreferrer">
                        Saiba mais <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10 flex justify-center">
            <div className="w-24 h-0.5 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%`, background: "hsl(322, 76%, 55%)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
