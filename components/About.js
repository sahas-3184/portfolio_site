import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center py-24"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-primary neon">About Me</h2>
      <p className="max-w-2xl text-lg text-center text-gray-100 mb-6">
        Ambitious and technically adept Python Full Stack Developer with 4+ years
        of industry experience. Proven track record in building robust systems that
        enhance user experiences and business outcomes.
      </p>
      <h3 className="text-2xl font-semibold mb-2 text-accent">Skills & Technologies</h3>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-lg text-gray-200">
        <li>Python, Django, FastAPI</li>
        <li>React, Next.js, JavaScript</li>
        <li>SQL, PostgreSQL, MongoDB</li>
        <li>Docker, Git, CI/CD</li>
        <li>AWS, Azure</li>
        <li>Data Engineering, ETL</li>
      </ul>
      <style jsx>{`
        .neon {
          text-shadow: 0 0 10px #22d3ee, 0 0 20px #a21caf;
        }
      `}</style>
    </motion.section>
  );
}