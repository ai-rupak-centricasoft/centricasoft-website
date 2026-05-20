// Per-service narrative content for /what-we-do/* pages

export type ServiceContent = {
  slug: "agentic-ai" | "genai-chatbots" | "data-engineering" | "data-analytics";
  pill: string;
  title: string;
  highlight: string;
  subtitle: string;
  problemQuote: string;
  problemPoints: string[];
  offerings: { title: string; body: string; tags: string[]; icon: string }[];
  expertiseNarrative: string;
  expertiseGrid: { value: number; suffix: string; label: string }[];
  techStack: { group: string; items: string[] }[];
  approach: { number: string; title: string; body: string }[];
  hld: HLDSpec;
  caseStudy: { tag: string; title: string; outcome: string; client: string };
};

export type HLDNode = {
  id: string;
  label: string;
  sub?: string;
  x: number; // percent of width
  y: number; // percent of height
  w?: number; // width in px
  variant?: "default" | "primary" | "muted";
};

export type HLDEdge = { from: string; to: string };

export type HLDSpec = { nodes: HLDNode[]; edges: HLDEdge[]; height?: number };

export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  "agentic-ai": {
    slug: "agentic-ai",
    pill: "01 · Services · AI",
    title: "Agentic AI & Autonomous Systems",
    highlight: "Autonomous",
    subtitle:
      "AI that doesn't just answer — it acts, adapts, and delivers outcomes. Multi-agent architectures with tool use, memory, and reflection.",
    problemQuote: "Most AI tells you what to do. Ours does it for you.",
    problemPoints: [
      "Manual processes bottleneck intelligent automation at every step.",
      "LLM outputs require constant human intervention and validation.",
      "Enterprise systems remain disconnected from real AI workflows.",
    ],
    offerings: [
      {
        icon: "◆",
        title: "Agent Architecture Design",
        body: "We design multi-agent systems with tool use, memory, and reflection loops tailored to your workflow.",
        tags: ["LangChain", "AutoGen", "CrewAI"],
      },
      {
        icon: "◇",
        title: "Enterprise System Integration",
        body: "Connect agents to CRMs, ERPs, databases, and internal APIs for real action — not just answers.",
        tags: ["REST APIs", "Salesforce", "SAP"],
      },
      {
        icon: "◈",
        title: "Agent Orchestration Frameworks",
        body: "Production-grade orchestration: task decomposition, agent-to-agent communication, fallback logic.",
        tags: ["LangGraph", "Prefect", "Temporal"],
      },
      {
        icon: "◉",
        title: "Monitoring & Observability",
        body: "Full observability into agent decisions, tool calls, latency, and error rates with human-in-the-loop controls.",
        tags: ["LangSmith", "Prometheus", "OpenTelemetry"],
      },
    ],
    expertiseNarrative:
      "CentricaSoft's agentic AI practice spans industries where accuracy and autonomy both matter — healthcare triage, financial research, logistics dispatch, and enterprise knowledge management. We've shipped agent systems handling thousands of decisions per day with full auditability.",
    expertiseGrid: [
      { value: 3, suffix: "+", label: "Years in LLM research" },
      { value: 30, suffix: "+", label: "Agent deployments" },
      { value: 4, suffix: "", label: "Orchestration frameworks" },
      { value: 98, suffix: "%", label: "Task completion accuracy" },
    ],
    techStack: [
      { group: "Models", items: ["GPT-4o", "Claude 3.5", "Mistral", "Llama 3"] },
      { group: "Frameworks", items: ["LangChain", "LangGraph", "AutoGen", "CrewAI"] },
      { group: "Vector DB", items: ["Pinecone", "Weaviate", "ChromaDB"] },
      { group: "Orchestration", items: ["Temporal", "Prefect", "LangSmith"] },
    ],
    approach: [
      {
        number: "01",
        title: "Discovery & Use Case Mapping",
        body: "We map your workflows to identify high-value automation opportunities — starting with quick wins that compound.",
      },
      {
        number: "02",
        title: "Agent Architecture Design",
        body: "We design the agent graph, tools, memory strategy, and orchestration layer before writing a single line of production code.",
      },
      {
        number: "03",
        title: "Build, Test & Guardrail",
        body: "Iterative builds with hallucination guards, cost controls, and output validation engineered in from day one.",
      },
      {
        number: "04",
        title: "Deploy & Monitor",
        body: "Production deployment with full observability, human-in-the-loop controls, and continuous refinement loops.",
      },
    ],
    hld: {
      height: 520,
      nodes: [
        { id: "biz", label: "Business System", sub: "CRM · ERP · Slack", x: 4, y: 38, w: 160 },
        {
          id: "orch",
          label: "Agent Orchestrator",
          sub: "LangGraph",
          x: 28,
          y: 38,
          w: 170,
          variant: "primary",
        },
        { id: "router", label: "Tool Router", sub: "Function calls", x: 53, y: 38, w: 160 },
        { id: "search", label: "Search", x: 78, y: 6, w: 110, variant: "muted" },
        { id: "api", label: "API Call", x: 78, y: 26, w: 110, variant: "muted" },
        { id: "db", label: "DB Query", x: 78, y: 46, w: 110, variant: "muted" },
        { id: "code", label: "Code Exec", x: 78, y: 66, w: 110, variant: "muted" },
        { id: "mem", label: "Memory Store", sub: "Vector DB", x: 53, y: 80, w: 160 },
        {
          id: "out",
          label: "Enterprise Output",
          sub: "Action · Audit",
          x: 4,
          y: 80,
          w: 170,
          variant: "primary",
        },
      ],
      edges: [
        { from: "biz", to: "orch" },
        { from: "orch", to: "router" },
        { from: "router", to: "search" },
        { from: "router", to: "api" },
        { from: "router", to: "db" },
        { from: "router", to: "code" },
        { from: "router", to: "mem" },
        { from: "mem", to: "out" },
      ],
    },
    caseStudy: {
      tag: "Healthcare · Agentic AI",
      title: "Autonomous triage agent for a 12-hospital network",
      outcome: "38% reduction in nurse workload · Q1 2026",
      client: "Top-10 US hospital system",
    },
  },
  "genai-chatbots": {
    slug: "genai-chatbots",
    pill: "01 · Services · GenAI",
    title: "Generative AI Chatbots, Done Right",
    highlight: "Done Right",
    subtitle:
      "Enterprise chatbots that ground every answer in your data. RAG, prompt engineering, and guardrails — production-hardened.",
    problemQuote: "A chatbot that hallucinates is worse than no chatbot at all.",
    problemPoints: [
      "Generic LLMs invent facts and ignore your enterprise context.",
      "Off-the-shelf chatbots leak data and lack auditability.",
      "Most teams ship demos, not production-grade conversational systems.",
    ],
    offerings: [
      {
        icon: "◆",
        title: "RAG Architectures",
        body: "Hybrid retrieval pipelines that combine semantic search, reranking, and citation enforcement.",
        tags: ["Pinecone", "BGE", "Cohere Rerank"],
      },
      {
        icon: "◇",
        title: "Prompt Engineering",
        body: "Systematic prompt design with versioning, A/B testing, and regression evaluation built in.",
        tags: ["Prompt Ops", "Guardrails", "Eval"],
      },
      {
        icon: "◈",
        title: "Knowledge Base Integration",
        body: "Connect Confluence, SharePoint, S3, Notion, and internal wikis — with permission-aware retrieval.",
        tags: ["RBAC", "ETL", "Sync"],
      },
      {
        icon: "◉",
        title: "Multi-Channel Delivery",
        body: "Ship the same brain across web, Slack, Teams, mobile, and CRM — one model, many surfaces.",
        tags: ["Slack API", "Teams", "Web SDK"],
      },
    ],
    expertiseNarrative:
      "We've shipped Nubo and bespoke chatbots for asset managers, hospital networks, and global retailers. Every system enforces source citations, role-based access, and full conversation auditability — because enterprise chatbots aren't toys.",
    expertiseGrid: [
      { value: 30, suffix: "+", label: "Chatbots in production" },
      { value: 30, suffix: "M", label: "Documents indexed" },
      { value: 99, suffix: "%", label: "Source citation rate" },
      { value: 200, suffix: "ms", label: "Avg response latency" },
    ],
    techStack: [
      { group: "Models", items: ["GPT-4o", "Claude 3.5", "Llama 3", "Mistral"] },
      { group: "Retrieval", items: ["Pinecone", "Weaviate", "ChromaDB", "pgvector"] },
      { group: "Embedding", items: ["OpenAI", "Cohere", "BGE", "E5"] },
      { group: "Eval", items: ["Ragas", "TruLens", "LangSmith"] },
    ],
    approach: [
      {
        number: "01",
        title: "Knowledge Audit",
        body: "We catalog every source — wikis, PDFs, databases, ticketing systems — and define what the bot can and cannot say.",
      },
      {
        number: "02",
        title: "Retrieval Pipeline Design",
        body: "Chunking strategy, embedding model selection, hybrid search, and reranking — tuned to your domain.",
      },
      {
        number: "03",
        title: "Prompt + Guardrail Engineering",
        body: "System prompts, output schemas, citation enforcement, and refusal logic — versioned like code.",
      },
      {
        number: "04",
        title: "Deploy, Evaluate, Iterate",
        body: "Production rollout with conversation analytics, golden-set evals, and weekly improvement cycles.",
      },
    ],
    hld: {
      height: 580,
      nodes: [
        {
          id: "user",
          label: "User Query",
          sub: "Web · Slack · API",
          x: 4,
          y: 6,
          w: 180,
          variant: "muted",
        },
        { id: "iface", label: "Nubo Interface Layer", x: 4, y: 24, w: 180, variant: "primary" },
        {
          id: "prompt",
          label: "Prompt Engineering Engine",
          sub: "System · Few-shot",
          x: 4,
          y: 42,
          w: 220,
        },
        { id: "vec", label: "Vector DB", sub: "Pinecone", x: 50, y: 42, w: 150, variant: "muted" },
        { id: "rag", label: "RAG Retriever", sub: "Hybrid + rerank", x: 75, y: 42, w: 170 },
        {
          id: "llm",
          label: "LLM Router",
          sub: "GPT-4o · Claude",
          x: 28,
          y: 60,
          w: 200,
          variant: "primary",
        },
        { id: "guard", label: "Guardrails + Formatter", x: 28, y: 78, w: 220 },
        {
          id: "deliver",
          label: "Enterprise Delivery",
          sub: "API · Slack · CRM",
          x: 28,
          y: 92,
          w: 220,
          variant: "primary",
        },
      ],
      edges: [
        { from: "user", to: "iface" },
        { from: "iface", to: "prompt" },
        { from: "prompt", to: "vec" },
        { from: "vec", to: "rag" },
        { from: "rag", to: "llm" },
        { from: "prompt", to: "llm" },
        { from: "llm", to: "guard" },
        { from: "guard", to: "deliver" },
      ],
    },
    caseStudy: {
      tag: "Finance · GenAI Platform",
      title: "Nubo for a top-10 US asset manager",
      outcome: "Analyst lookup time: hours → seconds · Q1 2026",
      client: "Top-10 US asset management firm",
    },
  },
  "data-engineering": {
    slug: "data-engineering",
    pill: "01 · Services · Data",
    title: "Data Engineering at Petabyte Scale",
    highlight: "Petabyte Scale",
    subtitle:
      "Streaming ingestion, lakehouse architectures, and orchestration that handle 10TB+ daily — without flinching, without overspending.",
    problemQuote: "Your data isn't the problem. The pipes carrying it are.",
    problemPoints: [
      "Legacy batch systems can't keep up with real-time business decisions.",
      "Cloud bills balloon when pipelines aren't engineered for cost.",
      "Data quality issues compound silently until reports collapse.",
    ],
    offerings: [
      {
        icon: "◆",
        title: "Streaming Ingestion",
        body: "Kafka, Kinesis, Pub/Sub — real-time event pipelines with exactly-once semantics and replay.",
        tags: ["Kafka", "Kinesis", "Flink"],
      },
      {
        icon: "◇",
        title: "Lakehouse Architectures",
        body: "Delta Lake and Iceberg architectures on Databricks, Snowflake, BigQuery — open and cost-optimized.",
        tags: ["Delta", "Iceberg", "Hudi"],
      },
      {
        icon: "◈",
        title: "Pipeline Orchestration",
        body: "Production-grade DAGs with retries, SLAs, lineage, and observability — built on Airflow, Dagster, or dbt.",
        tags: ["Airflow", "Dagster", "dbt"],
      },
      {
        icon: "◉",
        title: "Migration & Modernization",
        body: "Legacy-to-cloud, on-prem-to-lakehouse, and warehouse-to-warehouse migrations — with zero downtime.",
        tags: ["AWS DMS", "Fivetran", "Custom CDC"],
      },
    ],
    expertiseNarrative:
      "Our data engineering team has migrated petabytes from on-prem mainframes to modern lakehouses, designed CDC pipelines for global logistics platforms, and rebuilt analytics stacks for top-tier retailers. We optimize for cost, latency, and developer ergonomics — in that order.",
    expertiseGrid: [
      { value: 3, suffix: "+", label: "Years in cloud data" },
      { value: 30, suffix: "+", label: "Migrations delivered" },
      { value: 3, suffix: "", label: "Cloud platforms" },
      { value: 1, suffix: "M", label: "Daily ingestion" },
    ],
    techStack: [
      { group: "Cloud", items: ["AWS", "GCP", "Azure", "Snowflake"] },
      { group: "Processing", items: ["Spark", "Databricks", "Flink", "Beam"] },
      { group: "Orchestration", items: ["Airflow", "Dagster", "dbt", "Prefect"] },
      { group: "Streaming", items: ["Kafka", "Kinesis", "Pub/Sub", "Confluent"] },
    ],
    approach: [
      {
        number: "01",
        title: "Architecture Audit",
        body: "We map your existing data flows, identify bottlenecks and cost leaks, and define the target-state architecture.",
      },
      {
        number: "02",
        title: "Lakehouse Design",
        body: "Layered medallion architecture, partitioning strategy, schema governance — designed for the next 5 years.",
      },
      {
        number: "03",
        title: "Pipeline Build & Migration",
        body: "Incremental migration with parallel run, data reconciliation, and zero downtime to production analytics.",
      },
      {
        number: "04",
        title: "Optimize & Operate",
        body: "Cost monitoring, query optimization, SLA dashboards, and on-call runbooks — handed off cleanly.",
      },
    ],
    hld: {
      height: 600,
      nodes: [
        { id: "kafka", label: "Kafka / Kinesis", x: 2, y: 6, w: 140, variant: "muted" },
        { id: "s3", label: "S3 / GCS", x: 26, y: 6, w: 120, variant: "muted" },
        { id: "rest", label: "REST APIs", x: 47, y: 6, w: 120, variant: "muted" },
        { id: "dbs", label: "Databases", x: 67, y: 6, w: 120, variant: "muted" },
        {
          id: "ingest",
          label: "Ingestion Layer",
          sub: "CDC · Streaming",
          x: 22,
          y: 28,
          w: 360,
          variant: "primary",
        },
        { id: "spark", label: "Apache Spark", x: 6, y: 50, w: 140 },
        { id: "dbx", label: "Databricks / Glue", x: 28, y: 50, w: 180 },
        { id: "dbt", label: "dbt Transforms", x: 56, y: 50, w: 160 },
        {
          id: "warehouse",
          label: "Lakehouse Layer",
          sub: "Snowflake · BigQuery · Redshift",
          x: 18,
          y: 72,
          w: 380,
          variant: "primary",
        },
        { id: "bi", label: "BI Tools", x: 4, y: 92, w: 110, variant: "muted" },
        { id: "ml", label: "ML Models", x: 24, y: 92, w: 110, variant: "muted" },
        { id: "dash", label: "Dashboards", x: 44, y: 92, w: 120, variant: "muted" },
        { id: "apis", label: "Data APIs", x: 65, y: 92, w: 110, variant: "muted" },
      ],
      edges: [
        { from: "kafka", to: "ingest" },
        { from: "s3", to: "ingest" },
        { from: "rest", to: "ingest" },
        { from: "dbs", to: "ingest" },
        { from: "ingest", to: "spark" },
        { from: "ingest", to: "dbx" },
        { from: "ingest", to: "dbt" },
        { from: "spark", to: "warehouse" },
        { from: "dbx", to: "warehouse" },
        { from: "dbt", to: "warehouse" },
        { from: "warehouse", to: "bi" },
        { from: "warehouse", to: "ml" },
        { from: "warehouse", to: "dash" },
        { from: "warehouse", to: "apis" },
      ],
    },
    caseStudy: {
      tag: "Logistics · Data Engineering",
      title: "Petabyte ingestion for a global 3PL",
      outcome: "14× faster pipelines · 62% cloud cost cut · Q4 2024",
      client: "Top-5 global 3PL provider",
    },
  },
  "data-analytics": {
    slug: "data-analytics",
    pill: "01 · Services · Analytics",
    title: "Data Analytics That Move Metrics",
    highlight: "Move Metrics",
    subtitle:
      "Self-serve analytics, executive dashboards, and predictive models that turn raw data into decisions — and decisions into outcomes.",
    problemQuote: "Dashboards don't drive decisions. Insight engineering does.",
    problemPoints: [
      "Most BI deployments collect dust because they answer the wrong questions.",
      "Self-serve analytics fails without semantic governance and data trust.",
      "Predictive models stay in notebooks instead of business workflows.",
    ],
    offerings: [
      {
        icon: "◆",
        title: "Executive Dashboards",
        body: "C-suite ready dashboards that surface the 5 metrics that matter — not the 500 that don't.",
        tags: ["Looker", "Tableau", "Power BI"],
      },
      {
        icon: "◇",
        title: "Self-Serve Semantic Layer",
        body: "Governed metric definitions in dbt or Cube — one source of truth across every BI tool.",
        tags: ["dbt Metrics", "Cube", "LookML"],
      },
      {
        icon: "◈",
        title: "Predictive Modeling",
        body: "Forecasting, churn, propensity, and segmentation models — operationalized into the workflow.",
        tags: ["XGBoost", "Prophet", "MLflow"],
      },
      {
        icon: "◉",
        title: "Embedded Analytics",
        body: "Customer-facing analytics shipped inside your product — secure, multi-tenant, and white-labeled.",
        tags: ["Embed SDK", "RLS", "Multi-tenant"],
      },
    ],
    expertiseNarrative:
      "We've built analytics platforms for finance, retail, and healthcare — turning warehouses full of unused data into the operating system of the business. Every dashboard we ship is tied to a decision; every model we train ships to production.",
    expertiseGrid: [
      { value: 50, suffix: "+", label: "Dashboards shipped" },
      { value: 10, suffix: "+", label: "ML models in prod" },
      { value: 5, suffix: "", label: "BI platforms mastered" },
      { value: 100, suffix: "%", label: "Models with monitoring" },
    ],
    techStack: [
      { group: "BI", items: ["Looker", "Tableau", "Power BI", "Mode"] },
      { group: "Semantic", items: ["dbt", "Cube", "LookML", "Malloy"] },
      { group: "ML", items: ["XGBoost", "Prophet", "MLflow", "scikit-learn"] },
      { group: "Embed", items: ["Sigma", "Preset", "Custom React"] },
    ],
    approach: [
      {
        number: "01",
        title: "Decision Mapping",
        body: "We start with the decisions your business needs to make — not the data you happen to have.",
      },
      {
        number: "02",
        title: "Semantic Modeling",
        body: "Governed metric definitions, conformed dimensions, and a single source of truth for every team.",
      },
      {
        number: "03",
        title: "Dashboard & Model Build",
        body: "Cinematic dashboards and production-grade models — paired with the workflow they live inside.",
      },
      {
        number: "04",
        title: "Adoption & Iteration",
        body: "Training, change management, and continuous iteration loops — analytics that gets used, not archived.",
      },
    ],
    hld: {
      height: 540,
      nodes: [
        {
          id: "src",
          label: "Lakehouse",
          sub: "Snowflake · BQ",
          x: 4,
          y: 14,
          w: 160,
          variant: "primary",
        },
        { id: "dbt", label: "dbt Transformations", x: 32, y: 14, w: 180 },
        {
          id: "sem",
          label: "Semantic Layer",
          sub: "Metrics · Dimensions",
          x: 60,
          y: 14,
          w: 200,
          variant: "primary",
        },
        { id: "ml", label: "ML Pipeline", sub: "Train · Serve", x: 4, y: 50, w: 160 },
        { id: "fs", label: "Feature Store", x: 32, y: 50, w: 160 },
        { id: "exp", label: "Experimentation", x: 60, y: 50, w: 200 },
        { id: "bi", label: "BI Dashboards", x: 4, y: 84, w: 160, variant: "muted" },
        { id: "embed", label: "Embedded Analytics", x: 32, y: 84, w: 180, variant: "muted" },
        { id: "alert", label: "Alerts · Workflow", x: 64, y: 84, w: 180, variant: "muted" },
      ],
      edges: [
        { from: "src", to: "dbt" },
        { from: "dbt", to: "sem" },
        { from: "src", to: "ml" },
        { from: "ml", to: "fs" },
        { from: "fs", to: "exp" },
        { from: "sem", to: "bi" },
        { from: "sem", to: "embed" },
        { from: "exp", to: "alert" },
      ],
    },
    caseStudy: {
      tag: "Retail · Analytics",
      title: "Demand forecasting for a global apparel brand",
      outcome: "22% inventory reduction · $48M annual savings · Q3 2024",
      client: "Top-20 global retailer",
    },
  },
};
