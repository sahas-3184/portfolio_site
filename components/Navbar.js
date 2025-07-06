import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed z-50 w-full px-6 py-4 flex justify-between items-center bg-background/70 backdrop-blur-md shadow-lg">
      <span className="text-primary font-bold text-2xl tracking-widest drop-shadow-[0_2px_12px_cyan]">
        Sahas Kamsani
      </span>
      <ul className="hidden md:flex gap-8">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-lg font-semibold text-gray-200 hover:text-primary transition duration-200"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile hamburger */}
      <button className="md:hidden text-primary" onClick={() => setOpen(!open)}>
        <svg width={32} height={32} fill="none" stroke="currentColor" strokeWidth={2}><path d="M6 8h20M6 16h20M6 24h20" /></svg>
      </button>
      {open && (
        <ul className="absolute right-6 top-16 bg-glass rounded-xl shadow-xl w-44 py-4 flex flex-col gap-4 items-center border border-primary">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-lg font-semibold text-gray-200 hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}