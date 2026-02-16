import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface Step {
  num: string;
  title: string;
}

interface InteractiveStepsProps {
  steps: Step[];
}

const InteractiveSteps = ({ steps }: InteractiveStepsProps) => {
  const [activeStep, setActiveStep] = useState(-1);
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number }[]>([]);

  const computeLines = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const newLines: typeof lines = [];

    for (let i = 0; i < steps.length - 1; i++) {
      const a = stepRefs.current[i];
      const b = stepRefs.current[i + 1];
      if (!a || !b) continue;
      const aRect = a.getBoundingClientRect();
      const bRect = b.getBoundingClientRect();

      if (isMobile) {
        // vertical: center-bottom of a to center-top of b
        newLines.push({
          x1: aRect.left + aRect.width / 2 - containerRect.left,
          y1: aRect.bottom - containerRect.top,
          x2: bRect.left + bRect.width / 2 - containerRect.left,
          y2: bRect.top - containerRect.top,
        });
      } else {
        // horizontal: right-center of a to left-center of b
        newLines.push({
          x1: aRect.right - containerRect.left,
          y1: aRect.top + aRect.height / 2 - containerRect.top,
          x2: bRect.left - containerRect.left,
          y2: bRect.top + bRect.height / 2 - containerRect.top,
        });
      }
    }
    setLines(newLines);
  }, [steps.length, isMobile]);

  useEffect(() => {
    computeLines();
    window.addEventListener("resize", computeLines);
    return () => window.removeEventListener("resize", computeLines);
  }, [computeLines]);

  const handleStepClick = (index: number) => {
    if (index === 0 && activeStep >= 0) {
      // Reset
      setActiveStep(-1);
    } else if (index === activeStep + 1) {
      // Sequential progression
      setActiveStep(index);
    }
  };

  const isActive = (i: number) => i <= activeStep;
  const isNext = (i: number) => i === activeStep + 1;

  return (
    <div ref={containerRef} className="relative">
      {/* SVG lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
        {lines.map((line, i) => {
          const length = Math.sqrt(
            (line.x2 - line.x1) ** 2 + (line.y2 - line.y1) ** 2
          );
          const lineActive = i < activeStep;
          return (
            <g key={i}>
              {/* Track line (always visible, faint) */}
              <line
                x1={line.x1} y1={line.y1}
                x2={line.x2} y2={line.y2}
                stroke="hsl(var(--border))"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              {/* Animated active line */}
              <AnimatePresence>
                {lineActive && (
                  <motion.line
                    x1={line.x1} y1={line.y1}
                    x2={line.x2} y2={line.y2}
                    stroke="url(#lineGradient)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: `${length}`, strokeDashoffset: length }}
                    animate={{ strokeDashoffset: 0 }}
                    exit={{ strokeDashoffset: length }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                )}
              </AnimatePresence>
              {/* Traveling pulse dot */}
              <AnimatePresence>
                {lineActive && (
                  <motion.circle
                    r="3"
                    fill="hsl(var(--secondary))"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0, 1, 1, 0],
                      cx: [line.x1, line.x1, line.x2, line.x2],
                      cy: [line.y1, line.y1, line.y2, line.y2],
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                      times: [0, 0.1, 0.9, 1],
                      delay: 0.1,
                    }}
                  />
                )}
              </AnimatePresence>
            </g>
          );
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(322, 76%, 42%)" />
            <stop offset="100%" stopColor="hsl(216, 86%, 14%)" />
          </linearGradient>
        </defs>
      </svg>

      <div className={`grid ${isMobile ? "grid-cols-1 gap-10" : "grid-cols-5 gap-8"}`}>
        {steps.map((step, i) => {
          const active = isActive(i);
          const next = isNext(i);
          const clickable = next || (i === 0 && activeStep >= 0);

          return (
            <motion.div
              key={step.num}
              ref={(el) => { stepRefs.current[i] = el; }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative text-center z-10 ${clickable ? "cursor-pointer" : ""}`}
              onClick={() => handleStepClick(i)}
            >
              <motion.div
                className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto text-sm font-bold transition-colors duration-300 ${
                  active
                    ? "bg-secondary text-secondary-foreground shadow-md"
                    : "bg-primary text-primary-foreground"
                } ${next ? "ring-2 ring-secondary/40 ring-offset-2 ring-offset-secondary" : ""}`}
                animate={active ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {step.num}
              </motion.div>
              <p
                className={`mt-4 text-sm font-medium leading-snug transition-colors duration-300 ${
                  active ? "text-secondary-foreground" : "text-primary-foreground/70"
                }`}
              >
                {step.title}
              </p>
              {next && (
                <span className="text-[10px] text-secondary-foreground/50 mt-1 block">
                  clique para avançar
                </span>
              )}
              {i === 0 && activeStep >= 0 && (
                <span className="text-[10px] text-secondary-foreground/50 mt-1 block">
                  clique para reiniciar
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveSteps;
