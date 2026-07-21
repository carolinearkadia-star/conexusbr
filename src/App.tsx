import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Index from "./pages/Index";
import Gestores from "./pages/Gestores";
import Parceiros from "./pages/Parceiros";
import Blog from "./pages/Blog";
import BlogArticle1 from "./pages/BlogArticle1";
import BlogArticle2 from "./pages/BlogArticle2";
import BlogArticle3 from "./pages/BlogArticle3";
import BlogArticle4 from "./pages/BlogArticle4";
import BlogArticle5 from "./pages/BlogArticle5";
import BlogArticle6 from "./pages/BlogArticle6";
import BlogArticle7 from "./pages/BlogArticle7";
import BlogArticle8 from "./pages/BlogArticle8";
import BlogArticle9 from "./pages/BlogArticle9";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/gestores" element={<Gestores />} />
            <Route path="/parceiros" element={<Parceiros />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/futuro-manufatura-eletronica-brasil" element={<BlogArticle1 />} />
            <Route path="/blog/pcb-design-boas-praticas-industrializacao" element={<BlogArticle2 />} />
            <Route path="/blog/lean-manufacturing-eletronica" element={<BlogArticle3 />} />
            <Route path="/blog/crise-global-semicondutores" element={<BlogArticle4 />} />
            <Route path="/blog/rohs-reach-acordo-mercosul-ue" element={<BlogArticle5 />} />
            <Route path="/blog/escolha-parceiros-estrategicos" element={<BlogArticle6 />} />
            <Route path="/blog/desafios-industrializacao-execucao" element={<BlogArticle7 />} />
            <Route path="/blog/rohs-brasileira-aprovada-conama" element={<BlogArticle8 />} />
            <Route path="/blog/obsolescencia-componentes-eletronicos" element={<BlogArticle9 />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
