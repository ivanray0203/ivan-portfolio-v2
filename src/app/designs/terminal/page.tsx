import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DesignGallery } from "@/components/design-gallery";
import { PhoneCover } from "@/components/phone";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/profile";

export const metadata: Metadata = { title: `${profile.name} | Terminal` };

const c = {
  bg: "bg-[#0b0f14]",
  panel: "bg-[#0f151c]",
  border: "border-[#1f2a36]",
  text: "text-[#c9d1d9]",
  dim: "text-[#6e7a88]",
  green: "text-[#7ee787]",
  blue: "text-[#79c0ff]",
  amber: "text-[#f2cc60]",
};

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p className="mb-6 text-sm">
      <span className={c.green}>ivan@portfolio</span>
      <span className={c.dim}>:</span>
      <span className={c.blue}>~</span>
      <span className={c.dim}>$ </span>
      <span>{cmd}</span>
    </p>
  );
}

export default function TerminalDesign() {
  return (
    <div className={`${c.bg} ${c.text} min-h-screen font-mono`}>
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#7ee787 1px, transparent 1px), linear-gradient(90deg, #7ee787 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <header className={`sticky top-0 z-50 border-b ${c.border} bg-[#0b0f14]/90 backdrop-blur`}>
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 text-sm">
          <Link href="/designs/terminal" className={c.green}>
            ~/ivan-ray
          </Link>
          <nav className={`hidden gap-6 md:flex ${c.dim}`}>
            {["about", "experience", "skills", "projects", "design", "contact"].map((s) => (
              <a key={s} href={`#${s}`} className="hover:text-[#7ee787]">
                ./{s}
              </a>
            ))}
          </nav>
          <Link href="/cv" className={`rounded border ${c.border} px-3 py-1.5 hover:border-[#7ee787] hover:text-[#7ee787]`}>
            cv.pdf
          </Link>
        </div>
      </header>

      <main className="relative mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <div className={`overflow-hidden rounded-lg border ${c.border} ${c.panel} shadow-2xl shadow-black/50`}>
            <div className={`flex items-center gap-2 border-b ${c.border} px-4 py-3`}>
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className={`ml-3 text-xs ${c.dim}`}>bash — whoami</span>
            </div>
            <div className="grid gap-8 p-6 sm:p-10 md:grid-cols-[1fr_auto]">
              <div>
              <Prompt cmd="whoami" />
              <h1 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-6xl">
                {profile.name}
              </h1>
              <p className={`mt-3 text-lg ${c.green}`}>&gt; {profile.role}</p>
              <p className={`mt-6 max-w-2xl leading-relaxed ${c.dim}`}>
                <span className={c.amber}>// </span>
                {profile.summary}
                <br />
                <span className={c.amber}>// </span>
                {profile.graphicDesign}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm">
                <a href={`mailto:${profile.email}`} className="rounded bg-[#7ee787] px-4 py-2 font-semibold text-[#0b0f14] hover:bg-white">
                  $ contact --now
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className={`rounded border ${c.border} px-4 py-2 hover:border-[#79c0ff] hover:text-[#79c0ff]`}>
                  git clone github/{profile.githubHandle}
                </a>
              </div>
              <p className="mt-8 text-sm">
                <span className={c.dim}>$ </span>
                <span className="inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-[#7ee787]" />
              </p>
              </div>
              <figure className="order-first md:order-none">
                <div className={`w-40 overflow-hidden rounded-lg border ${c.border} p-1 sm:w-56`}>
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={500}
                    height={500}
                    priority
                    className="aspect-square w-full rounded object-cover"
                  />
                </div>
                <figcaption className={`mt-2 text-xs ${c.dim}`}>
                  <span className={c.green}>●</span> profile.png
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16">
          <Prompt cmd="cat about.json" />
          <pre className={`overflow-x-auto rounded-lg border ${c.border} ${c.panel} p-6 text-sm leading-7`}>
{`{
  `}<span className={c.blue}>&quot;location&quot;</span>{`: `}<span className={c.amber}>&quot;{profile.location}&quot;</span>{`,
  `}<span className={c.blue}>&quot;experience&quot;</span>{`: `}<span className={c.amber}>&quot;6+ years&quot;</span>{`,
  `}<span className={c.blue}>&quot;education&quot;</span>{`: `}<span className={c.amber}>&quot;{education.degree}, {education.school} ({education.years})&quot;</span>{`,
  `}<span className={c.blue}>&quot;design&quot;</span>{`: [`}<span className={c.amber}>&quot;Graphic design for web&quot;</span>{`, `}<span className={c.amber}>&quot;ChatGPT&quot;</span>{`, `}<span className={c.amber}>&quot;Nano Banana&quot;</span>{`],
  `}<span className={c.blue}>&quot;focus&quot;</span>{`: [`}<span className={c.amber}>&quot;Laravel&quot;</span>{`, `}<span className={c.amber}>&quot;Vue.js&quot;</span>{`, `}<span className={c.amber}>&quot;React&quot;</span>{`, `}<span className={c.amber}>&quot;Next.js&quot;</span>{`],
  `}<span className={c.blue}>&quot;certifications&quot;</span>{`: [
`}{certifications.map((x, i) => (
  <span key={x.name}>{`    `}<span className={c.amber}>&quot;{x.name} ({x.year})&quot;</span>{i < certifications.length - 1 ? ",\n" : "\n"}</span>
))}{`  ]
}`}
          </pre>
        </section>

        {/* Experience */}
        <section id="experience" className="py-16">
          <Prompt cmd="git log --career" />
          <div className="space-y-4">
            {experience.map((job, i) => (
              <div key={job.company} className={`rounded-lg border ${c.border} ${c.panel} p-6`}>
                <p className="text-sm">
                  <span className={c.amber}>commit {["a1f9e3c", "7bd20e4", "3c8e1aa"][i]}</span>
                  <span className={c.dim}> ({job.start} → {job.end})</span>
                </p>
                <h3 className="mt-2 font-sans text-2xl font-semibold text-white">
                  {job.company} <span className={`text-base font-normal ${c.green}`}>· {job.title}</span>
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${c.dim}`}>{job.description}</p>
                <p className="mt-4 flex flex-wrap gap-2 text-xs">
                  {job.tech.map((t) => (
                    <span key={t} className={`rounded border ${c.border} px-2 py-1 ${c.blue}`}>
                      {t}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16">
          <Prompt cmd="ls ./skills" />
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label} className={`rounded-lg border ${c.border} ${c.panel} p-6`}>
                <p className={`mb-3 text-sm ${c.green}`}>{g.label.toLowerCase().replace(/ & /g, "-")}/</p>
                <ul className="grid grid-cols-2 gap-y-1.5 text-sm">
                  {g.items.map((s) => (
                    <li key={s}>
                      <span className={c.dim}>├─ </span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <Prompt cmd="ls ./projects --featured" />
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className={`group rounded-lg border ${c.border} ${c.panel} p-6 transition-colors hover:border-[#7ee787]`}
              >
                {p.gallery ? (
                  <PhoneCover
                    shots={p.gallery}
                    className={`mb-5 rounded border ${c.border} opacity-80 transition-opacity group-hover:opacity-100`}
                  />
                ) : (
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    width={800}
                    height={500}
                    className={`mb-5 aspect-[8/5] w-full rounded border ${c.border} object-cover opacity-80 transition-opacity group-hover:opacity-100`}
                  />
                )}
                <p className={`text-xs ${c.dim}`}>drwxr-xr-x · {p.kind}</p>
                <h3 className="mt-3 font-sans text-xl font-semibold text-white group-hover:text-[#7ee787]">
                  {p.name}
                </h3>
                <p className={`mt-3 text-sm leading-relaxed ${c.dim}`}>{p.description}</p>
                <p className={`mt-5 text-xs ${c.blue}`}>{p.tech.join(" · ")}</p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`mt-4 inline-block text-xs ${c.green} hover:underline`}
                  >
                    $ open {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Graphic design */}
        <section id="design" className="py-16">
          <Prompt cmd="open ./graphic-design --ai=chatgpt,nano-banana" />
          <DesignGallery
            itemClassName={`rounded-lg border ${c.border} ${c.panel} p-2 transition-colors hover:border-[#7ee787]`}
            imageClassName="rounded"
            titleClassName="font-sans text-sm font-semibold text-white"
            kindClassName={c.dim}
          />
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <Prompt cmd="./contact.sh" />
          <div className={`rounded-lg border border-[#7ee787]/40 ${c.panel} p-8 sm:p-12`}>
            <h2 className="font-sans text-3xl font-bold text-white sm:text-5xl">
              Let&apos;s ship something<span className={c.green}>_</span>
            </h2>
            <div className="mt-8 space-y-2 text-sm sm:text-base">
              <p><span className={c.dim}>email  →</span> <a className="hover:text-[#7ee787]" href={`mailto:${profile.email}`}>{profile.email}</a></p>
              <p><span className={c.dim}>phone  →</span> <a className="hover:text-[#7ee787]" href={`tel:${profile.phone.replace(/-/g, "")}`}>{profile.phone}</a></p>
              <p><span className={c.dim}>github →</span> <a className="hover:text-[#7ee787]" href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.githubHandle}</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer className={`relative border-t ${c.border} py-8 text-center text-xs ${c.dim}`}>
        © 2026 {profile.name} · process exited with code 0
      </footer>
    </div>
  );
}
