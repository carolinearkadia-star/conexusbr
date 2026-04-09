import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogManufatura from "@/assets/blog-manufatura.png";
import blogPcbDesign from "@/assets/blog-pcb-design.png";
import blogLean from "@/assets/blog-lean.png";
import blogSemicondutores from "@/assets/blog-semicondutores.png";
import blogRohsReach from "@/assets/blog-rohs-reach.png";

const posts = [
  {
    id: 5,
    title: "ROHS, REACH e o Acordo Mercosul–União Europeia",
    summary: "O acordo Mercosul–UE abre portas, mas exige conformidade regulatória. Entenda o impacto de RoHS e REACH para a indústria eletrônica brasileira.",
    date: "Abril 2026",
    image: blogRohsReach,
    link: "/blog/rohs-reach-acordo-mercosul-ue",
  },
  {
    id: 4,
    title: "O que se sabe sobre a Crise Global de Semicondutores?",
    summary: "Um panorama das crises simultâneas que afetam a cadeia global de eletrônicos e o que fazer para se proteger.",
    date: "Abril 2026",
    image: blogSemicondutores,
    link: "/blog/crise-global-semicondutores",
  },
  {
    id: 1,
    title: "O futuro da manufatura eletrônica no Brasil",
    summary: "Análise das tendências e oportunidades para a indústria eletrônica brasileira nos próximos anos.",
    date: "Em breve",
    image: blogManufatura,
    link: "/blog/futuro-manufatura-eletronica-brasil",
  },
  {
    id: 2,
    title: "PCB Design: boas práticas para industrialização",
    summary: "Como garantir que seu projeto de PCB esteja pronto para a produção em escala.",
    date: "Em breve",
    image: blogPcbDesign,
    link: "/blog/pcb-design-boas-praticas-industrializacao",
  },
  {
    id: 3,
    title: "Lean Manufacturing aplicado à eletrônica",
    summary: "Estratégias de manufatura enxuta adaptadas para o setor de produtos eletrônicos.",
    date: "Em breve",
    image: blogLean,
    link: "/blog/lean-manufacturing-eletronica",
  },
];

const BlogPage = () => {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Conteúdo
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">Blog</h1>
            <p className="mt-4 text-muted-foreground text-lg">
              Artigos e insights sobre eletrônica, manufatura e estratégia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col"
              >
                {post.image ? (
                  <img src={post.image} alt={post.title} className="h-44 w-full object-cover" />
                ) : (
                  <div className="h-44 bg-muted flex items-center justify-center">
                    <span className="text-muted-foreground/40 text-xs uppercase tracking-widest">
                      {post.date}
                    </span>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-foreground leading-snug">{post.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm flex-1">{post.summary}</p>
                  {post.link ? (
                    <Link to={post.link}>
                      <Button variant="link" size="sm" className="mt-4 w-fit p-0 text-secondary">
                        Ler mais <ArrowRight size={14} />
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="link" size="sm" className="mt-4 w-fit p-0 text-secondary opacity-50 cursor-default" disabled>
                      Em breve <ArrowRight size={14} />
                    </Button>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
