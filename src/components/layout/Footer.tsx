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

function HexLogo() {
  return (
    <div className="flex items-center gap-3">
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
        width={36}
        height={40}
        className="h-8 w-8 rounded-[4px] object-contain transition-transform duration-[600ms] ease-out "
      />
      <span className="font-display text-[18px] font-semibold tracking-[-0.01em]">
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
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[280px_1fr_280px] lg:gap-[60px]">
          <div>
            <HexLogo />
            <p className="mt-4 max-w-[240px] text-[14px] leading-[1.7] text-white/45">
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

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
            {Object.entries(LINKS).map(([section, items]) => (
              <div key={section}>
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(168,207,230,0.5)]">
                  {section}
                </p>
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="inline-block text-[14px] text-white/65 transition-all hover:translate-x-1 hover:text-[var(--sky)]"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[rgba(168,207,230,0.5)]">
              Global Presence
            </p>
            <div className="flex flex-col gap-4">
              {OFFICE_LOCATIONS.map((office) => (
                <div key={`${office.city}-${office.country}`}>
                  <p className="mb-0.5 font-heading text-[14px] font-semibold text-white/85">
                    {office.city}, {office.region}
                  </p>
                  <p className="text-[13px] text-white/45">{office.country}</p>
                </div>
              ))}
              <a
                href={`mailto:${SITE.email}`}
                className="text-[13px] text-[var(--sky)] transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-6">
          <p className="text-[12px] text-white/30">
            &copy; 2025 CentricaSoft LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] text-white/30 transition-colors hover:text-white/60"
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
