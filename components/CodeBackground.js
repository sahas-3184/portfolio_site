import { useEffect, useRef } from "react";

// Matrix rain effect using canvas
export default function CodeBackground() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;

    // Set canvas size
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Characters for rain
    const chars = "01{}[]()<>=+-|/\\;:.,\"'abcdefghijklmnopqrstuvwxyz";
    const fontSize = 18;
    let columns = Math.floor(canvas.width / fontSize);
    let drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = "rgba(24,24,27,0.18)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = fontSize + "px 'Fira Mono', 'Consolas', monospace";
      ctx.fillStyle = "#22d3ee"; // cyan
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{
        opacity: 0.18,
        filter: "blur(0.5px)",
        background: "transparent"
      }}
      aria-hidden="true"
    />
  );
}