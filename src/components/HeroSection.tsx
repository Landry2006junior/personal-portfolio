import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 scanline pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Software Engineer
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-900 leading-[0.9] mb-6">
            <span className="block text-foreground">BUILDING</span>
            <span className="block gradient-text">THE FUTURE</span>
            <span className="block text-foreground">OF THE WEB</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg mb-10 font-body">
            Full-stack developer specializing in MERN stack, Python automation,
            and anime-inspired creative interfaces.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold tracking-wide hover:shadow-[0_0_30px_hsl(185_100%_50%/0.4)] transition-all duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-display font-semibold tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
