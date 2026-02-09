import { motion } from "framer-motion";
import { Target, Code2, Server, Palette } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Dev", desc: "MERN stack, REST APIs, MongoDB" },
  { icon: Code2, label: "Automation", desc: "Python scripting & CI/CD pipelines" },
  { icon: Palette, label: "Creative UI", desc: "Anime-inspired, gamified design" },
  { icon: Target, label: "Architecture", desc: "Scalable systems & secure deploy" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">About Me</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Engineer. Creator. <span className="gradient-text">Problem Solver.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a software engineer passionate about building robust backends and expressive frontends. 
            My work bridges the gap between technical excellence and creative design — 
            blending anime aesthetics with enterprise-grade architecture. Currently seeking local and 
            international opportunities in software engineering and computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border card-hover cursor-default"
            >
              <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 text-primary font-display text-sm font-semibold hover:bg-primary/10 transition-all duration-300"
          >
            Download Résumé
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
