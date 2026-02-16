import { useEffect, useRef, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const NetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { ...mouseRef.current, active: false };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const parent = canvas.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", handleMouseMove);
      parent.addEventListener("mouseleave", handleMouseLeave);
    }

    let animationId: number;
    const nodeCount = isMobile ? 18 : 60;
    const maxDist = isMobile ? 100 : 160;
    const mouseRadius = 180;
    const speed = isMobile ? 0.15 : 0.25;

    interface Node {
      x: number; y: number; vx: number; vy: number;
      baseVx: number; baseVy: number;
    }
    const nodes: Node[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      nodes.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < nodeCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const v = (Math.random() * 0.5 + 0.5) * speed;
        const vx = Math.cos(angle) * v;
        const vy = Math.sin(angle) * v;
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx, vy, baseVx: vx, baseVy: vy,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      const mouse = mouseRef.current;

      // Update positions with organic drift
      nodes.forEach((n) => {
        // Subtle sine drift for organic feel
        n.vx += (Math.random() - 0.5) * 0.01;
        n.vy += (Math.random() - 0.5) * 0.01;
        // Dampen back toward base velocity
        n.vx += (n.baseVx - n.vx) * 0.02;
        n.vy += (n.baseVy - n.vy) * 0.02;

        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0) { n.x = 0; n.vx *= -1; n.baseVx *= -1; }
        if (n.x > w) { n.x = w; n.vx *= -1; n.baseVx *= -1; }
        if (n.y < 0) { n.y = 0; n.vy *= -1; n.baseVy *= -1; }
        if (n.y > h) { n.y = h; n.vy *= -1; n.baseVy *= -1; }
      });

      // Draw inter-node connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(5, 29, 64, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Mouse interaction (desktop only)
      if (!isMobile && mouse.active) {
        nodes.forEach((n) => {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const t = 1 - dist / mouseRadius;
            const alpha = t * 0.12;

            // Draw connection line to cursor
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            const grad = ctx.createLinearGradient(mouse.x, mouse.y, n.x, n.y);
            grad.addColorStop(0, `rgba(190, 26, 135, ${alpha * 0.6})`);
            grad.addColorStop(1, `rgba(5, 29, 64, ${alpha * 0.4})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8 * t + 0.2;
            ctx.stroke();

            // Luminous point at node
            ctx.beginPath();
            ctx.arc(n.x, n.y, 2.5 + t * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(190, 26, 135, ${t * 0.2})`;
            ctx.fill();

            // Gentle magnetic attraction
            n.x -= dx * 0.003 * t;
            n.y -= dy * 0.003 * t;
          }
        });

        // Subtle cursor glow
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 30);
        glow.addColorStop(0, "rgba(190, 26, 135, 0.06)");
        glow.addColorStop(1, "rgba(190, 26, 135, 0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 30, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(5, 29, 64, 0.15)";
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
      if (parent) {
        parent.removeEventListener("mousemove", handleMouseMove);
        parent.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile, handleMouseMove, handleMouseLeave]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
};

export default NetworkBackground;
