import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import fotoCilene from "@/assets/foto-cilene.png";
import fotoHudson from "@/assets/foto-hudson.png";

const gestores = [
{
  name: "Cilene Paleari Faria",
  photo: fotoCilene,
  experience: "+28 anos de experiência",
  description:
  "Gestão comercial, processos, qualidade, MRP, Lean e Kaizen. Responsável por diagnóstico e estruturação estratégica.",
  whatsapp: "https://wa.me/5500000000000",
  email: "cilene@conexus.com.br"
},
{
  name: "Hudson Benedicto",
  photo: fotoHudson,
  experience: "+30 anos de experiência",
  description:
  "Engenharia de processos e manufatura de placas eletrônicas. Avaliação técnica e industrialização.",
  whatsapp: "https://wa.me/5500000000000",
  email: "hudson@conexus.com.br"
}];


const GestoresPage = () => {
  return (
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
              className="rounded-2xl border border-border shadow-sm p-8 text-center bg-primary">

                <img
                src={gestor.photo}
                alt={gestor.name}
                className="w-36 h-36 rounded-full mx-auto object-cover border-4 border-muted" />

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
    </div>);

};

export default GestoresPage;