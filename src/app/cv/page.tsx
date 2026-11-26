import type { Metadata } from "next";
import Link from "next/link";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/profile";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: `CV | ${profile.name}`,
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 mt-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
      {children}
      <span className="h-px flex-1 bg-line" />
    </h2>
  );
}

export default function CvPage() {
  const allSkills = skillGroups.flatMap((g) => g.items);

  return (
    <div className="min-h-screen bg-paper-2 py-10 print:bg-white print:py-0">
      <div className="no-print mx-auto mb-6 flex max-w-[850px] justify-between px-6 text-sm">
        <Link href="/" className="text-ink-soft hover:text-ink">
          ← Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="mx-auto max-w-[850px] bg-white px-14 py-12 text-[13px] leading-relaxed shadow-sm print:shadow-none">
        <header className="border-b-2 border-ink pb-5">
          <h1 className="font-serif text-4xl font-semibold uppercase tracking-wide">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-ink-soft">{profile.role}</p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs">
            <span><span className="text-ink-soft">EMAIL:</span> {profile.email}</span>
            <span><span className="text-ink-soft">PHONE:</span> {profile.phone}</span>
            <span><span className="text-ink-soft">LOCATION:</span> {profile.location}</span>
            <span><span className="text-ink-soft">GITHUB:</span> github.com/{profile.githubHandle}</span>
          </p>
        </header>

        <Heading>Professional Summary</Heading>
        <p>{profile.summary} {profile.graphicDesign}</p>

        <Heading>Work Experience</Heading>
        <div className="space-y-4">
          {experience.map((j) => (
            <div key={j.company}>
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold">{j.company}</span>
                  <span className="mx-2 text-line">|</span>
                  <em className="text-ink-soft">{j.title}</em>
                </p>
                <p className="text-ink-soft">{j.start} – {j.end}</p>
              </div>
              <p className="mt-1">{j.description}</p>
              <p className="mt-1"><span className="font-medium">Technologies:</span> <span className="text-ink-soft">{j.tech.join(" · ")}</span></p>
            </div>
          ))}
        </div>

        <Heading>Skills & Technologies</Heading>
        <p>{allSkills.join(" · ")}</p>

        <Heading>Projects</Heading>
        <div className="space-y-3">
          {projects.map((p) => (
            <div key={p.name}>
              <p>
                <span className="font-semibold">{p.name}</span>
                {p.url && (
                  <a href={p.url} className="ml-2 text-ink-soft underline">
                    {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
                  </a>
                )}
              </p>
              <p>{p.description}</p>
              <p><span className="font-medium">Technologies:</span> <span className="text-ink-soft">{p.tech.join(" · ")}</span></p>
            </div>
          ))}
        </div>

        <Heading>Education</Heading>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">{education.school}</span>
            <span className="mx-2 text-line">|</span>
            <em className="text-ink-soft">{education.degree}</em>
          </p>
          <p className="text-ink-soft">{education.years}</p>
        </div>

        <Heading>Trainings & Certifications</Heading>
        <ul className="space-y-0.5">
          {certifications.map((c) => (
            <li key={c.name}>– {c.name} ({c.year})</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
