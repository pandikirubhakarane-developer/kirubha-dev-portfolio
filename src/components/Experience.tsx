import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Building2, Users } from "lucide-react";

const experiences = [
  {
    type: "Product-Based Company",
    icon: Building2,
    description: "Developed and maintained core product features, working closely with product teams to deliver user-focused solutions. Gained deep expertise in building scalable SaaS applications.",
    highlights: ["SaaS Development", "Feature Development", "Performance Optimization"],
  },
  {
    type: "Service-Based Company",
    icon: Users,
    description: "Worked with diverse clients across industries, understanding unique business requirements and delivering custom solutions. Developed strong communication and problem-solving skills.",
    highlights: ["Client Communication", "Custom Solutions", "Multiple Tech Stacks"],
  },
  {
    type: "Freelancer",
    icon: Briefcase,
    description: "Providing end-to-end web development services, from consultation to deployment. Building long-term relationships with clients through quality work and reliable delivery.",
    highlights: ["Full Project Lifecycle", "Direct Client Work", "Flexible Solutions"],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 md:py-32 bg-card/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse background spanning product development, client services, and independent consulting
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.type}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-card p-6 md:p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      <exp.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{exp.type}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Approach Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold mb-6">My Approach</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl mb-3">💡</p>
                <h4 className="font-semibold mb-2">Understand</h4>
                <p className="text-muted-foreground text-sm">Deep dive into requirements and business goals</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl mb-3">⚡</p>
                <h4 className="font-semibold mb-2">Deliver</h4>
                <p className="text-muted-foreground text-sm">Quick turnaround with quality code</p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <p className="text-4xl mb-3">🚀</p>
                <h4 className="font-semibold mb-2">Iterate</h4>
                <p className="text-muted-foreground text-sm">Continuous improvement based on feedback</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
