"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, ChevronDown, Globe2, MapPin, ThumbsUp } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ROLES = [
  {
    team: "AI Engineering",
    title: "AI/ML Engineer",
    location: "Dallas, TX / Bangalore, IN",
    type: "Full-time",
    summary:
      "Join our AI engineering team to design and deploy production-grade machine learning systems and LLM-powered applications. You will work at the intersection of research and deployment, building systems that serve real enterprise clients at scale.",
    requirements: [
      "4+ years in ML/AI engineering.",
      "Experience with LLMs, RAG systems, and vector databases.",
      "Python, PyTorch, or TensorFlow proficiency.",
      "Production deployment experience with Docker and Kubernetes.",
    ],
  },
  {
    team: "Data Platform",
    title: "Senior Data Engineer",
    location: "Remote / US/India",
    type: "Full-time",
    summary:
      "Help architect the pipelines and storage systems behind large-scale enterprise data programs. This role is focused on reliability, cloud migration, and building foundations that analytics and AI teams can trust.",
    requirements: [
      "5+ years building data pipelines and modern warehouse or lakehouse systems.",
      "Strong SQL and Python, plus hands-on cloud data tooling experience.",
      "Experience with orchestration, transformation, and scalable ingestion workflows.",
      "Comfort optimizing for both performance and long-term maintainability.",
    ],
  },
  {
    team: "Applied AI",
    title: "GenAI Researcher",
    location: "Bangalore, India",
    type: "Full-time",
    summary:
      "Work on prompt systems, evaluation frameworks, and experimental workflows that improve the intelligence layer behind our products and client solutions. This role blends research curiosity with applied product impact.",
    requirements: [
      "Strong foundation in applied machine learning, NLP, or LLM systems.",
      "Experience designing experiments and evaluating model or prompt behavior.",
      "Ability to turn research findings into practical product improvements.",
      "Python proficiency and comfort collaborating with engineering teams.",
    ],
  },
  {
    team: "Frontend Engineering",
    title: "Frontend Developer (Next.js)",
    location: "Remote / US/India",
    type: "Full-time",
    summary:
      "Build polished, fast, and scalable frontend experiences for our website, internal tools, and AI products. We are looking for someone who can pair strong UI craft with solid engineering discipline in a modern React stack.",
    requirements: [
      "Strong experience with React, Next.js, and modern frontend architecture.",
      "Good understanding of responsive design, accessibility, and performance.",
      "Comfort translating product and design ideas into production UI.",
      "Experience working with APIs and collaborative product teams.",
    ],
  },
  {
    team: "Solutions",
    title: "Solutions Architect",
    location: "Dallas, TX",
    type: "Full-time",
    summary:
      "Bridge client goals and technical execution by shaping scalable architectures for AI, data, and cloud initiatives. This role is client-facing and requires strong communication, technical judgment, and solution framing ability.",
    requirements: [
      "Experience in solution design, consulting, or enterprise architecture.",
      "Ability to translate business needs into technical approaches and rollout plans.",
      "Strong communication with both executives and implementation teams.",
      "Exposure to cloud, data, or AI delivery programs.",
    ],
  },
  {
    team: "Analytics",
    title: "Data Analyst",
    location: "Bangalore, India / Remote",
    type: "Full-time",
    summary:
      "Turn raw operational and product data into clear reporting, insight generation, and decision support. This role is for someone who enjoys making data understandable and useful across business and delivery teams.",
    requirements: [
      "Strong SQL and spreadsheet or BI tool experience.",
      "Ability to create clean reports, dashboards, and ad hoc analyses.",
      "Comfort working with stakeholders to clarify questions and metrics.",
      "Attention to detail and a bias toward accuracy and clarity.",
    ],
  },
] as const;

const CULTURE_BENTO_COLUMNS = [
  {
    layout: "tall",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    layout: "stacked",
    images: [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    layout: "tall",
    images: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    layout: "tall",
    images: [
      "https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    layout: "tall",
    images: [
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    layout: "stacked",
    images: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    ],
  },
] as const;

export default function CareersPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        pill="05 · Careers"
        title="Build systems that matter."
        variant="immersive"
        tone="photo"
        size="compact"
        asideLabel="Careers at CentricaSoft"
        meta={["AI + data delivery", "Enterprise impact"]}
        backgroundImage="https://images.pexels.com/photos/6913217/pexels-photo-6913217.jpeg?cs=srgb&dl=pexels-tima-miroshnichenko-6913217.jpg&fm=jpg"
        subtitle="Join a team working across AI, data, and product engineering for enterprise clients that expect depth, reliability, and real outcomes."
      >
        <div className="flex flex-wrap gap-3">
          <Link
            href="#open-roles"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[var(--navy)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            View open roles <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/82 transition-colors duration-200 hover:bg-white/[0.08] hover:text-white"
          >
            Start a conversation
          </Link>
        </div>
      </PageHero>

      <section className="bg-[#f3f7fb] py-32 pb-32">
        <div className="container-x">
          <div className="relative mb-16 overflow-hidden border border-[#dbe7f1] bg-white px-6 py-8 md:px-10 md:py-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(60% 90% at 0% 100%, rgba(30,191,255,0.08), transparent 68%), radial-gradient(52% 80% at 100% 0%, rgba(30,191,255,0.06), transparent 68%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#cfddeb] bg-[#eef5fb] px-4 py-2">
                  <ThumbsUp className="h-4 w-4 text-[var(--navy)]" />
                  <span className="label-mono !text-[10px] !text-[var(--navy)]">Work with us</span>
                </div>
                <div className="h-px flex-1 bg-[#9fb9d3]" />
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(280px,0.7fr)] lg:items-start">
                <h2 className="max-w-[700px] font-display text-[clamp(36px,5vw,58px)] leading-[0.98] text-[var(--navy)]">
                  We're hiring.
                  <br />
                  Come join our team!
                </h2>

                <p className="max-w-[620px] text-[18px] leading-[1.65] text-[#667085]">
                  Grow your career and take on meaningful challenges across AI, data, product, and
                  cloud engineering. We build for real enterprise outcomes and we want people who
                  care deeply about craft, ownership, and long-term impact.
                </p>
              </div>
            </div>
          </div>

          <div
            id="open-roles"
            className="mb-10 scroll-mt-32 flex items-center justify-between gap-6 border-b border-[#cfe0ee] pb-8"
          >
            <span className="label-mono !text-[var(--sky-deep)]">02 / Open roles</span>
            <span className="label-mono !text-[var(--sky-deep)]">
              {ROLES.length} open positions
            </span>
          </div>

          <div className=" border-[#cfe0ee]">
            {ROLES.map((role, i) => {
              const isOpen = open === i;

              return (
                <div key={role.title} className="border-b border-[#d9e6f1]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full px-0 py-10 text-left"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0 flex-1 pr-3">
                        <h3 className="font-heading text-[26px] font-semibold leading-[1.2] text-[var(--navy)] md:text-[30px]">
                          {role.title}
                        </h3>
                      </div>

                      <div className="hidden shrink-0 items-center gap-4 md:flex">
                        <span className="inline-flex items-center gap-2 text-[13px] text-[#5d86aa]">
                          <MapPin className="h-3.5 w-3.5" /> {role.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3fd] px-4 py-2 text-[13px] text-[#0b6fb8]">
                          <Briefcase className="h-3.5 w-3.5" /> {role.type}
                        </span>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-1 shrink-0 text-[#6f93b3]"
                      >
                        <ChevronDown className="h-5 w-5" />
                      </motion.div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-[13px] text-[#5d86aa] md:hidden">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e8f3fd] px-3 py-1 text-[#0b6fb8]">
                        <Briefcase className="h-3.5 w-3.5" /> {role.type}
                      </span>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-10">
                          <div className="max-w-[1240px]">
                            <p className="max-w-[1260px] pr-0 text-[18px] leading-[1.75] text-[var(--navy)] md:pr-10">
                              {role.summary}
                            </p>

                            <div className="mt-10">
                              <div className="font-mono text-[15px] font-weight-900 font-bold uppercase tracking-[0.14em] text-[var(--navy)]">
                                Requirements
                              </div>
                              <ul className="mt-6 space-y-4">
                                {role.requirements.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-4 text-[17px] leading-[1.65] text-[var(--navy)]"
                                  >
                                    <span className="mt-[11px] h-2.5 w-2.5 rounded-full bg-[#1183c7]" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="mt-10">
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand-h px-7 py-3.5 text-[16px] font-semibold text-white shadow-[0_18px_40px_-24px_rgba(0,32,87,0.45)] transition-all hover:gap-3"
                              >
                                Apply Now <ArrowRight className="h-5 w-5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="mt-20 overflow-hidden bg-white">
            <div className="relative overflow-hidden border border-[#d9e6f1] px-6 py-8 md:px-10 md:py-10">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(60% 90% at 0% 100%, rgba(30,191,255,0.08), transparent 68%), radial-gradient(52% 80% at 100% 0%, rgba(30,191,255,0.06), transparent 68%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#cfddeb] bg-[#eef5fb] px-4 py-2">
                    <Globe2 className="h-4 w-4 text-[var(--navy)]" />
                    <span className="label-mono !text-[10px] !text-[var(--navy)]">
                      Join our team
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-[#c9dceb]" />
                </div>

                <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.72fr)] lg:items-start">
                  <h2 className="max-w-[760px] font-display text-[clamp(34px,4.8vw,58px)] leading-[0.98] text-[var(--navy)]">
                    Life at CentricaSoft
                  </h2>
                  <p className="max-w-[620px] text-[17px] leading-[1.7] text-[#667085]">
                    Get a glimpse into CentricaSoft&apos;s vibrant culture, where collaboration,
                    creativity, and shared momentum drive the way we work together.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden border-x border-b border-[#d9e6f1] bg-white py-4">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 32, ease: "linear", repeat: Infinity }}
                className="flex w-max gap-4 px-4 md:px-6"
              >
                {[...CULTURE_BENTO_COLUMNS, ...CULTURE_BENTO_COLUMNS].map((column, columnIndex) => (
                  <div
                    key={`${column.layout}-${columnIndex}`}
                    className="flex w-[260px] shrink-0 flex-col gap-4 md:w-[320px] lg:w-[360px]"
                  >
                    {column.layout === "tall" ? (
                      <div className="relative h-[320px] overflow-hidden md:h-[390px]">
                        <div
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${column.images[0]})` }}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="relative h-[152px] overflow-hidden md:h-[186px]">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${column.images[0]})` }}
                          />
                        </div>
                        <div className="relative h-[152px] overflow-hidden md:h-[186px]">
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${column.images[1]})` }}
                          />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mb-6 text-[15px] text-[var(--ink-2)]">
              Do not see your role? We always want to talk to exceptional people.
            </p>
            <MagneticButton to="/contact">
              Introduce yourself <ArrowRight className="ml-2 h-4 w-4" />
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
