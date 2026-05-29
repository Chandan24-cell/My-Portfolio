import { useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ResumePage from "./components/Resume";
import {
  certifications,
  education,
  personalInfo,
  projects as portfolioProjects,
  skills,
} from "./data/portfolioData";

function App() {
  return (
    <BrowserRouter basename="/My-Portfolio/">
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

function PortfolioPage() {
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
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Hero />
      <About />
      <EducationSection />
      <CertificationsSection />
      <Skills />
      <Projects />
      <ResumeSection />
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
          {personalInfo.name}
        </a>

        <div className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          <a href="#about" className="nav-link hover:text-slate-950">About</a>
          <a href="#skills" className="nav-link hover:text-slate-950">Skills</a>
          <a href="#projects" className="nav-link hover:text-slate-950">Projects</a>
          <Link to="/resume" className="nav-link hover:text-slate-950">Resume</Link>
          <a href="#contact" className="nav-link hover:text-slate-950">Contact</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.82fr]">
        <div className="reveal">
          <p className="hero-tag mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
            {personalInfo.title}
          </p>
          <h1 className="hero-title max-w-3xl text-2xl font-bold leading-snug tracking-tight text-slate-950 md:text-3xl lg:text-4xl">
            {personalInfo.name}
          </h1>
          <p className="hero-desc mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {personalInfo.summary}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="live-btn">
              <span className="live-dot"></span>
              {education[0]?.status}
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
              {personalInfo.email}
            </span>
          </div>

          <div className="mt-4 inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm text-blue-800 shadow-sm">
            {personalInfo.currentlyExploring.join(" / ")}
          </div>

          <div className="hero-btns mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">View Projects</a>
            <a href="#contact" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">Contact Me</a>
            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100">GitHub</a>
          </div>

          <MetricsRow />
        </div>

        <div className="hero-photo">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mx-auto flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-slate-100 shadow-sm ring-4 ring-white">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.textContent = getInitials(personalInfo.name);
                  event.currentTarget.parentElement.className = "mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 bg-slate-950 text-xl font-bold text-white shadow-sm ring-4 ring-white";
                }}
              />
            </div>
            <div className="mt-6 text-center">
              <h2 className="text-2xl font-bold text-slate-950">{personalInfo.name}</h2>
              <p className="mt-2 text-sm font-medium text-blue-600">{personalInfo.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{personalInfo.summary}</p>
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
            title="About"
            subtitle={personalInfo.summary}
          />

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            <p className="text-base leading-8 text-slate-700">{education[0]?.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsRow() {
  const metrics = [
    [portfolioProjects.length, "Projects"],
    [skills.length, "Skill groups"],
    [education[0]?.status, "Graduate timeline"],
    [certifications.length, "Certifications"],
  ];

  return (
    <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-2 xl:grid-cols-4">
      {metrics.map(([value, label]) => (
        <div key={label} className="rounded-xl bg-slate-50 p-4 text-center ring-1 ring-slate-100">
          <p className="text-2xl font-bold text-slate-950">{value}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{label}</p>
        </div>
      ))}
    </div>
  );
}

function EducationSection() {
  return (
    <section id="education" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionHeading title="Education" subtitle={education[0]?.description} />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            {education.map((item) => (
              <article key={`${item.institution}-${item.degree}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">{item.status}</p>
                <h3 className="mt-3 text-2xl font-bold text-slate-950">{item.institution}</h3>
                <p className="mt-2 text-slate-700">{item.degree}</p>
                <p className="mt-2 text-slate-700">{item.duration}</p>
                <span className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">{item.status}</span>
                <p className="mt-4 text-slate-700">{item.description}</p>
              </article>
            ))}

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Current focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.flatMap((group) => group.items.map((item) => item.name)).map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700">{item}</span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section id="certifications" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionHeading title="Certifications & Courses" subtitle={personalInfo.summary} />
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((item) => (
              <article key={`${item.issuer}-${item.name}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">{item.issuer}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">{item.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.status}</p>
              </article>
            ))}
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
        <SectionHeading title="Skills" subtitle={personalInfo.currentlyExploring.join(" / ")} />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.category} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">{group.category}</p>
              <h3 className="mt-2 text-xl font-bold text-slate-950">{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item.name} className="skill-tag rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                    {item.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600">Currently exploring</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {personalInfo.currentlyExploring.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700">{item}</span>
            ))}
          </div>
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
            subtitle={personalInfo.summary}
          />

          <div className="grid gap-6 md:grid-cols-2">
            {portfolioProjects.map((project) => (
              <article
                key={project.name}
                className="reveal project-card rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-blue-600">
                    {project.tech[0]}
                  </p>

                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-600 ring-1 ring-slate-200">
                    {project.showInResume ? "Resume" : "Portfolio"}
                  </span>
                </div>

                <h3 className="mt-3 text-xl font-bold text-slate-950">
                  {project.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-700">{project.tagline}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

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
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Source Code
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

function ResumeSection() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-5 py-16">
      <div className="reveal">
        <SectionHeading title="Resume" subtitle={personalInfo.summary} />

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <p className="max-w-4xl text-slate-700">{personalInfo.currentlyExploring.join(" / ")}</p>

          <Link to="/resume" className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800">View Resume</Link>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="reveal">
          <SectionHeading
            title="Contact"
            subtitle={personalInfo.summary}
          />

          <div className="grid gap-4 text-slate-700 md:grid-cols-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100"
            >
              <p className="font-semibold text-slate-950">Email</p>
              <p className="mt-1 text-sm">{personalInfo.email}</p>
            </a>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100"
            >
              <p className="font-semibold text-slate-950">GitHub</p>
              <p className="mt-1 text-sm">{personalInfo.github}</p>
            </a>

            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:bg-slate-100"
            >
              <p className="font-semibold text-slate-950">LinkedIn</p>
              <p className="mt-1 text-sm">{personalInfo.linkedin}</p>
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
      {new Date().getFullYear()} {personalInfo.name} / {personalInfo.title}
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

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default App;
