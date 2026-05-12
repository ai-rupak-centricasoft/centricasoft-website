"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  Linkedin,
  Lightbulb,
  Medal,
  Quote,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { CTAStrip } from "@/components/sections/CTAStrip";
import { ScrollCounter } from "@/components/ui/ScrollCounter";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionAccentPattern } from "@/components/ui/SectionAccentPattern";

const ABOUT_COLUMNS = [
  {
    label: "Who We Are",
    body: [
      "CentricaSoft is an AI, data, and cloud engineering company built to move ideas out of presentation decks and into production environments.",
      "Our teams combine consulting depth with delivery ownership, helping clients modernize systems, operationalize intelligence, and build with confidence.",
    ],
  },
  {
    label: "What We Do",
    body: [
      "We design and ship AI agents, data platforms, analytics systems, and cloud foundations tailored to real business workflows.",
      "From strategy and architecture to implementation and ongoing delivery, we stay close to measurable outcomes and long-term client value.",
    ],
  },
] as const;

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We stay curious, experiment deliberately, and keep translating new technology into systems that create practical value.",
  },
  {
    icon: Medal,
    title: "Excellence",
    body: "We care deeply about craft, quality, and consistency, from architecture choices to delivery details and client experience.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "We build trust through honest communication, accountable delivery, and a commitment to doing the right thing when stakes are high.",
  },
] as const;

const OFFICES = [
  {
    country: "United States",
    city: "Los Angeles",
    timezone: "PST / UTC-8",
    note: "North America hub",
    flagImage: "https://flagcdn.com/w640/us.png",
    team: "Strategy, client success, and solutions architecture",
    capabilities: [
      "Executive discovery",
      "AI roadmaps",
      "Architecture reviews",
      "Client leadership",
    ],
  },
  {
    country: "India",
    city: "Bengaluru",
    timezone: "IST / UTC+5:30",
    note: "Engineering hub",
    flagImage: "https://flagcdn.com/w640/in.png",
    team: "Platform engineering and AI delivery",
    capabilities: [
      "Data platforms",
      "Agent orchestration",
      "Cloud engineering",
      "Product buildout",
    ],
  },
  {
    country: "India",
    city: "Kolkata",
    timezone: "IST / UTC+5:30",
    note: "Operations hub",
    flagImage: "https://flagcdn.com/w640/in.png",
    team: "Analytics, QA, and delivery operations",
    capabilities: [
      "Quality assurance",
      "Analytics support",
      "Delivery management",
      "Client operations",
    ],
  },
] as const;

const TEAM_MEMBERS = [
  {
    name: "Chiranjib Ghosh",
    role: "CEO",
    ownership: "Vision and growth",
    body: "Owns company direction, growth strategy, and the long-range priorities behind delivery and partnerships.",
    image: "/team/Chiranjib.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Amit Basu",
    role: "Co-Founder",
    ownership: "Product and innovation",
    body: "Guides innovation, product thinking, and how new technical ideas turn into repeatable client value.",
    image: "/team/Amit.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shampa Ghosh",
    role: "Director",
    ownership: "Delivery governance",
    body: "Keeps programs aligned across stakeholders, milestones, and execution quality from kickoff to rollout.",
    image: "/team/Shampa.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Samad Nalagadda",
    role: "Delivery Partner",
    ownership: "Client outcomes",
    body: "Owns business alignment, executive communication, and measurable value after systems go live.",
    image: "/team/Samad.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sonali Jana",
    role: "Team Lead",
    ownership: "Engineering execution",
    body: "Guides squads through design, implementation, and review cycles while protecting engineering rigor.",
    image: "/team/Sonali.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Indranil Basu",
    role: "AI Lead",
    ownership: "Applied intelligence",
    body: "Shapes agent design, model evaluation, and AI system quality so experiments mature into reliable production capability.",
    image: "/team/Indranil.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
] as const;

const TEAM_STATS = [
  { value: 50, suffix: "+", label: "Consultants" },
  { value: 9, suffix: " yr", label: "Avg tenure" },
  { value: 12, suffix: "", label: "PhDs on team" },
  { value: 6, suffix: "", label: "Languages spoken" },
] as const;

const [FEATURED_MEMBER, ...LEADERSHIP_TEAM] = TEAM_MEMBERS;

const FOUNDER_NOTE = {
  eyebrow: "Word from our founder",
  quote:
    "We build long-term partnerships by turning AI, data, and cloud ambition into dependable systems teams can trust every day.",
} as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        pill="01 / Company"
        title="About Us"
        subtitle="CentricaSoft helps organizations turn AI, data, and cloud initiatives into reliable operating systems, not slideware."
        variant="immersive"
        tone="company"
        size="compact"
        asideLabel="About CentricaSoft"
        meta={["AI + data engineering", "US + India delivery", "Production-first mindset"]}
        backgroundImage="https://images.pexels.com/photos/36765725/pexels-photo-36765725.jpeg?cs=srgb&dl=pexels-silverkblack-36765725.jpg&fm=jpg"
      />

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-18 md:py-20">
        <SectionAccentPattern variant="top-left" />
        <div className="container-x relative z-10">
          <SectionLabel number="01">Who We Are</SectionLabel>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 overflow-hidden rounded-[28px] border border-[var(--border)] bg-white shadow-[0_24px_60px_-38px_rgba(0,18,52,0.16)]"
          >
            <div className="grid gap-px bg-[var(--border)] lg:grid-cols-2">
              {ABOUT_COLUMNS.map((column, index) => (
                <div key={column.label} className="bg-white p-7 md:p-9">
                  <div className="flex items-center gap-4">
                    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1.5">
                      {index === 0 ? (
                        <Globe2 className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                      ) : (
                        <BriefcaseBusiness className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                      )}
                      <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                        {column.label}
                      </span>
                    </div>
                    <div className="h-px flex-1 bg-[var(--border)]" />
                  </div>

                  <div className="mt-6 space-y-5 text-[16px] leading-[1.8] text-[var(--ink-2)]">
                    {column.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-px bg-[var(--border)] md:grid-cols-3">
              {[
                { value: 35, suffix: "+", label: "Global clientele" },
                { value: 446, suffix: "+", label: "Associates" },
                { value: 99, suffix: "+", label: "Integrations" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white p-6 md:p-7"
                >
                  <div className="h-1 w-14 rounded-full bg-gradient-brand-h" />
                  <div className="mt-5 font-display text-[clamp(34px,4vw,46px)] leading-none text-[var(--ink)]">
                    <ScrollCounter value={item.value} suffix={item.suffix} />
                  </div>
                  <div className="mt-3 text-[13px] text-[var(--ink-2)]">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--navy)] py-20 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(30,191,255,0.24), transparent 24%), radial-gradient(circle at 84% 76%, rgba(109,76,255,0.18), transparent 24%), url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='520' height='520' viewBox='0 0 520 520'><g fill='none' stroke='%232980ff' stroke-width='2' stroke-linecap='round' opacity='0.7'><path d='M14 84 C108 22,202 18,284 72 S432 180,534 116' stroke-dasharray='8 18'/><path d='M-8 190 C80 132,176 126,262 184 S420 288,520 218' stroke-dasharray='8 18'/><path d='M18 304 C112 244,214 246,300 302 S456 406,550 344' stroke-dasharray='8 18'/><path d='M48 422 C138 366,238 372,320 430 S458 522,548 472' stroke-dasharray='8 18'/><path d='M412 60 l12 8'/><path d='M336 132 l12 8'/><path d='M238 242 l12 8'/><path d='M434 314 l12 8'/><path d='M278 446 l12 8'/></g></svg>\")",
            backgroundSize: "auto, auto, 540px 540px",
            backgroundPosition: "0 0, 0 0, center",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,18,52,0.18) 0%, rgba(0,18,52,0.42) 100%)",
          }}
        />

        <div className="container-x relative z-10">
          <div className="inline-flex items-center gap-3 label-mono text-white/72">
            <span className="text-[var(--sky-bright)]">02</span>
            <span>Values</span>
          </div>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(280px,0.42fr)] lg:items-end">
            <h2 className="max-w-[760px] font-display text-[clamp(36px,5vw,56px)] leading-[1.02] text-white">
              We live by values that keep delivery sharp and relationships durable.
            </h2>
            <p className="max-w-[360px] text-[15px] leading-[1.8] text-white/70">
              Innovation, excellence, and integrity are not wall language here. They shape how we
              architect, communicate, and deliver under pressure.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {VALUES.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/7 p-8 backdrop-blur-[14px] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/18 hover:bg-white/10 hover:shadow-[0_24px_80px_-30px_rgba(0,0,0,0.45)]"
                >
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-70"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                    }}
                  />
                  <div className="absolute right-6 top-5 font-mono text-[11px] text-white/30">
                    0{index + 1}
                  </div>
                  <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand-h text-white shadow-[0_12px_32px_-14px_rgba(30,191,255,0.75)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="relative mt-6 font-heading text-[22px] font-bold text-white">
                    {value.title}
                  </h3>
                  <div className="relative mt-5 h-px bg-white/14" />
                  <p className="relative mt-5 text-[15px] leading-[1.8] text-white/72">
                    {value.body}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-10 rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,rgba(46,112,255,0.95),rgba(65,106,255,0.82))] px-8 py-7 text-center shadow-[0_26px_80px_-34px_rgba(30,96,255,0.65)] md:px-12 md:py-9"
          >
            <p className="mx-auto max-w-[980px] text-[clamp(20px,2.2vw,32px)] font-semibold leading-[1.25] text-white">
              We build for trust, move with urgency, and stay accountable for the outcomes long
              after launch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[var(--surface-2)] py-20 md:py-24">
        <SectionAccentPattern variant="split-right" />
        <div className="container-x relative z-10">
          <SectionLabel number="03">Global Presence</SectionLabel>
          <h2 className="mt-6 max-w-[760px] font-display text-[clamp(36px,5vw,56px)] leading-[1.05] text-[var(--ink)]">
            Three offices. <span className="text-gradient-brand">One delivery rhythm.</span>
          </h2>
          <p className="mt-6 max-w-[680px] text-[16px] leading-[1.7] text-[var(--ink-2)]">
            Our follow-the-sun model now runs across Los Angeles, Bengaluru, and Kolkata so
            strategy, engineering, and delivery operations can move in a continuous loop.
          </p>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {OFFICES.map((office, index) => (
              <motion.div
                key={`${office.country}-${office.city}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="relative overflow-hidden border border-[var(--border)] bg-white shadow-[0_22px_60px_-36px_rgba(0,32,87,0.16)]"
              >
                <div className="relative h-40 overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${office.flagImage})` }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(0,18,52,0.18) 0%, rgba(0,18,52,0.18) 28%, rgba(0,18,52,0.82) 100%)",
                    }}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-25"
                    style={{
                      background:
                        "repeating-linear-gradient(120deg, rgba(255,255,255,0.22) 0 2px, transparent 2px 18px)",
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                      <Building2 className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
                      <span className="label-mono !text-[10px] !text-white/78">{office.note}</span>
                    </div>
                    <h3 className="mt-4 font-display text-[clamp(24px,3vw,32px)] text-white">
                      {office.city}
                    </h3>
                    <div className="mt-1 text-[14px] text-white/72">{office.country}</div>
                  </div>
                </div>

                <div className="relative p-6">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3 py-1.5">
                    <Building2 className="h-3.5 w-3.5 text-[var(--sky-deep)]" />
                    <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                      Office details
                    </span>
                  </div>

                  <div className="mt-6 grid gap-5 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                    <div>
                      <div className="flex items-center gap-2 text-[var(--ink-3)]">
                        <Clock3 className="h-4 w-4" />
                        <span className="label-mono">Timezone</span>
                      </div>
                      <div className="mt-2 text-[14px] font-medium text-[var(--ink)]">
                        {office.timezone}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-[var(--ink-3)]">
                        <BriefcaseBusiness className="h-4 w-4" />
                        <span className="label-mono">Team focus</span>
                      </div>
                      <div className="mt-2 text-[14px] font-medium text-[var(--ink)]">
                        {office.team}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="label-mono mb-3">Capabilities</div>
                    <div className="flex flex-wrap gap-2">
                      {office.capabilities.map((capability) => (
                        <span
                          key={capability}
                          className="rounded-md bg-[var(--surface-2)] px-3 py-1.5 text-[12px] text-[var(--ink-2)]"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#09153b] py-20 text-white md:py-24">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 12% 18%, rgba(50,94,255,0.18), transparent 18%), radial-gradient(circle at 84% 82%, rgba(30,191,255,0.12), transparent 20%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-72 opacity-25"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 0 0, transparent 0 24px, rgba(72,105,205,0.32) 24px 26px, transparent 26px 48px)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-y-0 right-0 w-72 opacity-20"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 100% 100%, transparent 0 24px, rgba(72,105,205,0.32) 24px 26px, transparent 26px 48px)",
          }}
        />
        <div className="container-x relative z-10">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/74">
            <Quote className="h-3.5 w-3.5 text-[var(--sky-bright)]" />
            <span>{FOUNDER_NOTE.eyebrow}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.65 }}
            className="mt-10 overflow-hidden rounded-[28px] border border-white/12 bg-white/8 backdrop-blur-sm"
          >
            <div className="grid gap-8 p-6 md:grid-cols-[220px_minmax(0,1fr)] md:p-8 lg:grid-cols-[260px_minmax(0,1fr)] lg:p-10">
              <div className="relative mx-auto h-[280px] w-full max-w-[240px] overflow-hidden rounded-[24px] border border-white/10 bg-[#12214f] md:mx-0 lg:h-[320px] lg:max-w-[260px]">
                <Image
                  src={FEATURED_MEMBER.image}
                  alt={FEATURED_MEMBER.name}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 768px) 220px, 240px"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-24"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(9,21,59,0) 0%, rgba(9,21,59,0.92) 100%)",
                  }}
                />
              </div>

              <div className="flex flex-col justify-center">
                <div className="max-w-4xl text-[clamp(28px,3.6vw,52px)] font-semibold leading-[1.18] text-white">
                  &ldquo;{FOUNDER_NOTE.quote}&rdquo;
                </div>
                <div className="mt-8 h-px w-full max-w-[160px] bg-white/14" />
                <div className="mt-6">
                  <div className="font-display text-[clamp(28px,4vw,44px)] italic leading-none text-white">
                    {FEATURED_MEMBER.name}
                  </div>
                  <div className="mt-3 text-[14px] uppercase tracking-[0.18em] text-white/62">
                    {FEATURED_MEMBER.role}
                  </div>
                  <p className="mt-4 max-w-2xl text-[15px] leading-[1.8] text-white/74">
                    {FEATURED_MEMBER.body}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="mt-18 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[clamp(42px,6vw,64px)] font-display leading-none text-white">
                Our Team
              </div>
              <p className="mt-5 max-w-[560px] text-[15px] leading-[1.8] text-white/68">
                Senior leadership across product, delivery, engineering, and applied AI.
              </p>
            </div>
            <div className="text-[13px] uppercase tracking-[0.18em] text-white/48">
              Leadership & Team
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {LEADERSHIP_TEAM.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group flex h-full flex-col rounded-[22px] border border-white/12 bg-[linear-gradient(180deg,rgba(247,249,252,0.98),rgba(231,236,244,0.96))] p-4 text-[var(--ink)] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_22px_46px_-26px_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-start gap-4">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[14px] border border-black/8 bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-[24px] font-semibold leading-[1.15] text-[var(--navy)]">
                          {member.name}
                        </h3>
                        <div className="mt-1 text-[15px] font-medium text-[var(--ink-2)]">
                          {member.role}
                        </div>
                        <div className="mt-2 text-[11px] uppercase tracking-[0.16em] text-[var(--sky-deep)]">
                          {member.ownership}
                        </div>
                      </div>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${member.name} LinkedIn`}
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--ink-3)] transition-colors hover:text-[var(--sky-deep)]"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>

                <p className="mt-4 border-t border-black/6 pt-4 text-[14px] leading-[1.75] text-[var(--ink-2)]">
                  {member.body}
                </p>
                <div className="mt-auto pt-4 text-[13px] font-medium text-[var(--navy)]">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-[var(--sky-deep)]"
                  >
                    View profile
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[22px] border border-white/12 bg-white/6 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-px md:grid-cols-4">
              {TEAM_STATS.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className="bg-transparent p-8"
                >
                  <div className="font-display text-[clamp(36px,4.5vw,48px)] leading-none text-white">
                    <ScrollCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <div className="mt-3 text-[13px] text-white/62">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <Stats /> */}
      <CTAStrip />
    </>
  );
}
