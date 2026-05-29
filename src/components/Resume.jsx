import { useState } from "react";
import {
  certifications,
  education,
  personalInfo,
  projects,
  resumeLabels,
  skills,
} from "../data/portfolioData";

const COLORS = {
  sidebarBg: "#1e2a4a",
  sidebarText: "#cbd5e1",
  sidebarHeading: "#ffffff",
  accent: "#3b82f6",
  mainBg: "#ffffff",
  mainText: "#1f2937",
  sectionHeading: "#1e2a4a",
  tagBg: "#eff6ff",
  tagText: "#1d4ed8",
  skillTrack: "#e2e8f0",
};

const printStyles = `
  @media print {
    @page { size: A4; margin: 0; }
    .no-print { display: none !important; }
    nav { display: none !important; }
    html, body, #root { margin: 0 !important; padding: 0 !important; background: white !important; }
    body { margin: 0; background: white; }
    * {
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      box-shadow: none !important;
    }
    .resume-page {
      width: 794px !important;
      min-height: 1123px !important;
      margin: 0 !important;
      border: 0 !important;
    }
    .resume-shell { margin: 0 !important; }
    .resume-left {
      background-color: #1e2a4a !important;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
  }
`;

const resumeProjects = projects.filter((project) => project.showInResume);
const resumeCerts = certifications.filter((certification) => certification.showInResume);

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function Divider() {
  return <div className="my-5 h-px w-full bg-white/15" />;
}

function SectionTitle({ children }) {
  return (
    <h2
      className="mb-3 border-l-2 pl-2 text-[11px] font-bold uppercase leading-none tracking-[0.1em]"
      style={{ borderColor: COLORS.accent, color: COLORS.sectionHeading }}
    >
      {children}
    </h2>
  );
}

function SkillBar({ item }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between gap-3 text-[10px] leading-none">
        <span className="font-medium text-white">{item.name}</span>
        <span style={{ color: COLORS.sidebarText }}>{item.level}%</span>
      </div>
      <div className="h-[6px] overflow-hidden rounded-[3px]" style={{ backgroundColor: "rgba(226, 232, 240, 0.28)" }}>
        <div
          className="h-full rounded-[3px]"
          style={{ width: `${item.level}%`, backgroundColor: COLORS.accent }}
        />
      </div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span
      className="inline-flex rounded px-[6px] py-[2px] text-[10px] font-medium leading-4"
      style={{ backgroundColor: COLORS.tagBg, color: COLORS.tagText }}
    >
      {children}
    </span>
  );
}

function StatusBadge({ children }) {
  return (
    <span
      className="inline-flex rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em]"
      style={{ backgroundColor: COLORS.tagBg, color: COLORS.tagText }}
    >
      {children}
    </span>
  );
}

function ContactIcon({ type }) {
  const iconClass = "h-3.5 w-3.5";

  return (
    <span
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded"
      style={{ backgroundColor: "rgba(59, 130, 246, 0.22)", color: "#bfdbfe" }}
    >
      {type === "mail" && (
        <svg aria-hidden="true" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
        </svg>
      )}
      {type === "github" && <GithubIcon className={iconClass} />}
      {type === "linkedin" && (
        <svg aria-hidden="true" className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M5.4 8.7H2.3V22h3.1V8.7ZM3.9 7.1c1 0 1.8-.8 1.8-1.8S4.9 3.5 3.9 3.5 2.1 4.3 2.1 5.3s.8 1.8 1.8 1.8ZM22 14.7c0-4-2.1-5.9-4.9-5.9-2.2 0-3.2 1.2-3.8 2.1V8.7h-3V22h3.1v-6.6c0-1.8.3-3.5 2.5-3.5s2.2 2 2.2 3.6V22h3.1v-7.3H22Z" />
        </svg>
      )}
      {type === "location" && (
        <svg aria-hidden="true" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5h.01" />
        </svg>
      )}
    </span>
  );
}

function GithubIcon({ className = "h-4 w-4" }) {
  return (
    <svg aria-hidden="true" className={`${className} shrink-0`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.98c.85 0 1.69.12 2.49.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export default function ResumePage() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const initials = getInitials(personalInfo.name);
  const contactItems = [
    { type: "mail", label: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { type: "github", label: personalInfo.github, href: personalInfo.githubUrl },
    { type: "linkedin", label: personalInfo.linkedin, href: personalInfo.linkedinUrl },
    { type: "location", label: personalInfo.location },
  ];

  return (
    <main className="min-h-screen bg-white px-4 py-8 font-sans print:p-0" style={{ color: COLORS.mainText }}>
      <style dangerouslySetInnerHTML={{ __html: printStyles }} />

      <button
        type="button"
        onClick={() => window.print()}
        className="no-print fixed right-6 top-5 z-50 rounded-md px-4 py-2 text-xs font-semibold text-white shadow-lg transition hover:brightness-95"
        style={{ backgroundColor: COLORS.sidebarBg }}
      >
        {resumeLabels.downloadPdf}
      </button>

      <section className="resume-shell mx-auto w-full max-w-[794px]">
        <div className="resume-page mx-auto grid min-h-[1123px] w-[794px] grid-cols-[30%_70%] overflow-hidden bg-white shadow-2xl shadow-slate-300/60">
          <aside className="resume-left flex flex-col px-6 py-8" style={{ backgroundColor: COLORS.sidebarBg, color: COLORS.sidebarText }}>
            <div className="text-center">
              {photoFailed ? (
                <div
                  className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full border-[3px] text-lg font-bold text-white"
                  style={{ backgroundColor: COLORS.accent, borderColor: COLORS.accent }}
                >
                  {initials}
                </div>
              ) : (
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="mx-auto mb-3 block h-20 w-20 rounded-full border-[3px] object-cover"
                  style={{ borderColor: COLORS.accent }}
                  onError={() => setPhotoFailed(true)}
                />
              )}
              <h1 className="text-[16px] font-semibold leading-tight" style={{ color: COLORS.sidebarHeading }}>
                {personalInfo.name}
              </h1>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: "#93c5fd" }}>
                {personalInfo.title}
              </p>
            </div>

            <Divider />

            <section>
              <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: COLORS.sidebarHeading }}>
                {resumeLabels.contact}
              </h2>
              <div className="space-y-2">
                {contactItems.map((item) => {
                  const content = (
                    <>
                      <ContactIcon type={item.type} />
                      <span className="min-w-0 break-words text-[11px] leading-4">{item.label}</span>
                    </>
                  );

                  return item.href ? (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-start gap-2">
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} className="flex items-start gap-2">
                      {content}
                    </div>
                  );
                })}
              </div>
            </section>

            <Divider />

            <section>
              <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: COLORS.sidebarHeading }}>
                {resumeLabels.technicalSkills}
              </h2>
              <div className="space-y-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <h3 className="mb-3 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: "#93c5fd" }}>
                      {group.category}
                    </h3>
                    <div className="space-y-3">
                      {group.items.map((item) => (
                        <SkillBar key={item.name} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Divider />

            <section>
              <h2 className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: COLORS.sidebarHeading }}>
                {resumeLabels.education}
              </h2>
              <div className="space-y-4">
                {education.map((item) => (
                  <article key={`${item.institution}-${item.degree}`} className="text-[11px] leading-5">
                    <p className="font-semibold" style={{ color: COLORS.sidebarHeading }}>
                      {item.institution}
                    </p>
                    <p className="mt-1">{item.degree}</p>
                    <p className="mt-1">{item.duration}</p>
                    <span className="mt-2 inline-flex rounded bg-white/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em]" style={{ color: "#bfdbfe" }}>
                      {item.status}
                    </span>
                  </article>
                ))}
              </div>
            </section>
          </aside>

          <section className="px-8 py-8" style={{ backgroundColor: COLORS.mainBg, color: COLORS.mainText }}>
            <section>
              <SectionTitle>{resumeLabels.summary}</SectionTitle>
              <p className="text-[12px] italic leading-6 text-slate-600">{personalInfo.summary}</p>
            </section>

            <section className="mt-6">
              <SectionTitle>{resumeLabels.projects}</SectionTitle>
              <div>
                {resumeProjects.map((project) => (
                  <article key={project.name} className="border-b border-slate-200 py-3 first:pt-0 last:border-b-0 last:pb-0">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="min-w-0 text-[13px] font-bold leading-5" style={{ color: COLORS.sectionHeading }}>
                        {project.name}
                        <span className="font-semibold text-slate-500"> - {project.tagline}</span>
                      </h3>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-0.5 text-slate-400 transition hover:text-blue-600"
                        aria-label={project.name}
                      >
                        <GithubIcon />
                      </a>
                    </div>

                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {project.tech.map((tech) => (
                        <Tag key={tech}>{tech}</Tag>
                      ))}
                    </div>

                    <ul className="mt-2 space-y-0.5 text-[11px] leading-[1.45] text-slate-700">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span aria-hidden="true" className="mt-[1px] text-blue-500">
                            &bull;
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <SectionTitle>{resumeLabels.certifications}</SectionTitle>
              <div className="space-y-2">
                {resumeCerts.map((certification) => (
                  <article key={`${certification.issuer}-${certification.name}`} className="flex items-center justify-between gap-4 text-[11px] leading-5">
                    <div>
                      <p className="font-semibold" style={{ color: COLORS.sectionHeading }}>
                        {certification.name}
                      </p>
                      <p className="text-slate-600">{certification.issuer}</p>
                    </div>
                    <StatusBadge>{certification.status}</StatusBadge>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-6">
              <SectionTitle>{resumeLabels.currentlyExploring}</SectionTitle>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.currentlyExploring.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
