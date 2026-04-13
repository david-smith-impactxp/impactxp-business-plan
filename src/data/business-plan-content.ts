export const sections = [
  { id: "cover", label: "Cover" },
  { id: "performance", label: "Current Performance" },
  { id: "growth-model", label: "Growth Model" },
  { id: "enterprise-foundations", label: "Enterprise Foundations" },
  { id: "investment", label: "Investment (£2–3m)" },
  { id: "global-expansion", label: "Global Expansion" },
  { id: "why-now", label: "Why Now" },
] as const;

export const coverQuote = {
  source: "Deloitte",
  headline:
    "Retailers Are Gaining Power in the Value Chain, but CPG's are Finding Success in Collaboration.",
  body: "By integrating advanced predictive analytics and real-time data, brands can transition from \u201Creporting the news\u201D of past performance to offering forward-looking solutions that drive total category growth rather than just brand-specific gains.",
  detail:
    "This approach, characterized by transparency, executive-level commitment, and a focus on omnichannel strategies, positions CPGs as indispensable consultants who help retailers solve complex challenges, ultimately securing more favorable placement and long-term commitment in an increasingly competitive market.",
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
    title: "Land \u2192 Expand Model",
    bullets: [
      "Initial entry via pilot, market, or module",
      "Expansion across markets, categories, and use cases",
      "Each client represents a multi-year, expanding ARR opportunity",
    ],
  },
  {
    number: "2",
    title: "Multi-Market Rollout (Client-Led)",
    bullets: [
      "Expansion follows global client footprint",
      "Europe, North America, AsiaPac, MENA",
      "Growth driven by client expansion, not market-by-market selling",
    ],
  },
  {
    number: "3",
    title: "Multi-Module Platform",
    bullets: [
      "Five core modules deployed individually or together",
      "Increasing adoption drives higher ARR and deeper integration",
      "Platform breadth increases revenue and switching costs",
    ],
  },
  {
    number: "4",
    title: "Strong Client Retention & Expansion",
    bullets: [
      "Embedded within client workflows",
      "High repeat usage across teams and markets",
      "Revenue compounds within existing accounts",
    ],
  },
  {
    number: "5",
    title: "AI-Led Acceleration",
    bullets: [
      "Faster onboarding and deployment",
      "Reduced friction and increased scalability",
      "New revenue layers (apps / workflows)",
      "Improves speed, scalability, and monetisation",
    ],
  },
];

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
    "We have built the foundations required to operate at enterprise scale \u2014 the next phase is to formalise and resource this infrastructure.",
  keyPoint: "The constraint is execution capacity, not market demand",
};

export const investmentAreas = [
  {
    title: "Commercial Acceleration",
    amount: "~£1.0\u20131.2m",
    bullets: [
      "Sales leadership and structured pipeline conversion",
      "Targeted marketing capability",
      "Accelerates conversion of existing pipeline and drives new business",
    ],
  },
  {
    title: "Product & AI Development",
    amount: "~£0.8\u20131.0m",
    bullets: [
      "AI / agent-led workflow development",
      "App expansion capability",
      "Improved onboarding and usability",
      "Increases scalability and revenue potential",
    ],
  },
  {
    title: "Delivery & Customer Success",
    amount: "~£0.5\u20130.6m",
    bullets: [
      "Onboarding and client success teams",
      "Support multi-market expansion",
      "Enables faster rollout and deeper client penetration",
    ],
  },
  {
    title: "Infrastructure & Global Enablement",
    amount: "~£0.5\u20130.8m",
    bullets: [
      "Legal / contracts manager (MSA / SLA)",
      "ISO completion and SOC accreditation",
      "US entity setup and initial presence",
      "Global delivery model (time zone coverage)",
      "Removes structural friction and enables scalable global operations",
    ],
  },
];

export const investmentSummary = {
  keyPoint:
    "This investment is designed to convert existing demand into ARR and accelerate expansion within our global client base",
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
