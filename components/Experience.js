import { motion } from "framer-motion";
const experience = [
  {
    company: "Data Engineer II",
    location: "Hyderabad, India",
    period: "2022 - 2024",
    details: [
      "Built a data engineering team to streamline pipelines and enhance accessibility.",
      "Worked on data processing pipelines for platforms like CleverTap, Mixpanel, and Zoho.",
      "Setup/maintained Airflow for automation on AWS (ECS).",
      "Built CRM Dashboard and automations.",
      "Managed end-to-end data projects: planning, pipeline, deployment, monitoring.",
    ],
  },
  {
    company: "Full Stack Developer",
    location: "Bangalore, India",
    period: "2020 - 2022",
    details: [
      "Developed and maintained RISE: an enterprise resource info system.",
      "Built a web app to help companies perfect growth and execution plans.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-24 px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-8 text-primary neon">Work Experience</h2>
      {experience.map((exp, i) => (
        <div
          key={i}
          className="mb-8 bg-glass rounded-xl border border-primary/20 shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-accent">{exp.company}</h3>
          <span className="text-gray-400">{exp.location} | {exp.period}</span>
          <ul className="list-disc ml-6 mt-2 text-gray-100">
            {exp.details.map((d, j) => <li key={j}>{d}</li>)}
          </ul>
        </div>
      ))}
      <style jsx>{`
        .neon {
          text-shadow: 0 0 12px #a21caf, 0 0 24px #22d3ee;
        }
      `}</style>
    </motion.section>
  );
}