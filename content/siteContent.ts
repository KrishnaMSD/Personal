export interface SiteContent {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone?: string;
    headshotSrc: string;
    logoImg: string;
    bioShort: string;
    socials: { label: "GitHub" | "LinkedIn" | "Email" | "X" | "Portfolio" | "Instagram"; href: string }[];
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
        | "DevOps"
        | "Creativity Tools"
        | "Others";
      level: number;
      tools: string[];
    }[];
    polar: {
      title: string;
      metrics: { axis: string; score: number }[];
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
  projects: ProjectGroup[];
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

export interface ProjectGroup {
  group: string;
  description?: string;
  items: ProjectItem[];
}

export interface ProjectItem {
  slug: string;
  title: string;
  timeframe?: string;
  tagline?: string;
  summary: string;
  achievements: string[];
  description: string;
  cardKeywords: string[];
  keywords: string[];
  website?: string;
  links?: { label: "Live" | "GitHub" | "Article" | "Video" | "Download"; href: string }[];
  embed?: { type: "iframe" | "img" | "video"; src: string; alt?: string };
  relevantSlugs: string[];
}

export const siteContent: SiteContent = {
  profile: {
    name: "Krishna Kalakonda",
    title: "Full-Stack Data Scientist",
    location: "Chicago, USA",
    email: "krishnakalakonda123@gmail.com",
    phone: "+1 (872) 314-4245",
    headshotSrc: "/krishna.png",
    logoImg: "/favicon.svg",
    bioShort:
      "Data scientist and full-stack engineer bridging machine learning research with production software. I architect intelligent, explainable systems that turn raw signals into clear, observable outcomes for revenue, risk, and product teams.",
    socials: [
      { label: "GitHub", href: "https://github.com/KrishnaMSD" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/krishnakalakonda" },
      { label: "Instagram", href: "https://www.instagram.com/krishna.kalakonda/" },
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
        level: 95,
        tools: [
          "Python",
          "TypeScript",
          "JavaScript",
          "R",
          "Java",
          "FastAPI",
          "Node.js",
          "Next.js",
          "SQL",
        ],
      },
      {
        name: "Data Visualization",
        level: 90,
        tools: ["Tableau", "Plotly", "Matplotlib", "Power BI", "Seaborn"],
      },
      {
        name: "Machine Learning",
        level: 90,
        tools: [
          "Interpretable ML",
          "LLMs",
          "Time Series",
          "Prompt Engineering",
          "Feature Stores",
        ],
      },
      {
        name: "Database",
        level: 90,
        tools: ["PostgreSQL", "MongoDB", "MySQL", "Snowflake"],
      },
      {
        name: "Cloud",
        level: 50,
        tools: ["AWS", "Docker", "Jenkins", "CI/CD Pipelines"],
      },
      {
        name: "Frontend",
        level: 65,
        tools: ["React", "Next.js", "Tailwind CSS", "Design Systems"],
      },
      {
        name: "DevOps",
        level: 70,
        tools: ["Observability", "Mixpanel", "HubSpot", "Release Automation"],
      },
      {
        name: "Creativity Tools",
        level: 70,
        tools: ["Photoshop", "Canva", "TinkerCAD", "Premiere Pro"],
      },
      {
        name: "Others",
        level: 60,
        tools: ["IoT", "Drone Tech", "3D Printing", "Workshop Facilitation"],
      },
    ],
    polar: {
      title: "Full-Stack Data Scientist",
      metrics: [
        { axis: "Programming", score: 95 },
        { axis: "Cloud", score: 50 },
        { axis: "Artificial Intelligence", score: 90 },
        { axis: "Others", score: 60 },
        { axis: "Database", score: 90 },
        { axis: "Frontend", score: 65 },
        { axis: "Data Visualization", score: 90 },
        { axis: "Dev Ops", score: 70 },
        
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
        "Built a PostgreSQL-backed pipeline that unifies soil health, yield, and volunteer metrics from Chicago community farms.",
        "Designed a React insight portal that spotlights crop health and grant readiness indicators for partner organizations.",
        "Authored data contracts and ingestion workflows so researchers share consistent preprocessing metadata.",
        "Automated anomaly checks that flag data quality risks before they reach analysis notebooks.",
        "Facilitated cross-lab syncs that translate research hypotheses into analytics dashboards and narrative briefs.",
      ],
      tags: ["React", "PostgreSQL", "Data Engineering", "Visualization"],
    },
    {
      role: "Research Assistant",
      org: "DePaul University",
      location: "Chicago, USA",
      start: "Mar 2025",
      end: "Present",
      bullets: [
        "Engineered interpretable ML models that surface gender-specific attention markers from clinical assessments.",
        "Balanced diagnostic accuracy with fairness constraints, improving sensitivity for underrepresented cohorts by 14%.",
        "Translated SHAP-style explanations into clinician-friendly narratives that support individualized interventions.",
        "Ran collaborative review sessions with psychologists to align model outputs with qualitative observations.",
        "Drafted an evaluation rubric that keeps future model iterations auditable and bias-aware.",
      ],
      tags: ["Explainable AI", "Statistics", "Python", "Healthcare"],
    },
    {
      role: "Research Assistant",
      org: "DePaul University",
      location: "Chicago, USA",
      start: "Apr 2025",
      end: "Present",
      bullets: [
        "Mapped 30+ immigration journey pain points to scope AI assistant jobs-to-be-done.",
        "Curated multilingual corpora and speech datasets to fine-tune LLM agents for translation and triage.",
        "Architected a speech-to-decision workflow chaining ASR, translation, and policy recommendation services.",
        "Defined privacy guardrails and fallback flows for sensitive immigration use cases.",
        "Produced product briefs that connect market research insights to roadmap experiments.",
      ],
      tags: ["LLMs", "Product Discovery", "Architecture", "Chatbots", "TTS/STT", "Knowledge Graphs"],
    },
    {
      role: "Associate Data Scientist",
      org: "App Virality (Outplay)",
      location: "Hyderabad, India",
      start: "Jun 2022",
      end: "May 2024",
      bullets: [
        "Launched an objection handling copilot that classifies prospect objections at 95% accuracy and recommends rebuttals in real time.",
        "Deployed a phone-verified contact engine blending LLM call scripts, TTS, and CRM webhooks to lift connect rate by 120%.",
        "Analyzed calls data and system usage to re model the systems that resulted in a 97% reduction in errors and a 3× cost reduction in PVL.",
        "Productized a generative email writer that boosted positive replies by 80% while reducing SDR composition time by 90%.",
        "Designed an AI Sales Agent architecture, automating key workflows to increase the sales outcomes.",
        "Led multiple projects, independently managing the development process from concept to delivery.",
        "Collaborated with cross-functional teams for the integration and deployment of AI tools.",
        "Authored technical blog posts to educate users about company tools, increasing customer engagement.",
        "Recognized as “Top Performer of the Month” for consistently delivering high-impact solutions.",
        "Expanded technical skills in startup environment by contributing in multiple domains, advancing to a full-stack data scientist role.",
      ],
      tags: ["LLMs", "PSQL", "Full Stack", "MLOps", "AI/ML", "Python", "STT/TTS"],
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
        "Documented cross-team ML operations playbooks adopted by engineering, product, and customer success teams.",
        "Presented iteration reviews that clarified risks, dependencies, and experiment outcomes for leadership.",
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
    {
      degree: "High School",
      school: "Pudami School",
      location: "Yacharam, Telangana, India",
      start: "Jun 2010",
      end: "May 2016",
      gpa: "10 / 10",
    },
  ],
  activities: [
    {
      section: "Workshops",
      title: "Drone Technology Intensive",
      date: "2017",
      bullets: ["Hands-on build of quadcopters, flight tuning, and mission planning workflows."],
    },
    {
      section: "Workshops",
      title: "3D Printing & CAD Bootcamp",
      date: "2017",
      bullets: ["Modeled and fabricated custom enclosures for IoT sensor deployments."],
    },
    {
      section: "Workshops",
      title: "Astrophysics Bootcamp",
      date: "2018",
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
      date: "2018",
    },
    {
      section: "Awards",
      title: "School Academic Rank #1",
      date: "2012 — 2016",
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
      section: "Extracurricular",
      title: "School People Leader",
      date: "2014 — 2015",
      bullets: ["Represented student voice, orchestrated cultural festivals, and coordinated alumni outreach."],
    },
    {
      section: "Extracurricular",
      title: "Sports Captain",
      date: "2012 — 2021",
      bullets: ["Captained handball, football, and table tennis squads while mentoring junior athletes."],
    },
    {
      section: "Extracurricular",
      title: "Peer Mentor",
      date: "2018 — 2021",
      bullets: ["Guided juniors on career paths and emerging tech via seminars, workshops, and office hours."],
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
      description: "Systems that pair language models with productized workflows for revenue teams.",
      items: [
        {
          slug: "ai-sales-agent",
          title: "AI Sales Agent",
          timeframe: "2024",
          tagline: "Agentic SDR automation blueprint",
          summary:
            "Architected a multi-agent system that connects Outplay's lead research, sequencing, email, and scheduling modules into one autonomous SDR assistant.",
          achievements: [
            "Mapped end-to-end workflows so an AI agent can progress prospects from research to booked meetings.",
            "Defined dual autopilot and co-pilot modes to balance automation with human approvals.",
          ],
          description: [
            "Sales Development Representatives (SDRs) spend considerable time on routine tasks: sourcing qualified leads, drafting personalized emails, scheduling follow-ups, and handling objections. While Outplay’s platform already provided standalone tools—Lead Generator, Sequence Generator, Magic Mail (email writer), Objection Handler, and calendar integration—these modules were siloed and required manual orchestration. The challenge was to create a unified system that could leverage these components to automatically mimic an SDR’s workflow, freeing them to focus on high-value activities.",
            "",
            "The AI Sales Agent initiative reimagined the sales process as a fully automated pipeline. SDRs would begin by choosing an agent profile—such as an agent specialized in engaging executives at start-up companies. The system would then use the Lead Generator to identify qualified prospects based on historical data and predefined criteria. Once a list of leads was generated, the Sequence Generator would craft a personalized outreach plan for each prospect, incorporating both timing and messaging across multiple channels (emails, calls, LinkedIn, etc.). Next, the Magic Mail component would generate the actual email content—both initial outreach and replies—while the Objection Handler would manage and respond to prospect objections with appropriate context.",
            "",
            "The final objective of the agent was to schedule a meeting. To achieve this, the agent continuously executed the sequence until a booking was secured, automatically sending follow-ups and updating the prospect’s status. Prospects were sorted into buckets such as follow-up executives, no response, not interested, or budget issues. Each bucket triggered a different agent workflow with customized sequences aimed at nudging the prospect toward a meeting. The architecture also defined two modes of operation: Autopilot, where the AI agent handled everything from lead sourcing to meeting booking without human intervention, and Co-pilot, where the agent executed each step but waited for SDR approval before proceeding. This dual-mode design ensured flexibility, allowing SDRs to maintain control or hand off the process entirely depending on their preferences.",
            "",
            "Although the full implementation was not completed before departing for graduate studies, the project delivered a comprehensive architectural blueprint that outlined data flows, module interactions, error handling, and scalability considerations. It laid the groundwork for a future where AI-driven agents could handle SDR tasks end-to-end, promising to dramatically increase efficiency and consistency in sales outreach while ensuring personalization and compliance with each company’s unique policies.",
          ].join("\n"),
          cardKeywords: ["Multi-agent AI", "Sales Automation", "Architecture Design"],
          keywords: [
            "AI Automation",
            "Multi-Agent Systems",
            "Sales Enablement",
            "Sales Automation",
            "Workflow Orchestration",
            "Natural Language Processing",
            "Prompt Engineering",
            "Architecture Design",
            "Data Integration",
          ],
          website: "https://outplay.ai/SDR-agent",
          relevantSlugs: ["sureconnect-phone-verified-leads", "magic-mail", "sequence-generator"],
        },
        {
          slug: "sureconnect-phone-verified-leads",
          title: "SureConnect",
          timeframe: "2023 — 2024",
          tagline: "LLM-powered phone verification",
          summary:
            "Built an AI calling agent that verifies lead contact data across telephony providers, keeping sales pipelines accurate and responsive.",
          achievements: [
            "Reduced verification costs 3× and accelerated processing 5× by refactoring call orchestration.",
            "Lifted contact validation accuracy from 88% to 94% through error log analytics and architecture cleanup.",
          ],
          description: [
            "In sales-driven organizations, time is critical. Sales Development Representatives (SDRs) spend significant time verifying lead contact details, but unreliable information leads to wasted calls, voicemails, or unanswered attempts. This inefficiency takes valuable time away from high-priority tasks, like engaging genuine prospects, and contributes to missed opportunities in the sales pipeline. The challenge was to create a scalable, cost-effective solution that allowed SDRs to focus more on closing deals and less on administrative work.",
            "",
            "SureConnect was developed to automate the phone verification process using AI-powered calling agents. The system aimed to streamline the validation of lead contact details through automated conversations, utilizing Text-to-Speech (TTS), Speech-to-Text (STT), and chatbot technologies. However, early deployment revealed several bottlenecks: the system was slow, error-prone, and costly due to its reliance on Twilio, hindering its scalability and performance.",
            "",
            "To resolve these issues, a review of alternative calling providers led to the adoption of Plivo and Telnyx, which were 60% cheaper than Twilio. Additionally, it was found that the TTS process consumed over 50% of system resources, with 95% of calls not needing the assistant to speak once the lead's name was identified. Based on these insights, the TTS module was removed for most calls, significantly improving system efficiency by reducing both time and resource consumption.",
            "",
            "The architecture was further optimized by modularizing the system, separating the caller API, TTS, transcription, chatbot, and AI helpers into individual components. This not only enhanced flexibility and scalability but also simplified maintenance. A new CallerManager module was introduced, seamlessly integrating multiple APIs (Twilio, Plivo, Telnyx), enabling easy switching between providers.",
            "",
            "In addition to backend improvements, I also led the development of the SureConnect website from start to finish. Developed using React, the website provided users with an intuitive interface to monitor calls, view results, and interact with the system, ensuring a seamless experience for both clients and internal users.",
            "",
            "These optimizations resulted in substantial improvements: call duration dropped from 45 seconds to 15 seconds, making the system 5 times faster and 3 times cheaper. Error rates decreased by 97%, while the accuracy of lead validation increased from 88% to 94%. These improvements not only reduced operational costs but also significantly boosted the efficiency of the lead verification process by 120%. For my contributions, I was recognized as the best employee of the month, showcasing how thoughtful design and continuous optimization can transform a system into a high-performing, cost-effective solution.",
          ].join("\n"),
          cardKeywords: ["Chatbot", "Multimodal modelling", "Sales Automation"],
          keywords: [
            "Lead Verification",
            "Speech-to-Text",
            "Text-to-Speech",
            "Speech Models",
            "Chatbot",
            "API Development",
            "Web Development",
            "SQL",
            "Twilio",
            "Plivo",
            "Telnyx",
            "FastAPI",
            "AWS",
            "Error Analysis",
            "System Architecture",
            "Multimodal Modelling",
            "Huggingface",
            "Transformers",
            "Python"
          ],
          website: "http://sureconnect.ai",
          relevantSlugs: ["ai-sales-agent", "objection-handling-copilot", "sequence-generator"],
        },
        {
          slug: "magic-mail",
          title: "Magic Mail",
          timeframe: "2023",
          tagline: "Persona-tuned generative email copy",
          summary:
            "Shipped an LLM email composer that tailors tone, sequencing, and data cues for every SDR persona.",
          achievements: [
            "Captured product intel, objections, and personas to personalize outbound email content.",
            "Boosted positive reply rates by 80% across 40 pilot customers.",
          ],
          description: [
            "Sales Development Representatives (SDRs) spend a significant amount of time crafting personalized emails to engage with prospects. However, this process is both time-consuming and requires creativity, as many SDRs struggle to effectively incorporate key prospect details or tackle objections raised by prospects. This inefficiency often results in wasted time and missed opportunities. The need for a solution that could help SDRs quickly generate personalized, creative, and engaging emails became apparent.",
            "",
            "Magic Mail was developed to automate the email drafting process using generative AI. The solution aimed to write highly personalized emails that took into account the details of each prospect, helping SDRs save time while increasing the likelihood of a response. The system was also designed to craft responses to objections, enabling SDRs to address concerns and maintain the conversation flow without manually drafting each reply.",
            "",
            "To build the system, a comprehensive analysis was conducted on existing sales emails written by SDRs. This analysis provided insights into the most effective strategies, personalized lines, and common objections. Additionally, research was done to identify the best email structures for maximizing response rates. With these insights in hand, experiments were conducted using Large Language Models (LLMs) to generate emails with varying prompt structures to find the best approach for high-quality, engaging content.",
            "",
            "A diverse dataset of prospect details and email exchanges was then curated to fine-tune the AI model. The model was trained to generate personalized emails by considering each prospect's specific information, such as their industry, previous interactions, and unique needs. Similarly, a dataset of common objections and responses was used to train the system to generate effective replies that tackled prospects' concerns. The final model, fine-tuned and continuously improved, provided results that surpassed existing models, giving SDRs an effective tool to engage with prospects efficiently.",
            "",
            "Magic Mail successfully reduced the time spent by SDRs on drafting emails by 250% while also improving the email outreach by 80%. By automating the process of email creation and response handling, SDRs were able to focus on more strategic tasks, like relationship-building, and significantly improve their outreach efforts. The system continuously evolved, incorporating feedback and industry best practices to create a tool that adapted to changing needs and maximized effectiveness for sales teams.",
          ].join("\n"),
          cardKeywords: ["Generative AI", "Sales Automation", "Prompt Engineering"],
          keywords: [
            "Email Personalization",
            "Prompt Engineering",
            "Generative AI",
            "Sales Enablement",
            "Sales Copywriting",
            "Knowledge Bases",
            "LLM Fine-Tuning",
            "Workflow Automation",
            "Fast API",
            "Postgre SQL",
            "Python"
          ],
          website: "https://outplay.ai/ai-for-sales",
          relevantSlugs: ["sequence-generator", "ai-sales-agent", "objection-handling-copilot"],
        },
        {
          slug: "objection-handling-copilot",
          title: "Objection Handling",
          timeframe: "2022 — 2023",
          tagline: "Real-time rebuttals for sales objections",
          summary:
            "Delivered a copilot that classifies objections in sales conversations and surfaces context-aware rebuttals.",
          achievements: [
            "Trained intent and NER models that tag objections with 95% accuracy.",
            "Linked rebuttal playbooks to deal stage, persona, and sentiment cues.",
          ],
          description: [
            "Sales Development Representatives (SDRs) face significant challenges in identifying objections like budget, timing, competitor, authority, and information in prospect emails. Manually reading through emails to pinpoint these objections can be time-consuming, leading to inefficiencies and delayed responses. The goal was to build a system that automatically detects objections, allowing SDRs to prioritize their time and engage with the most promising leads.",
            "",
            "The solution was built using Named Entity Recognition (NER), a powerful NLP technique to detect and categorize objections in emails. A diverse dataset of prospect emails was created, with each email labeled based on the type of objection it contained. Label Studio was used for efficient data annotation, ensuring that the emails were accurately labeled with the corresponding objections. Once the dataset was prepared, the SPACY framework was used to fine-tune a base model for objection detection. Multiple versions of the model were tested to optimize performance, and the best version was selected, achieving a 95% model accuracy.",
            "",
            "To improve the SDR workflow, an API was developed to integrate the objection-detection system with existing sales tools. This API allowed SDRs to easily filter emails based on the prospect’s interest or objections, enabling them to focus on high-priority emails. The system automatically categorized emails into interested, objections, and not interested buckets, allowing SDRs to prioritize responses efficiently and reduce time spent on unresponsive leads.",
            "",
            "The final solution enabled SDRs to automatically detect objections, significantly reducing the time spent manually reading and sorting emails. By streamlining the objection-handling process, the system helped SDRs respond faster, prioritize more effectively, and ultimately improve their productivity and sales performance.",
          ].join("\n"),
          cardKeywords: ["NER", "Huggingface", "NLP", "spaCy"],
          keywords: [
            "Objection Classification",
            "Named Entity Recognition (NER)",
            "Sales Coaching",
            "Enablement Playbooks",
            "Conversation Intelligence",
            "Huggingface",
            "spaCy",
            "Fast API",
            "Postgre SQL",
            "Python"
          ],
          website: "https://outplay.ai/ai-for-sales",
          relevantSlugs: ["magic-mail", "sequence-generator", "sureconnect-phone-verified-leads"],
        },
        {
          slug: "sequence-generator",
          title: "Sequence Generator",
          timeframe: "2023",
          tagline: "Adaptive multi-touch outreach",
          summary:
            "Created a generative engine that assembles personalized multi-channel outreach sequences in minutes instead of hours.",
          achievements: [
            "Cut sequence build time by 90% with persona-aware prompts and context ingestion.",
            "Streamed each step to the UI as soon as it was ready so SDRs could review progressively.",
          ],
          description: [
            "Sales Development Representatives (SDRs) face a common challenge in creating personalized sales sequences. These sequences typically involve 6 to 10 steps and need to be tailored to various factors such as industry, company type, and prospect details. Creating these sequences manually takes a significant amount of time, often leading to the use of unpersonalized, generic sequences. This reduces engagement and effectiveness. The need was to automate and speed up the process, enabling SDRs to create personalized sequences quickly while still maintaining high quality.",
            "",
            "The Sequence Generator was designed to address these pain points by automating the creation of personalized sales sequences. Using inputs like product details, sales points, and prospect information, the system generates optimized sequences in just a few minutes, compared to the hours typically required for manual creation. Generative AI was used to design the sequence steps and generate content, making the sequence both effective and personalized for the prospect.",
            "",
            "A significant part of the development was focused on the API development and database architecture. The unstructured data related to sequences and prospects was stored in MongoDB, allowing flexible and scalable storage. The system also addressed a key user experience issue: AI-generated sequences took around 50 seconds to complete. To avoid keeping the user waiting, the system was enhanced to send each step's content as soon as it was ready, allowing the SDR to review and approve steps progressively rather than waiting for the entire sequence to finish.",
            "",
            "Another pain point identified was that AI-generated sequences could sometimes be near perfect, except for one step. If the entire sequence had to be regenerated due to one suboptimal step, it would be inefficient. To solve this, a feature was added to allow re-generation of individual steps, based on additional context provided by the SDR on what to improve. This made the process more logical, efficient, and reliable, saving time and preventing unnecessary rework.",
            "",
            "The Sequence Generator provided flexibility, speed, and precision, helping SDRs create high-quality, personalized sequences much faster. With the ability to experiment with different types of outreach (emails, calls, LinkedIn messages) and dynamically add or adjust steps, the tool significantly enhanced productivity and improved the overall efficiency of the sales outreach process.",
          ].join("\n"),
          cardKeywords: ["Generative AI", "MongoDB", "Fast API"],
          keywords: [
            "Outreach Automation",
            "Generative AI",
            "Persona Personalization",
            "MongoDB",
            "Real-time UX",
            "Sales Operations",
            "API Development",
            "Workflow Automation",
            "Prompt Engineering",
            "Python"
          ],
          website: "https://outplay.ai/ai-sequence-generator",
          relevantSlugs: ["magic-mail", "ai-sales-agent", "sureconnect-phone-verified-leads"],
        },
      ],
    },
    {
      group: "Data Science & ML",
      description: "Research-driven analytics projects that balance interpretability with measurable outcomes.",
      items: [
        {
          slug: "adhd-gender-prediction",
          title: "ADHD & Gender Prediction",
          timeframe: "2024",
          tagline: "Interpretable neurodiversity insights",
          summary:
            "Modeled ADHD diagnosis indicators with fairness-aware pipelines that keep clinicians in the loop.",
          achievements: [
            "Engineered features from psychometric surveys, cognitive scores, and behavioral logs.",
            "Benchmarked logistic regression, kNN, and XGBoost with explainability overlays clinicians trust.",
          ],
          description: [
            "Clinicians needed gender-aware ADHD insights that remained transparent and defensible while still delivering strong predictive performance. The project focused on building a pipeline that could surface attention markers by gender without sacrificing interpretability.",
            "",
            "I engineered features from psychometric surveys, cognitive assessments, and behavioral logs, then experimented with models ranging from logistic regression to XGBoost. Each iteration paired accuracy benchmarks with fairness audits so cohort-level sensitivity stayed balanced. SHAP-style explanations were translated into clinician-friendly narratives, ensuring results could be discussed in the context of real patient experiences.",
            "",
            "The resulting workflow achieved a 0.82 F1 score while raising sensitivity for underrepresented gender cohorts by 14%. Comprehensive documentation, evaluation rubrics, and bias reviews created a repeatable path for future IRB approvals and kept clinical partners confident in how the model evolved.",
          ].join("\n"),
          cardKeywords: ["Clinical Analytics", "Interpretable ML", "Python"],
          keywords: [
            "Healthcare AI",
            "Feature Engineering",
            "Explainability",
            "Logistic Regression",
            "XGBoost",
            "Gender Insights",
          ],
          relevantSlugs: ["gesture-prediction", "data-viz-pro", "galaxy-type-classification"],
        },
        {
          slug: "gesture-prediction",
          title: "Gesture Prediction",
          timeframe: "2024",
          tagline: "sEMG-driven assistive models",
          summary:
            "Classified muscle signals using ensemble models to power responsive assistive wearables.",
          achievements: [
            "Processed raw biosignals with frequency-domain filtering and window engineering.",
            "Benchmarked ensemble models, landing on XGBoost with 82.6% accuracy.",
          ],
          description: [
            "Surface electromyography (sEMG) signals capture muscle activity and power prosthetics, rehabilitation programs, and human-computer interaction systems. Yet the signals are noisy and highly variable across participants, making gesture classification difficult. This course project tackled that challenge by building an end-to-end pipeline to recognize hand and wrist gestures from raw sEMG recordings.",
            "",
            "The work began by sourcing a multi-subject dataset in which forty participants performed ten gestures plus a rest state, with four forearm electrodes sampled at 2 kHz. I applied a sixth-order Butterworth bandpass filter (5-500 Hz) and a notch filter at 50 Hz to suppress interference, then segmented the signals into 250 ms windows with 50% overlap to preserve temporal dynamics.",
            "",
            "Feature extraction was comprehensive: twenty-four time- and frequency-domain metrics per channel—mean absolute value, RMS, variance, zero crossings, spectral power, mean and median frequency, entropy, Hjorth parameters, and more—yielded 96 features per segment. Exploratory analysis and correlation studies guided transformations to reduce skew and temper outliers.",
            "",
            "To avoid overfitting, I pruned highly correlated features, evaluated ensemble feature importances, and used backward elimination to isolate the most discriminative signals. The dataset split participants between training and test sets to prevent leakage, retaining generalization across unseen subjects.",
            "",
            "Multiple classifiers—Decision Trees, Random Forests, XGBoost, and Support Vector Machines—were tuned via grid search with accuracy, precision, recall, and F1-score benchmarks. XGBoost achieved 82.6% multi-class accuracy, outperforming Random Forests (70.6%) and Decision Trees (65.3%), while a dedicated rest-versus-activity classifier reached roughly 90% accuracy.",
            "",
            "The result is a reproducible sEMG analytics workflow that pairs robust preprocessing with ensemble learning to deliver reliable intent detection for assistive wearables. The notebooks document calibration guidance and evaluation dashboards so future teams can extend the models or port them to embedded hardware.",
          ].join("\n"),
          cardKeywords: ["Signal Procesing", "Time-Series ML", "Data Analysis"],
          keywords: [
            "Signal Processing",
            "Feature Engineering",
            "Decision Trees",
            "Feature Selection",
            "XGBoost",
            "Time-Series Classification",
            "Analytics",
          ],
          links: [{ label: "Download", href: "/downloads/gesture-prediction.pdf" }],
          relevantSlugs: ["adhd-gender-prediction", "iot-sensing-projects", "galaxy-type-classification"],
        },
        {
          slug: "galaxy-type-classification",
          title: "Galaxy Type Classification",
          timeframe: "2022",
          tagline: "Transfer learning for astronomy",
          summary:
            "Adapted machine learning algorithms to classify galaxy types based on shape and roatation",
          achievements: [
            "Trained multinomial logistic regression model to reach 88.7% macro accuracy.",
            "Manually created the multinomial logistic regression model using logistic regression base models.",
          ],
          description: [
            "Analyzed the galaxy types dataset to identify the properties that decide the type of galaxy. The types were classified into Spiral, Elliptical and Uncertain.",
            "",
            "The course project needed us to try using regression models for classification. Since this is a multi class classification, we had to use multinomial logistic regression model. ",
            "",
            "Out of curiosity, we have created the logistic regression model for each shape and then combined all three models using arg max function to create the mulltinomial regression model.",
            "",
            "We have found that the sensitivity, specificity and accuracy of both models came out to be the same proving that logistic regression models are base for multinomial regression model."
          ].join("\n"),
          cardKeywords: ["Regression", "Visualization", "Analytics"],
          keywords: [
            "Astrophysics",
            "Data Augmentation",
            "Feature Engineering",
            "Feature Selection",
            "Logistic Regression",
            "Multinomial Regression",
            "R language"
          ],
          relevantSlugs: ["adhd-gender-prediction", "gesture-prediction", "phishing-website-detection"],
        },
        {
          slug: "phishing-website-detection",
          title: "Phishing Website Detection",
          timeframe: "2021",
          tagline: "URL intelligence for cybersecurity",
          summary:
            "Merged disparate phishing datasets and built machine learning models for real-time URL classification.",
          achievements: [
            "Engineered 30+ URL-based features by synthesizing two public datasets.",
            "Trained Random Forest and KNN models achieving 97% and 92% accuracy respectively.",
          ],
          description: [
            "Phishing attacks remain a pervasive security threat, exploiting unwary users by mimicking legitimate websites to steal sensitive information. This academic project set out to build a machine learning model that could classify phishing sites based solely on URL-derived features, reducing reliance on manual rules or user training.",
            "",
            "Two public phishing datasets were combined by manually extracting missing attributes with URL heuristics and DNS lookups. After preprocessing and encoding, multiple algorithms were evaluated—Random Forest, Decision Tree, XGBoost, and KNN—to identify the most reliable classifier. Random Forest delivered the strongest performance at 97% accuracy, with KNN close behind at 92%.",
            "",
            "To make the model usable, I wrapped it in a Flask web app where users could enter URLs and receive instant legitimacy predictions. The tool demonstrated how ensemble learning and thoughtful feature engineering could be packaged into an accessible cybersecurity assistant.",
          ].join("\n"),
          cardKeywords: ["Flask", "Random Forest", "Feature Extraction"],
          keywords: [
            "Cybersecurity",
            "Random Forest",
            "Feature Engineering",
            "Flask",
            "Web Application",
            "Threat Detection",
            "Decision Trees",
            "kNN"
          ],
          relevantSlugs: ["data-viz-pro", "gesture-prediction", "galaxy-type-classification"],
        },
      ],
    },
    {
      group: "Web Apps & Dashboards",
      description: "Interactive products that surface insights for business and academic partners.",
      items: [
        {
          slug: "data-viz-pro",
          title: "Data Viz Pro",
          timeframe: "2025",
          tagline: "No-code analytics studio",
          summary:
            "Built a Streamlit platform that guides beginners from raw datasets to trained models with side-by-side insight panels.",
          achievements: [
            "Launched a guided workflow covering upload, cleaning, visualization, modeling, and export.",
            "Implemented dual-panel previews so users see how preprocessing changes affect plots and tables.",
          ],
          description: [
            "For many aspiring data scientists, diving into analysis can be overwhelming. Typical workflows demand scripting, cleaning, visualizing, and modeling—often without a clear sense of how each preprocessing step reshapes the data. Data Viz Pro was created as a no-code Streamlit studio that demystifies this journey.",
            "",
            "The app walks users through uploading CSV or Excel files, profiling datasets, and generating plots with Pandas, NumPy, Matplotlib, and Seaborn under the hood. Its signature experience is a side-by-side panel where the original dataset sits opposite the transformed view, so every dropped column, data type conversion, or imputed value is immediately reflected.",
            "",
            "When users advance to modeling, they can train scikit-learn algorithms, review train/test metrics, and download both the cleaned dataset and model artifacts. The result is an approachable yet rigorous playground that empowers classrooms and newcomers to experiment with end-to-end workflows in minutes.",
          ].join("\n"),
          cardKeywords: ["Data Visualization", "Streamlit", "Model Ops"],
          keywords: [
            "Streamlit",
            "Data Visualization",
            "Educational Tools",
            "Model Evaluation",
            "Interactive Dashboards",
            "Dashboards",
            "Analytics",
            "Web Development",
          ],
          relevantSlugs: ["conversation-intelligence", "adhd-gender-prediction", "phishing-website-detection"],
        },
        {
          slug: "conversation-intelligence",
          title: "Conversation Intelligence",
          timeframe: "2023",
          tagline: "Sales call analytics",
          summary:
            "Engineered an AI-powered analysis suite that scores sales calls, pinpoints objections, and surfaces next steps.",
          achievements: [
            "Achieved 100% speaker identification accuracy using SpeechBrain embeddings.",
            "Built a call scoring model spanning tone, action items, and objection handling metrics.",
          ],
          description: [
            "Sales organizations struggle to manually review every call and coach SDRs on follow-up execution. Conversation Intelligence tackled this by automating transcription, speaker identification, tone analysis, next-step extraction, objection detection, and call scoring.",
            "",
            "Kafka queued post-call tasks, after which backend services generated transcripts, diarized speakers, and fed generative and rule-based pipelines to surface action items. SpeechBrain embeddings unlocked 100% speaker recognition, while objection detection models highlighted common friction points.",
            "",
            "The system culminated in dashboards that put call scores, module-specific metrics, and coaching cues in front of managers. By packaging detailed analytics into an accessible view, SDRs received faster feedback and operations teams gained the data needed to prioritize training.",
          ].join("\n"),
          cardKeywords: ["Data Analytics", "Generative AI", "Multimodal modelling"],
          keywords: [
            "Speech Recognition",
            "Speaker Identification",
            "Text to speech",
            "Transcription",
            "Call Scoring",
            "Named Entity Recognition (NER)",
            "NLP",
            "Speech Models",
            "Analytics",
            "Dashboards",
            "Sales Enablement",
            "WebSockets",
          ],
          website: "https://outplay.ai/features/conversation-intelligence-software",
          relevantSlugs: ["sureconnect-phone-verified-leads", "magic-mail", "ai-sales-agent"],
        },
        {
          slug: "zoom-meeting-assistant",
          title: "Zoom Meeting Assistant",
          timeframe: "2022",
          tagline: "Real-time meeting capture proof-of-concept",
          summary:
            "Researched and prototyped automation that records Zoom calls and streams highlights without manual effort.",
          achievements: [
            "Evaluated Zoom SDK pathways to automate recording and live streaming reliably.",
            "Developed bots that join meetings, capture audio/video, and push via WebSockets for live analytics.",
          ],
          description: [
            "Sales teams needed a reliable way to capture Zoom meetings and stream them into analytics tools without manual effort. This proof of concept explored how far automation could go within Zoom’s SDK ecosystem.",
            "",
            "I researched Web and Meeting SDK capabilities, prototyped bots that auto-joined sessions, started recordings, and streamed audio/video via WebSockets for live analysis. Alongside technical experiments, I evaluated competing products and identified a partner that met requirements at a lower operational cost.",
            "",
            "The outcome validated automation feasibility, provided leadership with a pragmatic build-vs-buy recommendation, and fed critical learnings into subsequent Conversation Intelligence initiatives.",
          ].join("\n"),
          cardKeywords: ["Websockets", "Real-time Streaming", "Automation", "Prototype"],
          keywords: [
            "Zoom SDK",
            "Real-time Streaming",
            "API Integration",
            "Fast API",
            "Python",
            "WebSockets",
            "Product Discovery",
          ],
          relevantSlugs: ["conversation-intelligence", "sureconnect-phone-verified-leads", "sequence-generator"],
        },
      ],
    },
    {
      group: "IoT & Experiments",
      description: "Experimentation across hardware, edge analytics, and sensor-driven storytelling.",
      items: [
        {
          slug: "iot-sensing-projects",
          title: "IoT Sensing Projects",
          timeframe: "2019 — 2021",
          tagline: "Sensor-driven insights for campus infrastructure",
          summary:
            "Delivered a suite of IoT prototypes that monitor environments, detect anomalies, and train peers on hardware best practices.",
          achievements: [
            "Built environmental monitors with Arduino and ESP32 nodes reporting to cloud dashboards.",
            "Developed predictive maintenance alerts that flag anomalies before downtime.",
          ],
          description: [
            "Campus operations teams needed affordable ways to monitor environmental conditions across labs and dorms. I led a series of IoT prototypes that combined Arduino and ESP32 hardware with  dashboards to surface real-time insights.",
            "",
            "We instrumented sensors for temperature, humidity, and vibration, implemented lightweight edge analytics to flag anomalies, and built dashboards so staff could triage maintenance issues before they escalated. Documentation and workshops helped student teams replicate and extend each build.",
            "",
            "The initiative reduced downtime risk, equipped facilities staff with actionable telemetry, and inspired iterative student-led projects that reused the modular architecture.",
          ].join("\n"),
          cardKeywords: ["Embedded Systems", "Arduino", "IoT Coaching"],
          keywords: [
            "Arduino",
            "Sensor Networks",
            "Data Dashboards",
            "Dashboards",
            "Analytics",
            "Student Mentorship",
            "Embedded C"
          ],
          relevantSlugs: ["gesture-prediction", "data-viz-pro", "zoom-meeting-assistant"],
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

export interface ProjectWithGroup extends ProjectItem {
  group: string;
}

export const projectEntries: ProjectWithGroup[] = siteContent.projects.flatMap((group) =>
  group.items.map((item) => ({
    ...item,
    group: group.group,
  }))
);

export const projectIndex: Record<string, ProjectWithGroup> = Object.fromEntries(
  projectEntries.map((item) => [item.slug, item])
);
