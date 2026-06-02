export interface SiteContent {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
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
        | "MLOps"
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
    section: "Workshops" | "Hackathons" | "Extracurricular" | "Awards" | "Certifications";
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
    email: "kkalakon@depaul.edu",
    headshotSrc: "/krishna1.png",
    logoImg: "/favicon.svg",
    bioShort:
      "Full-stack data scientist with 3+ years of experience building AI-driven tools, data products, and analysis applications. I combine machine learning, full-stack development, and market research to turn complex business problems into clear, production-ready systems.",
    socials: [
      { label: "GitHub", href: "https://github.com/KrishnaMSD" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/krishnakalakonda" },
      { label: "Instagram", href: "https://www.instagram.com/krishna.kalakonda/" },
      { label: "Email", href: "mailto:kkalakon@depaul.edu" },
    ],
    stats: [
      { label: "Years of experience", value: 3, suffix: "+" },
      { label: "Projects shipped", value: 15, suffix: "+" },
      { label: "ML models deployed", value: 9 },
      { label: "Research roles", value: 3 },
    ],
  },
  skills: {
    groups: [
      {
        name: "Programming",
        level: 95,
        tools: [
          "Python",
          "R",
          "JavaScript",
          "Java",
          "C",
          "Matlab",
          "HTML",
          "CSS",
          "SQL",
          "FastAPI",
          "REST API",
          "Flask",
          "Streamlit",
          "LangChain",
        ],
      },
      {
        name: "Machine Learning",
        level: 90,
        tools: [
          "Scikit-learn",
          "PyTorch",
          "TensorFlow",
          "LLMs",
          "NLP",
          "Deep Learning",
          "Time Series",
          "Prompt Engineering",
          "RAG",
        ],
      },
      {
        name: "Data Visualization",
        level: 90,
        tools: ["Tableau", "Plotly", "Matplotlib", "Seaborn", "Streamlit"],
      },
      {
        name: "Database",
        level: 90,
        tools: ["PostgreSQL", "MongoDB", "MySQL"],
      },
      {
        name: "Frontend",
        level: 75,
        tools: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
      },
      {
        name: "Cloud",
        level: 75,
        tools: ["AWS", "Docker", "Jenkins", "Kubeflow", "Confluence"],
      },
      {
        name: "MLOps",
        level: 70,
        tools: ["Git", "JIRA", "DataDog", "Mixpanel", "HubSpot", "CI/CD", "Model Monitoring"],
      },
      {
        name: "Creativity Tools",
        level: 70,
        tools: ["Photoshop", "Canva", "Premiere Pro", "Tinker CAD"],
      },
      {
        name: "Others",
        level: 60,
        tools: ["IoT", "Drone Tech", "3D Printing"],
      },
    ],
    polar: {
      title: "Full-Stack Data Scientist",
      metrics: [
        { axis: "Programming", score: 95 },
        { axis: "Machine Learning", score: 90 },
        { axis: "Data Visualization", score: 90 },
        { axis: "Database", score: 90 },
        { axis: "Frontend", score: 75 },
        { axis: "Cloud", score: 75 },
        { axis: "MLOps", score: 70 },
        { axis: "Others", score: 60 },
      ],
    },
  },
  experience: [
    {
      role: "Full-Stack Data Science Intern",
      org: "Illuminating Impact",
      location: "Chicago, USA",
      start: "Jan 2026",
      end: "Present",
      bullets: [
        "Perform market analysis on the existing case management platform to identify product and AI opportunities.",
        "Review production code, push fixes, and improve reliability across full-stack application workflows.",
        "Build AI architecture for platform features that combine research, product discovery, and implementation planning.",
      ],
      tags: ["Full Stack", "AI Architecture", "Market Analysis", "Product"],
    },
    {
      role: "Research Assistant -- ADHD Assessment",
      org: "DePaul University",
      location: "Chicago, USA",
      start: "Mar 2025",
      end: "Present",
      bullets: [
        "Perform in-depth statistical analysis on ADHD assessment data to uncover behavioral patterns across genders.",
        "Apply machine learning techniques to build interpretable models for predicting ADHD diagnosis and gender.",
        "Explore gender-specific variations in ADHD indicators, contributing to more personalized assessment strategies.",
      ],
      tags: ["Explainable AI", "Statistics", "Python", "Healthcare"],
    },
    {
      role: "Research Assistant -- AI Immigration Tools",
      org: "DePaul University",
      location: "Chicago, USA",
      start: "Apr 2025",
      end: "Present",
      bullets: [
        "Conduct market research on AI-powered tools supporting immigration services.",
        "Identify relevant datasets for fine-tuning LLMs for multilingual immigrant support.",
        "Design system architecture for an AI assistant capable of speech recognition, translation, and personalized recommendations.",
      ],
      tags: ["LLMs", "Architecture", "TTS/STT", "Speech Recognition"],
    },
    {
      role: "Graduate Student Assistant",
      org: "DePaul University",
      location: "Chicago, USA",
      start: "Feb 2025",
      end: "Jun 2025",
      bullets: [
        "Conducted data analysis on Chicago food farms to support research on local food systems.",
        "Designed and implemented database architecture for efficient storage and management of preprocessed farm data.",
        "Designed a React dashboard for viewing farm data and partner-facing analysis outputs.",
        "Collaborated with fellow research assistants to ensure data quality and consistency for downstream analysis.",
      ],
      tags: ["React", "PostgreSQL", "Data Engineering", "Visualization"],
    },
    {
      role: "Associate Data Scientist",
      org: "App Virality Technologies Pvt Ltd (Outplay)",
      location: "Hyderabad, India",
      start: "Jun 2022",
      end: "May 2024",
      bullets: [
        "Developed multiple AI tools using LLMs and automation, leading to 80% improvement in email outreach.",
        "Troubleshot API and system errors, optimizing code to reduce errors by 90% and cut costs 3x.",
        "Designed an AI Sales Agent architecture, automating key workflows to increase sales outcomes.",
        "Built an objection handler using NER models to identify objections in sales emails with 95% accuracy.",
        "Collaborated with cross-functional teams to integrate, deploy, and monitor AI tools across the product stack.",
        "Led multiple projects independently, managing the development process from concept to delivery.",
        "Mentored new team members during onboarding and conducted knowledge transfer sessions.",
        "Recognized as Top Performer of the Month for consistently delivering high-impact solutions.",
      ],
      tags: ["LLMs", "PostgreSQL", "Full Stack", "MLOps", "AI/ML", "Python"],
    },
    {
      role: "Software Engineer Intern",
      org: "App Virality Technologies Pvt Ltd (Outplay)",
      location: "Hyderabad, India",
      start: "Jan 2022",
      end: "May 2022",
      bullets: [
        "Researched state-of-the-art AI models to integrate AI capabilities into company sales tools.",
        "Prepared and analysed datasets, implementing quality checks for production AI features.",
        "Maintained detailed documentation for projects across engineering and product teams.",
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
      gpa: "3.93 / 4.0",
    },
    {
      degree: "B.Tech Electronics & Communication Engineering",
      school: "Rajiv Gandhi University of Knowledge Technologies",
      location: "Basar, India",
      start: "Aug 2018",
      end: "May 2022",
      gpa: "8.17 / 10",
    },
    {
      degree: "Pre University Course",
      school: "Rajiv Gandhi University of Knowledge Technologies",
      location: "Basar, India",
      start: "Jul 2016",
      end: "May 2018",
      gpa: "8.99 / 10",
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
      title: "Top Performer -- Outplay",
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
      date: "2012 -- 2016",
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
      date: "2014 -- 2015",
      bullets: ["Represented student voice, orchestrated cultural festivals, and coordinated alumni outreach."],
    },
    {
      section: "Extracurricular",
      title: "Sports Captain",
      date: "2012 -- 2021",
      bullets: ["Captained handball, football, and table tennis squads while mentoring junior athletes."],
    },
    {
      section: "Extracurricular",
      title: "Peer Mentor",
      date: "2018 -- 2021",
      bullets: ["Guided juniors on career paths and emerging tech via seminars, workshops, and office hours."],
    },
    {
      section: "Hackathons",
      title: "Campus Innovation Sprint",
      bullets: ["Built IoT prototypes combining sensor networks with predictive maintenance dashboards."],
    },
    {
      section: "Certifications",
      title: "Machine Learning with Python",
      bullets: ["Coursera"],
    },
    {
      section: "Certifications",
      title: "Neural Networks and Deep Learning",
      bullets: ["DeepLearning.AI"],
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
            "Outplay's platform offered standalone tools -- Lead Generator, Sequence Generator, Magic Mail, Objection Handler, and calendar integration -- but they were siloed and required manual orchestration. The AI Sales Agent unified these modules into a single autonomous pipeline.",
            "",
            "SDRs select an agent profile (e.g., targeting startup executives). The agent then sources qualified leads, crafts multi-channel outreach sequences, generates personalized email content, handles objections, and continuously follows up until a meeting is booked. Prospects are bucketed by response type (no reply, objection, not interested), with each bucket triggering a tailored workflow.",
            "",
            "The architecture supports two modes: Autopilot (fully autonomous, end-to-end) and Co-pilot (agent executes each step but awaits SDR approval). The project delivered a comprehensive architectural blueprint covering data flows, module interactions, error handling, and scalability -- laying the groundwork for fully AI-driven SDR operations.",
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
          relevantSlugs: ["magic-mail", "sequence-generator"],
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
            "SDRs struggle to write personalized, prospect-aware emails at scale. Magic Mail automates this by generating tailored outreach and objection responses using fine-tuned LLMs.",
            "",
            "I analyzed existing high-performing sales emails to identify effective structures, personalization patterns, and objection-handling strategies. These insights guided prompt engineering experiments and the curation of a fine-tuning dataset covering prospect details, industry context, and common objections.",
            "",
            "The fine-tuned model generates both initial outreach and contextual replies. Magic Mail reduced email composition time by 250% and improved positive reply rates by 80% across pilot customers, freeing SDRs to focus on relationship-building.",
          ].join("\n"),
          cardKeywords: ["Generative AI", "Sales Automation", "LLM Fine-Tuning"],
          keywords: [
            "Email Personalization",
            "Prompt Engineering",
            "Generative AI",
            "LLM Fine-Tuning",
            "Sales Enablement",
            "FastAPI",
            "PostgreSQL",
            "Python",
          ],
          website: "https://outplay.ai/ai-for-sales",
          relevantSlugs: ["sequence-generator", "ai-sales-agent", "objection-handling-copilot"],
        },
        {
          slug: "objection-handling-copilot",
          title: "Objection Handling",
          timeframe: "2022 -- 2023",
          tagline: "Real-time rebuttals for sales objections",
          summary:
            "Delivered a copilot that classifies objections in sales conversations and surfaces context-aware rebuttals.",
          achievements: [
            "Trained intent and NER models that tag objections with 95% accuracy.",
            "Linked rebuttal playbooks to deal stage, persona, and sentiment cues.",
          ],
          description: [
            "SDRs manually scan prospect emails to identify objections (budget, timing, competitor, authority) -- a slow process that delays responses. This tool automates objection detection using Named Entity Recognition (NER).",
            "",
            "I created a labeled dataset of prospect emails using Label Studio, then fine-tuned a spaCy NER model through multiple iterations to reach 95% accuracy. An API integrates the model with existing sales tools, automatically categorizing emails into interested, objection, and not interested buckets.",
            "",
            "The system enables SDRs to prioritize high-value prospects instantly, respond to objections faster, and spend less time on manual email triage.",
          ].join("\n"),
          cardKeywords: ["NER", "spaCy", "NLP"],
          keywords: [
            "Objection Classification",
            "Named Entity Recognition",
            "spaCy",
            "Huggingface",
            "FastAPI",
            "PostgreSQL",
            "Python",
          ],
          website: "https://outplay.ai/ai-for-sales",
          relevantSlugs: ["magic-mail", "sequence-generator"],
        },
        {
          slug: "sales-playbook",
          title: "Sales Playbook",
          timeframe: "2022 - 2024",
          tagline: "Automated objection handling playbooks",
          summary:
            "Designed a playbook system using NLP to match prospect objections with the best handling messages and auto-generate playbooks for new users.",
          achievements: [
            "Used NLP techniques to match objections with optimal handling messages, increasing response rates.",
            "Created a workflow to auto-generate personalized playbooks from onboarding details.",
          ],
          description: [
            "Sales playbooks are collections of handling messages to address objections raised by prospects. Designed the playbook using NLP techniques to identify the best matching handling message for each objection, leading to increased response rates.",
            "",
            "Created a workflow to automatically create a sales playbook for each new user by extracting the handling messages from the onboarding details provided by the user.",
            "",
            "The system reduced the time SDRs spend crafting responses and ensured consistent, high-quality objection handling across the team.",
          ].join("\n"),
          cardKeywords: ["NLP", "Python", "Data Analysis"],
          keywords: [
            "NLP",
            "Sales Coaching",
            "Playbooks",
            "Python",
            "Data Analysis",
            "Workflow Automation",
          ],
          website: "https://outplay.ai/ai-for-sales",
          relevantSlugs: ["objection-handling-copilot", "magic-mail", "sequence-generator"],
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
            "Creating multi-step sales sequences manually takes hours and often produces generic, unpersonalized outreach. The Sequence Generator automates this using generative AI, producing tailored 6-10 step sequences in minutes from product details and prospect information.",
            "",
            "Sequence data is stored in MongoDB for flexibility. A key UX challenge was the ~50 second generation time: I implemented progressive streaming so each step appears as it is ready, letting SDRs review incrementally. Individual steps can also be regenerated with additional context, avoiding full-sequence rework.",
            "",
            "The tool reduced sequence creation time by 90% and supports multi-channel outreach (email, calls, LinkedIn) with dynamic step adjustment.",
          ].join("\n"),
          cardKeywords: ["Generative AI", "MongoDB", "FastAPI"],
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
          relevantSlugs: ["magic-mail", "ai-sales-agent"],
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
          timeframe: "2025",
          tagline: "Interpretable clinical ML",
          summary:
            "Built multi-output classification models to predict ADHD diagnosis and participant gender from behavioral assessment data.",
          achievements: [
            "Benchmarked Logistic Regression, kNN, and XGBoost with feature engineering and evaluation techniques.",
            "Applied SHAP-style explanations to make model outputs interpretable for clinical researchers.",
          ],
          description: [
            "Analysed ADHD assessment data to identify behavioural patterns across male and female participants. Built multi-output classification models (Logistic Regression, kNN, XGBoost) to predict both ADHD diagnosis and participant gender.",
            "",
            "Applied feature engineering, model tuning, and evaluation techniques to improve model explainability and performance. SHAP-style attributions were translated into clinician-friendly narratives for individualized interventions.",
            "",
            "The project contributed to research on gender-based differences in ADHD for more targeted assessment approaches, achieving a 0.82 F1 score while improving sensitivity for underrepresented cohorts by 14%.",
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
          timeframe: "2025",
          tagline: "sEMG-driven hand gesture classification",
          summary:
            "Analyzed time series sEMG data and developed deep learning and ensemble models to predict 10 hand gestures.",
          achievements: [
            "Extracted 96 time- and frequency-domain features per segment from raw biosignals.",
            "Achieved 82% multi-class average accuracy using XGBoost.",
          ],
          description: [
            "Surface electromyography (sEMG) signals are noisy and highly variable across participants, making gesture classification difficult. This project built an end-to-end pipeline from raw sEMG recordings to gesture predictions.",
            "",
            "From a 40-participant dataset (10 gestures, 4 forearm electrodes at 2 kHz), I applied Butterworth bandpass and notch filters, segmented signals into 250ms overlapping windows, and extracted 24 features per channel (MAV, RMS, spectral power, entropy, Hjorth parameters, etc.).",
            "",
            "After feature selection via correlation pruning and backward elimination, I benchmarked Decision Trees, Random Forests, XGBoost, and SVMs. XGBoost achieved 82.6% multi-class accuracy, with a dedicated rest-vs-activity classifier reaching ~90%.",
          ].join("\n"),
          cardKeywords: ["Signal Processing", "Time-Series ML", "Feature Engineering"],
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
          timeframe: "2024",
          tagline: "Multi-class astronomical classification",
          summary:
            "Developed predictive models for multi-class galaxy classification using regression techniques.",
          achievements: [
            "Achieved 88.78% accuracy with a multinomial logistic regression model.",
            "Manually built multinomial regression from individual logistic regression base models to validate the approach.",
          ],
          description: [
            "Analyzed galaxy shape data to classify galaxies into Spiral, Elliptical, and Uncertain types. The project explored using regression models for multi-class classification.",
            "",
            "Built individual logistic regression models for each class and combined them using the argmax function to construct a multinomial regression model from scratch. Compared this manual approach against sklearn's built-in multinomial logistic regression.",
            "",
            "Both approaches produced identical sensitivity, specificity, and accuracy metrics (88.78%), confirming that logistic regression models serve as the mathematical foundation for multinomial regression.",
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
          timeframe: "2022",
          tagline: "ML-powered URL classification",
          summary:
            "Developed a phishing website detection tool using ML classifiers to check if a given website URL is legitimate.",
          achievements: [
            "Achieved 97% accuracy with Random Forest and 92% with KNN.",
            "Built a Flask web app for real-time URL legitimacy predictions.",
          ],
          description: [
            "Phishing attacks exploit users by mimicking legitimate websites. This project built ML classifiers to detect phishing URLs based on engineered features.",
            "",
            "Combined two public phishing datasets, manually extracted missing attributes using URL heuristics and DNS lookups, and engineered 30+ features. Evaluated Random Forest, Decision Tree, XGBoost, and KNN -- Random Forest performed best at 97% accuracy.",
            "",
            "Wrapped the model in a Flask + HTML web app where users enter URLs and receive instant predictions, making the classifier accessible as a practical cybersecurity tool.",
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
        {
          slug: "student-sentiment-analysis",
          title: "Student Sentiment Analysis",
          timeframe: "2021",
          tagline: "NLP-driven survey analysis",
          summary:
            "Conducted a survey of 1200 students and built a classifier model to analyze sentiments towards the university.",
          achievements: [
            "Surveyed 1200 students to gather sentiment data about the university.",
            "Developed an NLP classifier to categorize student sentiments from free-text responses.",
          ],
          description: [
            "Conducted a survey of 1200 students at RGUKT Basar to gather their sentiments towards the university across various aspects of campus life.",
            "",
            "Developed a classifier model using ML and NLP techniques to analyze and categorize student sentiments from survey responses.",
            "",
            "The analysis provided actionable insights into student satisfaction and areas for improvement across the university.",
          ].join("\n"),
          cardKeywords: ["NLP", "ML", "Data Analysis"],
          keywords: [
            "NLP",
            "Sentiment Analysis",
            "Machine Learning",
            "Data Analysis",
            "Survey Analysis",
            "Python",
          ],
          relevantSlugs: ["adhd-gender-prediction", "phishing-website-detection", "galaxy-type-classification"],
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
            "A data science pipeline tool built with Streamlit that enables users to process, visualize data, and train models without writing code.",
            "",
            "Users upload CSV or Excel files, profile datasets, and apply preprocessing steps with side-by-side panels showing original vs. transformed data. Every dropped column, type conversion, or imputed value is immediately visible.",
            "",
            "After preprocessing, users can train scikit-learn models, review metrics, and download both the cleaned dataset and model artifacts along with reports. Built with Pandas, NumPy, Matplotlib, and Seaborn under the hood.",
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
            "Built an advanced tool for analysing sales calls by extracting transcription, objections, action items, tones, and SDR performance metrics.",
            "",
            "Utilized speech embeddings to recognize speakers in a call with 100% accuracy. Identified action items with 92% accuracy using NERs and Regex. Developed a module to measure SDR performance using advanced call scoring metrics.",
            "",
            "The system surfaces call scores, coaching cues, and module-specific metrics in dashboards, giving managers and SDRs actionable feedback without manual call review.",
          ].join("\n"),
          cardKeywords: ["Speech Recognition", "NER", "Data Analytics"],
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
          relevantSlugs: ["magic-mail", "ai-sales-agent"],
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
            "Performed market research on meeting bots that join scheduled meetings to record and take notes. Created a Zoom application integrated with Python REST API to automatically record and live stream scheduled meetings.",
            "",
            "Prototyped bots that auto-join sessions, start recordings, and stream audio/video via WebSockets for live analysis. Evaluated competing products and provided a build-vs-buy recommendation.",
            "",
            "The learnings fed directly into the Conversation Intelligence project, informing the architecture for automated call capture and analysis.",
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
          relevantSlugs: ["conversation-intelligence", "sequence-generator"],
        },
      ],
    },
    {
      group: "IoT & Experiments",
      description: "Experimentation across hardware, edge analytics, and sensor-driven storytelling.",
      items: [
        {
          slug: "iot-sensing-projects",
          title: "IoT Projects",
          timeframe: "2018 - 2022",
          tagline: "Sensor-driven embedded systems",
          summary:
            "Developed multiple IoT projects as part of academics using electronics, embedded C, sensors, and Arduino.",
          achievements: [
            "Built temperature and humidity monitors to track growing conditions of plants.",
            "Developed a prototype car using IR and ultrasonic sensors for obstacle avoidance.",
          ],
          description: [
            "Developed multiple IoT projects during the bachelor's degree as part of academics and lab work. Used temperature and humidity sensors to monitor the growing conditions of a plant, and IR/ultrasonic sensors to build a prototype car that stops when faced with obstacles.",
            "",
            "Worked with multiple sensors, LED screens, and electronics as part of lab projects. Each project combined Arduino hardware with embedded C programming.",
            "",
            "These projects built a strong foundation in hardware-software integration and hands-on prototyping skills.",
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
        "A framework for orchestrating multi-agent pipelines--from data hygiene to compliance--that keep revenue teams focused on conversations, not admin work.",
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

1. **Data readiness** -- nightly hygiene jobs score enrichment quality and push issues to Slack.
2. **Agent routing** -- lightweight policies decide which skill agent (research, sequencing, follow-up) owns the task.
3. **Human checkpoints** -- SDRs approve only the highest risk transitions (> 0.7 risk score).

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

Keep this query paginated and charted--compliance loves it.

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

1. **Transparent features** -- start with psychometric scales clinicians recognize.
2. **Fairness audits** -- flag demographic skews before tuning hyper-parameters.
3. **Narrative-ready outputs** -- convert SHAP attributions into short takeaway paragraphs.

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

1. **Soil + weather alignment** -- overlay moisture sensors with NOAA data.
2. **Volunteer velocity** -- weekly active volunteers vs. staffing target.
3. **Harvest storytelling** -- rolling sum of produce donated, wrapped in short copy blocks.

### Accessibility Wins

- Large, high-contrast typography for outdoor tablets.
- Keyboard-friendly filters for office analysts.
- ALT text describing insight cards for screen readers.

### Outcome

Farms now send a single shareable link during board reviews--no more CSV exports at midnight.
`,
    },
  ],
  downloads: [
    {
      label: "CV",
      file: "/downloads/CV.pdf",
      updated: "2026-05-29",
      sizeKB: 224,
    },
    {
      label: "Resume",
      file: "/downloads/Resume.pdf",
      updated: "2026-05-29",
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
