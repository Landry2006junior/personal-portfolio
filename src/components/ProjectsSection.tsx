import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Database, FolderTree, Shield } from "lucide-react";

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
    title: "Moviestream MVP",
    description:
      "A full-stack movie streaming platform built with the MERN stack featuring secure media hosting, user authentication, and a scalable MongoDB schema design.",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "AWS S3"],
    featured: true,
    details: [
      "Designed normalized MongoDB schemas for users, movies, and watchlists",
      "Implemented JWT auth with refresh token rotation",
      "Structured MERN folder architecture for scalability",
      "Built secure media upload pipeline with pre-signed URLs",
    ],
    links: [
      { label: "Live Demo", url: "#", icon: ExternalLink },
      { label: "Source", url: "#", icon: Github },
    ],
  },
  {
    title: "AutoDeploy CLI",
    description:
      "Python automation tool for CI/CD pipeline management — handles builds, tests, and deployments with one command.",
    tags: ["Python", "Bash", "Docker", "GitHub Actions"],
    links: [{ label: "Source", url: "#", icon: Github }],
  },
  {
    title: "AniBoard Dashboard",
    description:
      "Anime-inspired admin dashboard UI with real-time charts, gamified user stats, and a custom design system.",
    tags: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    links: [
      { label: "Live Demo", url: "#", icon: ExternalLink },
      { label: "Source", url: "#", icon: Github },
    ],
  },
  {
    title: "QueryForge",
    description:
      "Database optimization toolkit featuring query analysis, index recommendations, and schema migration utilities.",
    tags: ["PostgreSQL", "Node.js", "Performance"],
    links: [{ label: "Source", url: "#", icon: Github }],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isFeatured = project.featured;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
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
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase mb-3 font-body">Work</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

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
