import { motion } from "framer-motion";
import { Target, Code2, Server, Palette } from "lucide-react";

const highlights = [
  { icon: Server, label: "Backend Dev", desc: "MERN stack, REST APIs, MongoDB" },
  { icon: Code2, label: "Automation", desc: "Python scripting & CI/CD pipelines" },
  { icon: Palette, label: "Clean UI", desc: "Modern, responsive web interfaces" },
  { icon: Target, label: "Architecture", desc: "Scalable systems & secure deploy" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      {/* Floating circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-primary/10 pointer-events-none"
          style={{
            width: 60 + i * 30,
            height: 60 + i * 30,
            left: `${10 + i * 22}%`,
            top: `${15 + (i % 2) * 50}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.4, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">About Me</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Engineer. Creator. <span className="gradient-text">Problem Solver.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            I'm a software engineer passionate about building robust backends and polished frontends. 
            My work bridges the gap between technical excellence and thoughtful design — 
            delivering performant, scalable solutions with clean user experiences. Currently seeking local and 
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
              whileHover={{ y: -8, scale: 1.03 }}
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
