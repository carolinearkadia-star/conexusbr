import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NetworkBackground from "@/components/NetworkBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const }
  })
};

const steps = [
{ num: "01", title: "Diagnóstico técnico e produtivo" },
{ num: "02", title: "Análise de viabilidade técnica e industrial" },
{ num: "03", title: "Definição de estratégia (layout, PCB e manufatura)" },
{ num: "04", title: "Conexão com parceiros especialistas" },
{ num: "05", title: "Acompanhamento técnico contínuo" }];


const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <NetworkBackground />
        <div className="container-narrow relative z-10 px-6 pt-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible">

            <motion.h1
              custom={0}
              variants={fadeUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">

              Conectando empresas.{" "}
              <span className="text-gradient">Entregando soluções técnicas.</span>
            </motion.h1>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">

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
                Um hub técnico que conecta o mercado
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                A Conexus atua como um hub técnico estratégico. Não vendemos soluções prontas — conectamos
                empresas especialistas conforme a necessidade de cada projeto. Nossa análise técnica real e
                viabilidade industrial garantem que cada conexão gere valor e resultado.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Atuamos na interseção entre engenharia, manufatura e mercado, oferecendo diagnóstico
                preciso e acompanhamento contínuo para projetos eletrônicos de alta complexidade.
              </p>
            </div>
            <div className="relative">
              {/* Abstract connection visual */}
              <div className="aspect-square rounded-2xl bg-accent/50 flex items-center justify-center relative overflow-hidden">
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-30" fill="none">
                  {/* Circuit-like pattern */}
                  <circle cx="200" cy="200" r="80" stroke="hsl(216, 86%, 14%)" strokeWidth="0.5" />
                  <circle cx="200" cy="200" r="140" stroke="hsl(216, 86%, 14%)" strokeWidth="0.5" />
                  <circle cx="200" cy="200" r="190" stroke="hsl(216, 86%, 14%)" strokeWidth="0.3" />
                  {/* Nodes */}
                  <circle cx="200" cy="120" r="4" fill="hsl(322, 76%, 42%)" className="bg-secondary" />
                  <circle cx="280" cy="200" r="4" fill="hsl(322, 76%, 42%)" />
                  <circle cx="200" cy="280" r="4" fill="hsl(216, 86%, 14%)" />
                  <circle cx="120" cy="200" r="4" fill="hsl(216, 86%, 14%)" />
                  <circle cx="260" cy="140" r="3" fill="hsl(322, 76%, 42%)" opacity="0.6" />
                  <circle cx="140" cy="260" r="3" fill="hsl(216, 86%, 14%)" opacity="0.6" />
                  <circle cx="260" cy="260" r="3" fill="hsl(216, 86%, 14%)" opacity="0.4" />
                  <circle cx="140" cy="140" r="3" fill="hsl(322, 76%, 42%)" opacity="0.4" />
                  {/* Lines */}
                  <line x1="200" y1="120" x2="280" y2="200" stroke="hsl(216, 86%, 14%)" strokeWidth="0.5" />
                  <line x1="280" y1="200" x2="200" y2="280" stroke="hsl(216, 86%, 14%)" strokeWidth="0.5" />
                  <line x1="200" y1="280" x2="120" y2="200" stroke="hsl(216, 86%, 14%)" strokeWidth="0.5" />
                  <line x1="120" y1="200" x2="200" y2="120" stroke="hsl(216, 86%, 14%)" strokeWidth="0.5" className="text-primary-foreground" />
                  <line x1="200" y1="120" x2="260" y2="140" stroke="hsl(322, 76%, 42%)" strokeWidth="0.3" />
                  <line x1="260" y1="140" x2="280" y2="200" stroke="hsl(322, 76%, 42%)" strokeWidth="0.3" />
                  <line x1="120" y1="200" x2="140" y2="260" stroke="hsl(216, 86%, 14%)" strokeWidth="0.3" />
                  <line x1="200" y1="200" x2="200" y2="120" stroke="hsl(322, 76%, 42%)" strokeWidth="0.3" strokeDasharray="4 4" />
                  <line x1="200" y1="200" x2="280" y2="200" stroke="hsl(322, 76%, 42%)" strokeWidth="0.3" strokeDasharray="4 4" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold text-gradient opacity-20">CX</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modelo de Consultoria */}
      <section className="section-padding bg-muted/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">

            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Modelo de Consultoria
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-foreground">
              Do diagnóstico à entrega
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {steps.map((step, i) =>
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative text-center">

                  <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto text-sm font-bold">
                    {step.num}
                  </div>
                  <p className="mt-4 text-sm font-medium text-foreground leading-snug">
                    {step.title}
                  </p>
                </motion.div>
              )}
            </div>
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