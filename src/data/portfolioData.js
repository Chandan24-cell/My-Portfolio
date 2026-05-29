export const personalInfo = {
  name: "Chandan Kumar Sah",
  title: "Artificial Intelligence & Machine Learning Student",
  email: "chandan241470@gmail.com",
  github: "github.com/Chandan24-cell",
  githubUrl: "https://github.com/Chandan24-cell",
  linkedin: "linkedin.com/in/chandan-kumar-sah",
  linkedinUrl: "https://linkedin.com/in/chandan-kumar-sah",
  location: "India",
  photo: "/My-Portfolio/assets/profile.jpg",
  summary:
    "Motivated AI/ML engineering student with hands-on experience building computer vision systems, healthcare AI prototypes, and cybersecurity monitoring tools. Seeking internship opportunities to apply practical Python, deep learning, and deployment skills to real engineering problems.",
  currentlyExploring: [
    "LLM Fine-tuning",
    "MLOps & CI/CD",
    "Model Interpretability",
    "Edge Deployment",
  ],
};

export const education = [
  {
    institution: "KPR Institute of Engineering and Technology",
    degree: "B.E. Artificial Intelligence & Machine Learning",
    duration: "2024 \u2013 2028",
    status: "Expected 2028",
    description:
      "Focused on Machine Learning, Deep Learning, Computer Vision, Data Science, and AI-powered application development.",
  },
];

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 60 },
      { name: "C / Java", level: 40 },
    ],
  },
  {
    category: "ML / Deep Learning",
    items: [
      { name: "Scikit-learn", level: 80 },
      { name: "PyTorch", level: 60 },
      { name: "TensorFlow", level: 55 },
      { name: "OpenCV", level: 80 },
    ],
  },
  {
    category: "Backend / Deploy",
    items: [
      { name: "Flask / FastAPI", level: 70 },
      { name: "Docker", level: 55 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
];

export const projects = [
  {
    name: "HaemaScan",
    tagline: "Visual anaemia detection via conjunctival image analysis",
    tech: ["Python", "OpenCV", "Flask", "CNN"],
    bullets: [
      "Addresses lack of non-invasive anaemia screening in low-resource settings",
      "Built CNN-based image classifier with OpenCV preprocessing pipeline",
      "Prototype classifying pallor indicators from conjunctival images",
    ],
    githubUrl: "https://github.com/Chandan24-cell/HaemaScan",
    showInResume: true,
  },
  {
    name: "NetSentinelAI",
    tagline: "AI-powered network intrusion detection system",
    tech: ["Python", "Scikit-learn", "ML Classification", "Dashboard"],
    bullets: [
      "Detects malicious network activity and classifies intrusion patterns",
      "Trained ML classifiers on network traffic features with real-time dashboard",
      "Functional monitoring prototype with anomaly flagging capability",
    ],
    githubUrl: "https://github.com/Chandan24-cell/NetSentinelAI",
    showInResume: true,
  },
  {
    name: "Shadow Supervisor OpenEnv",
    tagline: "Multi-agent LLM workflow reliability evaluation",
    tech: ["Python", "LLM Workflows", "AI Agents", "Hugging Face"],
    bullets: [
      "Addresses silent failure modes in multi-agent LLM pipelines",
      "Built evaluation harness to monitor and score agent task completion",
      "Hosted on Hugging Face Spaces as open evaluation environment",
    ],
    githubUrl: "https://github.com/Chandan24-cell",
    showInResume: true,
  },
  {
    name: "MindCare AI",
    tagline: "Emotion-aware mental wellness support assistant",
    tech: ["Python", "AI", "Flask", "Frontend"],
    bullets: [
      "Provides accessible emotional support via AI dialogue system",
      "Built emotion-aware response logic for safe educational use",
      "Functional prototype for mental wellness support",
    ],
    githubUrl: "https://github.com/Chandan24-cell",
    showInResume: false,
  },
  {
    name: "CareCoord AI Env",
    tagline: "Healthcare coordination AI environment",
    tech: ["Python", "AI Environment", "Healthcare AI"],
    bullets: [
      "Simulates intelligent healthcare workflow coordination",
      "Designed multi-agent environment for care routing logic",
      "AI sandbox for healthcare process automation",
    ],
    githubUrl: "https://github.com/Chandan24-cell",
    showInResume: false,
  },
  {
    name: "Ambulance Corridor Env",
    tagline: "AI-driven emergency mobility planning",
    tech: ["Python", "AI Environment", "Smart Mobility"],
    bullets: [
      "Models intelligent ambulance corridor planning for urban environments",
      "Built simulation environment for emergency route optimization",
      "Proof-of-concept for AI-assisted emergency response",
    ],
    githubUrl: "https://github.com/Chandan24-cell",
    showInResume: false,
  },
  {
    name: "Interactive ML Learning Tool",
    tagline: "Visual ML concept knowledge tree",
    tech: ["React", "JavaScript", "GitHub Pages"],
    bullets: [
      "Makes ML algorithm relationships explorable and visual for learners",
      "Built interactive knowledge tree mapping 50+ ML concepts",
      "Deployed live on GitHub Pages as a public learning resource",
    ],
    githubUrl: "https://github.com/Chandan24-cell",
    showInResume: true,
  },
];

export const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    status: "In Progress",
    showInResume: true,
  },
  {
    name: "Python, Pandas & Intro to ML",
    issuer: "Kaggle",
    status: "Completed",
    showInResume: true,
  },
];

export const resumeLabels = {
  downloadPdf: "Download PDF",
  contact: "Contact",
  technicalSkills: "Technical Skills",
  education: "Education",
  summary: "Summary",
  projects: "Projects",
  certifications: "Certifications",
  currentlyExploring: "Currently Exploring",
};
