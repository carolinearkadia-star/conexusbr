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

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Conexus – Consultoria Técnica em Produtos Eletrônicos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>);

};

export default Footer;