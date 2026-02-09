import { motion } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 90, category: "Frontend" },
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "MongoDB / PostgreSQL", level: 85, category: "Backend" },
  { name: "TypeScript", level: 87, category: "Frontend" },
  { name: "Python Automation", level: 80, category: "Backend" },
  { name: "Tailwind CSS / UI Design", level: 92, category: "Frontend" },
  { name: "Docker / CI/CD", level: 75, category: "DevOps" },
  { name: "System Architecture", level: 78, category: "DevOps" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-3 font-body">Skills</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Tech <span className="text-glow-pink text-secondary">Arsenal</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-display font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground font-body px-2 py-0.5 rounded-full bg-muted">
                  {skill.category}
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(185 100% 50%), hsl(330 100% 60%))`,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
