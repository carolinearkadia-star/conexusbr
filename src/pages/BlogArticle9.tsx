import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogImg from "@/assets/blog-obsolescencia-componentes.png";

const BlogArticle9 = () => {
  return (
    <>
      <SEOHead
        title="Obsolescência de Componentes Eletrônicos: um risco silencioso | Blog Conexus"
        description="Como identificar riscos de obsolescência de componentes eletrônicos, minimizar impactos e garantir a continuidade dos seus produtos na indústria."
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
                Obsolescência de Componentes Eletrônicos: um risco silencioso que pode parar sua produção
              </h1>
              <p className="mt-3 text-sm text-muted-foreground">
                Publicado em: Julho de 2026
              </p>

              <img
                src={blogImg}
                alt="Obsolescência de componentes eletrônicos"
                className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
                loading="lazy"
              />

              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <p className="text-xl leading-relaxed font-semibold text-foreground">
                  Como identificar riscos, minimizar impactos e garantir a continuidade dos seus produtos.
                </p>

                <p className="leading-relaxed">
                  A indústria eletrônica evolui em um ritmo acelerado. Novos componentes são lançados constantemente, enquanto outros deixam de ser fabricados, tornando-se obsoletos. Para muitas empresas, essa mudança passa despercebida até que um problema crítico aconteça: um componente essencial deixa de estar disponível e compromete toda a cadeia de produção.
                </p>

                <p className="leading-relaxed">
                  Mais do que uma questão de compras, a obsolescência de componentes é um desafio estratégico que impacta engenharia, supply chain, manufatura, qualidade e competitividade.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">O que é a obsolescência de componentes?</h2>

                <p className="leading-relaxed">
                  Um componente eletrônico torna-se obsoleto quando o fabricante informa que ele será descontinuado ou já não estará mais disponível para compra.
                </p>

                <p className="leading-relaxed">Isso pode ocorrer por diversos motivos:</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Evolução tecnológica;</li>
                  <li>Baixa demanda do mercado;</li>
                  <li>Substituição por uma nova geração de componentes;</li>
                  <li>Encerramento da fabricação;</li>
                  <li>Mudanças estratégicas do fabricante.</li>
                </ul>

                <p className="leading-relaxed">
                  Em muitos casos, o componente continua funcionando perfeitamente, porém deixa de ser produzido.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Quais são os impactos para a indústria?</h2>

                <p className="leading-relaxed">
                  A falta de planejamento pode gerar consequências significativas.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Paralisação da produção</h3>
                <p className="leading-relaxed">
                  Sem um componente crítico, linhas de produção podem ser interrompidas, comprometendo prazos de entrega e contratos com clientes.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Aumento dos custos</h3>
                <p className="leading-relaxed">
                  Quando um componente entra em processo de descontinuação, seu preço costuma aumentar devido à escassez no mercado.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Redesenho do produto</h3>
                <p className="leading-relaxed">
                  Nem sempre existe um substituto compatível. Em alguns casos, é necessário alterar o projeto eletrônico, firmware, layout da PCB e até realizar novas homologações.
                </p>

                <h3 className="text-xl font-bold text-foreground mt-6">Riscos na cadeia de suprimentos</h3>
                <p className="leading-relaxed">
                  A indisponibilidade de componentes pode levar empresas a recorrerem ao mercado paralelo, aumentando o risco de aquisição de componentes falsificados ou sem rastreabilidade.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Como reduzir esse risco?</h2>

                <p className="leading-relaxed">
                  Empresas que adotam uma gestão preventiva conseguem minimizar grande parte dos impactos. Algumas boas práticas incluem:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Monitorar continuamente o ciclo de vida dos componentes.</li>
                  <li>Trabalhar com fornecedores confiáveis e distribuidores autorizados.</li>
                  <li>Homologar componentes alternativos sempre que possível.</li>
                  <li>Planejar compras estratégicas para itens críticos.</li>
                  <li>Desenvolver projetos considerando disponibilidade de mercado e ciclo de vida dos componentes.</li>
                </ul>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">O papel da engenharia e do supply chain</h2>

                <p className="leading-relaxed">
                  A prevenção da obsolescência exige integração entre diferentes áreas da empresa.
                </p>

                <p className="leading-relaxed">
                  A engenharia precisa especificar componentes pensando na longevidade do produto. O supply chain deve acompanhar o mercado, identificar riscos e manter uma comunicação constante com fabricantes e distribuidores. Já a manufatura deve estar preparada para validar alterações quando substituições forem necessárias.
                </p>

                <p className="leading-relaxed">
                  Essa atuação conjunta reduz custos, evita retrabalho e aumenta a confiabilidade do produto.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Como a Conexus pode ajudar</h2>

                <p className="leading-relaxed">
                  Na Conexus, acreditamos que a prevenção é a melhor estratégia para garantir a continuidade da produção. Nossa consultoria apoia empresas em:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Monitoramento da obsolescência de componentes;</li>
                  <li>Avaliação de alternativas técnicas;</li>
                  <li>Estratégias de supply chain eletrônico;</li>
                  <li>Redução de riscos na cadeia de suprimentos;</li>
                  <li>Suporte à engenharia na seleção de componentes;</li>
                  <li>Industrialização e otimização de produtos eletrônicos.</li>
                </ul>

                <p className="leading-relaxed">
                  Nosso objetivo é conectar engenharia, fornecedores e manufatura para que nossos clientes tenham produtos mais competitivos, seguros e preparados para o futuro.
                </p>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-10">Conclusão</h2>

                <p className="leading-relaxed font-medium text-foreground text-lg">
                  A obsolescência de componentes deixou de ser um problema pontual e passou a fazer parte da gestão estratégica da indústria eletrônica.
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

export default BlogArticle9;
