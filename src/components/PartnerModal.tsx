import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PartnerMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface PartnerData {
  name: string;
  subtitle?: string;
  logo?: string;
  description: string;
  fullDescription?: string;
  url?: string;
  media?: PartnerMedia[];
}

interface PartnerModalProps {
  partner: PartnerData | null;
  open: boolean;
  onClose: () => void;
}

const PartnerModal = ({ partner, open, onClose }: PartnerModalProps) => {
  const [activeMedia, setActiveMedia] = useState(0);

  if (!partner) return null;

  const media = partner.media || [];

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[20px] bg-primary border border-border/20 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 pb-4 border-b border-border/10">
              <div className="flex items-center gap-4">
                {partner.logo && (
                  <img src={partner.logo} alt={partner.name} className={`object-contain ${partner.name === "CADService" ? "h-16" : "h-12"}`} />
                )}
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary-foreground">
                    {partner.name}
                  </h2>
                  <span className="text-xs font-semibold uppercase tracking-widest text-secondary">
                    {partner.subtitle || "Parceiro Estratégico"}
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="rounded-full p-2 text-primary-foreground/60 hover:text-primary-foreground hover:bg-background/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="flex flex-col">
                <h3 className="text-lg font-bold text-secondary mb-3">Sobre a Empresa</h3>
                <p className="text-sm leading-relaxed text-primary-foreground/80 text-justify whitespace-pre-line">
                  {partner.fullDescription || partner.description}
                </p>
                {partner.url && partner.url !== "#" && (
                  <Button variant="hero" size="lg" className="mt-6 w-fit" asChild>
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      Ir para site principal <ExternalLink size={16} />
                    </a>
                  </Button>
                )}
              </div>

              {/* Right Column – Media */}
              {media.length > 0 && (
                <div className="flex flex-col gap-4">
                  {/* Main media viewer */}
                  <div className="relative rounded-2xl overflow-hidden bg-background/5 aspect-video">
                    {media[activeMedia]?.type === "video" ? (
                      <iframe
                        src={media[activeMedia].src}
                        title={media[activeMedia].alt || "Vídeo do parceiro"}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={media[activeMedia]?.src}
                        alt={media[activeMedia]?.alt || partner.name}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Navigation arrows */}
                    {media.length > 1 && (
                      <>
                        <button
                          onClick={() => setActiveMedia((prev) => (prev === 0 ? media.length - 1 : prev - 1))}
                          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={() => setActiveMedia((prev) => (prev === media.length - 1 ? 0 : prev + 1))}
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1.5 bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails */}
                  {media.length > 1 && (
                    <div className="flex gap-2">
                      {media.map((m, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveMedia(i)}
                          className={`rounded-lg overflow-hidden border-2 transition-all w-16 h-12 ${
                            i === activeMedia
                              ? "border-secondary shadow-lg shadow-secondary/20"
                              : "border-transparent opacity-60 hover:opacity-100"
                          }`}
                        >
                          {m.type === "video" ? (
                            <div className="w-full h-full bg-background/10 flex items-center justify-center text-primary-foreground/60 text-xs">
                              ▶
                            </div>
                          ) : (
                            <img src={m.src} alt={m.alt || ""} className="w-full h-full object-cover" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PartnerModal;
