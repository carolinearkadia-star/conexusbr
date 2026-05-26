import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogParceiros from "@/assets/blog-parceiros-estrategicos.jpg";

const BlogArticle6 = () => {
  return (
    <>
    <SEOHead title="Escolha de parceiros estratégicos: como a decisão certa impacta nos resultados | Blog Conexus" description="Em projetos industriais, nem sempre o maior desafio está na execução, muitas vezes, está na escolha de quem vai caminhar junto. Selecionar parceiros estratégicos." />
    <div className="pt-20">
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
              Escolha de parceiros estratégicos: como a decisão certa impacta diretamente nos resultados
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Publicado em: Maio de 2026
            </p>

            <img
              src={blogParceiros}
              alt="Escolha de parceiros estratégicos"
              className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
              width={1024}
              height={576}
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed font-semibold text-foreground">
                Em projetos industriais, nem sempre o maior desafio está na execução, muitas vezes, está na escolha de quem vai caminhar junto.
              </p>

              <p className="leading-relaxed">
                Selecionar parceiros estratégicos vai muito além de custo ou prazo. Envolve confiança técnica, capacidade de adaptação e, principalmente, visão de negócio. Um parceiro bem alinhado antecipa problemas, propõe melhorias e contribui diretamente para a performance do projeto.
              </p>

              <p className="leading-relaxed">
                No desenvolvimento de soluções eletrônicas, isso se torna ainda mais crítico. Decisões mal estruturadas nessa etapa podem gerar retrabalho, aumento de custos e perda de eficiência ao longo de toda a operação.
              </p>

              <p className="leading-relaxed">
                Por outro lado, quando a escolha é feita de forma estratégica, o impacto é claro: mais assertividade, agilidade e resultados consistentes.
              </p>

              <p className="leading-relaxed">
                A Conexus atua exatamente nesse ponto, conectando conhecimento técnico com as necessidades reais da indústria.
              </p>

              <p className="leading-relaxed font-medium text-foreground mt-4 text-lg">
                Se a base do projeto é sólida, o resultado acompanha.
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

export default BlogArticle6;
