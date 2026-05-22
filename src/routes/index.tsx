import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/SectionHeader";
import heroCover from "@/assets/hero-cover.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Grayskull Property · Built on Trust, Delivered with Precision" },
      { name: "description", content: "Specialist Midlands property developer and manager. Residential and commercial projects delivered with 40+ years of experience." },
    ],
  }),
});

const values = [
  { title: "Integrity", body: "Honest, transparent dealings on every project." },
  { title: "Quality", body: "We never compromise on the standard of our builds." },
  { title: "Partnership", body: "Your goals are our goals. We succeed together." },
];

function Home() {
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
        </div>
      </section>

      {/* Welcome / Intro */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid gap-12 md:grid-cols-2 items-center">
        <div>
          <SectionHeader
            eyebrow="Welcome"
            title="Welcome to Grayskull Property"
            subtitle="Grayskull is a specialist property development and management company based in the Midlands. We build, develop, and manage high-quality residential and commercial properties, working in close partnership with both small and large developers to deliver exceptional results."
          />
          <div className="relative mt-8">
            <img
              src="https://images.pexels.com/photos/15369780/pexels-photo-15369780.jpeg"
              alt="Modern Grayskull property development architectural detail"
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
              Grayskull Property has been at the heart of the Midlands property landscape for over 40 years.
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

      {/* Contact Section */}
      <section id="contact" className="bg-pebble">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <SectionHeader eyebrow="Contact" title="Contact Us" center />
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team via email at:
          </p>
          <div className="mt-8 text-center">
            <a href="mailto:admin@grayskullproperty.co.uk" className="text-xl font-display text-muted-foreground hover:underline">
              admin@grayskullproperty.co.uk
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
