import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blogPcbDesign from "@/assets/blog-pcb-design.png";

const BlogArticle2 = () => {
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
              PCB Design: boas práticas para industrialização
            </h1>

            <img
              src={blogPcbDesign}
              alt="PCB Design: boas práticas para industrialização"
              className="w-full rounded-2xl mt-8 mb-10 object-cover max-h-[400px]"
            />

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Em protótipo, muita coisa "funciona"; em volume, qualquer detalhe vira custo, retrabalho ou sucata. DFM é justamente a disciplina de projetar pensando nas capacidades reais de fabricação e montagem, para garantir alta taxa de aprovação (yield), custos controlados e lead time menor.
              </p>
              <p className="leading-relaxed">
                Ao integrar regras de fabricação (DFF) e de montagem (DFA) ao layout, você reduz respins, facilita testes e aumenta a confiabilidade em campo. Em outras palavras: um PCB bem desenhado para manufatura tende a funcionar de primeira na linha e continuar funcionando no cliente.
              </p>

              {/* Section 1 */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                1. Comece com regras alinhadas ao fabricante
              </h2>
              <p className="leading-relaxed">
                Antes de abrir o editor de PCB, alinhe com pelo menos um fabricante e um montador quais são os limites de processo.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Pontos críticos a definir logo no início:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Espessura de trilha e espaçamento mínimo:</strong> use valores compatíveis com o processo mais comum do fornecedor (por exemplo, 4/4 ou 3/3 mil em tecnologias mais avançadas).</li>
                <li><strong className="text-foreground">Tamanho mínimo de furo e anel anular (annular ring):</strong> respeite o diâmetro mínimo de furação e mantenha anel suficiente para compensar desvios de furo.</li>
                <li><strong className="text-foreground">Stack-up e materiais:</strong> escolha laminado e empilhamento (FR-4 padrão, alta Tg, RF, alta velocidade) considerando desempenho e disponibilidade, sempre em versão simétrica para evitar empenamento.</li>
                <li><strong className="text-foreground">Regras de máscara de solda e pasta:</strong> defina clearances padrão entre pads e máscara para evitar "escadas" de máscara ou falta de cobertura, e aplique reduções de pasta adequadas nos stencils.</li>
              </ul>
              <p className="leading-relaxed italic">
                Quanto mais você se mantiver próximo a dimensões e materiais padrão do fornecedor, menor o custo e o risco de problemas na linha.
              </p>

              {/* Section 2 */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                2. Layout pensando em alto volume, não só em funcionar
              </h2>
              <p className="leading-relaxed">
                Um layout "montável" em escala é aquele que minimiza ajustes manuais, retrabalho e defeitos de soldagem.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Boas práticas essenciais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Manter espaçamento adequado entre componentes para evitar pontes de solda e facilitar inspeção óptica e retrabalho.</li>
                <li>Evitar trilhas com ângulos agudos e "ilhotas" de cobre, que podem gerar slivers e problemas no processo de corrosão e laminação.</li>
                <li>Planejar caminhos de retorno de corrente e zonas de cobre de forma contínua, reduzindo recortes excessivos que complicam a fabricação e a integridade de sinal.</li>
                <li>Pad stacks consistentes em todo o projeto, com furos e pads dentro da capacidade do fabricante e sem variação desnecessária.</li>
              </ul>
              <p className="leading-relaxed">
                Um exemplo típico é o reposicionamento de componentes para alinhar orientações de ref e pad 1, facilitando pick-and-place e reduzindo erros de montagem em alto volume.
              </p>

              {/* Section 3 */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                3. Vias, furos e tecnologias especiais: use apenas o necessário
              </h2>
              <p className="leading-relaxed">
                Vias são fundamentais, mas o abuso de tecnologias especiais encarece e torna o processo mais sensível.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Diretrizes práticas:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Priorize vias passantes padrão; evite blind e buried vias, a não ser em projetos realmente de alta densidade onde não haja alternativa.</li>
                <li>Garanta espaçamento adequado de cobre ao redor de backdrills e furos críticos, evitando cobre muito próximo que possa provocar curtos ou falhas após a perfuração.</li>
                <li>Padstack bem definido: anel anular suficiente, máscara de solda bem configurada e, quando necessário, tenting de vias para evitar contaminação e curtos por solda.</li>
                <li>Agrupe vias de forma organizada, evitando "florestas" desnecessárias que dificultam limpeza e inspeção.</li>
              </ul>
              <p className="leading-relaxed italic">
                Essa disciplina reduz o número de etapas especiais no processo (laminações extras, backdrills complexos), melhorando yield e prazo.
              </p>

              {/* Section 4 */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                4. Planejamento de montagem: footprint, orientação e painéis
              </h2>
              <p className="leading-relaxed">
                Metade dos problemas em linha de montagem vêm de footprint mal definido ou de decisões de layout que ignoram o fluxo da linha.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Foque em:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Footprints alinhados a normas IPC e aos dados dos datasheets de componentes, com áreas de pasta ajustadas para evitar tombstoning, voids e solda fria.</li>
                <li>Orientação consistente de componentes polarizados (diodos, eletrolíticos, ICs) em uma mesma direção por região da placa, facilitando inspeção visual e automática.</li>
                <li>Distribuição equilibrada de componentes SMD e PTH, evitando zonas super densas que concentrem calor e dificultem perfil de solda.</li>
                <li>Painelização (panelization) pensada junto ao fabricante: tamanho de painel compatível com a linha, barras de suporte, fiduciais globais e locais, áreas de depanelização (v-cut, mouse bites) bem posicionadas.</li>
              </ul>
              <p className="leading-relaxed italic">
                Uma boa painelização reduz desperdício de material, melhora o aproveitamento de máquina e reduz esforço de manuseio na fábrica.
              </p>

              {/* Section 5 */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                5. DFM, DFT e checagens automatizadas no fluxo de projeto
              </h2>
              <p className="leading-relaxed">
                Ferramentas modernas permitem rodar checagens DFM em tempo real durante o layout, evitando que regras de fabricação sejam violadas sem o designer perceber.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Integre ao seu fluxo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regras de DFM do fabricante diretamente no CAD, com DRCs em tempo real para trilhas, furos, máscara, cobre e clearances mecânicos.</li>
                <li>Análise de integridade de sinal e potência (SI/PI) nas camadas controladas de impedância, garantindo que o stack-up planejado suporta as frequências e correntes do projeto.</li>
                <li><strong className="text-foreground">DFT (Design for Test):</strong> previsão de pads de teste, pontos de acesso para ICT ou flying probe, e conectores de debug em áreas acessíveis.</li>
                <li>Checklists de DFM atualizados, revisados a cada projeto com feedback da fábrica (por exemplo, regras que evitaram respins ou causaram problemas em jobs anteriores).</li>
              </ul>
              <p className="leading-relaxed italic">
                Essa camada extra de validação é um seguro barato contra sucata em volume.
              </p>

              {/* Section 6 */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                6. Custos, prazos e padronização: projetar para escalar
              </h2>
              <p className="leading-relaxed">
                Além de funcionar e ser montável, um PCB pronto para industrialização precisa ser economicamente viável.
              </p>
              <p className="leading-relaxed font-medium text-foreground">Boas práticas de custo e escala:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Padronizar regras de projeto entre produtos da mesma família: mesma espessura de board, mesmas faixas de trilha mínima, mesmos processos de acabamento (HASL, ENIG etc.).</li>
                <li>Evitar variações desnecessárias de cor de máscara, serigrafia e acabamentos, que geralmente exigem setups adicionais e prazos maiores.</li>
                <li>Projetar dentro de tamanhos de painel padrão do fabricante (por exemplo, 18" x 24"), otimizando o nesting para aumentar o número de placas por painel.</li>
                <li>Ter alternativas de componentes já previstas (second source), reduzindo riscos de desabastecimento e atrasos de produção.</li>
              </ul>
              <p className="leading-relaxed italic">
                Quando o layout segue padrões internos e do fornecedor, o time-to-market cai e o custo por unidade tende a acompanhar o aumento de volume.
              </p>

              {/* Section 7 - Checklist */}
              <h2 className="text-2xl font-bold text-foreground mt-10 mb-4">
                7. Checklist rápido: seu PCB está pronto para produção em escala?
              </h2>
              <p className="leading-relaxed">
                Antes de liberar os arquivos para a fábrica, vale passar por um checklist objetivo:
              </p>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3 mt-4">
                {[
                  "Regras de trilha, espaçamento, furos e máscara estão alinhadas com um fabricante real?",
                  "Stack-up é simétrico, com materiais disponíveis e impedâncias controladas quando necessário?",
                  "Layout respeita espaçamento entre componentes, orientações consistentes e acessos para testes?",
                  "Vias especiais (blind/buried, backdrill) só foram usadas onde realmente indispensáveis?",
                  "Painelização e fiduciais foram definidos em conjunto com o fabricante?",
                  "Foram rodadas checagens DFM/DRC com regras atualizadas do fornecedor?",
                  "Existe um plano de teste (DFT) mínimo para produção e validação?",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="leading-relaxed mt-4 font-medium text-foreground">
                Se a maioria das respostas for "sim", seu projeto está muito mais próximo de sair do CAD e ir direto para a linha sem sustos.
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

export default BlogArticle2;
