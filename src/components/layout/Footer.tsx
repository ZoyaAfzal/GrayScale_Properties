import { Link } from "@tanstack/react-router";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-brand text-stone-brand">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="font-display text-2xl text-gold">Grayskull</h3>
          <p className="mt-2 text-sm text-stone-brand/80 max-w-sm">
            Four decades of building quality, trust, and community across the Midlands.
          </p>
          <address className="mt-6 not-italic text-sm leading-relaxed text-stone-brand/80">
            Grayskull Property<br />
            Midlands, United Kingdom<br />
            <a href="mailto:admin@grayskullproperty.co.uk" className="hover:text-gold">admin@grayskullproperty.co.uk</a>
          </address>
        </div>
        <div className="md:text-right">
          <h4 className="font-display text-lg text-stone-brand">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-stone-brand/80 hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-brand/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-brand/60">
            © {year} Grayskull Property Limited · All Rights Reserved
          </p>
          <div className="flex gap-6 text-xs text-stone-brand/60">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-gold transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
