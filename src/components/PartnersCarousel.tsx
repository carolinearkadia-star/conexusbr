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
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
            Rede de Negócios
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
            Nossos Parceiros
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Empresas especialistas que fazem parte do nosso hub técnico.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary transition-colors backdrop-blur-sm"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary transition-colors backdrop-blur-sm"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>

          <div className="overflow-hidden mx-4 md:mx-0" ref={emblaRef}>
            <div className="flex gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]"
                >
                  <div className="group rounded-2xl border border-border bg-primary p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl hover:-translate-y-1 hover:border-secondary/30 transition-all duration-300 h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center justify-center mb-6 w-full overflow-visible">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className={`object-contain max-h-full max-w-[180px] ${partner.logoClass}`}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-xl font-bold text-secondary">{partner.name}</h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed flex-1">
                      {partner.description}
                    </p>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-6 group-hover:border-secondary group-hover:text-secondary transition-colors"
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
          <div className="mt-8 flex justify-center">
            <div className="w-32 h-1 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-secondary rounded-full transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;
