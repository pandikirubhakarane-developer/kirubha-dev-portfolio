import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "SaaS Platform Dashboard",
    description: "A comprehensive SaaS dashboard with multi-tenant architecture, subscription management, and analytics. Built with modern best practices and scalable design patterns.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "RBAC Management System",
    description: "Role-Based Access Control system with granular permissions, user management, and audit logging. Designed for enterprise-level security requirements.",
    tech: ["React.js", "NestJS", "PostgreSQL", "ShadCN", "JWT"],
    featured: true,
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured e-commerce solution with product management, cart functionality, payment integration, and order tracking built on BigCommerce Catalyst.",
    tech: ["BigCommerce Catalyst", "Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
  },
  {
    title: "Real-time Collaboration Tool",
    description: "A real-time document collaboration platform with live editing, comments, and version history.",
    tech: ["React.js", "Socket.io", "Node.js", "MongoDB"],
    featured: false,
  },
  {
    title: "Admin Panel Template",
    description: "Reusable admin dashboard template with data tables, charts, and responsive design.",
    tech: ["Next.js", "TypeScript", "Material UI", "Recharts"],
    featured: false,
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-20 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in building modern web applications
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Project Image Placeholder */}
              <div className="flex-1 w-full">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl border border-border flex items-center justify-center group hover:border-primary/50 transition-all duration-300">
                  <Folder className="w-16 h-16 text-primary/50 group-hover:text-primary/80 transition-colors" />
                </div>
              </div>

              {/* Project Info */}
              <div className={`flex-1 ${index % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
                <p className="text-primary font-mono text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-xl border border-border mb-4 shadow-lg">
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-start" : "lg:justify-end"}`}>
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-primary font-mono text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-center mb-8">Other Noteworthy Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs text-muted-foreground font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
