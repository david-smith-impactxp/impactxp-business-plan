export const sections = [
  { id: "splash", label: "ImpactXP" },
  { id: "our-mission", label: "Our Mission" },
  { id: "platform-overview", label: "Platform Overview" },
  { id: "trusted-by", label: "Trusted By" },
  { id: "market-context", label: "Market Context" },
  { id: "performance", label: "Current Performance" },
  { id: "how-we-grow", label: "How We Grow" },
  { id: "enterprise-readiness", label: "Enterprise Readiness" },
  { id: "investment", label: "Investment (£2–3m)" },
  { id: "global-expansion", label: "Global Expansion" },
  { id: "why-now", label: "Why Now" },
] as const;

export const ourMission = {
  eyebrow: "Our Mission",
  titleLead: "Four industry challenges.",
  titleHighlight: "One platform to solve them.",
  intro:
    "Retail category management is stuck between fragmented tools, generic planograms, and slow test-and-learn cycles. ImpactXP replaces all of it with a single AI-powered workflow.",
  challenges: [
    {
      number: "01",
      title: "Optimize Space & Assortment",
      body: "AI-driven space and assortment that surfaces incrementality, cannibalization, and size of prize in real time.",
    },
    {
      number: "02",
      title: "Automate Store-Specific Plans",
      body: "Replace generic cluster planograms with dynamic, store-specific plans generated automatically — saving weeks of manual work.",
    },
    {
      number: "03",
      title: "Test & Learn at Retail",
      body: "Understand what really works at the shelf through virtual research that validates execution and drives demand.",
    },
    {
      number: "04",
      title: "Better, Faster, Together",
      body: "Brand and retail teams work on one connected AI platform, replacing siloed tools with shared data and workflow.",
    },
  ],
};

export const trustedBy = {
  eyebrow: "Customers",
  title: "Trusted by Leading Global Brands",
  subtitle:
    "30+ global CPG brands and retailers using ImpactXP across multiple markets",
  footer:
    "Embedded within leading global organisations across categories and geographies",
};

export const platformOverview = {
  eyebrow: "Platform Overview",
  title: "A Connected Platform Delivering Retail Execution at Scale",
  intro:
    "ImpactXP is a modular SaaS platform enabling CPG brands and retailers to optimise, automate, understand, and execute retail decisions across global markets.",
  endToEnd: {
    title: "End-to-End Capability",
    steps: [
      { verb: "Plan", body: "Range, assortment and category strategy" },
      { verb: "Visualise", body: "In-store execution and shopper experience" },
      { verb: "Validate", body: "Real-world testing and optimisation" },
    ],
    note: "Built from real-world shopper and retail experience. Cloud, desktop, and hybrid deployment.",
  },
  modules: {
    title: "Five Core Modules",
    items: [
      { name: "PlanogramXP", body: "planogram creation and optimisation" },
      { name: "RangeXP", body: "range and assortment intelligence" },
      { name: "ShopperXP", body: "in-store visualisation and experience" },
      { name: "EngageXP", body: "virtual retail environments and collaboration" },
      { name: "ResearchXP", body: "rapid validation with real shoppers" },
    ],
    note: "Modules operate independently or as a fully integrated system",
  },
  coreArchitecture: {
    eyebrow: "Core Platform Architecture",
    title: "AssetXP: The Shared Foundation",
    pillars: [
      {
        label: "Unified",
        body: "AssetXP underpins all modules",
      },
      {
        label: "Cloud-Based",
        body: "Central asset and data environment",
      },
      {
        label: "Consistent",
        body: "Consistent content and workflows across markets",
      },
      {
        label: "Scalable",
        body: "Foundation for multi-market deployment",
      },
    ],
  },
};

export const marketContext = {
  eyebrow: "Market Context",
  slideTitle: "The Market Is Shifting Toward Collaboration",
  subtitle:
    "Retailers are gaining power in the value chain, and CPGs are finding success by moving from reporting to partnership.",
  source: "Deloitte",
  headline:
    "Retailers Are Gaining Power in the Value Chain, but CPG's are Finding Success in Collaboration.",
  body: "By integrating advanced predictive analytics and real-time data, brands can transition from \u201Creporting the news\u201D of past performance to offering forward-looking solutions that drive total category growth rather than just brand-specific gains.",
  detail:
    "This approach, characterised by transparency, executive-level commitment, and a focus on omnichannel strategies, positions CPGs as indispensable consultants who help retailers solve complex challenges, ultimately securing more favourable placement and long-term commitment in an increasingly competitive market.",
  attribution: "Shared with ImpactXP by Kraft Heinz",
};

export const performanceData = {
  subtitle:
    "Current traction, near-term visibility, and a clear path to scale, backed by qualified pipeline and expansion within existing clients.",
  current: {
    title: "Current Position (FY25/26 Run Rate)",
    stats: [
      { value: "£3.7m", label: "ARR" },
      { value: "30+", label: "Global enterprise clients" },
    ],
    note: "Proven ability to win and onboard complex, blue-chip organisations",
  },
  nearTerm: {
    title: "Near-Term Growth Visibility (FY26/27)",
    target: "~£6.3m ARR",
    bullets: [
      "~£5m qualified pipeline",
      "Expansion within existing clients",
      "Strong ongoing inbound demand",
    ],
    note: "High-confidence view based on current client activity and qualified opportunities.",
  },
  valueCreationLine:
    "Significant upside through scaling a proven SaaS platform — with strong operating leverage as ARR increases.",
  alignmentNote:
    "Founding team retaining ~40% equity — clear alignment with investment partner.",
};

export const arrChartData = [
  { year: "FY25/26", arr: 3.7 },
  { year: "FY26/27", arr: 6.3 },
  { year: "FY27/28", arr: 22 },
  { year: "FY29/30", arr: 60 },
];

export const howWeGrow = {
  eyebrow: "Growth Strategy",
  title: "How We Grow",
  subtitle:
    "One engine: expanding depth and geography within a high-quality global client base.",
  pillars: [
    {
      number: "1",
      title: "Land & Expand",
      bullets: [
        "Enter via pilot, market, or single module",
        "Convert ~£5m qualified pipeline in existing accounts",
        "Each client = a multi-year, expanding ARR opportunity",
      ],
    },
    {
      number: "2",
      title: "Client-Led Rollout",
      bullets: [
        "Growth follows client footprint — not market-by-market selling",
        "Zero-CAC expansion into new markets and categories",
        "Each account scales without new commercial spend",
      ],
    },
    {
      number: "3",
      title: "Multi-Module Platform Compounds ARR",
      bullets: [
        "Five modules: deployed individually or together",
        "Higher ARR per client and deeper integration",
        "Increased switching costs",
      ],
    },
    {
      number: "4",
      title: "Customer Success-Led Expansion",
      bullets: [
        "Dedicated CS teams embedded in client accounts",
        "Deep expertise in shopper, category, and analytics",
        "Drives retention, faster expansion, and higher ARR per client",
      ],
    },
    {
      number: "5",
      title: "AI-Led Acceleration",
      bullets: [
        "Faster onboarding and reduced manual work",
        "Rapid solution generation and iteration",
        "New revenue layers via AI apps and workflows",
      ],
    },
  ],
  defensible: {
    eyebrow: "Defensible Positioning",
    title: "Why This Scales Sustainably",
    pillars: [
      {
        label: "Embedded",
        body: "Woven into global enterprise client workflows",
      },
      {
        label: "Modular",
        body: "Multi-module platform creates high switching costs",
      },
      {
        label: "Expertise",
        body: "Deep domain knowledge in shopper, category, and retail execution",
      },
    ],
    closing:
      "A scalable, hard-to-replace platform inside global client organisations.",
  },
};

export const enterpriseReadiness = {
  eyebrow: "Enterprise Readiness",
  title: "Built for Enterprise. The Constraint Is Capacity, Not Demand.",
  atScale: {
    title: "We Already Operate at Enterprise Scale",
    bullets: [
      "30+ global CPG brands onboarded",
      "Complex procurement, legal, and IT environments navigated",
      "ISO 9001 near complete; SOC preparation underway for US expansion",
      "Clients supported across North America, Europe, AsiaPac and MENA",
    ],
  },
  constraint: {
    title: "Current Scaling Constraints",
    bullets: [
      "Commercial bandwidth (sales and onboarding)",
      "Contracting complexity (MSA / SLA)",
      "Delivery and customer success capacity",
      "Product development pace (AI and apps)",
      "Lack of structured global operating model",
    ],
  },
  bridge:
    "The foundations are in place. The next phase is to formalise and resource them.",
};

export const investmentSubtitle =
  "Focused investment to convert demand and scale client value.";

export const investmentAreas = [
  {
    title: "Commercial Acceleration",
    amount: "≤\u00a0£0.5m",
    bullets: [
      "Strengthen sales leadership",
      "Structured CRM and pipeline management",
      "Targeted, high-quality marketing",
    ],
  },
  {
    title: "Product & AI Development",
    amount: "≤\u00a0£0.5m",
    bullets: [
      "AI and workflow acceleration",
      "Rapid solution prototyping",
      "Faster onboarding and improved usability",
    ],
  },
  {
    title: "Delivery & Customer Success",
    amount: "≤\u00a0£1.5m",
    bullets: [
      "Higher-calibre customer success function",
      "Added expertise in shopper, category, and analytics",
      "AI-led, insight-driven solutions to client challenges",
      "Drives faster expansion, retention, and ARR per client",
    ],
  },
  {
    title: "Infrastructure & Global Enablement",
    amount: "≤\u00a0£0.5m",
    bullets: [
      "Legal / contracts manager (MSA / SLA efficiency)",
      "ISO completion + SOC accreditation",
      "US entity setup and initial presence",
      "Global delivery capability (time zone support)",
    ],
  },
];

export const investmentClosing =
  "Targeted investment to accelerate a proven model — not to fund early-stage growth.";

export const globalExpansion = {
  eyebrow: "Geographic Roadmap",
  title: "Client-Led Global Expansion",
  subtitle:
    "Sequenced geography that follows client demand, not speculative market entry.",
  phases: [
    {
      number: "1",
      horizon: "Now",
      title: "Europe & Core Markets",
      body: "Convert ~£5m qualified pipeline and deepen adoption within existing accounts.",
    },
    {
      number: "2",
      horizon: "FY26/27",
      title: "US Expansion",
      body: "Strategic priority. Entry via global clients and retailers; legal entity and local presence being established.",
    },
    {
      number: "3",
      horizon: "FY27/28+",
      title: "AsiaPac & MENA",
      body: "Enabled to support global client rollouts as demand requires — following client footprint, not speculative entry.",
    },
  ],
  summary:
    "Growth enabled by the global footprint of our clients — supported by a scalable platform and structured operating model.",
};

export const whyNowPillars = [
  {
    title: "Proven & Growing",
    body: "£3.7m ARR with 30+ global enterprise clients and clear line of sight to £6.3m ARR (FY26/27), backed by qualified pipeline and inbound demand.",
  },
  {
    title: "Market Is Shifting",
    body: "Legacy platforms are slow, fragmented, and under-serving clients — a lean, flexible challenger is well positioned to move ahead of incumbents.",
  },
  {
    title: "Demand Outpaces Capacity",
    body: "Inbound demand and qualified pipeline already exceed what we can deliver — the opportunity to scale is now, with the right partner.",
  },
];

export const closingStatement =
  "A proven, enterprise-ready platform in a market being reshaped by AI and underserved by legacy suppliers. With the right partner, we can scale quickly and create significant value.";
