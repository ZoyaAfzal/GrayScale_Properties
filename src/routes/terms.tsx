import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 leading-relaxed text-slate-800">
      <h1 className="font-display text-4xl text-slate-brand mb-6">Terms & Conditions</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 22 May 2026</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">These Terms & Conditions govern your use of www.grayskullproperty.co.uk. By using this website, you agree to these terms. If you do not agree, please do not use the website.</p>
      
      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">2. Use of Website</h2>
      <p className="mb-4">You agree to use this website lawfully. We may suspend or terminate access if these terms are breached.</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">3. Intellectual Property</h2>
      <p className="mb-4">All content on this website, including text, images, logos, and branding, belongs to Grayskull Property unless otherwise stated. You may not reproduce or distribute content without permission.</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">4. Governing Law</h2>
      <p className="mb-4">These terms are governed by the laws of England and Wales.</p>
      
      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">5. Contact</h2>
      <p className="mb-4">Grayskull Property<br />Midlands, UK<br />Email: <a href="mailto:admin@grayskullproperty.co.uk" className="text-gold underline">admin@grayskullproperty.co.uk</a></p>
    </div>
  );
}
