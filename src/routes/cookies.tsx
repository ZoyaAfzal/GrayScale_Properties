import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 leading-relaxed text-slate-800">
      <h1 className="font-display text-4xl text-slate-brand mb-6">Cookie Policy</h1>
      <p className="text-sm text-muted-foreground mb-10">Last updated: 22 May 2026</p>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">What Are Cookies?</h2>
      <p className="mb-4">Cookies are small text files stored on your device when you visit our website.</p>
      
      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">How We Use Cookies</h2>
      <p className="mb-4">We use cookies to make the website function properly, improve website performance and user experience, analyse website traffic, and remember your preferences.</p>
      
      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">Types of Cookies We Use</h2>
      <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>Essential Cookies:</strong> Required for the website to operate correctly.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use the website.</li>
          <li><strong>Functional Cookies:</strong> Remember your settings and preferences.</li>
      </ul>

      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">Managing Cookies</h2>
      <p className="mb-4">You can control or delete cookies through your browser settings. Blocking some cookies may affect website functionality.</p>
      
      <h2 className="text-2xl font-display text-slate-brand mt-8 mb-4">Contact</h2>
      <p className="mb-4">If you have questions about this Cookie Policy, contact us at: <a href="mailto:admin@grayskullproperty.co.uk" className="text-gold underline">admin@grayskullproperty.co.uk</a></p>
    </div>
  );
}
