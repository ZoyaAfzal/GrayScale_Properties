import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/ui/PageHeader";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy · GraySkull Properties" },
      { name: "description", content: "Privacy policy for GraySkull Properties Limited." },
    ],
  }),
});

function PrivacyPolicy() {
  return (
    <>
      <PageHeader title="Privacy Policy" subtitle="Your privacy is important to us. Learn how we handle your data." />
      
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-24 space-y-8 text-base leading-relaxed text-foreground/90">
        <div>
          <h2 className="font-display text-2xl text-slate-brand mb-4">1. Introduction</h2>
          <p>
            GraySkull Properties Limited ("we", "us", or "our") is committed to protecting and respecting your privacy. 
            This policy explains how we collect, use, and protect any personal information you provide to us through our website.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-slate-brand mb-4">2. Information We Collect</h2>
          <p>
            We only collect personal information that you voluntarily provide to us via our contact form. This may include:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Your full name</li>
            <li>Your email address</li>
            <li>Your phone number (if provided)</li>
            <li>Any information included in your message</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-slate-brand mb-4">3. How We Use Your Information</h2>
          <p>
            The information you provide is used solely to respond to your enquiries and provide the services you have requested. 
            We do not use your data for marketing purposes without your explicit consent, and we never sell your information to third parties.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-slate-brand mb-4">4. Data Storage and Security</h2>
          <p>
            We take appropriate security measures to prevent unauthorised access, disclosure, modification, or unauthorised destruction of your data. 
            As a UK-based firm, we comply with relevant UK data protection legislation, including the UK GDPR.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-slate-brand mb-4">5. Your Rights</h2>
          <p>
            You have the right to request access to the personal information we hold about you, to request corrections, or to ask that your data be deleted. 
            To exercise these rights, please contact us at <a href="mailto:info@grayskull.co.uk" className="text-gold hover:underline">info@grayskull.co.uk</a>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-slate-brand mb-4">6. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>
      </section>
    </>
  );
}
