import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Database, FolderTree, Shield } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  details?: string[];
  links: { label: string; url: string; icon: React.ElementType }[];
}

const projects: Project[] = [
  {
    title: "Library Management System",
    description:
      "A full-stack library management platform built with the MERN stack featuring book cataloging, user borrowing system, and an admin dashboard for inventory management.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT"],
    featured: true,
    details: [
      "Designed normalized MongoDB schemas for books, users, and transactions",
      "Implemented JWT auth with role-based access control",
      "Built admin dashboard for real-time inventory tracking",
      "Structured scalable MERN folder architecture",
    ],
    links: [
      { label: "Source", url: "https://github.com/Landry2006junior", icon: Github },
    ],
  },
  {
    title: "AutoDeploy CLI",
    description:
      "Python automation tool for CI/CD pipeline management — handles builds, tests, and deployments with one command.",
    tags: ["Python", "Bash", "Docker", "GitHub Actions"],
    links: [{ label: "Source", url: "https://github.com/Landry2006junior", icon: Github }],
  },
  {
    title: "QueryForge",
    description:
      "Database optimization toolkit featuring query analysis, index recommendations, and schema migration utilities.",
    tags: ["PostgreSQL", "Node.js", "Performance"],
    links: [{ label: "Source", url: "https://github.com/Landry2006junior", icon: Github }],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = project.featured;

  return (
    <ScrollReveal delay={index * 0.15} direction={index % 2 === 0 ? "left" : "right"}>
    <motion.article
      whileHover={{ y: -6 }}
      className={`group rounded-xl border bg-card card-hover ${
        isFeatured
          ? "border-primary/30 border-glow lg:col-span-2"
          : "border-border"
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            {isFeatured && (
              <span className="inline-flex items-center gap-1 text-xs font-body text-primary mb-2 tracking-widest uppercase">
                <Star className="w-3 h-3" /> Flagship Project
              </span>
            )}
            <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

        {isFeatured && project.details && (
          <div className="mb-6 space-y-2">
            {project.details.map((detail, i) => {
              const icons = [Database, FolderTree, Shield, Shield];
              const Icon = icons[i] || Shield;
              return (
                <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{detail}</span>
                </div>
              );
            })}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-body rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-display font-medium text-primary hover:text-secondary transition-colors"
            >
              <link.icon className="w-4 h-4" />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.article>
    </ScrollReveal>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Floating circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/5 pointer-events-none"
          style={{
            width: 8 + i * 4,
            height: 8 + i * 4,
            right: `${10 + i * 18}%`,
            top: `${10 + i * 18}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Work</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
