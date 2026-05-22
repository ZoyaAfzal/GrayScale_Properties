import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/grayskull-logo.png";

const links = [
  { to: "/#home", label: "Home" },
  { to: "/#about", label: "About Us" },
  { to: "/#contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-stone-brand/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Grayskull Logo" className="h-10 w-auto" />
          <span className="font-display text-2xl font-semibold text-gray-600">Grayskull</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <a
                href={l.to}
                className="text-sm uppercase tracking-wider text-slate-brand transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-slate-brand"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-stone-brand">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.to}>
                <a
                  href={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-wider text-slate-brand"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
