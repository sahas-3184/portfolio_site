import { motion } from "framer-motion";

const projects = [
  {
    title: "CRM Dashboard",
    description: "A visually stunning dashboard with animated widgets and real-time charts.",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
    link: "#"
  },
  {
    title: "AI Workflow Automation",
    description: "Automation suite with animated flows and real-time notifications.",
    tech: ["Python", "AWS", "Airflow", "Redash"],
    link: "#"
  }
  // Add more!
];

function ProjectCard({ title, description, tech, link, idx }) {
  return (
    <motion.div
      className="group cursor-pointer bg-glass border border-primary/25 backdrop-blur-lg rounded-2xl p-6 shadow-neon hover:shadow-2xl transition hover:scale-105"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1 * idx }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, rotate: idx % 2 ? -3 : 3 }}
    >
      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent neon transition">{title}</h3>
      <p className="text-gray-100 mb-2">{description}</p>
      <p className="text-sm text-primary mb-2">Tech: {tech.join(", ")}</p>
      <a
        href={link}
        className="text-accent underline hover:text-primary"
        tabIndex={-1}
      >
        View Project
      </a>
      <style jsx>{`
        .neon {
          text-shadow: 0 0 10px #a21caf, 0 0 20px #22d3ee;
        }
      `}</style>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 neon">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} idx={i} {...p} />
        ))}
      </div>
      <style jsx>{`
        .neon {
          text-shadow: 0 0 12px #a21caf, 0 0 32px #22d3ee;
        }
      `}</style>
    </section>
  );
}