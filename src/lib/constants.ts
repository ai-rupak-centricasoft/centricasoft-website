export const SITE = {
  name: "CentricaSoft",
  tagline: "Intelligence, Engineered.",
  description:
    "CentricaSoft builds AI Agents, GenAI platforms, and enterprise data infrastructure that scale without limits.",
  email: "contact@centricasoft.com",
  careersEmail: "careers@centricasoft.com",
};

export const NAV_ITEMS = [
  { label: "What We Do", href: "/what-we-do/agentic-ai", mega: "what-we-do" as const },
  { label: "Products", href: "/products/nubo", mega: "products" as const },
  { label: "Company", href: "/company/about", mega: "company" as const },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
];

export const SERVICES = [
  {
    slug: "agentic-ai",
    icon: "🤖",
    title: "Agentic AI & Autonomous Agents",
    short: "AI agents that act, adapt, and deliver.",
    body: "Multi-agent systems with tool use, memory, and reflection loops — engineered for production workflows.",
    tags: ["LangGraph", "AutoGen", "CrewAI"],
  },
  {
    slug: "genai-chatbots",
    icon: "💬",
    title: "Generative AI Chatbots",
    short: "Enterprise chatbots powered by RAG & LLMs.",
    body: "Precision prompt engineering, retrieval-augmented generation, and seamless enterprise integration.",
    tags: ["RAG", "Prompt Eng", "LLM Ops"],
  },
  {
    slug: "data-engineering",
    icon: "🔧",
    title: "Data Engineering & Pipelines",
    short: "Cloud-native pipelines at petabyte scale.",
    body: "Streaming ingestion, lakehouse architectures, and orchestration that handle 10TB+ daily without flinching.",
    tags: ["Spark", "Databricks", "Snowflake"],
  },
  {
    slug: "data-analytics",
    icon: "📊",
    title: "Data Analytics & Insights",
    short: "Turn raw data into decisions.",
    body: "Self-serve analytics, executive dashboards, and predictive models that move metrics that matter.",
    tags: ["dbt", "Looker", "Power BI"],
  },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Expert Consultants" },
  { value: 3, suffix: "", label: "Global Offices" },
];

export const OFFICE_LOCATIONS = [
  {
    city: "Los Angeles",
    region: "California",
    country: "United States",
    note: "North America hub",
  },
  {
    city: "Bengaluru",
    region: "Karnataka",
    country: "India",
    note: "Engineering hub",
  },
  {
    city: "Kolkata",
    region: "West Bengal",
    country: "India",
    note: "Operations hub",
  },
] as const;

export const CASE_STUDIES = [
  {
    tag: "Healthcare · Agentic AI",
    counter: "01",
    title: "Autonomous triage agent for a 12-hospital network",
    body: "We deployed a clinical agent system that routes patient queries, drafts responses, and escalates edge cases — reducing nurse workload by 38% in the first quarter.",
    author: "Samad Nalagadda",
    date: "Q2 2025",
  },
  {
    tag: "Finance · GenAI Platform",
    counter: "02",
    title: "Nubo for a top-10 US asset manager",
    body: "A RAG-powered research assistant grounded in 12 years of internal filings, cutting analyst lookup time from hours to seconds with full source citations.",
    author: "Amit Basu",
    date: "Q1 2025",
  },
  {
    tag: "Logistics · Data Engineering",
    counter: "03",
    title: "Petabyte ingestion for a global 3PL",
    body: "Re-architected a legacy batch system into a streaming lakehouse on Databricks — 14× faster pipelines and a 62% cut in cloud spend.",
    author: "Shampa Ghosh",
    date: "Q4 2025",
  },
];

export const TECH_STACK = [
  "Snowflake",
  "Databricks",
  "AWS",
  "GCP",
  "Azure",
  "LangChain",
  "OpenAI",
  "Anthropic",
  "Apache Spark",
  "dbt",
  "Pinecone",
  "Kafka",
];

export const MARQUEE_ITEMS = [
  "GenAI Agents",
  "Nubo Platform",
  "Data Engineering",
  "Prompt Engineering",
  "RAG",
  "Databricks",
  "Snowflake",
  "AWS",
  "Petabyte Scale",
  "Autonomous AI",
  "Enterprise Intelligence",
];
