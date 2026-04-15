import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogLean from "@/assets/blog-lean.png";

const BlogArticle3 = () => {
  return (
    <>
    <SEOHead title="Lean Manufacturing aplicado à eletrônica | Blog Conexus" description="Lean Manufacturing na eletrônica é a aplicação dos princípios de manufatura enxuta para reduzir desperdícios, aumentar a produtividade e melhorar a qualidade." />
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
              Lean Manufacturing aplicado à eletrônica
            </h1>

            <img
              src={blogLean}
              alt="Lean Manufacturing aplicado à eletrônica"
              className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Lean Manufacturing na eletrônica é a aplicação dos princípios de manufatura enxuta para reduzir desperdícios, aumentar a produtividade e melhorar a qualidade em linhas de PCBs e produtos eletrônicos. A seguir, estratégias práticas para esse setor.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                O que é Lean Manufacturing na eletrônica
              </h2>
              <p className="leading-relaxed">
                Lean Manufacturing é uma filosofia de gestão que busca entregar máximo valor ao cliente com o mínimo de recursos, eliminando tudo o que não agrega valor ao produto. Em eletrônicos, isso significa enxugar desde o desenvolvimento do produto até SMT, THT, testes e logística, mantendo qualidade e flexibilidade frente a demandas variáveis.
              </p>
              <p className="leading-relaxed">
                Os pilares clássicos – valor, fluxo de valor, fluxo contínuo, produção puxada e perfeição – continuam válidos, mas precisam ser traduzidos para realidades como montagem de placas, programação de máquinas e rastreabilidade de componentes.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Principais desperdícios em manufatura eletrônica
              </h2>
              <p className="leading-relaxed">
                Antes de aplicar ferramentas Lean, é essencial entender onde estão os desperdícios típicos em linhas de eletrônicos.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Entre os mais comuns estão:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Estoque excessivo de componentes e PCBs semiacabadas, que imobiliza capital e aumenta risco de obsolescência.</li>
                <li>Espera por setup de máquina, liberação de lote, aprovação de qualidade ou falta de material na linha.</li>
                <li>Retrabalho e sucata por defeitos de solda, erros de programação de pick-and-place ou falhas de teste funcional.</li>
                <li>Movimentação desnecessária de placas e operadores devido a layout de fábrica pouco otimizado.</li>
                <li>Processos supercomplexos, documentação confusa e falta de padronização, que geram variabilidade de resultados.</li>
              </ul>
              <p className="leading-relaxed italic">
                Mapear esses desperdícios é o ponto de partida para qualquer iniciativa Lean séria na eletrônica.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Ferramentas Lean adaptadas para produtos eletrônicos
              </h2>
              <p className="leading-relaxed">
                As ferramentas clássicas de manufatura enxuta se encaixam muito bem em linhas de eletrônicos, desde que traduzidas para a realidade de PCBs e montagem.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Algumas das mais relevantes:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-foreground">Value Stream Mapping (VSM):</strong> mapeia o fluxo de valor da engenharia à expedição, destacando tempos de ciclo, estoques intermediários e gargalos entre processos de SMT, THT, testes e retrabalho.</li>
                <li><strong className="text-foreground">5S:</strong> organização de bancadas, carrinhos de componentes, estoques de reels, racks de PCBs e ferramentais, reduzindo tempo de busca e erros de manuseio.</li>
                <li><strong className="text-foreground">Kanban e produção puxada:</strong> controle visual de reposição de componentes, PCBs virgens e insumos, baseando a produção em pedidos reais e níveis mínimos de estoque.</li>
                <li><strong className="text-foreground">SMED (redução de setup):</strong> redução do tempo de troca de programa e de linha em máquinas de inserção, impressoras de pasta e fornos, convertendo o máximo possível de setup interno em externo.</li>
                <li><strong className="text-foreground">Poka-Yoke:</strong> dispositivos à prova de erro, como fixtures chaveados, conectores assimétricos, sensores para checar orientação de placas e listas de checagem para setup.</li>
                <li><strong className="text-foreground">Kaizen e PDCA:</strong> ciclos rápidos de melhoria contínua em problemas recorrentes como tombstoning, defeitos de solda ou falhas em testes ICT e funcional.</li>
              </ul>
              <p className="leading-relaxed italic">
                Essas ferramentas ajudam a transformar uma linha reativa em um sistema mais previsível, estável e fácil de escalar.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Estratégias práticas na linha de eletrônicos
              </h2>
              <p className="leading-relaxed">
                Aplicar Lean na eletrônica exige ações concretas tanto na engenharia quanto na operação da fábrica.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Algumas estratégias de alto impacto:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong className="text-foreground">Células de manufatura:</strong> agrupar processos (montagem manual, testes, pequenos retrabalhos) em células para reduzir transportes, filas e lead time, especialmente em produtos de menor volume.</li>
                <li><strong className="text-foreground">Padronização de trabalho:</strong> instruções claras de montagem, setup e inspeção, com tempos definidos e sequência ótima de atividades para cada posto.</li>
                <li><strong className="text-foreground">Nivelamento da produção (Heijunka):</strong> balancear o mix de produtos eletrônicos ao longo da semana, evitando picos de carga em determinados modelos e ociosidade em outros.</li>
                <li><strong className="text-foreground">Monitoramento em tempo real (andon digital):</strong> indicadores visuais de paradas, defeitos e atrasos, permitindo reação rápida do time frente a desvios de processo.</li>
                <li><strong className="text-foreground">Integração com sistemas digitais (ERP/MES):</strong> uso de sistemas integrados para rastreabilidade, apontamento de produção, controle de materiais e suporte às decisões Lean.</li>
              </ul>
              <p className="leading-relaxed italic">
                Quando bem implementadas, essas práticas reduzem lead time, melhoram OEE e aumentam a previsibilidade da entrega ao cliente.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                Cultura enxuta: pessoas, dados e melhoria contínua
              </h2>
              <p className="leading-relaxed">
                Lean Manufacturing não é apenas um conjunto de ferramentas, mas uma cultura que coloca a equipe no centro da melhoria contínua.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Em fábricas de eletrônicos, isso inclui:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Treinar operadores e técnicos em conceitos Lean e na leitura de dados da linha (paradas, defeitos, tempos de ciclo), para que identifiquem e proponham melhorias.</li>
                <li>Criar rotinas de reuniões rápidas no piso de fábrica para tratar problemas diários, priorizar ações e acompanhar planos de melhoria.</li>
                <li>Usar dados de testes, retrabalho e falhas em campo como insumo para projetos de Kaizen e revisões de engenharia de produto e processo.</li>
                <li>Começar com projetos piloto em uma linha ou família de produtos antes de escalar práticas Lean para toda a planta, reduzindo riscos e aprendendo com a experiência.</li>
              </ul>
              <p className="leading-relaxed font-medium text-foreground mt-4">
                Quando a cultura Lean se consolida, a fábrica de eletrônicos ganha flexibilidade para lidar com ciclos curtos de produto, variação de demanda e pressão por custos menores sem comprometer qualidade.
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

export default BlogArticle3;
