import { createFileRoute } from "@tanstack/react-router";
import { BrandLink, BrandButton } from "@/components/ui/BrandButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Building2, Hammer, Handshake, Check, MapPin, Phone, Mail } from "lucide-react";
import { useState, FormEvent } from "react";
import heroCover from "@/assets/hero-cover.jpg";
import aboutConstruction from "@/assets/about-construction.jpg";
import residential1 from "@/assets/project-residential-1.jpg";
import residential2 from "@/assets/project-residential-2.jpg";
import commercial1 from "@/assets/project-commercial-1.jpg";
import commercial2 from "@/assets/project-commercial-2.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "GraySkull Properties · Built on Trust, Delivered with Precision" },
      { name: "description", content: "Specialist Midlands property developer and manager. Residential and commercial projects delivered with 40+ years of experience." },
    ],
  }),
});

type Category = "Residential" | "Commercial";
type Status = "Completed" | "In Progress";

interface Project {
  name: string;
  location: string;
  description: string;
  category: Category;
  status: Status;
  image: string;
}

const projects: Project[] = [
  { name: "Maple Grove Development", location: "Dudley, West Midlands", description: "A 42-home residential community of family houses and townhomes.", category: "Residential", status: "Completed", image: "https://images.pexels.com/photos/37175980/pexels-photo-37175980.jpeg" },
  { name: "Ashfield Mews", location: "Solihull, West Midlands", description: "Boutique collection of contemporary mews-style homes.", category: "Residential", status: "Completed", image: residential2 },
  { name: "Willowbrook Gardens", location: "Leicester, East Midlands", description: "A new build estate of 28 energy-efficient family homes.", category: "Residential", status: "In Progress", image: residential1 },
  { name: "Ironbridge Business Park", location: "Telford, Shropshire", description: "Mixed-use commercial park with offices and light industrial units.", category: "Commercial", status: "Completed", image: commercial2 },
  { name: "Centenary Square Offices", location: "Birmingham", description: "Grade A office refurbishment in the city centre.", category: "Commercial", status: "Completed", image: commercial1 },
  { name: "Riverside Trade Centre", location: "Nottingham", description: "New trade counter and warehouse units serving the East Midlands.", category: "Commercial", status: "In Progress", image: "https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg" },
];

const values = [
  { title: "Integrity", body: "Honest, transparent dealings on every project." },
  { title: "Quality", body: "We never compromise on the standard of our builds." },
  { title: "Partnership", body: "Your goals are our goals. We succeed together." },
];

const milestones = [
  { year: "1985", text: "GraySkull founded in the Midlands" },
  { year: "1995", text: "Expanded into commercial property development" },
  { year: "2005", text: "Began large-scale developer partnerships" },
  { year: "2015", text: "Portfolio surpassed 500 completed properties" },
  { year: "2025", text: "Continuing to build the Midlands' future" },
];

function Home() {
  const [tab, setTab] = useState<Category | "All">("All");
  const [sent, setSent] = useState(false);

  const filtered = tab === "All" ? projects : projects.filter((p) => p.category === tab);
  const tabs: Array<Category | "All"> = ["All", "Residential", "Commercial"];

  const onContactSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section id="home" className="relative">
        <img
          src={heroCover}
          alt="Modern Midlands residential development at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-slate-brand/80" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-stone-brand">
          <h1 className="font-display text-4xl md:text-6xl max-w-3xl leading-tight">
            Built on Trust. Delivered with Precision.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone-brand/85">
            Developing residential and commercial properties across the Midlands for over 40 years.
          </p>
          <div className="mt-10">
            <a href="#projects" className="inline-flex items-center justify-center px-7 py-3 text-sm uppercase tracking-wider font-semibold transition-colors rounded-sm bg-gold text-slate-brand hover:bg-slate-brand hover:text-gold border border-gold">
              View Our Projects
            </a>
          </div>
        </div>
      </section>

      {/* Welcome / Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <SectionHeader
            eyebrow="Welcome"
            title="Welcome to GraySkull Properties"
            subtitle="GraySkull is a specialist property development and management company based in the Midlands. We build, develop, and manage high-quality residential and commercial properties, working in close partnership with both small and large developers to deliver exceptional results."
          />
          <div className="relative mt-8">
            <img
              src="https://images.pexels.com/photos/15369780/pexels-photo-15369780.jpeg"
              alt="Modern GraySkull property development architectural detail"
              width={1280}
              height={832}
              loading="lazy"
              className="w-full h-auto rounded-sm border border-border object-cover grayscale-[0.5]"
            />
            <div className="absolute inset-0 bg-slate-brand/40 rounded-sm" aria-hidden />
          </div>
        </div>
        <div className="bg-card border border-border rounded-sm p-8 shadow-sm">
          <ul className="divide-y divide-border">
            {[
              { k: "40+ Years", v: "of trusted experience" },
              { k: "Residential & Commercial", v: "specialists across the Midlands" },
              { k: "Developer Partnerships", v: "at every scale" },
            ].map((s) => (
              <li key={s.k} className="py-5 first:pt-0 last:pb-0">
                <p className="font-display text-2xl text-slate-brand">{s.k}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-pebble">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
          <SectionHeader eyebrow="Our Story" title="Who We Are" />
          <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              GraySkull Properties has been at the heart of the Midlands property landscape for over 40 years.
              From our roots as a residential builder, we have grown into a full-service property development
              and management company, trusted by homeowners, investors, and developers alike.
            </p>
            <p>
              We specialise in residential and commercial properties and take pride in working in true
              partnership with developers whether they are an individual building their first home or a
              large-scale commercial developer.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-20">
          <SectionHeader eyebrow="Our Values" title="What Drives Us" center />
          <div className="mt-12 bg-card border border-border rounded-sm p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} className="bg-pebble/60 border border-border p-6 rounded-sm">
                  <h3 className="font-display text-xl text-gold">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Heritage / Timeline */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <SectionHeader eyebrow="Heritage" title="40 Years of Milestones" center />
        <ol className="mt-14 relative border-l-2 border-gold/40 ml-3 space-y-10">
          {milestones.map((m) => (
            <li key={m.year} className="pl-8 relative">
              <span className="absolute -left-[11px] top-1 w-5 h-5 bg-gold rounded-full ring-4 ring-stone-brand" />
              <p className="font-display text-2xl text-slate-brand">{m.year}</p>
              <p className="mt-1 text-muted-foreground">{m.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Services */}
      <section className="bg-pebble">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeader eyebrow="Expertise" title="Our Areas of Expertise" center />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { Icon: Hammer, title: "Property Development", body: "We build and develop residential and commercial properties across the Midlands to the highest standards." },
              { Icon: Building2, title: "Property Management", body: "End-to-end management of properties, ensuring long-term value and tenant satisfaction." },
              { Icon: Handshake, title: "Developer Partnerships", body: "We work in close partnership with small and large developers, bringing experience and reliability to every project." },
            ].map(({ Icon, title, body }) => (
              <article key={title} className="bg-card border border-border p-8 rounded-sm transition-shadow hover:shadow-lg">
                <Icon className="text-gold" size={32} strokeWidth={1.5} />
                <h3 className="mt-5 font-display text-xl text-slate-brand">{title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <SectionHeader eyebrow="Portfolio" title="Our Projects" center />
        <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
          A selection of our residential and commercial developments across the Midlands.
        </p>

        <div role="tablist" className="mt-12 flex justify-center gap-8 border-b border-border">
          {tabs.map((t) => {
            const active = tab === t;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                className={`pb-3 text-sm uppercase tracking-wider transition-colors ${
                  active
                    ? "text-slate-brand border-b-2 border-gold -mb-px"
                    : "text-muted-foreground hover:text-slate-brand"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.name} className="bg-card border border-border rounded-sm overflow-hidden transition-shadow hover:shadow-lg flex flex-col">
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-52 object-cover grayscale-[0.5]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-brand/40" aria-hidden />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm ${
                    p.category === "Residential"
                      ? "bg-gold/15 text-gold"
                      : "bg-slate-brand/10 text-slate-brand"
                  }`}>
                    {p.category}
                  </span>
                  <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-sm border ${
                    p.status === "Completed"
                      ? "border-emerald-700/30 text-emerald-800"
                      : "border-amber-700/30 text-amber-800"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display text-xl text-slate-brand">{p.name}</h3>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{p.location}</p>
                <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-stone-brand mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <SectionHeader eyebrow="Why GraySkull" title="Why GraySkull?" />
          <ul className="mt-8 space-y-4">
            {[
              "40 years of trusted experience in the Midlands",
              "Specialists in both residential and commercial sectors",
              "Strong partnerships with developers at every scale",
            ].map((t) => (
              <li key={t} className="flex gap-3 items-start">
                <Check className="text-gold mt-0.5 shrink-0" size={20} />
                <span className="text-base">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="bg-pebble border-l-4 border-gold p-8 md:p-10">
          <p className="font-display text-xl md:text-2xl italic text-slate-brand leading-relaxed">
            "Our commitment is to deliver properties that stand the test of time - built with care, integrity, and precision."
          </p>
        </blockquote>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-pebble">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeader eyebrow="Contact" title="Contact Us" center />
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto mb-16">
            We'd love to hear from you. Get in touch with our team.
          </p>

          <div className="max-w-2xl mx-auto bg-card border border-border rounded-sm p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-16">
                <h3 className="font-display text-2xl text-slate-brand">Thank you</h3>
                <p className="mt-3 text-muted-foreground">Your enquiry has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={onContactSubmit} className="space-y-5">
                <Field label="Full Name" name="name" required />
                <Field label="Email Address" name="email" type="email" required />
                <Field label="Phone (optional)" name="phone" type="tel" />
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider text-slate-brand mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full border border-border bg-background px-4 py-3 rounded-sm focus:outline-none focus:border-gold"
                  />
                </div>
                <BrandButton type="submit" className="w-full">Send Enquiry</BrandButton>
              </form>
            )}
          </div>
        </div>
      </section>

    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs uppercase tracking-wider text-slate-brand mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border border-border bg-background px-4 py-3 rounded-sm focus:outline-none focus:border-gold"
      />
    </div>
  );
}
