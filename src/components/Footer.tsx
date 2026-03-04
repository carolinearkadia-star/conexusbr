import { Link } from "react-router-dom";
import logo from "@/assets/logo-conexus.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-narrow px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img src={logo} alt="Conexus" className="h-56 w-auto brightness-0 invert mb-4" />
            


          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Navegação
            </h4>
            <div className="flex flex-col gap-2">
              {[
              { label: "Home", path: "/" },
              { label: "Gestores Técnicos", path: "/#gestores-tecnicos" },
              { label: "Parceiros", path: "/parceiros" },
              { label: "Blog", path: "/blog" },
              { label: "Fale Conosco", path: "/contato" }].
              map((item) =>
              <Link
                key={item.path}
                to={item.path}
                className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">

                  {item.label}
                </Link>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">
              Contato
            </h4>
            <div className="flex flex-col gap-4 text-sm text-primary-foreground/50">
              <div>
                <p className="font-bold text-primary-foreground/80">Cilene</p>
                <a className="hover:text-primary-foreground transition-colors block" href="https://wa.me/5519990147479">(19) 99014-7479</a>
                <a href="mailto:cilene@conexusbr.com" className="hover:text-primary-foreground transition-colors block">cilene@conexusbr.com</a>
              </div>
              <div>
                <p className="font-bold text-primary-foreground/80">Hudson</p>
                <a className="hover:text-primary-foreground transition-colors block" href="wa.me/5519999531659">(19) 99953-1659</a>
                <a href="mailto:hudson@conexusbr.com" className="hover:text-primary-foreground transition-colors block">hudson@conexusbr.com</a>
              </div>
              <a href="https://www.conexusbr.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">www.conexusbr.com</a>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80 text-center">
            Perguntas Frequentes
          </h4>
          <Accordion type="single" collapsible className="max-w-2xl mx-auto">
            <AccordionItem value="q1" className="border-primary-foreground/10">
              <AccordionTrigger className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:no-underline">
                Vocês desenvolvem esquemático e layout de PCB?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-primary-foreground/50">
                Sim. Desenvolvemos esquemáticos eletrônicos e layout de PCB, com foco em desempenho, integridade de sinal e preparação para manufatura (DFM).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2" className="border-primary-foreground/10">
              <AccordionTrigger className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:no-underline">
                Vocês apenas fazem o projeto ou acompanham até a produção?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-primary-foreground/50">
                A Conexus atua desde a análise técnica até a industrialização, conectando o cliente às empresas especialistas certas para cada etapa.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3" className="border-primary-foreground/10">
              <AccordionTrigger className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:no-underline">
                Quem fabrica as placas?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-primary-foreground/50">
                <p>Trabalhamos com parceiros especializados como:</p>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>CADService – Manufatura SMT e PTH</li>
                  <li>ICAPE Group – Fabricação global de PCBs</li>
                  <li>FITec – Engenharia e desenvolvimento</li>
                  <li>JTCPCB – Prototipagem e fabricação de placas</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4" className="border-primary-foreground/10">
              <AccordionTrigger className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:no-underline">
                Vocês fornecem componentes originais?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-primary-foreground/50">
                Sim. Podemos fornecer componentes e placas originais por meio de nossa rede de parceiros qualificados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q5" className="border-primary-foreground/10">
              <AccordionTrigger className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:no-underline">
                Qual o diferencial da Conexus?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-primary-foreground/50">
                Nosso diferencial está na experiência técnica dos gestores, que avaliam projeto, layout e processo produtivo de forma integrada, reduzindo riscos e garantindo soluções viáveis.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q6" className="border-primary-foreground/10 border-b-0">
              <AccordionTrigger className="text-sm text-primary-foreground/80 hover:text-primary-foreground hover:no-underline">
                Como iniciar um projeto?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-primary-foreground/50">
                Envie as informações básicas do seu projeto e realizaremos uma avaliação técnica inicial.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Conexus – Consultoria Técnica em Produtos Eletrônicos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;