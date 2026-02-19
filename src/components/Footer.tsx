import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const Footer = () => {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev.slice(-4), { id, x, y }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 1000);
  }, []);

  return (
    <footer
      className="relative py-8 border-t border-border overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-primary/10 pointer-events-none"
          style={{ left: ripple.x, top: ripple.y, translateX: "-50%", translateY: "-50%" }}
          initial={{ width: 0, height: 0, opacity: 0.5 }}
          animate={{ width: 120, height: 120, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}
      <ScrollReveal className="container mx-auto px-6 text-center relative z-10">
        <p className="text-sm text-muted-foreground font-body">
          © {new Date().getFullYear()} — Designed & Built with 💻
        </p>
      </ScrollReveal>
    </footer>
  );
};

export default Footer;
