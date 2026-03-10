import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, BarChart3, Network, Ruler, Radar, TrendingDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import logoConexus from "@/assets/logo-conexus.png";

interface OrbitalNode {
  id: number;
  icon: React.ElementType;
  title: string;
  tooltip: string;
}

const nodes: OrbitalNode[] = [
{
  id: 0,
  icon: Search,
  title: "Diagnóstico Técnico e Produtivo",
  tooltip:
  "Identificamos riscos técnicos e gargalos produtivos antes que se tornem problemas, eliminando retrabalhos e custos."
},
{
  id: 1,
  icon: BarChart3,
  title: "Análise de Viabilidade Técnica e Industrial",
  tooltip:
  "Avaliamos a viabilidade real do projeto, garantindo decisões eficazes e evitando investimentos em soluções inviáveis."
},
{
  id: 2,
  icon: Network,
  title: "Conexão com Parceiros Especialistas",
  tooltip:
  "Conectamos sua empresa aos parceiros certos, com expertise comprovada, eliminando tentativa e erro na cadeia de fornecimento."
},
{
  id: 3,
  icon: Ruler,
  title: "Definição de Estratégia de Projeto, Layout, PCB e Manufatura",
  tooltip:
  "Definimos a estratégia técnica completa — do layout à manufatura — garantindo qualidade e eficiência desde o início."
},
{
  id: 4,
  icon: Radar,
  title: "Acompanhamento Técnico Contínuo",
  tooltip:
  "Monitoramento constante para garantir que cada etapa siga o planejado, com ajustes rápidos e assertivos."
},
{
  id: 5,
  icon: TrendingDown,
  title: "Diagnóstico Estratégico de Custos",
  tooltip:
  "Análise técnica especializada para redução inteligente de despesas. Engenharia de materiais, otimização de especificações e avaliação de contratos e gastos em TI — garantindo eficiência e economia sustentável."
}];


// Positions for orbital nodes around center (desktop: circular, mobile: vertical list)
const getOrbitalPosition = (index: number, total: number) => {
  const angle = index / total * 2 * Math.PI - Math.PI / 2; // start from top
  const rx = 300;
  const ry = 250;
  return {
    x: Math.cos(angle) * rx,
    y: Math.sin(angle) * ry
  };
};

// Tooltip position relative to each node
const getTooltipPosition = (index: number, total: number): React.CSSProperties => {
  const pos = getOrbitalPosition(index, total);
  // Node 0 (Diagnóstico Técnico) → force left with adjusted top
  if (index === 0) {
    return { right: "calc(100% + 8px)", top: "15%", transform: "translateY(-50%)" };
  }
  // Node 5 (Diagnóstico de Custos) → place based on position
  if (index === 5) {
    return { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
  }
  if (Math.abs(pos.y) < 80) {
    if (pos.x > 0) {
      return { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
    } else {
      return { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
    }
  } else if (pos.y < 0) {
    return { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" };
  } else {
    if (pos.x > 0) {
      return { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
    } else {
      return { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" };
    }
  }
};

const ConnectionHub = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileHub activeNode={activeNode} setActiveNode={setActiveNode} />;
  }



  return (
    <div className="flex flex-col items-center">
      {/* Orbital diagram */}
      <div className="relative w-full flex items-center justify-center" style={{ minHeight: 620 }}>
        {/* SVG animated lines */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-380 -300 760 600"
          preserveAspectRatio="xMidYMid meet">

        <defs>
          <linearGradient id="hubLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(216, 86%, 14%)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(322, 76%, 42%)" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {nodes.map((node, i) => {
            const pos = getOrbitalPosition(i, nodes.length);
            const isLineActive = activeNode === i;
            return (
              <g key={node.id}>
              <line
                  x1={0} y1={0} x2={pos.x} y2={pos.y}
                  stroke="hsl(216, 30%, 30%)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  opacity="0.35" />

              <AnimatePresence>
                {isLineActive &&
                  <motion.line
                    x1={0} y1={0} x2={pos.x} y2={pos.y}
                    stroke="url(#hubLineGrad)"
                    strokeWidth="2"
                    filter="url(#glow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    strokeDasharray={`${Math.sqrt(pos.x ** 2 + pos.y ** 2)}`}
                    strokeDashoffset={0} />

                  }
              </AnimatePresence>
              <AnimatePresence>
                {isLineActive &&
                  <motion.circle
                    r="3"
                    fill="hsl(322, 76%, 42%)"
                    filter="url(#glow)"
                    initial={{ cx: 0, cy: 0, opacity: 0 }}
                    animate={{
                      cx: [0, pos.x],
                      cy: [0, pos.y],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1
                    }} />

                  }
              </AnimatePresence>
            </g>);

          })}
        </svg>

        {/* Central Hub */}
        <motion.div
          className="absolute z-20 w-36 h-36 rounded-full flex flex-col items-center justify-center text-center border-2 shadow-2xl"
          style={{
            background: "radial-gradient(circle, hsl(216, 86%, 18%) 0%, hsl(216, 86%, 10%) 100%)",
            borderColor: "hsl(216, 30%, 40%)",
            boxShadow: "0 0 40px hsl(322, 76%, 42%, 0.15), 0 0 80px hsl(216, 86%, 14%, 0.3)"
          }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}>

          <img src={logoConexus} alt="Conexus" className="w-22 h-auto brightness-0 invert" />
        </motion.div>

        {/* Orbital Nodes */}
        {nodes.map((node, i) => {
          const pos = getOrbitalPosition(i, nodes.length);
          const Icon = node.icon;
          const isActive = activeNode === i;

          return (
            <motion.div
              key={node.id}
              className={`absolute z-10 group cursor-pointer ${!isActive ? `orbital-node-${i}` : ''}`}
              style={{
                left: `calc(50% + ${pos.x}px - 40px)`,
                top: `calc(50% + ${pos.y}px - 40px)`,
                animation: isActive ? 'none' : undefined,
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200, damping: 20 }}
              onMouseEnter={() => setActiveNode(i)}
              onMouseLeave={() => setActiveNode(null)}>

              <motion.div
                className="w-20 h-20 rounded-full flex items-center justify-center border transition-all duration-300"
                style={{
                  background: isActive ?
                  "linear-gradient(135deg, hsl(216, 60%, 20%), hsl(216, 86%, 14%))" :
                  "linear-gradient(135deg, hsl(216, 40%, 22%), hsl(216, 50%, 16%))",
                  borderColor: isActive ? "hsl(322, 76%, 42%)" : "hsl(216, 30%, 35%)",
                  boxShadow: isActive ?
                  "0 0 20px hsl(322, 76%, 42%, 0.3), 0 4px 20px rgba(0,0,0,0.3)" :
                  "0 4px 15px rgba(0,0,0,0.2)"
                }}
                animate={isActive ? { scale: 1.08 } : { scale: 1 }}
                transition={{ duration: 0.2 }}>

                <Icon
                  size={32}
                  className="transition-colors duration-300"
                  style={{ color: isActive ? "hsl(322, 76%, 55%)" : "hsl(216, 30%, 60%)" }} />
              </motion.div>

              {/* Tooltip popup */}
              <div
                className="absolute z-50 w-80 pointer-events-none"
                style={{
                  ...getTooltipPosition(i, nodes.length),
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.2s ease",
                }}>
                  <div
                    className="p-5 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, hsl(216, 86%, 14%), hsl(216, 60%, 10%))",
                      border: "1px solid hsl(322, 76%, 42%, 0.35)",
                      boxShadow: "0 0 15px hsl(322, 76%, 42%, 0.1), 0 8px 24px rgba(0,0,0,0.4)"
                    }}>
                    <p className="font-bold text-white text-sm mb-1.5 leading-tight">{node.title}</p>
                    <p className="text-[13px] leading-relaxed" style={{ color: "hsl(216, 20%, 75%)" }}>
                      {node.tooltip}
                    </p>
                  </div>
              </div>
            </motion.div>);

        })}
      </div>

    </div>);

};

/* Mobile version: vertical layout with hub on top */
const MobileHub = ({
  activeNode,
  setActiveNode



}: {activeNode: number | null;setActiveNode: (n: number | null) => void;}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      {/* Central Hub */}
      <motion.div
        className="w-28 h-28 rounded-full flex flex-col items-center justify-center text-center border-2 shadow-xl"
        style={{
          background:
          "radial-gradient(circle, hsl(216, 86%, 18%) 0%, hsl(216, 86%, 10%) 100%)",
          borderColor: "hsl(216, 30%, 40%)"
        }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}>

        <img src={logoConexus} alt="Conexus" className="w-14 h-auto brightness-0 invert" />
      </motion.div>

      {/* Nodes */}
      <div className="flex flex-col gap-4 w-full max-w-sm">
        {nodes.map((node, i) => {
          const Icon = node.icon;
          const isActive = activeNode === i;
          return (
            <motion.div
              key={node.id}
              className="cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              onClick={() => setActiveNode(isActive ? null : i)}>

              <div
                className="flex items-center gap-4 p-4 rounded-xl border transition-all duration-300"
                style={{
                  background: isActive ?
                  "linear-gradient(135deg, hsl(216, 60%, 20%), hsl(216, 86%, 14%))" :
                  "linear-gradient(135deg, hsl(216, 40%, 22%), hsl(216, 50%, 16%))",
                  borderColor: isActive ?
                  "hsl(322, 76%, 42%)" :
                  "hsl(216, 30%, 35%)"
                }}>

                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border"
                  style={{
                    background: "hsl(216, 86%, 14%)",
                    borderColor: isActive ? "hsl(322, 76%, 42%)" : "hsl(216, 30%, 40%)"
                  }}>

                  <Icon
                    size={20}
                    style={{
                      color: isActive ? "hsl(322, 76%, 55%)" : "hsl(216, 30%, 60%)"
                    }} />

                </div>
                <div>
                  <p
                    className="text-sm font-semibold leading-tight transition-colors duration-300"
                    style={{
                      color: isActive ? "hsl(0, 0%, 100%)" : "hsl(216, 20%, 70%)"
                    }}>

                    {node.title}
                  </p>
                  <AnimatePresence>
                    {isActive &&
                    <motion.p
                      className="text-xs mt-2 leading-relaxed"
                      style={{ color: "hsl(0, 0%, 75%)" }}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}>

                        {node.tooltip}
                      </motion.p>
                    }
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>);

        })}
      </div>
    </div>);

};

export default ConnectionHub;