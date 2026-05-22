import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 leading-relaxed text-slate-800">
      <h1 className="font-display text-4xl text-slate-brand mb-6">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 22 May 2026</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">1. Introduction</h2>
      <p className="mb-4">Welcome to Grayskull Property (“we”, “our”, “us”). We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, store, and protect your personal data when you visit our website: www.grayskullproperty.co.uk. This policy is intended to comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">2. Who We Are</h2>
      <p className="mb-4">Grayskull Property<br />Midlands, UK<br />Email: <a href="mailto:admin@grayskullproperty.co.uk" className="text-gold underline">admin@grayskullproperty.co.uk</a></p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">3. What Information We Collect</h2>
      <p className="mb-4">We may collect information you provide directly (Name, Email, Phone, etc.) and information collected automatically (IP address, browser type, etc.). We may use cookies and similar technologies.</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">4. How We Use Your Information</h2>
      <p className="mb-4">We use your personal data to provide services, respond to enquiries, improve our website, and comply with legal obligations.</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">5. Your Rights</h2>
      <p className="mb-4">Under UK GDPR, you have the right to access, correct, delete, or restrict processing of your personal data. Contact us at <a href="mailto:admin@grayskullproperty.co.uk" className="text-gold underline">admin@grayskullproperty.co.uk</a> to exercise your rights.</p>
    </div>
  );
}
