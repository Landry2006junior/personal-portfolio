import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const links = [
  { icon: Github, label: "GitHub", url: "https://github.com", desc: "View my repos" },
  { icon: Linkedin, label: "LinkedIn", url: "https://linkedin.com", desc: "Let's connect" },
  { icon: ExternalLink, label: "Moviestream", url: "#", desc: "Live demo" },
  { icon: Mail, label: "Email", url: "mailto:hello@example.com", desc: "Get in touch" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-sm tracking-[0.3em] uppercase mb-3 font-body">Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Let's <span className="text-glow-pink text-secondary">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Open to opportunities in software engineering — locally and internationally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
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
              className="group flex flex-col items-center p-6 rounded-xl bg-card border border-border card-hover text-center"
            >
              <link.icon className="w-6 h-6 text-primary mb-3 group-hover:text-secondary transition-colors" />
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
