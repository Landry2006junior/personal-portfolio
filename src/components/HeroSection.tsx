import { motion } from "framer-motion";
import { Github, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 scanline pointer-events-none" />
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30 pointer-events-none"
          style={{ left: `${15 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-primary/50 overflow-hidden bg-muted/50 group-hover:border-primary transition-colors duration-300">
              <img src={profilePhoto} alt="Landry" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">
            Software Engineer
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-900 leading-[0.9] mb-6">
            <span className="block text-foreground">BUILDING</span>
            <span className="block gradient-text">THE FUTURE</span>
            <span className="block text-foreground">OF THE WEB</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg mb-10 font-body px-2">
            Full-stack developer specializing in MERN stack, Python automation,
            and crafting high-performance web applications.
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
          <a href="https://github.com/Landry2006junior" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
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
