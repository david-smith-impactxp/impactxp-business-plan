export const sections = [
  { id: "splash", label: "ImpactXP" },
  { id: "our-mission", label: "Our Mission" },
  { id: "platform-overview", label: "Platform Overview" },
  { id: "trusted-by", label: "Trusted By" },
  { id: "market-context", label: "Market Context" },
  { id: "performance", label: "Current Performance" },
  { id: "growth-model", label: "Growth Model" },
  { id: "enterprise-foundations", label: "Enterprise Foundations" },
  { id: "investment", label: "Investment (£2–3m)" },
  { id: "global-expansion", label: "Global Expansion" },
  { id: "why-now", label: "Why Now" },
] as const;

export const ourMission = {
  eyebrow: "Our Mission",
  titleLead: "Four big industry challenges.",
  titleHighlight: "One platform to solve them.",
  intro:
    "Retail category management is stuck between fragmented tools, one-size-fits-all planograms, and slow test-and-learn cycles. ImpactXP was built around four questions, and answers each with a unified, AI-powered workflow.",
  howToLabel: "How to…",
  challenges: [
    {
      number: "01",
      title: "Optimize Space & Assortment",
      body: "Solve category challenges quickly with AI-driven space and assortment optimization that surfaces incrementality, cannibalization, and size of prize in real time.",
    },
    {
      number: "02",
      title: "Automate Store-Specific Plans",
      body: "Replace one-size-fits-all cluster planograms with dynamic, store-specific plans generated automatically, saving weeks of manual effort.",
    },
    {
      number: "03",
      title: "Test & Learn at Retail",
      body: "Understand what really works at the shelf. An iterative test-and-learn approach, powered by virtual research, drives demand and validates execution.",
    },
    {
      number: "04",
      title: "Better, Faster, Together",
      body: "Enable brand and retail teams to do their jobs better and faster on one connected AI platform, replacing siloed tools with shared data and workflow.",
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
    note: "Connects strategy, execution, and validation within a single platform",
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
        body: "Enables consistent content, data, and workflows across markets",
      },
      {
        label: "Scalable",
        body: "Provides the foundation for scalable, multi-market deployment",
      },
    ],
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
  valueDelivery: {
    title: "How the Platform Delivers Value",
    bullets: [
      "Optimises space and assortment through integrated planning and simulation",
      "Automates store-specific execution across markets and formats",
      "Enables continuous test-and-learn to understand what drives demand",
      "Connects teams through agentic workflows and shared environments",
    ],
    note: "Transforms insight into scalable, real-world execution",
  },
  differentiation: {
    title: "Key Differentiation",
    bullets: [
      "Single connected platform vs fragmented legacy tools",
      "Enterprise-level capability and security",
      "Cloud, desktop, and hybrid deployment options",
      "Built from real-world shopper and retail experience",
      "Designed for global, multi-market deployment",
    ],
  },
  commercialImpact: {
    title: "Commercial Impact",
    bullets: [
      "Faster, more consistent decision making",
      "Reduced time and cost of execution",
      "Improved collaboration between brands and retailers",
      "Focus on total category growth",
    ],
  },
  positioningLine:
    "A connected platform enabling brands to optimise, automate, understand, and execute retail decisions at global scale",
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
  attribution: "Shared with ImpactXP by Kraft Heinz.",
};

export const performanceData = {
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
    note: "High-confidence view of near-term growth based on current client activity and qualified opportunities.",
  },
  mediumTerm: {
    title: "Medium-Term Growth Trajectory",
    milestones: [
      { year: "FY26/27", arr: "£6.3m" },
      { year: "FY27/28", arr: "£22m" },
      { year: "FY29/30", arr: "£60m+" },
    ],
    note: "Achievable with targeted commercial, operational, and product investment.",
  },
  valueCreation: [
    "Significant upside through scaling a proven SaaS platform",
    "Strong operating leverage as ARR increases",
  ],
  alignment: [
    "Founding team retaining ~40% equity",
    "Clear alignment with investment partner",
  ],
};

export const arrChartData = [
  { year: "FY25/26", arr: 3.7 },
  { year: "FY26/27", arr: 6.3 },
  { year: "FY27/28", arr: 22 },
  { year: "FY29/30", arr: 60 },
];

export const growthModelPillars = [
  {
    number: "1",
    title: "Land & Expand\nModel",
    bullets: [
      "Initial entry via pilot, market, or module",
      "Expansion across markets, categories, and use cases",
      "Each client represents a multi-year, expanding ARR opportunity",
    ],
  },
  {
    number: "2",
    title: "Multi-Market Rollout\n(Client\u2011Led)",
    bullets: [
      "Expansion follows global client footprint",
      "Europe, North America, AsiaPac, MENA",
      "Growth driven by client expansion, not market-by-market selling",
    ],
  },
  {
    number: "3",
    title: "Multi-Module\nPlatform",
    bullets: [
      "Five core modules deployed individually or together",
      "Higher ARR per client",
      "Deeper integration",
      "Increased switching costs",
      "Platform breadth increases revenue and retention",
    ],
  },
  {
    number: "4",
    title: "Customer Success\u2011Led\nExpansion",
    bullets: [
      "Dedicated customer success teams drive ongoing client engagement",
      "Deep expertise in shopper behaviour, category strategy, and data & analytics",
      "AI-led, rapid, insight-led solutions to client challenges",
      "Close collaboration with development for QA and productisation",
      "Drives faster expansion, higher retention, and increased ARR per client",
    ],
  },
  {
    number: "5",
    title: "AI-Led\nAcceleration",
    bullets: [
      "Faster onboarding and deployment",
      "Reduced reliance on manual processes",
      "Rapid solution generation and iteration",
      "Creation of additional revenue layers (apps / workflows)",
      "Improves speed, scalability, and monetisation",
    ],
  },
];

export const growthModelDefensible = {
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
      label: "AssetXP",
      body: "Scalable, shared data and content foundation",
    },
    {
      label: "Expertise",
      body: "Deep domain knowledge in shopper, category, and retail execution",
    },
    {
      label: "AI",
      body: "Increasingly enhances speed, efficiency, and differentiation",
    },
  ],
  closing:
    "Creates a scalable, hard-to-replace platform within global client organisations.",
};

export const growthModelSummary =
  "Growth is driven by expanding depth and geography within a high-quality global client base, supported by a modular platform and increasing operational leverage.";

export const enterpriseFoundations = {
  quadrants: [
    {
      title: "Enterprise Capability (Proven at Scale)",
      bullets: [
        "30+ global CPG brands onboarded",
        "Complex procurement, legal, and IT environments navigated",
        "Platform embedded within client workflows",
        "We operate at enterprise level today",
      ],
    },
    {
      title: "Significant Investment Already Made",
      bullets: [
        "Extensive onboarding and delivery investment",
        "ISO 9001 accreditation (near completion)",
        "SOC compliance preparation for US expansion",
        "Foundational work largely complete",
      ],
    },
    {
      title: "Operating in a Global Client Environment",
      bullets: [
        "Clients require support across: North America, Europe, AsiaPac / MENA",
        "Expansion driven by client footprint",
        "We already operate as a global business",
      ],
    },
    {
      title: "Current Scaling Constraints",
      bullets: [
        "Commercial bandwidth (sales and onboarding)",
        "Contracting complexity (MSA / SLA)",
        "Delivery and customer success capacity",
        "Product development pace (AI and apps)",
        "Lack of structured global operating model",
      ],
    },
  ],
  positioning:
    "We have built the foundations required to operate at enterprise scale. The next phase is to formalise and resource this infrastructure.",
  keyPoint: "The constraint is execution capacity, not market demand",
};

export const investmentSubtitle =
  "Focused Investment to Convert Demand and Scale Client Value";

export const investmentAreas = [
  {
    title: "Commercial Acceleration",
    amount: "≤\u00a0£0.5m",
    bullets: [
      "Strengthen sales leadership",
      "Invest in a structured CRM system",
      "Improve pipeline management and conversion",
      "Targeted, high-quality marketing",
      "Supports efficient conversion of existing pipeline and sustained inbound demand",
    ],
  },
  {
    title: "Product & AI Development",
    amount: "≤\u00a0£0.5m",
    bullets: [
      "Focused investment in AI / workflow acceleration",
      "Rapid solution prototyping capability",
      "Improve onboarding speed and usability",
      "Enhances platform efficiency and speed to value",
    ],
  },
  {
    title: "Delivery & Customer Success",
    amount: "≤\u00a0£1.5m",
    bullets: [
      "Build a higher-calibre customer success function",
      "Recruit additional expertise in shopper behaviour, category strategy, and data & analytics",
      "Deeply understand client challenges",
      "Use AI to generate rapid, insight-led solutions",
      "Work with development for QA and productisation",
      "Drives faster expansion, higher retention, and increased ARR per client",
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
      "Removes structural friction and enables scalable global operations",
    ],
  },
];

export const investmentSummary = {
  keyPoint:
    "Investment is focused on converting demand and accelerating expansion within existing clients, where the greatest value creation opportunity exists",
  closing:
    "This is targeted investment to accelerate a proven model, not to fund early-stage growth.",
};

export const globalExpansionSteps = [
  {
    number: "1",
    title: "Convert Existing Pipeline (~£5m)",
    bullets: [
      "Immediate priority",
      "High-probability revenue",
      "Drives near-term ARR growth",
    ],
  },
  {
    number: "2",
    title: "Expand Existing Clients (Europe & Core Markets)",
    bullets: [
      "Additional markets",
      "Increased module adoption",
      "Deeper integration",
      "Growth driven by depth within accounts",
    ],
  },
  {
    number: "3",
    title: "US Expansion (Strategic Priority)",
    bullets: [
      "Entry via global clients and retailers",
      "Establish legal entity and local presence",
      "Unlocks largest global market opportunity",
    ],
  },
  {
    number: "4",
    title: "AsiaPac & MENA Enablement",
    bullets: [
      "Support global client rollouts",
      "Follow client demand",
      "Extends global footprint efficiently",
    ],
  },
  {
    number: "5",
    title: "Global Operating Model",
    bullets: [
      "Follow-the-sun delivery capability",
      "Structured global support",
      "Enables frictionless global deployment",
    ],
  },
  {
    number: "6",
    title: "AI-Led Growth Acceleration",
    bullets: [
      "Faster onboarding",
      "Reduced manual processes",
      "New revenue streams",
      "Improves scalability and efficiency",
    ],
  },
];

export const globalExpansionSummary =
  "Growth is enabled by the global footprint of our clients, supported by a scalable platform and structured operating model";

export const whyNowPillars = [
  {
    title: "Proven Platform",
    body: "£3.7m ARR with 30+ global enterprise clients. Strong track record of winning complex, blue-chip business.",
  },
  {
    title: "Clear Growth Visibility",
    body: "Line of sight to £6.3m ARR (FY26/27). Supported by qualified pipeline and inbound demand.",
  },
  {
    title: "Market Opportunity",
    body: "Legacy platforms are slow, fragmented, and under-serving clients. Strong client appetite for a more responsive, innovative partner.",
  },
  {
    title: "AI as an Accelerator",
    body: "AI reduces cost, improves product capability, and increases speed. Opportunity to enhance efficiency, scalability, and margin.",
  },
  {
    title: "Strong Strategic Position",
    body: "Lean, fast, and flexible. Well positioned to move ahead of larger incumbents.",
  },
  {
    title: "Need for Speed",
    body: "Demand exceeds current execution capacity. Opportunity to scale quickly with the right partner.",
  },
];

export const closingStatement =
  "ImpactXP is a proven, enterprise-ready platform operating in a market being reshaped by AI and underserved by legacy suppliers. With the right partner and targeted investment, we can scale quickly, efficiently, and create significant value.";
