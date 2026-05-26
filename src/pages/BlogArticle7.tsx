import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogDesafios from "@/assets/blog-desafios-industrializacao.png";

const BlogArticle7 = () => {
  return (
    <>
    <SEOHead title="Desafios da industrialização: porquê bons projetos falham na execução | Blog Conexus" description="Nem todo projeto que parece promissor no papel se sustenta na prática. Na indústria, é comum ver boas ideias perderem força justamente na fase mais crítica." />
    <div className="pt-28 md:pt-44">
      <section className="section-padding">
        <div className="container-narrow max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog">
              <Button variant="ghost" size="sm" className="mb-8 text-muted-foreground hover:text-foreground">
                <ArrowLeft size={16} className="mr-2" /> Voltar ao Blog
              </Button>
            </Link>

            <span className="text-secondary text-sm font-semibold uppercase tracking-widest">
              Blog Conexus
            </span>

            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Desafios da industrialização: porquê bons projetos falham na execução
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Publicado em: Maio de 2026
            </p>

            <img
              src={blogDesafios}
              alt="Desafios da industrialização"
              className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
              width={1024}
              height={576}
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed font-semibold text-foreground">
                Nem todo projeto que parece promissor no papel se sustenta na prática. Na indústria, é comum ver boas ideias perderem força justamente na fase mais crítica: a execução.
              </p>

              <p className="leading-relaxed">
                Os motivos variam, mas alguns pontos se repetem: falhas no planejamento, falta de alinhamento entre áreas, decisões tomadas sem considerar a realidade operacional e ausência de uma visão integrada do projeto como um todo.
              </p>

              <p className="leading-relaxed">
                Quando isso acontece, o impacto é direto: retrabalho, aumento de custos, atrasos e, em alguns casos, a inviabilidade completa da solução.
              </p>

              <p className="leading-relaxed">
                A verdade é que executar bem exige mais do que um bom projeto técnico. Exige estratégia, previsibilidade e parceiros que consigam antecipar riscos antes que eles virem problemas.
              </p>

              <p className="leading-relaxed">
                É nesse cenário que a escolha de uma consultoria especializada faz diferença.
              </p>

              <p className="leading-relaxed">
                A Conexus atua como parceira estratégica no desenvolvimento de soluções eletrônicas, contribuindo desde o planejamento até a execução, com foco em mitigar erros e garantir que o projeto funcione na prática, não só no papel.
              </p>

              <p className="leading-relaxed font-medium text-foreground mt-4 text-lg">
                Porque, no fim, o sucesso de um projeto industrial não está na ideia, e sim na capacidade de executar com consistência.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link to="/blog">
                <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary/10">
                  <ArrowLeft size={16} className="mr-2" /> Voltar ao Blog
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
};

export default BlogArticle7;
