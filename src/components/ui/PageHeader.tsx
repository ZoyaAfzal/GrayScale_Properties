export function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-slate-brand text-stone-brand">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <h1 className="font-display text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-stone-brand/80 max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  );
}
