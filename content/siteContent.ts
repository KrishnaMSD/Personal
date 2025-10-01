export interface SiteContent {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone?: string;
    headshotSrc: string;
    bioShort: string;
    socials: { label: "GitHub" | "LinkedIn" | "Email" | "X" | "Portfolio"; href: string }[];
    stats: { label: string; value: number; suffix?: string; prefix?: string }[];
  };
  skills: {
    groups: {
      name:
        | "Programming"
        | "Data Visualization"
        | "Machine Learning"
        | "Database"
        | "Cloud"
        | "Frontend"
        | "DevOps";
      level: number;
      tools: string[];
    }[];
    donut: {
      centerLabel: string;
      slices: { label: string; value: number }[];
    };
  };
  experience: {
    role: string;
    org: string;
    location?: string;
    start: string;
    end: string;
    bullets: string[];
    tags?: string[];
  }[];
  education: {
    degree: string;
    school: string;
    location?: string;
    start: string;
    end: string;
    gpa?: string;
  }[];
  activities: {
    section: "Workshops" | "Hackathons" | "Extracurricular" | "Awards";
    title: string;
    date?: string;
    bullets?: string[];
  }[];
  projects: {
    group: string;
    items: {
      title: string;
      timeframe?: string;
      tagline?: string;
      impact: string[];
      tech: string[];
      links?: { label: "Live" | "GitHub" | "Article" | "Video"; href: string }[];
      embed?: { type: "iframe" | "img" | "video"; src: string; alt?: string };
    }[];
  }[];
  articles: {
    slug: string;
    title: string;
    summary: string;
    published: string;
    readingTime: string;
    tags: string[];
    body: string;
  }[];
  downloads: { label: "CV" | "Resume"; file: string; updated?: string; sizeKB?: number }[];
}

export const siteContent: SiteContent = {
  profile: {
    name: "Krishna Kalakonda",
    title: "Full-Stack Data Scientist",
    location: "Chicago, USA",
    email: "krishnakalakonda123@gmail.com",
    phone: "+1 (872) 314-4245",
    headshotSrc: "/krishna.png",
    bioShort:
      "Data scientist and full-stack engineer bridging machine learning research with production software. I architect intelligent, explainable systems that turn raw signals into clear, observable outcomes for revenue, risk, and product teams.",
    socials: [
      { label: "GitHub", href: "https://github.com/KrishnaKalakonda" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/krishna-kalakonda" },
      { label: "Email", href: "mailto:krishnakalakonda123@gmail.com" },
    ],
    stats: [
      { label: "Years experience", value: 2, suffix: "+" },
      { label: "Projects", value: 15, suffix: "+" },
    ],
  },
  skills: {
    groups: [
      {
        name: "Programming",
        level: 92,
        tools: [
          "Python",
          "R",
          "JavaScript",
          "Java",
          "C",
          "Matlab",
          "FastAPI",
          "Flask",
          "Streamlit",
          "React",
          "LangChain",
        ],
      },
      {
        name: "Data Visualization",
        level: 85,
        tools: ["Tableau", "Matplotlib", "Plotly", "Power BI", "JupyterLab"],
      },
      {
        name: "Machine Learning",
        level: 90,
        tools: [
          "scikit-learn",
          "TensorFlow",
          "PyTorch",
          "NLP",
          "LLMs",
          "RAG",
          "NER",
          "Time Series",
          "Explainable AI",
          "Prompt Engineering",
        ],
      },
      {
        name: "Database",
        level: 82,
        tools: ["PostgreSQL", "MongoDB", "MySQL", "Snowflake"],
      },
      {
        name: "Cloud",
        level: 80,
        tools: ["AWS", "Docker", "Jenkins", "Kubeflow", "Git"],
      },
      {
        name: "Frontend",
        level: 76,
        tools: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
      },
      {
        name: "DevOps",
        level: 74,
        tools: ["CI/CD", "Monitoring", "Mixpanel", "HubSpot", "Twilio"],
      },
    ],
    donut: {
      centerLabel: "Full-Stack Data Scientist",
      slices: [
        { label: "Programming", value: 18 },
        { label: "Machine Learning", value: 22 },
        { label: "Data Visualization", value: 12 },
        { label: "Database", value: 12 },
        { label: "Cloud", value: 12 },
        { label: "Frontend", value: 12 },
        { label: "DevOps", value: 12 },
      ],
    },
  },
  experience: [
    {
      role: "Graduate Student Assistant",
      org: "DePaul University",
      location: "Chicago, USA",
      start: "Feb 2025",
      end: "Present",
      bullets: [
        "Built data pipelines that unify soil, yield, and weather measurements from Chicago partner farms into a research-grade repository.",
        "Designed the domain schema and ingestion architecture that keeps preprocessing metadata synchronized across reactive dashboards.",
        "Co-developed a React-based insight portal highlighting crop health, volunteer contributions, and funding outcomes for local farm leads.",
      ],
      tags: ["React", "PostgreSQL", "Data Engineering", "Visualization"],
    },
    {
      role: "Research Assistant",
      org: "DePaul University — ADHD Lab",
      location: "Chicago, USA",
      start: "Mar 2025",
      end: "Present",
      bullets: [
        "Engineered interpretable ML models that surface gender-specific attention markers from multi-modal clinical assessments.",
        "Balanced diagnostic accuracy with fairness constraints, lifting sensitivity for underrepresented populations by 14%.",
        "Translated model outputs into clinician-friendly narratives and tooling that support individualized ADHD interventions.",
      ],
      tags: ["Explainable AI", "Statistics", "Python", "Healthcare"],
    },
    {
      role: "Research Assistant",
      org: "DePaul University — AI Innovation Lab",
      location: "Chicago, USA",
      start: "Apr 2025",
      end: "Present",
      bullets: [
        "Led market landscaping for immigration-focused AI products, identifying 30+ pain points across legal aid NGOs.",
        "Curated multilingual corpora and speech datasets to fine-tune LLM agents that orchestrate translation and triage tasks.",
        "Architected a speech-to-decision assistant that chains ASR, translation, and policy recommendation services securely.",
      ],
      tags: ["LLMs", "Product Discovery", "Architecture", "Translation"],
    },
    {
      role: "Associate Data Scientist",
      org: "App Virality (Outplay)",
      location: "Hyderabad, India",
      start: "Jun 2022",
      end: "May 2024",
      bullets: [
        "Launched an objection handling copilot that classifies prospect objections at 95% accuracy and recommends rebuttals in real time.",
        "Deployed a phone-verified contact engine that blended LLM call scripts, TTS, and CRM webhooks to lift outreach by 120%.",
        "Productized a generative email writer that boosted positive replies by 80% while reducing SDR composition time by 90%.",
        "Championed architecture for an automated SDR agent covering research, sequencing, and meeting scheduling workflows.",
      ],
      tags: ["LLMs", "FastAPI", "AWS", "Mixpanel", "Product"],
    },
    {
      role: "Software Engineer Intern",
      org: "App Virality (Outplay)",
      location: "Hyderabad, India",
      start: "Jan 2022",
      end: "May 2022",
      bullets: [
        "Researched state-of-the-art conversational AI models and evaluated vendor APIs across latency, accuracy, and compliance.",
        "Curated and quality-controlled proprietary datasets that accelerated deployment readiness of production AI features.",
        "Documented cross-team ML operations playbooks adopted by engineering, product, and customer success squads.",
      ],
      tags: ["NLP", "Data Ops", "Documentation"],
    },
  ],
  education: [
    {
      degree: "M.S. Data Science",
      school: "DePaul University",
      location: "Chicago, USA",
      start: "Sep 2024",
      end: "Aug 2026",
      gpa: "4.0 / 4.0",
    },
    {
      degree: "B.Tech Electronics & Communication Engineering",
      school: "RGUKT Basar",
      location: "Telangana, India",
      start: "Aug 2018",
      end: "May 2022",
      gpa: "8.17 / 10",
    },
    {
      degree: "PUC — Maths, Physics, Chemistry",
      school: "RGUKT Basar",
      location: "Telangana, India",
      start: "Jul 2016",
      end: "May 2018",
      gpa: "8.99 / 10",
    },
  ],
  activities: [
    {
      section: "Workshops",
      title: "Drone Technology Intensive",
      date: "2023",
      bullets: ["Hands-on build of quadcopters, flight tuning, and mission planning workflows."],
    },
    {
      section: "Workshops",
      title: "3D Printing & CAD Bootcamp",
      date: "2022",
      bullets: ["Modeled and fabricated custom enclosures for IoT sensor deployments."],
    },
    {
      section: "Workshops",
      title: "Astrophysics Bootcamp",
      date: "2021",
      bullets: ["Simulated orbital dynamics and deep-sky observation pipelines."],
    },
    {
      section: "Awards",
      title: "Top Performer — Outplay",
      date: "2023",
      bullets: ["Recognized for leading adoption of AI-first sales tooling across go-to-market teams."],
    },
    {
      section: "Awards",
      title: "University Table Tennis Champion",
      date: "2020",
    },
    {
      section: "Awards",
      title: "School Academic Rank #1",
      date: "2014–2016",
    },
    {
      section: "Extracurricular",
      title: "Event & Alumni Coordinator",
      bullets: ["Drove 20+ campus-wide initiatives spanning outreach, sponsorships, and volunteer coordination."],
    },
    {
      section: "Extracurricular",
      title: "SPIC MACAY Volunteer",
      bullets: ["Curated cultural immersion programs introducing 500+ students to classical arts."],
    },
    {
      section: "Extracurricular",
      title: "National Service Scheme",
      bullets: ["Led community health camps and STEM mentoring for rural schools."],
    },
    {
      section: "Hackathons",
      title: "Campus Innovation Sprint",
      bullets: ["Built IoT prototypes combining sensor networks with predictive maintenance dashboards."],
    },
  ],
  projects: [
    {
      group: "AI & LLM Agents",
      items: [
        {
          title: "AI Sales Agent",
          timeframe: "2023",
          tagline: "Automated SDR lifecycle with orchestrated LLM micro-services.",
          impact: [
            "Designed multi-agent architecture covering research, outreach, sequencing, and scheduling.",
            "Integrated CRM, calendars, and telephony APIs with guardrails for compliance and analytics.",
            "Reduced manual SDR touchpoints by 65% while preserving brand voice control.",
          ],
          tech: ["LLMs", "FastAPI", "LangChain", "AWS", "Twilio"],
        },
        {
          title: "Magic Mail",
          timeframe: "2023",
          tagline: "LLM-generated outbound emails tuned to buyer personas.",
          impact: [
            "Captured product intel, objection data, and persona cues to auto-compose persuasive replies.",
            "Delivered +80% lift in positive responses across 40 pilot customers.",
            "Wove in adaptive tone controls and CRM analytics hooks for A/B experimentation.",
          ],
          tech: ["LLMs", "Prompt Engineering", "Mixpanel", "React"],
        },
        {
          title: "Objection Handling Copilot",
          timeframe: "2022 - 2023",
          tagline: "Semantic objection detection with guided rebuttals.",
          impact: [
            "Trained NER and intent models to categorize sales objections at 95% accuracy.",
            "Surfaced rebuttal playbooks contextualized by deal stage and persona.",
            "Synthesized call transcripts into coaching loops for SDR enablement.",
          ],
          tech: ["NLP", "NER", "LangChain", "FastAPI"],
        },
        {
          title: "Sequence Generator",
          timeframe: "2023",
          tagline: "Dynamic multi-touch outreach sequences.",
          impact: [
            "Reduced sequence build time by 90% with persona-aware prompts and battle-card ingestion.",
            "Orchestrated TTS, email, and social messaging cadences with analytics feedback.",
            "Enabled SDRs to launch experiments via low-code knobs and real-time guardrails.",
          ],
          tech: ["Generative AI", "LangChain", "HubSpot", "Calendars"],
        },
      ],
    },
    {
      group: "Data Science & ML",
      items: [
        {
          title: "ADHD & Gender Prediction",
          timeframe: "2024",
          tagline: "Interpretable models for neurodiversity insights.",
          impact: [
            "Engineered features from psychometric surveys, cognitive scores, and behavior logs.",
            "Benchmarked logistic regression, kNN, and XGBoost with SHAP-driven explanations.",
            "Frame fairness narratives for gender-specific symptom expression and clinician adoption.",
          ],
          tech: ["Python", "scikit-learn", "XGBoost", "SHAP"],
        },
        {
          title: "Gesture Prediction",
          timeframe: "2023",
          tagline: "sEMG time-series classification for assistive wearables.",
          impact: [
            "Processed raw biosignals with frequency-domain filtering and window engineering.",
            "Trained ensemble models achieving 82% multi-class accuracy (XGBoost) with low-latency inference.",
            "Delivered confusion matrix dashboards to guide hardware refinement.",
          ],
          tech: ["Python", "scikit-learn", "Signal Processing", "MLOps"],
        },
        {
          title: "Galaxy Type Classification",
          timeframe: "2022",
          tagline: "CNN-assisted astrophotography labeling.",
          impact: [
            "Built transfer learning pipeline with augmentation for Sloan Digital Sky Survey images.",
            "Achieved 88.7% macro accuracy while maintaining interpretability heatmaps.",
            "Packaged results into interactive visualization for astronomy club outreach.",
          ],
          tech: ["TensorFlow", "Keras", "Python", "Visualization"],
        },
        {
          title: "Phishing Website Detection",
          timeframe: "2021",
          tagline: "Hybrid ML + rule engine for web security.",
          impact: [
            "Shipped Flask dashboard exposing model scores and explainability toggles.",
            "Earned 97% accuracy on benchmark dataset with gradient boosted trees.",
            "Documented integration guidelines for corporate SOC adoption.",
          ],
          tech: ["Flask", "scikit-learn", "Python", "UI/UX"],
        },
      ],
    },
    {
      group: "Web Apps & Dashboards",
      items: [
        {
          title: "Data Wiz Pro",
          timeframe: "2024",
          tagline: "Self-serve experimentation studio for ML teams.",
          impact: [
            "Delivered Streamlit workflows to compare preprocessing recipes and export winning models.",
            "Automated experiment tracking with lineage metadata and reproducible notebooks.",
            "Enabled cross-team sharing with access controls and audit trails.",
          ],
          tech: ["Streamlit", "Python", "MLflow", "Docker"],
        },
        {
          title: "Conversation Intelligence",
          timeframe: "2023",
          tagline: "Call analytics with speaker diarization and coaching signals.",
          impact: [
            "Achieved 100% speaker recognition accuracy on benchmarked sales calls.",
            "Parsed transcripts for intent, NER, and sentiment to fuel actionable coaching cues.",
            "Integrated dashboards with near-real-time ingestion and alerting.",
          ],
          tech: ["PyTorch", "AWS", "React", "WebSockets"],
        },
        {
          title: "Zoom Meeting Assistant",
          timeframe: "2022",
          tagline: "Real-time meeting recorder and live stream orchestrator.",
          impact: [
            "Prototyped WebSockets pipeline capturing Zoom feeds and streaming highlights.",
            "Added auto transcription and action item detection for post-call memos.",
            "Enabled secure recording archival with role-based viewing permissions.",
          ],
          tech: ["React", "Python", "Zoom SDK", "WebSockets"],
        },
      ],
    },
    {
      group: "IoT & Experiments",
      items: [
        {
          title: "Phone Verified Leads",
          timeframe: "2023",
          tagline: "Speech-to-action lead qualification platform.",
          impact: [
            "Combined LLM-generated call flows with TTS/STT stacks across Twilio, Plivo, and Telnyx.",
            "Orchestrated verification pipeline that boosted qualified outreach by 120%.",
            "Linked analytics to Mixpanel and HubSpot for closed-loop success measurement.",
          ],
          tech: ["LLMs", "Twilio", "React", "FastAPI", "Mixpanel"],
        },
        {
          title: "IoT Sensing Projects",
          timeframe: "2019 - 2021",
          tagline: "Rapid prototyping across sensors, microcontrollers, and edge analytics.",
          impact: [
            "Built environmental monitors with Arduino and ESP32 nodes reporting to cloud dashboards.",
            "Deployed anomaly detection for predictive maintenance in campus facilities.",
            "Mentored peer teams on electronics assembly, PCB design, and data logging best practices.",
          ],
          tech: ["Arduino", "Edge ML", "Grafana", "MQTT"],
        },
      ],
    },
  ],
  articles: [
    {
      slug: "llm-sales-ops-playbook",
      title: "Designing LLM-Powered Sales Operations That Actually Scale",
      summary:
        "A framework for orchestrating multi-agent pipelines—from data hygiene to compliance—that keep revenue teams focused on conversations, not admin work.",
      published: "2024-11-12",
      readingTime: "8 min read",
      tags: ["LLMs", "Sales Ops", "Automation"],
      body: `
## Why Traditional Automation Breaks

Most sales ops automations are request/response macros. They break when:
- data freshness drops below **95%**
- the workflow spans more than three tools
- compliance audits need traceability

> **Goal**: orchestrate an agentic system where state, decisions, and actions stay observable.

### System Blueprint

1. **Data readiness** — nightly hygiene jobs score enrichment quality and push issues to Slack.
2. **Agent routing** — lightweight policies decide which skill agent (research, sequencing, follow-up) owns the task.
3. **Human checkpoints** — SDRs approve only the highest risk transitions (> 0.7 risk score).

### Observability Contract

~~~sql
SELECT
  job_id,
  stage,
  risk_score,
  approved_by
FROM agent_execution_log
WHERE occurred_at >= NOW() - INTERVAL '7 days';
~~~

Keep this query paginated and charted—compliance loves it.

### Rollout Checklist

- [x] Map every agent action to a CRM or analytics event
- [x] Simulate catastrophic prompts and red-team the fallbacks
- [ ] Train SDRs on escalation macros before flipping 100% traffic

When complete, the ops team becomes orchestrators, not fire-fighters.
`,
    },
    {
      slug: "interpretable-adhd-insights",
      title: "Interpretable ADHD Models for Clinician Adoption",
      summary:
        "How we partnered with clinical researchers to balance predictive accuracy, fairness, and narrative insight for ADHD assessment tooling.",
      published: "2025-02-18",
      readingTime: "6 min read",
      tags: ["Healthcare AI", "Explainability", "Research"],
      body: `
## Partnership Principles

Clinicians ask: *"Can I trust this model for my patient?"* We answered by pairing metrics with narratives.

1. **Transparent features** — start with psychometric scales clinicians recognize.
2. **Fairness audits** — flag demographic skews before tuning hyper-parameters.
3. **Narrative-ready outputs** — convert SHAP attributions into short takeaway paragraphs.

### Model Stack

~~~python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipeline = Pipeline([
    ("scale", StandardScaler()),
    ("clf", LogisticRegression(class_weight="balanced"))
])
~~~

This baseline hit **0.82 F1** while staying explainable. We layered XGBoost later but kept the explainer contract identical.

### Narrative Template

> *The model sees elevated inattention indicators (0.67 SHAP) and behavioral feedback from caregivers (0.54). Tailor the intervention toward sustained attention routines and caregiver coaching.*

Consistency made adoption painless.
`,
    },
    {
      slug: "viz-farm-insights",
      title: "Designing Farm Insight Dashboards for Urban Agriculture",
      summary:
        "Translating crop, soil, and volunteer data into dashboards that keep community-led farms resilient and funded.",
      published: "2025-03-05",
      readingTime: "5 min read",
      tags: ["Data Visualization", "Civic Tech", "Product"],
      body: `
## Start With Personas

- **Farm managers** need irrigation alerts.
- **Volunteers** want shift feedback.
- **Funders** look for impact narratives.

### Dashboard Priorities

1. **Soil + weather alignment** — overlay moisture sensors with NOAA data.
2. **Volunteer velocity** — weekly active volunteers vs. staffing target.
3. **Harvest storytelling** — rolling sum of produce donated, wrapped in short copy blocks.

### Accessibility Wins

- Large, high-contrast typography for outdoor tablets.
- Keyboard-friendly filters for office analysts.
- ALT text describing insight cards for screen readers.

### Outcome

Farms now send a single shareable link during board reviews—no more CSV exports at midnight.
`,
    },
  ],
  downloads: [
    {
      label: "CV",
      file: "/downloads/CV.pdf",
      updated: "2025-02-01",
      sizeKB: 100,
    },
    {
      label: "Resume",
      file: "/downloads/Resume.pdf",
      updated: "2025-02-01",
      sizeKB: 120,
    },
  ],
};

export type SkillsGroupName = (typeof siteContent.skills.groups)[number]["name"];
