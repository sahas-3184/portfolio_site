import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroWords = ["Developer", "Data Engineer", "Creator", "Dreamer"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setWordIndex((i) => (i + 1) % heroWords.length),
      1700
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen pt-20"
    >
      {/* Blobs background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div
          className="absolute left-[-6rem] top-[-5rem] w-[24rem] h-[24rem] rounded-full bg-primary opacity-30 mix-blend-lighten blur-2xl animate-blob"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute right-[-8rem] bottom-[-5rem] w-[24rem] h-[24rem] rounded-full bg-accent opacity-25 blur-2xl animate-blob"
          animate={{ scale: [1, 0.95, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="backdrop-blur-2xl bg-glass border border-primary/30 rounded-3xl shadow-neon px-10 pt-14 pb-10 text-center max-w-xl"
      >
        <img
          src="/profile.jpg"
          alt="Sahas Kamsani"
          className="w-28 h-28 mx-auto rounded-full border-4 border-primary shadow-lg mb-4 object-cover"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-white neon mb-2">
          Sahas Kamsani
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-5 h-12 transition-all duration-700">
          {heroWords[wordIndex]}
          <span className="ml-2 animate-blink">|</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Building delightful digital experiences with code, data, and creativity.
        </p>
        <a
          href="#projects"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-xl hover:scale-105 hover:bg-primary/80 transition"
        >
          See My Work
        </a>
      </motion.div>
      <style jsx>{`
        .neon {
          text-shadow: 0 0 12px #22d3ee, 0 0 18px #a21caf;
        }
        .animate-blink {
          animation: blink 1.1s infinite step-start;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          60% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}