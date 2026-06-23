import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogRohsBr from "@/assets/blog-rohs-brasileira.jpg";

const BlogArticle8 = () => {
  return (
    <>
      <SEOHead
        title="RoHS Brasileira é aprovada pelo CONAMA: o que muda para a indústria | Blog Conexus"
        description="O CONAMA aprovou a Resolução que estabelece a RoHS Brasileira. Entenda o que muda para a indústria de equipamentos eletroeletrônicos e como se preparar."
      />
      <div className="pt-28 md:pt-32">
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
                RoHS Brasileira é aprovada pelo CONAMA: o que muda para a indústria de equipamentos eletroeletrônicos?
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Publicado em: Junho de 2026
              </p>

              <img
                src={blogRohsBr}
                alt="RoHS Brasileira aprovada pelo CONAMA"
                className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
                width={1024}
                height={1024}
                loading="lazy"
              />

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-xl leading-relaxed font-semibold text-foreground">
                  No dia 10 de junho, durante a 150ª Reunião Ordinária do CONAMA (Conselho Nacional do Meio Ambiente), foi aprovada a Resolução que estabelece a RoHS Brasileira, um importante marco regulatório para a indústria de equipamentos eletroeletrônicos fabricados, distribuídos e comercializados no país.
                </p>

                <p className="leading-relaxed">
                  A nova regulamentação representa um avanço significativo na política ambiental brasileira e aproxima o Brasil das principais práticas internacionais de controle do uso de substâncias perigosas em produtos eletrônicos.
                </p>

                <p className="leading-relaxed">
                  Embora a Resolução ainda aguarde publicação no Diário Oficial da União (DOU), sua aprovação já sinaliza a necessidade de preparação por parte das empresas que atuam em toda a cadeia produtiva.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">O que é a RoHS?</h2>

                <p className="leading-relaxed">
                  A RoHS (Restriction of Hazardous Substances) é uma regulamentação criada para restringir o uso de determinadas substâncias perigosas na fabricação de equipamentos eletroeletrônicos.
                </p>

                <p className="leading-relaxed">
                  Seu principal objetivo é reduzir os impactos ambientais e os riscos à saúde humana durante todo o ciclo de vida dos produtos, desde a fabricação até o descarte.
                </p>

                <p className="leading-relaxed">
                  A adoção desse modelo regulatório no Brasil representa um passo importante para aumentar a competitividade da indústria nacional e harmonizar as exigências técnicas com mercados internacionais.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">O que foi aprovado pelo CONAMA?</h2>

                <p className="leading-relaxed">
                  Durante a votação, a minuta recebeu duas emendas que não alteram o mérito da Resolução nem sua aplicação prática.
                </p>

                <p className="leading-relaxed">
                  As alterações apenas esclareceram aspectos relacionados às competências legais do Comitê Deliberativo de Substâncias Químicas e estabeleceram que o Ministério da Defesa editará regulamentação específica para equipamentos destinados à defesa nacional, já excluídos do escopo da norma.
                </p>

                <p className="leading-relaxed">
                  Agora, conforme previsto no Regimento Interno do CONAMA, a Resolução deverá ser publicada oficialmente em até 40 dias.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Próximos passos</h2>

                <p className="leading-relaxed">
                  A publicação da Resolução será apenas o início da regulamentação.
                </p>

                <p className="leading-relaxed">
                  Nos próximos 180 dias, deverão ser elaborados atos normativos complementares que definirão aspectos essenciais para sua implementação. Entre eles estão:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Lista oficial de isenções;</li>
                  <li>Documentação técnica mínima para comprovação da conformidade;</li>
                  <li>Procedimentos para concessão, renovação e revogação de isenções.</li>
                </ul>

                <p className="leading-relaxed">
                  Também está previsto o desenvolvimento do Cadastro Nacional de Equipamentos Eletroeletrônicos com Restrições de Substâncias Perigosas, que será um importante instrumento para controle e rastreabilidade.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Quais os impactos para a indústria?</h2>

                <p className="leading-relaxed">
                  A RoHS Brasileira vai muito além de uma exigência ambiental. Ela impacta diretamente diversas áreas das empresas:
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Engenharia</h3>
                <p className="leading-relaxed">
                  Será necessário considerar a conformidade ambiental desde o desenvolvimento do produto, especificação de materiais e escolha de componentes.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Compras e Supply Chain</h3>
                <p className="leading-relaxed">
                  Fabricantes precisarão trabalhar com fornecedores que ofereçam documentação técnica, rastreabilidade e garantia de conformidade dos componentes utilizados.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Manufatura</h3>
                <p className="leading-relaxed">
                  Os processos produtivos deverão assegurar que toda a cadeia esteja preparada para atender aos requisitos estabelecidos pela regulamentação.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Qualidade</h3>
                <p className="leading-relaxed">
                  A documentação técnica e os controles de processo ganharão ainda mais importância para comprovação da conformidade.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">A importância de parceiros preparados</h2>

                <p className="leading-relaxed">
                  A implementação da RoHS exige uma integração entre engenharia, manufatura, fornecedores e gestão da qualidade. Nesse cenário, contar com parceiros experientes reduz riscos e acelera o processo de adequação.
                </p>

                <p className="leading-relaxed">
                  A CADService, empresa parceira da Conexus e referência nacional em manufatura de placas eletrônicas, foi uma das pioneiras no Brasil na implantação do processo RoHS em toda a sua cadeia produtiva.
                </p>

                <p className="leading-relaxed">
                  Sua estrutura industrial, processos produtivos e sistema de gestão foram desenvolvidos para atender às exigências internacionais de conformidade ambiental, oferecendo aos clientes segurança, rastreabilidade e elevado padrão de qualidade na fabricação de placas eletrônicas.
                </p>

                <p className="leading-relaxed">
                  Essa experiência coloca a CADService em uma posição privilegiada para atender às futuras exigências da RoHS Brasileira.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Como a Conexus pode apoiar sua empresa</h2>

                <p className="leading-relaxed">
                  Na Conexus, entendemos que conformidade regulatória não deve ser vista apenas como uma obrigação legal, mas como uma oportunidade para aumentar a competitividade dos produtos eletrônicos.
                </p>

                <p className="leading-relaxed">
                  Nossa atuação integra engenharia, supply chain e manufatura para apoiar empresas em:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Avaliação de componentes e materiais;</li>
                  <li>Adequação de produtos às novas exigências regulatórias;</li>
                  <li>Gestão de fornecedores;</li>
                  <li>Estratégias de supply chain;</li>
                  <li>Industrialização;</li>
                  <li>Apoio técnico para documentação e conformidade.</li>
                </ul>

                <p className="leading-relaxed">
                  Acreditamos que inovação, qualidade e sustentabilidade caminham juntas.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Conclusão</h2>

                <p className="leading-relaxed">
                  A aprovação da RoHS Brasileira representa um novo momento para a indústria eletrônica nacional.
                </p>

                <p className="leading-relaxed">
                  Empresas que iniciarem desde já o processo de adaptação estarão mais preparadas para atender às exigências legais, fortalecer sua competitividade e ampliar oportunidades de negócios no mercado nacional e internacional.
                </p>

                <p className="leading-relaxed font-medium text-foreground mt-4 text-lg">
                  Na Conexus, seguimos acompanhando cada etapa da regulamentação para oferecer aos nossos clientes informações atualizadas e soluções técnicas que contribuam para uma transição segura e eficiente.
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

export default BlogArticle8;
