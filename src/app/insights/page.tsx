"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock, Search } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

const CATEGORIES = [
  "All",
  "Agentic AI",
  "GenAI",
  "Data Engineering",
  "Analytics",
  "Field Notes",
] as const;

const FEATURED = {
  category: "Agentic AI",
  title: "Why most enterprise agents fail in week 3 — and the architecture that doesn't.",
  excerpt:
    "After deploying autonomous agents across 14 enterprise environments, a pattern emerged. Here's the orchestration model that survived contact with production.",
  author: "Arjun Mehta",
  role: "Principal AI Engineer",
  date: "Apr 12, 2026",
  readTime: "11 min read",
};

const POSTS = [
  {
    category: "GenAI",
    title: "RAG isn't retrieval. It's negotiation between four systems.",
    excerpt:
      "A breakdown of the retrieval, ranking, rewriting, and routing layers that separate toy demos from production chatbots.",
    author: "Priya Iyer",
    date: "Apr 8, 2026",
    readTime: "7 min",
  },
  {
    category: "Data Engineering",
    title: "Petabyte migration without downtime: a 9-month playbook.",
    excerpt:
      "How we moved a top-5 US bank from on-prem Teradata to Snowflake with zero customer-facing incidents.",
    author: "Marcus Chen",
    date: "Apr 3, 2026",
    readTime: "14 min",
  },
  {
    category: "Analytics",
    title: "The semantic layer is your real product.",
    excerpt:
      "Dashboards die. Metrics live. Why metric stores like Cube and dbt Semantic Layer are the new center of gravity.",
    author: "Sasha Rao",
    date: "Mar 28, 2026",
    readTime: "9 min",
  },
  {
    category: "Agentic AI",
    title: "Tool-calling at scale: lessons from 2.4M autonomous decisions.",
    excerpt:
      "What we learned building tool registries, permission gating, and rollback flows for production agent fleets.",
    author: "Daniel Park",
    date: "Mar 21, 2026",
    readTime: "12 min",
  },
  {
    category: "Field Notes",
    title: "Hiring for AI engineering in 2026: the four signals that matter.",
    excerpt:
      "Why we stopped asking LeetCode and started asking candidates to debug a hallucinating agent live.",
    author: "Reena Kapoor",
    date: "Mar 14, 2026",
    readTime: "6 min",
  },
  {
    category: "GenAI",
    title: "Prompt versioning is the new schema migration.",
    excerpt:
      "Treat prompts like code: branches, tests, rollbacks, eval suites. Anything less is technical debt that compounds weekly.",
    author: "Arjun Mehta",
    date: "Mar 7, 2026",
    readTime: "8 min",
  },
];

export default function InsightsPage() {
  const [active, setActive] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return POSTS.filter((p) => {
      const catOk = active === "All" || p.category === active;
      const q = query.trim().toLowerCase();
      const qOk = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [active, query]);

  return (
    <>
      <PageHero
        pill="04 · Latest Articles"
        title="Insights"
        variant="immersive"
        tone="photo"
        size="compact"
        asideLabel="Insights from the field"
        meta={["Agentic AI", "Data systems", "Case studies"]}
        backgroundImage="https://images.pexels.com/photos/6285258/pexels-photo-6285258.jpeg?cs=srgb&dl=pexels-gustavo-fring-6285258.jpg&fm=jpg"
        subtitle="The latest news, updates and stories brought to you by Centricasoft. Insights from our engineers, data scientists, and product builders on everything from agentic AI to data infrastructure to enterprise case studies."
      />

      {/* Featured */}
      <section className="pt-14 pb-20 md:pt-20">
        <div className="container-x">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white"
          >
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0">
              <div
                className="relative min-h-[320px] lg:min-h-[440px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--navy-deep) 0%, var(--navy) 50%, var(--sky-deep) 100%)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, rgba(30,191,255,0.4), transparent 50%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.1), transparent 50%)",
                  }}
                />
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="label-mono !text-[10px] !text-[var(--sky-bright)]">
                    Featured · {FEATURED.category}
                  </span>
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <h2 className="font-display text-[clamp(28px,3.6vw,42px)] leading-[1.1] text-[var(--ink)]">
                  {FEATURED.title}
                </h2>
                <p className="mt-5 text-[16px] text-[var(--ink-2)] leading-[1.65]">
                  {FEATURED.excerpt}
                </p>
                <div className="mt-8 flex items-center gap-4 text-[13px] text-[var(--ink-3)]">
                  <span className="font-medium text-[var(--ink-2)]">{FEATURED.author}</span>
                  <span>·</span>
                  <span>{FEATURED.date}</span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {FEATURED.readTime}
                  </span>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-[14px] font-medium text-[var(--sky-deep)] group-hover:gap-3 transition-all">
                  Read the essay <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Filter bar */}
      <section className="pb-12">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-4 py-2 rounded-full text-[13px] font-medium border transition-all ${
                    active === c
                      ? "bg-[var(--navy)] text-white border-[var(--navy)]"
                      : "bg-white text-[var(--ink-2)] border-[var(--border)] hover:border-[var(--sky-deep)] hover:text-[var(--ink)]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative lg:w-[320px]">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--ink-3)]" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value.slice(0, 100))}
                placeholder="Search insights…"
                className="w-full pl-11 pr-4 py-2.5 rounded-full border border-[var(--border)] bg-white text-[14px] text-[var(--ink)] placeholder:text-[var(--ink-3)] focus:outline-none focus:border-[var(--sky-deep)] focus:ring-2 focus:ring-[var(--sky-bright)]/20 transition"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Card grid */}
      <section className="pb-32">
        <div className="container-x">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center"
              >
                <p className="text-[16px] text-[var(--ink-2)]">
                  No essays match your filters yet. Try a different angle.
                </p>
              </motion.div>
            ) : (
              <motion.div key="grid" layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post, i) => (
                  <motion.article
                    key={post.title}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-white p-7 hover:border-[var(--sky-deep)] hover:shadow-[0_20px_40px_-20px_rgba(0,32,87,0.15)] transition-all cursor-pointer"
                  >
                    <span className="label-mono !text-[10px] !text-[var(--sky-deep)]">
                      {post.category}
                    </span>
                    <h3 className="mt-4 font-display text-[22px] leading-[1.25] text-[var(--ink)] group-hover:text-[var(--navy)]">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-[14px] text-[var(--ink-2)] leading-[1.6] flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 pt-5 border-t border-[var(--border)] flex items-center justify-between text-[12px] text-[var(--ink-3)]">
                      <span className="font-medium text-[var(--ink-2)]">{post.author}</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
