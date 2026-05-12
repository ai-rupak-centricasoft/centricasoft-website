import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use | CentricaSoft",
  description: "Read CentricaSoft's Terms of Use governing access to and use of our website.",
  path: "/terms-of-use",
});

const TERMS_SECTIONS = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "You agree to use the Website and Content in accordance with these Terms of Use and all applicable laws and regulations. Any use not expressly permitted by these Terms of Use is prohibited, constitutes a breach hereof, and automatically terminates the license granted to you hereunder to access and use the Website and Content.",
      "CentricaSoft may at any time, for any reason, and without notice or liability: (a) modify, suspend, terminate, cancel, deny, or prevent you from the usage, operation, or access to the Website, or (b) change, revise, or modify the Website and its contents.",
      "You understand that the website, its contents, and all other items connected to it are the sole and absolute property of CentricaSoft and that you have been provided with a temporary license of usage of the same. You are therefore not entitled to raise any objections or claim any right of whatsoever nature for such usage.",
    ],
  },
  {
    title: "2. Privacy",
    paragraphs: [
      'Please review our Privacy Notice posted on the Website (the "Privacy Notice"), which is incorporated herein and also governs your use of the Website, to understand CentricaSoft\'s privacy practices.',
    ],
  },
  {
    title: "3. Revisions",
    paragraphs: [
      'CentricaSoft is entitled to update, change, modify, or revise the Terms of Use provided herein at any time and for any reason and at the sole discretion of CentricaSoft. Any changes will become effective upon posting to the Website, along with the date on which it was most recently updated as indicated by the "Last Updated" section at the end of these Terms of Use. Your continued access to and/or use of the Website after any such modifications constitute your acceptance of the Terms of Use as modified. It is your responsibility to review the Terms of Use regularly for updates. If any modifications to these Terms of Use is held to be invalid, void, or unenforceable for any reason, such modifications shall be deemed severable and shall not affect the validity and enforceability of these Terms.',
    ],
  },
  {
    title: "4. Informations",
    paragraphs: [
      'You are solely responsible for any information, suggestions, content, or material you transmit to or through the Website or otherwise to us (e.g., through email) ("Informations"). You understand that, except for any personally identifiable information we may collect from you under the guidelines established in our Privacy Notice, Informations are considered non-confidential and non-proprietary. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so. Because of the open nature of the Internet, we recommend that you not submit any confidential information. CentricaSoft takes no responsibility and assumes no liability for any Informations.',
    ],
  },
  {
    title: "5. Disclaimer of Warranties",
    paragraphs: [
      'THE WEBSITE AND CONTENT ARE PROVIDED "AS IS". CentricaSoft MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE WEBSITE OR CONTENT AND HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND OR NATURE, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, CentricaSoft DOES NOT GUARANTEE THAT THE WEBSITE OR CONTENT WILL MEET YOUR REQUIREMENTS, OR WILL BE ERROR-FREE, UNINTERRUPTED, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT ANY DEFECTS WILL BE CORRECTED.',
      "If you are dissatisfied with the Website or Content in any way, your sole and exclusive remedy is to discontinue accessing and using the same.",
    ],
  },
  {
    title: "6. Limitation of Liability",
    paragraphs: [
      "IN NO EVENT SHALL CentricaSoft, ITS AFFILIATES, OR ITS OR THEIR OWNERS, INVESTORS, DIRECTORS, EMPLOYEES, AGENTS, CONSULTANTS, PARTNERS, OR PROVIDERS BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY MONETARY DAMAGES, WHETHER DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, ARISING OUT OF OR IN CONNECTION WITH THE WEBSITE, CONTENT, OR THESE TERMS OF USE, HOWEVER CAUSED, REGARDLESS OF THE THEORY OF LIABILITY, AND EVEN IF CentricaSoft HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE LIMITATIONS, EXCLUSIONS, AND DISCLAIMERS SET FORTH IN THESE TERMS OF USE APPLY TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW.",
    ],
  },
  {
    title: "7. Indemnity",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless CentricaSoft, its affiliates, owners, investors, directors, employees, agents, consultants, partners, or providers from and against any and all claims, causes of action, damages, losses, liabilities, costs and expenses (including, without limitation, attorneys' fees and costs) arising from your breach of these Terms of Use.",
    ],
  },
  {
    title: "8. Electronic Communications",
    paragraphs: [
      "When you visit or use the Website, access or download Content, or send e-mails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by e-mail or by posting notices on the Website. You agree that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing and are deemed to be given and received on the date we transmit any such electronic communication.",
    ],
  },
  {
    title: "9. Links",
    paragraphs: [
      'Our Website and communications may contain links to other websites and social media platforms such as Facebook and Twitter ("Linked Sites"). These Terms of Use only apply to the Website and do not apply to any Linked Sites. We encourage you to read and understand the terms of use of any Linked Sites that you visit. Links do not imply that we sponsor, endorse, or are affiliated with or associated with, or legally authorized to use any trademark, trade name, service mark, design, logo, symbol, or other copyrighted materials displayed on or accessible through any Linked Site.',
    ],
  },
  {
    title: "10. General Provisions",
    paragraphs: [
      "If, for any reason, a court of competent jurisdiction finally determines any provision of these Terms of Use, our Privacy Policy, or any portion thereof to be unenforceable, such provision shall be enforced to the maximum extent permissible so as to give the intended effect thereof, and the remainder of these Terms of Use and Privacy Policy shall continue in full force and effect. CentricaSoft's failure to act with respect to a breach by you or others does not waive our right to act with respect to that breach or subsequent or similar breaches. No consent or waiver by CentricaSoft hereof will be deemed effective unless in writing. These Terms of Use, together with our Privacy Policy and any other terms applicable to our Products, as each is currently posted, constitute the entire agreement between CentricaSoft and you with respect to your use of the Website and Content and supersede all previous written or oral agreements relating to the subject matter hereof.",
    ],
  },
] as const;

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        pill="03 · Legal"
        title="Terms of Use"
        highlight="Terms of Use"
        highlightClassName="text-white"
        subtitle="These terms govern your access to and use of the CentricaSoft website. By accessing our site, you agree to these terms. If you disagree, please do not use our website."
        variant="immersive"
        tone="company"
        size="compact"
        asideLabel="Legal summary"
        meta={["Website access", "Usage conditions", "Liability limitations"]}
        backgroundImage="https://images.pexels.com/photos/8112199/pexels-photo-8112199.jpeg?cs=srgb&dl=pexels-mikhail-nilov-8112199.jpg&fm=jpg"
      />

      <section className="relative overflow-hidden bg-[var(--surface-2)] pt-14 pb-20 md:pt-20 md:pb-24">
        <SectionAccentPattern variant="top-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="01">Terms Overview</SectionLabel>

          <div className="mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_24px_60px_-38px_rgba(0,18,52,0.16)]">
            <div className="grid gap-px bg-[var(--border)] lg:grid-cols-[minmax(0,0.72fr)_minmax(280px,0.28fr)]">
              <div className="bg-white p-8 md:p-10">
                <h2 className="font-display text-[clamp(30px,4vw,42px)] leading-[1.08] text-[var(--ink)]">
                  Welcome to CentricaSoft.
                </h2>
                <p className="mt-5 max-w-[720px] text-[16px] leading-[1.8] text-[var(--ink-2)]">
                  These Terms of Use govern your access to and use of our website, outlining the
                  agreement between you and CentricaSoft LLC. By accessing our site, you agree to
                  these terms. If you disagree, please do not use our website.
                </p>
              </div>

              <div className="bg-white p-8 md:p-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
                  <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                    Legal snapshot
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  {[
                    "Applies to use of the website and its content",
                    "Incorporates the Privacy Notice by reference",
                    "May be revised by CentricaSoft from time to time",
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
              {TERMS_SECTIONS.map((section) => (
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
              Last Updated: April 2025
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
