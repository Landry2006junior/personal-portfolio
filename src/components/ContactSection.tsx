import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const links = [
  { icon: Github, label: "GitHub", url: "https://github.com/Landry2006junior", desc: "View my repos" },
  { icon: Mail, label: "Email", url: "mailto:Arushajuniorlandry@gmail.com", desc: "Get in touch" },
];

const floatingOrbs = [
  { size: "w-64 h-64", position: "top-10 -left-20", delay: 0, duration: 8 },
  { size: "w-48 h-48", position: "bottom-10 -right-16", delay: 2, duration: 10 },
  { size: "w-32 h-32", position: "top-1/2 left-1/3", delay: 4, duration: 7 },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-card/50 overflow-hidden">
      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute ${orb.position} ${orb.size} rounded-full bg-primary/5 blur-[100px] pointer-events-none`}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            scale: [1, 1.2, 1, 0.9, 1],
            opacity: [0.3, 0.6, 0.3, 0.5, 0.3],
          }}
          transition={{ duration: orb.duration, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
        />
      ))}

      {/* Small floating circles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-3 h-3 rounded-full bg-primary/20 pointer-events-none"
          style={{ left: `${8 + i * 12}%`, top: `${20 + (i % 3) * 30}%` }}
          animate={{
            y: [0, -25, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-3 font-body">Contact</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Let's <span className="text-glow-pink text-secondary">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Open to opportunities in software engineering — locally and internationally.
          </p>
        </ScrollReveal>

        {/* Pulse rings */}
        <div className="relative flex justify-center mb-12">
          <motion.div
            className="absolute w-72 h-72 rounded-full border border-primary/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full border border-secondary/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.05 }}
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border card-hover text-center"
            >
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
              >
                <link.icon className="w-6 h-6 text-primary mb-3 group-hover:text-secondary transition-colors" />
              </motion.div>
              <span className="font-display font-semibold text-foreground text-sm">{link.label}</span>
              <span className="text-xs text-muted-foreground mt-1">{link.desc}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
