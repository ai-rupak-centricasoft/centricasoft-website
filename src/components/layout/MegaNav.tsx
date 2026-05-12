"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Bot, Brain, Database, MessageSquareText, Smartphone } from "lucide-react";

type Panel = "what-we-do" | "products" | "company";

const panel: Record<Panel, React.ReactNode> = {
  "what-we-do": <WhatWeDoPanel />,
  products: <ProductsPanel />,
  company: <CompanyPanel />,
};

const WHAT_WE_DO_SERVICES = [
  {
    to: "/what-we-do/agentic-ai",
    icon: <Bot className="h-4 w-4" />,
    title: "Agentic AI & Autonomous Agents",
  },
  {
    to: "/what-we-do/genai-chatbots",
    icon: <MessageSquareText className="h-4 w-4" />,
    title: "Generative AI Chatbots",
  },
  {
    to: "/what-we-do/data-engineering",
    icon: <Database className="h-4 w-4" />,
    title: "Data Engineering & Pipelines",
  },
  {
    to: "/what-we-do/data-analytics",
    icon: <BarChart3 className="h-4 w-4" />,
    title: "Data Analytics & Insights",
  },
  {
    to: "/what-we-do/data-analytics",
    icon: <Brain className="h-4 w-4" />,
    title: "Machine Learning & Advanced Analytics",
  },
  {
    to: "/contact",
    icon: <Smartphone className="h-4 w-4" />,
    title: "App Development",
  },
];

const WHAT_WE_DO_INDUSTRIES = [
  "Healthcare",
  "Finance",
  "Logistics",
  "Retail",
  "Enterprise",
  "Energy",
  "Media & Studios",
  "Financial Services",
  "Insurance",
  "Restaurants",
  "Fitness",
  "SaaS",
  "Real Estate",
];

export function MegaNav({ active, onClose }: { active: Panel | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          onMouseLeave={onClose}
          className="absolute left-0 right-0 top-full border-b border-[var(--border)] bg-white shadow-[0_24px_64px_-24px_rgba(0,32,87,0.12)]"
        >
          <div className="container-x py-12">{panel[active]}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function PanelHeader({ title, sub }: { title: string; sub: string }) {
  return (
    <div>
      <h3 className="font-display text-[22px] text-[var(--ink)]">{title}</h3>
      <p className="mt-3 max-w-[200px] text-[14px] leading-[1.7] text-[var(--ink-3)]">{sub}</p>
    </div>
  );
}

function ColLabel({ children }: { children: string }) {
  return <div className="label-mono mb-5">{children}</div>;
}

function NavRow({ to, icon, title }: { to: string; icon: React.ReactNode; title: string }) {
  return (
    <Link
      href={to}
      className="group relative block rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3 transition-all duration-200 hover:border-[var(--sky)] hover:bg-[var(--surface-2)]"
    >
      <span className="absolute left-0 top-3 bottom-3 w-[2px] origin-top scale-y-0 rounded-full bg-[var(--sky-bright)] opacity-0 transition-all duration-200 group-hover:scale-y-100 group-hover:opacity-100" />
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white text-[var(--sky-deep)] transition-colors duration-200 group-hover:border-[var(--sky-bright)] group-hover:text-[var(--navy)]">
          {icon}
        </span>
        <div className="min-w-0 flex-1 pr-1">
          <div className="font-heading text-[14px] font-semibold leading-[1.3] text-[var(--ink)] group-hover:text-[var(--navy)]">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}

function CompanyNavRow({
  to,
  icon,
  title,
  desc,
}: {
  to: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <Link
      href={to}
      className="group block rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-[var(--surface-2)]"
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 text-[14px] text-[var(--sky-deep)]">{icon}</span>
        <div className="min-w-0 flex-1">
          <div className="font-heading text-[14px] font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--navy)]">
            {title}
          </div>
          <div className="mt-1 text-[12.5px] leading-[1.55] text-[var(--ink-3)]">{desc}</div>
        </div>
      </div>
    </Link>
  );
}

function WhatWeDoPanel() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-3">
        <PanelHeader
          title="What We Do"
          sub="AI and data services engineered for enterprise outcomes."
        />
      </div>
      <div className="col-span-6">
        <ColLabel>Services</ColLabel>
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {WHAT_WE_DO_SERVICES.map((service) => (
            <NavRow key={service.title} to={service.to} icon={service.icon} title={service.title} />
          ))}
        </div>
      </div>
      <div className="col-span-3">
        <ColLabel>Industries</ColLabel>
        <ul className="grid grid-cols-2 gap-2 text-[11px] text-[var(--ink-2)]">
          {WHAT_WE_DO_INDUSTRIES.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-2 leading-[1.25] transition-colors hover:border-[var(--sky)] hover:bg-white hover:text-[var(--navy)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProductsPanel() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-4">
        <PanelHeader title="Our Products" sub="Built in-house. Deployed at enterprise scale." />
      </div>
      <div className="col-span-8">
        <ColLabel>Products</ColLabel>
        <Link
          href="/products/nubo"
          className="group relative block overflow-hidden rounded-2xl border-l-[3px] border-transparent bg-[var(--surface-2)] p-6 transition-colors hover:border-[var(--sky-bright)]"
        >
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-brand" />
          <div className="flex items-start justify-between gap-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <span className="font-display text-[20px] text-[var(--navy)]">Nubo</span>
                <span className="label-mono text-[var(--sky-deep)]">Featured</span>
              </div>
              <p className="text-[14px] leading-[1.6] text-[var(--ink-2)]">
                The Enterprise GenAI Brain - production-grade chatbot platform.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["RAG", "Prompt Engineering", "LLM"].map((tag) => (
                  <span
                    key={tag}
                    className="label-mono rounded-md bg-white px-2.5 py-1 text-[10px] text-[var(--sky-deep)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-[13px] font-medium text-[var(--sky-deep)]">
                Explore Nubo →
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function CompanyPanel() {
  return (
    <div className="grid grid-cols-12 gap-10">
      <div className="col-span-3">
        <PanelHeader title="Company" sub="Who we are, who we serve, and how we partner." />
      </div>
      <div className="col-span-5">
        <ColLabel>Company</ColLabel>
        <div className="space-y-2">
          <CompanyNavRow
            to="/company/about"
            icon="○"
            title="About Us"
            desc="Our story, mission, and team."
          />
          <CompanyNavRow
            to="/company/clients"
            icon="◇"
            title="Clients"
            desc="Enterprises who trust CentricaSoft."
          />
          <CompanyNavRow
            to="/company/partners"
            icon="△"
            title="Partners"
            desc="Our technology and delivery ecosystem."
          />
        </div>
      </div>
      <div className="col-span-4">
        <ColLabel>Latest</ColLabel>
        <Link href="/insights" className="group block">
          <div className="label-mono mb-2 text-[var(--sky-deep)]">Insight · Apr 2025</div>
          <div className="font-heading text-[15px] font-semibold leading-snug text-[var(--ink)] group-hover:text-[var(--navy)]">
            Why agentic AI is the new operating layer for enterprise software
          </div>
          <div className="mt-2 text-[12.5px] leading-[1.6] text-[var(--ink-3)]">
            A look at how autonomous agents collapse the gap between intent and action.
          </div>
          <div className="mt-3 text-[12px] text-[var(--sky-deep)]">Read more →</div>
        </Link>
      </div>
    </div>
  );
}
