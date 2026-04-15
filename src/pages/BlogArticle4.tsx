import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogSemicondutores from "@/assets/blog-semicondutores.png";

const BlogArticle4 = () => {
  return (
    <>
    <SEOHead title="Crise Global de Semicondutores | Blog Conexus" description="A cadeia global de eletrônicos nunca esteve sob tanta pressão ao mesmo tempo. Não é uma crise. É um acúmulo de crises simultâneas que afeta componentes." />
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
              O que se sabe sobre a Crise Global de Semicondutores?
            </h1>

            <img
              src={blogSemicondutores}
              alt="Crise Global de Semicondutores"
              className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
              width={1024}
              height={576}
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                A cadeia global de eletrônicos nunca esteve sob tanta pressão ao mesmo tempo.
              </p>
              <p className="leading-relaxed">
                Não é uma crise. É um acúmulo de crises simultâneas, e quem depende de componentes eletrônicos precisa entender o que está acontecendo.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                A IA sequestrou a produção global.
              </h2>
              <p className="leading-relaxed">
                A corrida por infraestrutura de inteligência artificial fez com que gigantes como Microsoft, Google e ByteDance estejam disputando estoques com fabricantes de smartphones, equipamentos médicos e industriais. Um módulo de memória que custava US$ 1,50 no início de 2025 já é negociado por US$ 20. A Counterpoint Research estima alta de até 50% nos módulos de memória até o segundo trimestre de 2026.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                A crise chegou à base de tudo: as placas de circuito impresso (PCBs).
              </h2>
              <p className="leading-relaxed">
                A demanda massiva por servidores de IA exige PCBs de altíssima complexidade e múltiplas camadas, o que drenou o estoque da japonesa Nitto Boseki, fabricante que domina a produção mundial da fibra de vidro do perfil T, insumo essencial para essas placas. O resultado: prazos que antes levavam semanas saltaram para seis meses, e fabricantes agora operam sob sistema de cotas para evitar a paralisação total das linhas de montagem. Somado ao caos logístico aéreo nas rotas vindas da Ásia, com aumento de frete e instabilidade nos embarques, o cenário para quem monta produtos eletrônicos é de extrema vulnerabilidade.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Taiwan concentra 90% dos chips avançados do mundo e está no centro de uma disputa militar.
              </h2>
              <p className="leading-relaxed">
                Autoridades americanas afirmam que cerca de 90% dos chips de ponta são fabricados em Taiwan. Uma crise no Estreito de Taiwan poderia gerar perdas estimadas em até US$ 10 trilhões. Não é ficção científica, é o risco que o mercado já precifica hoje.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                O Oriente Médio ameaça a matéria-prima invisível.
              </h2>
              <p className="leading-relaxed">
                Os conflitos recentes impactaram o fornecimento global de hélio, insumo essencial na fabricação de semicondutores. O Catar representa cerca de 38% da produção mundial. Os estoques industriais cobrem menos de uma semana.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                E os fabricantes? Todos com sinal vermelho.
              </h2>
              <p className="leading-relaxed">
                Texas Instruments com reajustes de 10% a 50% a partir de abril. Broadcom e Lattice com lead times acima de 52 e 55 semanas, respectivamente. Infineon com expectativa de alta de ~25%. STMicroelectronics, Onsemi, Analog Devices, Renesas, Nexperia, todos com restrições severas. A Sony suspendeu pedidos de quase toda a sua linha de cartões SD e CFexpress, citando a escassez global e a pressão sobre memórias NAND. Capacitores de tântalo com até 9 meses de espera.
              </p>
              <p className="leading-relaxed">
                Os analistas da DigiTimes descartam qualquer alívio antes da metade de 2027. O CEO da Phison alerta que a situação pode levar ao fechamento de diversos fabricantes de eletrônicos até o final do ano.
              </p>
              <p className="leading-relaxed">
                Nesse cenário, antecipar vale mais do que reagir. Revisão de BOM, dual sourcing, estoques de segurança e alternativas técnicas viáveis deixaram de ser diferenciais, são necessidades urgentes.
              </p>
              <p className="leading-relaxed font-medium text-foreground mt-4">
                É para isso que a Conexus existe: consultoria estratégica em produtos eletrônicos e tecnologia, ao lado de times de Compras, Engenharia e Supply Chain para transformar incerteza em decisão segura.
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

export default BlogArticle4;
