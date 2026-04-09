import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogRohsReach from "@/assets/blog-rohs-reach.png";

const BlogArticle5 = () => {
  return (
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
              ROHS, REACH e o Acordo Mercosul–União Europeia
            </h1>

            <img
              src={blogRohsReach}
              alt="ROHS, REACH e o Acordo Mercosul–União Europeia"
              className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
              width={1024}
              height={576}
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-xl leading-relaxed font-semibold text-foreground">
                O mercado europeu está mais acessível. Mas sua empresa está pronta para isso?
              </p>

              <p className="leading-relaxed">
                O acordo entre Mercosul e União Europeia, com vigência provisória prevista para 1º de maio de 2026, reacende uma discussão essencial para a indústria de eletrônicos e tecnologia: não existe expansão internacional sem conformidade regulatória. Esse pacto histórico elimina barreiras tarifárias e abre portas para exportações brasileiras, mas impõe padrões rigorosos que vão além do preço competitivo – exigindo, acima de tudo, maturidade regulatória para evitar multas, recalls ou bloqueios de mercado.
              </p>

              <p className="leading-relaxed">
                Nesse contexto, RoHS e REACH deixam de ser apenas exigências técnicas e passam a ser temas diretamente ligados à competitividade. Esses regulamentos, amplamente aplicados há anos na UE, ganham força renovada com o acordo, impactando diretamente cadeias de suprimentos globais.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                RoHS: Restrição de Substâncias Perigosas
              </h2>
              <p className="leading-relaxed">
                A RoHS restringe substâncias perigosas em equipamentos eletroeletrônicos. Especificamente, a Diretiva RoHS (Restriction of Hazardous Substances) limita o uso de materiais como chumbo, mercúrio, cádmio, cromo hexavalente e retardantes de chama bromados em produtos como smartphones, placas de circuito e eletrodomésticos. Para ilustrar: uma empresa brasileira de componentes eletrônicos que exporta para a Alemanha pode enfrentar inspeções alfandegárias se não comprovar conformidade via relatórios de teste.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                REACH: Controle de Substâncias Químicas
              </h2>
              <p className="leading-relaxed">
                O REACH amplia essa lógica ao controle de substâncias químicas em produtos comercializados na União Europeia. O Regulation, Evaluation, Authorisation and Restriction of Chemicals registra mais de 23 mil substâncias, exigindo avaliações de risco para qualquer químico usado em plásticos, baterias ou revestimentos. Um exemplo prático: fornecedores de cabos ou telas touch precisam notificar a ECHA (Agência Europeia de Produtos Químicos) se usarem SVHCs (Substâncias de Alta Preocupação), sob pena de proibições de venda.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                O que isso significa na prática?
              </h2>
              <p className="leading-relaxed">
                Na prática, isso significa que empresas do setor precisam ir além do desenvolvimento do produto. É preciso garantir:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li className="leading-relaxed">
                  <strong className="text-foreground">Aderência regulatória:</strong> Testes laboratoriais certificados (como os de laboratórios acreditados pelo Inmetro ou equivalentes europeus) para cada lote de produção.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">Rastreabilidade de materiais e componentes:</strong> Sistemas de blockchain ou ERP integrados para mapear fornecedores desde a mineração de metais raros até o produto final.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">Documentação técnica robusta:</strong> Dossiers completos com Declarações de Conformidade (DoC), relatórios de análise e passaportes de produto, prontos para auditorias surpresa.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-foreground">Alinhamento entre engenharia, supply chain e estratégia comercial:</strong> Reuniões cross-funcionais para redesign de produtos e negociações com fornecedores globais que já atendam aos padrões.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                O risco de chegar despreparado
              </h2>
              <p className="leading-relaxed">
                Porque o risco não está apenas em "não exportar". O risco está em chegar despreparado a mercados que exigem maturidade técnica e regulatória. Casos reais mostram empresas sul-americanas perdendo contratos milionários por falhas em RoHS, ou enfrentando custos de reformulação que superam 20% do investimento inicial. Sem preparação, a oportunidade vira armadilha.
              </p>

              <p className="leading-relaxed">
                Na Conexus, acompanhamos de perto esse movimento para apoiar empresas que precisam transformar requisitos técnicos em decisões estratégicas de negócio. Nossa equipe de especialistas em compliance regulatório oferece auditorias, treinamentos e implementação de processos que integram RoHS/REACH à sua operação diária.
              </p>

              <p className="leading-relaxed font-medium text-foreground mt-4 text-lg">
                Conformidade não é burocracia. É vantagem competitiva.
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
  );
};

export default BlogArticle5;
