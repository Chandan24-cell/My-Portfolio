import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.BASE_URL;

const profile = {
  name: "Chandan Kumar Sah",
  role: "AI/ML STUDENT | COMPUTER VISION | Deep Learning",
  email: "chandan241470@gmail.com",
  phone: "+91 885095170",
  github: "https://github.com/Chandan24-cell",
  linkedin: "https://www.linkedin.com/in/chandan-kumar-sah-40156a360",
  location: "India",
  photo: `${BASE_URL}profile.jpg`,
  heroTitle: "Building Practical AI Systems",
  heroSubtitle:
    "I am an Artificial Intelligence and Machine Learning student focused on building practical projects in machine learning, computer vision, healthcare AI, cybersecurity, and intelligent automation. I enjoy turning ideas into working systems through clean code, experimentation, and continuous learning.",
  about:
    "I am an Artificial Intelligence and Machine Learning student passionate about building practical and impactful technology solutions. My work focuses on machine learning, computer vision, healthcare AI prototypes, cybersecurity monitoring, and AI-powered automation tools.\n\nI am continuously improving my skills in Python, data structures, machine learning algorithms, deep learning, model deployment, and software engineering. My goal is to become a strong Machine Learning Engineer by building real projects, understanding core concepts deeply, and applying AI to solve real-world problems.",
  objective:
    "To build real-world AI/ML systems that solve practical problems and to grow as a machine learning engineer through strong projects, clean implementation, and continuous learning.",
  education: {
    degree: "B.Tech / B.E. in Computer Science and Engineering (AI & ML)",
    institution: "KPR Institute of Engineering and Technology",
    duration: "2024 – 2028",
    description:
      "Pursuing Artificial Intelligence and Machine Learning with a focus on programming, data science, machine learning, computer vision, and deployment-oriented AI projects.",
  },
};

const projects = [
  {
    title: "Complete ML Tree",
    category: "Interactive ML Learning Tool",
    description:
      "An interactive machine learning knowledge tree that organizes ML algorithms, concepts, and relationships into a visual learning interface.",
    tech: ["React", "JavaScript", "Machine Learning", "GitHub Pages"],
    github: "https://github.com/Chandan24-cell/ML-Tree",
    demo: "https://chandan24-cell.github.io/ML-Tree/",
    type: "Live Demo",
  },
  {
    title: "MindCare AI",
    category: "AI Wellness Assistant",
    description:
      "An AI-based mental wellness support prototype designed for emotion-aware interaction and supportive educational use.",
    tech: ["Python", "AI", "Backend", "Frontend"],
    github: "https://github.com/Chandan24-cell/mindcare-ai.git",
    demo: "https://github.com/Chandan24-cell/mindcare-ai.git",
    type: "Repository",
  },
  {
    title: "Shadow Supervisor OpenEnv",
    category: "AI Agents / Workflow Evaluation",
    description:
      "An AI agent workflow supervision project focused on identifying silent failures and improving reliability in multi-agent environments.",
    tech: ["Python", "AI Agents", "Evaluation", "LLM Workflows"],
    github: "https://github.com/Chandan24-cell/Shadow-Supervisor.git",
    demo: "https://huggingface.co/spaces/Aakashy00/Shadow_Supervisor-OpenEnv",
    type: "Hugging Face Space",
  },
  {
    title: "CareCoord AI Env",
    category: "Healthcare AI Environment",
    description:
      "An AI experimentation environment for healthcare coordination workflows and intelligent support system design.",
    tech: ["Python", "AI Environment", "Healthcare AI"],
    github: "https://github.com/Chandan24-cell/carecoord-ai-env.git",
    demo: "https://github.com/Chandan24-cell/carecoord-ai-env.git",
    type: "Repository",
  },
  {
    title: "HaemaScan Visual Anaemia Detection System",
    category: "Computer Vision + Healthcare AI",
    description:
      "A computer vision based healthcare AI project designed to support visual anaemia screening using image-based analysis.",
    tech: ["Python", "OpenCV", "Flask", "Computer Vision"],
    github:
      "https://github.com/Chandan24-cell/HaemaScan-Visual-Anaemia-Detection-System.git",
    demo:
      "https://github.com/Chandan24-cell/HaemaScan-Visual-Anaemia-Detection-System.git",
    type: "Repository",
  },
  {
    title: "Ambulance Corridor Env",
    category: "AI Environment / Smart Mobility",
    description:
      "An AI environment concept focused on ambulance corridor planning and intelligent emergency mobility support.",
    tech: ["Python", "AI Environment", "Smart Mobility"],
    github: "https://github.com/Chandan24-cell/ambulance-corridor-env.git",
    demo: "https://github.com/Chandan24-cell/ambulance-corridor-env.git",
    type: "Repository",
  },
  {
    title: "NetSentinelAI",
    category: "AI + Cybersecurity",
    description:
      "An AI-powered network security monitoring project focused on classifying network activity and detecting intrusion patterns.",
    tech: ["Python", "Machine Learning", "Cybersecurity", "Dashboard"],
    github: "https://github.com/Chandan24-cell/NetSentinelAI.git",
    demo: "https://github.com/Chandan24-cell/NetSentinelAI.git",
    type: "Repository",
  },
];

const skills = {
  Programming: ["Python", "JavaScript", "C", "Java"],
  "Machine Learning": [
    "Scikit-learn",
    "Regression",
    "Classification",
    "Model Evaluation",
    "Feature Engineering",
  ],
  "Computer Vision": ["OpenCV", "Image Classification", "CNN Basics"],
  "AI Engineering": ["AI Agents", "LLM Workflows", "Prompt Engineering"],
  "Data Tools": ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
  "Backend / Deployment": ["Flask", "FastAPI", "Docker", "REST APIs", "Render"],
  Tools: ["Git", "GitHub", "VS Code", "Google Colab", "Hugging Face Spaces"],
};

function App() {
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible");
            }, index * 80);
          }
        });
      },
      { threshold: 0.08 }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [showResume]);

  if (showResume) {
    return <ResumePage onBack={() => setShowResume(false)} />;
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ResumeSection onOpenResume={() => setShowResume(true)} />
      <Contact />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="text-lg font-bold tracking-tight">
          {profile.name}
        </a>

        <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="nav-link hover:text-slate-950">
  About
</a>
<a href="#skills" className="nav-link hover:text-slate-950">
  Skills
</a>
<a href="#projects" className="nav-link hover:text-slate-950">
  Projects
</a>
<a href="#resume" className="nav-link hover:text-slate-950">
  Resume
</a>
<a href="#contact" className="nav-link hover:text-slate-950">
  Contact
</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.75fr]">
        <div className="reveal">
          <p className="hero-tag mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
  {profile.role}
</p>

          <h1 className="hero-title text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
  {profile.heroTitle}
</h1>

          <p className="hero-desc mt-6 max-w-3xl text-lg leading-8 text-slate-600">
  {profile.heroSubtitle}
</p>
<div className="mt-6 flex flex-wrap gap-3">
  <span className="live-btn">
    <span className="live-dot"></span>
    AI/ML Projects • Computer Vision • ML Systems
  </span>

  <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-600">
    chandann6057@gmail.com
  </span>
</div>
          <div className="hero-btns mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              View Projects
            </a>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              Contact Me
            </button>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-photo">
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <img
              src={profile.photo}
              alt={profile.name}
              className="mx-auto h-56 w-56 rounded-3xl object-cover shadow-sm"
            />

            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-slate-950">
                {profile.name}
              </h2>
              <p className="mt-2 text-sm font-medium text-blue-600">
                Artificial Intelligence & Machine Learning | Student
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Building real-world AI/ML projects, improving problem-solving skills, and learning scalable machine learning development step by step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionHeading
            title="About Me"
            subtitle="A short overview of my AI/ML learning journey, technical interests, and project focus."
          />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-base leading-8 text-slate-700">
              {profile.about}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16">
      <div className="reveal">
        <SectionHeading
          title="Skills"
          subtitle="Technologies I use for AI/ML experimentation, application development, and deployment."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items]) => (
            <div
              key={group}
              className="reveal rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-4 text-lg font-semibold text-slate-950">
                {group}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="skill-tag rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionHeading
            title="Featured Projects"
            subtitle="Selected work showing applied AI, computer vision, AI security, healthcare AI, and agent workflow engineering."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="reveal project-card rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-blue-600">
                    {project.category}
                  </p>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                    {project.type}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-700">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Source Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                  >
                    Live / Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeSection({ onOpenResume }) {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-16">
      <div className="reveal">
        <SectionHeading
          title="Resume"
          subtitle="View My Resume"
        />

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="max-w-4xl text-slate-700">
            Click the button below to view my resume and learn more about my
            skills, projects, education, and AI/ML learning journey.
          </p>

          <button
            onClick={onOpenResume}
            className="mt-5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Generate Resume
          </button>
        </div>
      </div>
    </section>
  );
}

function ResumePage({ onBack }) {
  return (
    <main className="min-h-screen bg-slate-100 px-5 py-8 text-slate-900">
      <div className="mx-auto mb-6 flex max-w-5xl justify-between print:hidden">
        <button
          onClick={onBack}
          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50"
        >
          Back to Portfolio
        </button>

        <button
          onClick={() => window.print()}
          className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Download / Save as PDF
        </button>
      </div>

      <section className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-sm print:shadow-none md:grid-cols-[280px_1fr]">
        <aside className="bg-blue-900 p-8 text-white">
          <img
            src={profile.photo}
            alt={profile.name}
            className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-white/20"
          />

          <div className="mt-8">
            <h2 className="border-b border-white/30 pb-2 text-lg font-bold">
              Contact
            </h2>
            <div className="mt-4 space-y-2 text-sm text-blue-50">
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>{profile.location}</p>
              <p>{profile.github}</p>
              <p>{profile.linkedin}</p>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="border-b border-white/30 pb-2 text-lg font-bold">
              Skills
            </h2>

            <div className="mt-4 space-y-4 text-sm">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <p className="font-semibold text-white">{group}</p>
                  <p className="mt-1 leading-6 text-blue-50">
                    {items.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="border-b border-white/30 pb-2 text-lg font-bold">
              Languages
            </h2>
            <ul className="mt-4 space-y-2 text-sm text-blue-50">
              <li>English</li>
              <li>Hindi</li>
              <li>Nepali</li>
              <li>German A1 Learning</li>
            </ul>
          </div>
        </aside>

        <main className="p-8">
          <div>
            <h1 className="text-4xl font-bold uppercase tracking-wide text-blue-900">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-semibold text-slate-700">
              {profile.role}
            </p>
          </div>

          <ResumeBlock title="Profile">
            <p>{profile.objective}</p>
          </ResumeBlock>

          <ResumeBlock title="Education">
            <h3 className="font-bold text-slate-950">
              {profile.education.degree}
            </h3>
            <p className="mt-1 text-sm">{profile.education.institution}</p>
            <p className="mt-1 text-sm italic">{profile.education.duration}</p>
            <p className="mt-2">{profile.education.description}</p>
          </ResumeBlock>

          <ResumeBlock title="Project Experience">
            <div className="space-y-5">
              {projects.slice(0, 5).map((project) => (
                <div key={project.title}>
                  <h3 className="font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-700">
                    {project.category}
                  </p>
                  <p className="mt-1 text-sm leading-6">
                    {project.description}
                  </p>
                  <p className="mt-1 text-sm">
                    <strong>Technologies:</strong> {project.tech.join(", ")}
                  </p>
                  <p className="mt-1 break-all text-sm">
                    <strong>Link:</strong> {project.github}
                  </p>
                </div>
              ))}
            </div>
          </ResumeBlock>

          <ResumeBlock title="Responsibilities & Learning Focus">
            <ul className="list-disc space-y-2 pl-5">
              <li>
                Building AI/ML projects with clean code, documentation, and
                practical workflows.
              </li>
              <li>
                Improving Python, DSA, machine learning fundamentals, model
                evaluation, and deployment skills.
              </li>
              <li>
                Working on project-based learning in healthcare AI, computer
                vision, cybersecurity AI, and AI agents.
              </li>
            </ul>
          </ResumeBlock>
        </main>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionHeading
            title="Contact"
            subtitle="Open to AI/ML internships, project collaboration, and learning-focused engineering opportunities."
          />

          <div className="grid gap-4 text-slate-700 md:grid-cols-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100"
            >
              <p className="font-semibold text-slate-950">Email</p>
              <p className="mt-1 text-sm">{profile.email}</p>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100"
            >
              <p className="font-semibold text-slate-950">GitHub</p>
              <p className="mt-1 text-sm">github.com/Chandan24-cell</p>
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100"
            >
              <p className="font-semibold text-slate-950">LinkedIn</p>
              <p className="mt-1 text-sm">chandan-kumar-sah</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-5 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} {profile.name}. Built with React and
      Tailwind CSS.
    </footer>
  );
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-slate-600">{subtitle}</p>
    </div>
  );
}

function ResumeBlock({ title, children }) {
  return (
    <section className="border-b border-slate-200 py-5 last:border-b-0">
      <h2 className="mb-3 text-xl font-bold text-blue-900">{title}</h2>
      <div className="text-sm leading-7 text-slate-700">{children}</div>
    </section>
  );
}

export default App;