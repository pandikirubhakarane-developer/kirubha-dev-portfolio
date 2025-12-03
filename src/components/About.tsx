import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Users, Zap, Award } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "Understanding needs and delivering beyond expectations",
  },
  {
    icon: Zap,
    title: "Quick Delivery",
    description: "Fast turnaround without compromising on quality",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "High standards in every project I undertake",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm a passionate <span className="text-foreground font-medium">Full Stack Web Developer</span> with 
              over 2.5 years of experience building modern web applications. My journey has taken 
              me through both product and service-based companies, giving me a well-rounded 
              perspective on software development.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I specialize in creating <span className="text-foreground font-medium">SaaS platforms</span> and 
              applications with <span className="text-foreground font-medium">Role-Based Access Control (RBAC)</span>. 
              My experience spans across various domains, from e-commerce solutions to complex 
              enterprise applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              As a freelancer, I pride myself on understanding client needs deeply and delivering 
              quick, high-quality solutions. Whether it's building from scratch or improving 
              existing systems, I bring dedication and expertise to every project.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
