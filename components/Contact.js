import { motion } from "framer-motion";
export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-24 px-4"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold mb-4 text-primary neon">Contact</h2>
      <ul className="text-lg text-gray-200">
        <li>
          <strong>Email:</strong>{" "}
          <a href="mailto:kamsanisahas@gmail.com" className="text-accent hover:underline">
            kamsanisahas@gmail.com
          </a>
        </li>
        <li>
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/kamsani-sahas-a44358196"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            kamsani-sahas
          </a>
        </li>
      </ul>
      <style jsx>{`
        .neon {
          text-shadow: 0 0 12px #a21caf, 0 0 32px #22d3ee;
        }
      `}</style>
    </motion.section>
  );
}