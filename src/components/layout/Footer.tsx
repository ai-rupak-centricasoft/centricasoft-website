"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { OFFICE_LOCATIONS, SITE } from "@/lib/constants";
import Image from "next/image";

const LINKS = {
  "What We Do": [
    { label: "Agentic AI", href: "/what-we-do/agentic-ai" },
    { label: "GenAI Chatbots", href: "/what-we-do/genai-chatbots" },
    { label: "Data Engineering", href: "/what-we-do/data-engineering" },
    { label: "Data Analytics", href: "/what-we-do/data-analytics" },
    { label: "ML & Advanced Analytics", href: "/what-we-do/data-analytics" },
    { label: "App Development", href: "/contact" },
  ],
  Products: [{ label: "Nubo Platform", href: "/products/nubo" }],
  Company: [
    { label: "About Us", href: "/company/about" },
    { label: "Clients", href: "/company/clients" },
    { label: "Partners", href: "/company/partners" },
    { label: "Insights", href: "/insights" },
    { label: "Careers", href: "/careers" },
  ],
};

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/centricasoft",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/centricasoft",
    icon: Twitter,
  },
  {
    label: "GitHub",
    href: "https://github.com/centricasoft",
    icon: Github,
  },
];

const FOOTER_LABEL_CLASS =
  "whitespace-nowrap font-mono text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[rgba(168,207,230,0.5)]";
const FOOTER_LINK_CLASS =
  "inline-block text-[0.96rem] sm:whitespace-nowrap sm:text-[1rem] font-medium leading-[1.7] text-white/72 transition-all hover:translate-x-1 hover:text-[var(--sky)]";

function HexLogo() {
  return (
    <div className="flex items-center gap-3.5 whitespace-nowrap">
      {/* <svg width="36" height="40" viewBox="0 0 36 40" fill="none" aria-hidden>
        <defs>
          <linearGradient id="footer-hex" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#003580" />
            <stop offset="100%" stopColor="#1EBFFF" />
          </linearGradient>
        </defs>
        <polygon points="18,1 35,10 35,30 18,39 1,30 1,10" fill="url(#footer-hex)" />
        <text
          x="18"
          y="25"
          textAnchor="middle"
          fill="white"
          className="font-display text-[16px] font-bold"
        >
          C
        </text>
      </svg> */}
      <Image
        src="/assest/logo.webp"
        alt="CentricaSoft"
        width={40}
        height={40}
        className="h-10 w-10 rounded-[4px] object-contain transition-transform duration-[600ms] ease-out "
      />
      <span className="font-display text-[1.375rem] sm:text-[1.45rem] font-semibold tracking-[-0.01em]">
        CentricaSoft
      </span>
    </div>
  );
}

export function Footer() {
  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms-of-use" },
  ];

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--navy-deep)] text-white">
      <div className="container-x pb-8 pt-20">
        <div className="mb-16 lg:grid lg:grid-cols-[minmax(18rem,1.15fr)_minmax(11rem,0.95fr)_minmax(10rem,0.8fr)_minmax(10rem,0.85fr)_minmax(15rem,1.1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="max-w-[18rem] lg:max-w-[17rem]">
            <HexLogo />
            <p className="mt-4 max-w-[15rem] text-[0.975rem] leading-[1.75] text-white/52">
              Building AI agents, GenAI platforms, and enterprise data infrastructure since day one.
            </p>
            <div className="mt-7 flex gap-2.5">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/55 transition-all hover:border-transparent hover:bg-gradient-brand hover:text-white"
                >
                  <Icon className="h-[15px] w-[15px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 md:gap-x-12 lg:mt-0 lg:contents">
            {Object.entries(LINKS).map(([section, items]) => (
              <div key={section} className="min-w-0">
                <p className={`mb-4 ${FOOTER_LABEL_CLASS}`}>{section}</p>
                <ul className="flex flex-col gap-3.5 sm:gap-4">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={FOOTER_LINK_CLASS}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="min-w-0">
              <p className={`mb-4 ${FOOTER_LABEL_CLASS}`}>Global Presence</p>
              <div className="flex flex-col gap-4">
                {OFFICE_LOCATIONS.map((office) => (
                  <div key={`${office.city}-${office.country}`}>
                    <p className="mb-0.5 font-heading text-[0.975rem] sm:whitespace-nowrap sm:text-[1rem] font-semibold tracking-[-0.01em] text-white/88">
                      {office.city}, {office.region}
                    </p>
                    <p className="text-[0.9rem] sm:whitespace-nowrap sm:text-[0.95rem] text-white/52">
                      {office.country}
                    </p>
                  </div>
                ))}
                <a
                  href={`mailto:${SITE.email}`}
                  className="pt-1 text-[0.9rem] sm:whitespace-nowrap sm:text-[0.95rem] font-medium text-[var(--sky)] transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-6">
          <p className="text-[0.85rem] sm:text-[0.9rem] text-white/36">
            &copy; 2026 CentricaSoft LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[0.85rem] sm:text-[0.9rem] font-medium text-white/36 transition-colors hover:text-white/60"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
