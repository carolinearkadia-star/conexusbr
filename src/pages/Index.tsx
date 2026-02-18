import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";
import ConnectionHub from "@/components/ConnectionHub";

import globeConnections from "@/assets/globe-connections.png";
import fotoCilene from "@/assets/foto-cilene.png";
import fotoHudson from "@/assets/foto-hudson.png";

const gestores = [
{
  name: "Cilene Paleari Faria",
  photo: fotoCilene,
  experience: "+28 anos de experiência",
  description:
  "Profissional com mais de 28 anos de experiência na indústria eletrônica, com atuação sólida na gestão comercial, processos, qualidade e desenvolvimento de negócios. Ao longo de sua carreira, atuou de forma direta na interface entre engenharia, produção, qualidade e cliente, liderando equipes, implantando sistemas de gestão, MRP, Lean Manufacturing e Kaizen.\n\nNa Conexus, é responsável pelo diagnóstico das necessidades do cliente, estruturação das conexões técnicas, alinhamento entre expectativa e viabilidade e condução estratégica dos projetos.",
  whatsapp: "https://wa.me/5500000000000",
  email: "cilene@conexus.com.br"
},
{
  name: "Hudson Benedicto",
  photo: fotoHudson,
  experience: "+30 anos de experiência",
  description:
  "Profissional com mais de 30 anos de experiência em engenharia de\nprocessos e manufatura de placas eletrônicas. Possui profundo\nconhecimento na relação entre processo, componentes e layout de PCB, com forte atuação em industrialização, confiabilidade e otimização produtiva. Liderou equipes de engenharia e participou de projetos de alta complexidade, incluindo o desenvolvimento da leitora de cartão do telefone público.\nNa Conexus, atua na avaliação técnica dos projetos, análise de riscos produtivos, definição de processos e suporte técnico avançado à industrialização.",
  whatsapp: "https://wa.me/5500000000000",
  email: "hudson@conexus.com.br"
}];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
  })
};



const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Layer 1: Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(0.7) contrast(0.9)" }}>

          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Layer 2: Dark overlay */}
        <div className="absolute inset-0 bg-[#051D40]/80" />
        {/* Layer 3: Canvas animation */}
        <NetworkBackground />
        <div className="container-narrow relative z-10 px-6 pt-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible">

            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white">

              Conectando empresas.{" "}
              <span className="text-gradient text-primary">Entregando soluções técnicas.</span>
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">

              Consultoria técnica e estratégica em produtos eletrônicos.
            </motion.p>
            <motion.div custom={2} variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Fale com um especialista
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/gestores">Conheça nossos gestores</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
                Quem Somos
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Um hub técnico que conecta o mercado eletrônico 
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-justify">
                A Conexus atua como um hub técnico estratégico. Não vendemos soluções prontas — conectamos
                empresas especialistas conforme a necessidade de cada projeto. Nossa análise técnica real e
                viabilidade industrial garantem que cada conexão gere valor e resultado.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-justify">
                Atuamos na interseção entre engenharia, manufatura e mercado, oferecendo diagnóstico
                preciso e acompanhamento contínuo para projetos eletrônicos de alta complexidade.
              </p>
            </div>
            <div className="relative">
              {/* Abstract connection visual */}
              <img src={globeConnections} alt="Rede global de conexões" className="w-full max-w-md mx-auto" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modelo de Consultoria */}
      <section
        className="section-padding overflow-hidden"
        style={{ background: "linear-gradient(180deg, hsl(216, 86%, 10%) 0%, hsl(216, 86%, 14%) 100%)" }}>

        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12">

            <span className="text-sm font-semibold uppercase tracking-widest" style={{ color: "hsl(322, 76%, 55%)" }}>
              Modelo de Consultoria
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">
              Do diagnóstico à entrega
            </h2>
            <p className="mt-3 text-white/50 text-lg max-w-xl mx-auto">
              Passe o mouse sobre cada etapa para entender como reduzimos riscos e garantimos resultados.
            </p>
          </motion.div>

          <ConnectionHub />
        </div>
      </section>

      {/* Gestores Técnicos */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Liderança
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Gestores Técnicos
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Profissionais com décadas de experiência em eletrônica e manufatura.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {gestores.map((gestor, i) =>
            <motion.div
              key={gestor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="rounded-2xl border border-border shadow-sm p-8 text-center bg-primary">

                <img
                src={gestor.photo}
                alt={gestor.name}
                className="w-36 h-36 rounded-full mx-auto object-cover border-muted border-0" />

                <h3 className="mt-6 text-xl font-bold text-primary-foreground">{gestor.name}</h3>
                <p className="mt-1 text-sm text-secondary font-semibold">{gestor.experience}</p>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {gestor.description}
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
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

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Pronto para conectar seu projeto?
            </h2>
            <p className="mt-4 text-primary-foreground/60 text-lg max-w-lg mx-auto">
              Entre em contato e descubra como a Conexus pode impulsionar seu produto eletrônico.
            </p>
            <Button variant="hero" size="xl" className="mt-8" asChild>
              <Link to="/contato">
                Fale com um especialista
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>);

};

export default Index;