import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | CentricaSoft",
  description: "Read CentricaSoft's Privacy Policy explaining how we collect and use information.",
  path: "/privacy-policy",
});

const PRIVACY_SECTIONS = [
  {
    title: "Privacy Commitment",
    paragraphs: [
      'We ("CentricaSoft", "we", "us", "our") are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us at contact@centricasoft.com.',
      'When you visit our website centricasoft.com (the "Website"), and use any of our services (the "Services", which include the Website), we appreciate that you are trusting us with your personal information. We take your privacy very seriously.',
      "In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately. This privacy notice applies to all information collected through our Services (which, as described above, includes our Website), as well as any related services, sales, marketing or events.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: [
      "Personal Information: We may collect personal information, such as your name, email address, company name, job title, and phone number, when you voluntarily provide it to us through forms or when you contact us.",
      "Log Data: Like many websites, we automatically collect certain information when you visit our Website. This may include your IP address, browser type, operating system, referring URLs, access times, and pages viewed.",
      "We reserve the right, at our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "To Provide Services: We may use your personal information to provide the services you request, respond to inquiries, and communicate with you about our services and updates.",
      "Marketing: With your consent, we may send you promotional emails or newsletters about our services, events, and industry news. You can opt out of these communications at any time.",
      "Improvement: We use data to analyze and improve our Website and services, ensuring they meet your needs and preferences.",
    ],
  },
  {
    title: "Information Sharing",
    paragraphs: [
      "We do not sell, rent, or trade your personal information to third parties. However, we may share your information under the following circumstances:",
      "Service Providers: We may engage third-party service providers to help us operate our Website or provide services to you. These service providers may have access to your personal information but are obligated to keep it confidential and use it only for the purposes we specify.",
      "Legal Compliance: We may disclose your information if required by law, government request, or to protect our rights, privacy, safety, or property.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure. However, please be aware that no method of transmitting data over the internet is entirely secure, and we cannot guarantee the absolute security of your data.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You have the right to:",
      "Access and update your personal information.",
      "Opt out of receiving marketing communications.",
      "Delete your account and personal information (subject to legal obligations).",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "Our Website and services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete it.",
    ],
  },
  {
    title: "Changes to this Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes to our information practices. We will post any revisions on this page with a new effective date.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions or concerns about our Privacy Policy or how we handle your data, please contact us at: contact@centricasoft.com",
    ],
  },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        pill="04 · Legal"
        title="Privacy Policy"
        highlight="Privacy Policy"
        highlightClassName="text-white"
        subtitle="This policy explains what information we collect, how we use it, and what choices you have in relation to your data when using CentricaSoft services."
        variant="immersive"
        tone="company"
        size="compact"
        asideLabel="Privacy summary"
        meta={["Information collection", "Usage and sharing", "Your rights"]}
        backgroundImage="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?cs=srgb&dl=pexels-ekaterina-bolovtsova-5380642.jpg&fm=jpg"
      />

      <section className="relative overflow-hidden bg-[var(--surface-2)] pt-14 pb-20 md:pt-20 md:pb-24">
        <SectionAccentPattern variant="top-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="01">Privacy Overview</SectionLabel>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_24px_60px_-38px_rgba(0,18,52,0.16)]">
            <div className="grid gap-px bg-[var(--border)] lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)]">
              <div className="bg-white p-8 md:p-10">
                <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[1.08] text-[var(--ink)]">
                  Your privacy matters to us.
                </h2>
                <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-[var(--ink-2)]">
                  This Privacy Policy outlines what personal information we collect, how we use it,
                  when we may share it, and the choices you have in relation to your information.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
                  <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                    Privacy snapshot
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Explains data collection and log data",
                    "Covers service, marketing, and improvement uses",
                    "Outlines user rights and contact details",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[var(--sky-bright)]" />
                      <p className="text-[14px] leading-[1.7] text-[var(--ink-2)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10 bg-white p-8 md:p-10">
              {PRIVACY_SECTIONS.map((section) => (
                <section key={section.title}>
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
                      <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                        Section
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>
                  <h2 className="mt-5 font-heading text-[24px] font-semibold leading-tight text-[var(--ink)]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-[var(--ink-2)]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="border-t border-[var(--border)] bg-white px-8 py-6 text-[13px] text-[var(--ink-3)] md:px-10">
              Effective Date: April 2025
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
