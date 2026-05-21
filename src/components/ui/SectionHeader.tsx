export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.2em] text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl md:text-4xl text-slate-brand">{title}</h2>
      {subtitle && <p className="mt-4 text-base text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
