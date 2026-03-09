import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ImageLightbox from "@/components/ImageLightbox";
import fotoCilene from "@/assets/foto-cilene.png";
import fotoHudson from "@/assets/foto-hudson.png";

const gestores = [
{
  name: "Cilene Paleari Faria",
  photo: fotoCilene,
  experience: "+28 anos de experiência",
  description:
  "Profissional com mais de 28 anos de experiência na indústria eletrônica, com atuação sólida na gestão comercial, processos, qualidade e desenvolvimento de negócios. Ao longo de sua carreira, atuou de forma direta na interface entre engenharia, produção, qualidade e cliente, liderando equipes, implantando sistemas de gestão, MRP, Lean Manufacturing e Kaizen.\n\nNa Conexus, é responsável pelo diagnóstico das necessidades do cliente, estruturação das conexões técnicas, alinhamento entre expectativa e viabilidade e condução estratégica dos projetos.",
  whatsapp: "https://wa.me/5519990147479",
  email: "cilene@conexus.com.br"
},
{
  name: "Hudson Benedicto",
  photo: fotoHudson,
  experience: "+30 anos de experiência",
  description:
  "Profissional com mais de 30 anos de experiência em engenharia de\nprocessos e manufatura de placas eletrônicas. Possui profundo\nconhecimento na relação entre processo, componentes e layout de PCB, com forte atuação em industrialização, confiabilidade e otimização produtiva. Liderou equipes de engenharia e participou de projetos de alta complexidade, incluindo o desenvolvimento da leitora de cartão do telefone público.\nNa Conexus, atua na avaliação técnica dos projetos, análise de riscos produtivos, definição de processos e suporte técnico avançado à industrialização.",
  whatsapp: "https://wa.me/5519999531659",
  email: "hudson@conexus.com.br"
}];


const GestoresPage = () => {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  return (
    <>
    <ImageLightbox
      src={lightbox?.src || ""}
      alt={lightbox?.alt || ""}
      open={!!lightbox}
      onOpenChange={(open) => !open && setLightbox(null)}
    />
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Liderança
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
              Gestores Técnicos
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Profissionais com décadas de experiência em eletrônica e manufatura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {gestores.map((gestor, i) =>
            <motion.div
              key={gestor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-primary rounded-2xl border border-border shadow-sm p-8 text-center flex flex-col">

                <img
                src={gestor.photo}
                alt={gestor.name}
                onClick={() => setLightbox({ src: gestor.photo, alt: gestor.name })}
                className="w-40 h-40 rounded-full mx-auto object-cover object-top border-muted border-0 cursor-pointer hover:ring-2 hover:ring-secondary transition-all" />

                <h3 className="mt-6 text-xl font-bold text-primary-foreground">{gestor.name}</h3>
                <p className="mt-1 text-sm text-secondary font-semibold">{gestor.experience}</p>
                <p className="mt-4 text-primary-foreground text-sm leading-relaxed text-justify">
                  {gestor.description}
                </p>
                <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <Button variant="whatsapp" size="sm" asChild>
                    <a href={gestor.whatsapp} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={16} />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${gestor.email}`}>
                      <Mail size={16} />
                      Email
                    </a>
                  </Button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
    </>);

};

export default GestoresPage;