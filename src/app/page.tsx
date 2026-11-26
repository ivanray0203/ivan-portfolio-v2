import Image from "next/image";
import Link from "next/link";
import { DesignGallery } from "@/components/design-gallery";
import { PhoneCover } from "@/components/phone";
import {
  certifications,
  displayUrl,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/profile";

const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#design", label: "Design" },
  { href: "#contact", label: "Contact" },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
      <span className="h-px flex-1 translate-y-[-0.35rem] bg-line" />
    </div>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((t) => (
        <li
          key={t}
          className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-xs text-ink-soft"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const stats = [
    { value: "6+", label: "Years building for the web" },
    { value: String(experience.length), label: "Companies" },
    { value: String(projects.length), label: "Featured projects" },
  ];

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
            Ivan Ray<span className="text-accent">.</span>
          </Link>
          <nav className="hidden gap-8 text-sm text-ink-soft md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <Link
            href="/cv"
            className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-accent"
          >
            View CV
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pt-28">
          <p className="mb-6 flex items-center gap-3 font-mono text-sm text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Open to new opportunities · {profile.location}
          </p>
          <h1 className="font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-ink-soft sm:text-2xl">
            <span className="text-ink">{profile.role}</span> crafting scalable web applications with{" "}
            <em className="font-serif not-italic text-accent">Laravel</em>,{" "}
            <em className="font-serif not-italic text-accent">Vue.js</em>,{" "}
            <em className="font-serif not-italic text-accent">React</em> and{" "}
            <em className="font-serif not-italic text-accent">Next.js</em>.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
            >
              See my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              Get in touch
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
            >
              GitHub ↗
            </a>
          </div>

          <dl className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="bg-paper px-6 py-8">
                <dt className="text-sm text-ink-soft">{s.label}</dt>
                <dd className="mt-2 font-serif text-5xl font-medium">{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading index="01" title="About" />
          <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
            <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
              <p className="font-serif text-2xl leading-snug text-ink">{profile.summary}</p>
              <p>
                Since 2019 I&apos;ve shipped full-stack products across document management,
                payroll, fax workflows and mobile, moving comfortably between Laravel back ends,
                Vue and React front ends, and React Native apps.
              </p>
              <p>
                I use AI-powered tools like Claude Code and Cursor day to day to move faster,
                write cleaner code and work through complex problems.
              </p>
              <p>{profile.graphicDesign}</p>
            </div>
            <aside className="space-y-6 rounded-2xl border border-line bg-paper-2 p-6 text-sm">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={400}
                height={400}
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  Education
                </h3>
                <p className="mt-2 font-medium">{education.degree}</p>
                <p className="text-ink-soft">{education.school}</p>
                <p className="font-mono text-xs text-ink-soft">{education.years}</p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-ink-soft">
                  Trainings & Certifications
                </h3>
                <ul className="mt-2 space-y-1.5">
                  {certifications.map((c) => (
                    <li key={c.name} className="flex justify-between gap-4">
                      <span>{c.name}</span>
                      <span className="font-mono text-xs text-ink-soft">{c.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading index="02" title="Experience" />
          <ol className="relative space-y-12 border-l border-line pl-8 sm:pl-12">
            {experience.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[2.3rem] top-2 h-3 w-3 rounded-full border-2 border-paper bg-accent ring-1 ring-accent sm:-left-[3.3rem]" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-2xl font-medium">
                    {job.company}
                    <span className="ml-3 font-sans text-base font-normal italic text-ink-soft">
                      {job.title}
                    </span>
                  </h3>
                  <p className="font-mono text-sm text-ink-soft">
                    {job.start} – {job.end}
                  </p>
                </div>
                <p className="mt-3 max-w-3xl leading-relaxed text-ink-soft">{job.description}</p>
                <div className="mt-4">
                  <Tags items={job.tech} />
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Skills */}
        <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading index="03" title="Skills & Technologies" />
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label} className="rounded-2xl border border-line p-6">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
                  {g.label}
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-lg">
                  {g.items.map((s, i) => (
                    <li key={s} className="flex items-center gap-4">
                      {s}
                      {i < g.items.length - 1 && <span className="text-line">/</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading index="04" title="Projects" />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="group flex flex-col rounded-2xl border border-line bg-paper-2 p-7 transition-all hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_20px_40px_-20px_rgba(20,33,61,0.35)]"
              >
                {p.gallery ? (
                  <PhoneCover shots={p.gallery} className="mb-6 rounded-xl border border-line" />
                ) : (
                  <Image
                    src={p.image}
                    alt={`${p.name} screenshot`}
                    width={800}
                    height={500}
                    className="mb-6 aspect-[8/5] w-full rounded-xl border border-line object-cover"
                  />
                )}
                <div className="mb-4 flex items-center justify-between font-mono text-xs text-ink-soft">
                  <span>{p.kind}</span>
                  <span className="text-accent">0{i + 1}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium tracking-tight">{p.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.description}</p>
                <div className="mt-6">
                  <Tags items={p.tech} />
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex w-fit items-center gap-1 break-all font-mono text-sm text-accent hover:underline"
                  >
                    {displayUrl(p.url)} ↗
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Graphic design */}
        <section id="design" className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading index="05" title="Graphic Design" />
          <p className="-mt-4 mb-10 max-w-2xl text-ink-soft">
            Posters and banners I&apos;ve designed with AI tools like ChatGPT and Nano Banana.
          </p>
          <DesignGallery
            itemClassName="rounded-2xl border border-line bg-paper-2 p-3"
            imageClassName="rounded-xl"
            titleClassName="font-serif text-lg font-medium"
            kindClassName="font-mono text-ink-soft"
          />
        </section>

        {/* Contact */}
        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-6xl rounded-3xl bg-ink px-8 py-16 text-paper sm:px-16 sm:py-20">
            <p className="font-mono text-sm text-accent">06 — Contact</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl font-medium leading-tight sm:text-6xl">
              Let&apos;s build something great together.
            </h2>
            <p className="mt-6 max-w-xl text-paper/70">
              Have a project in mind or an opening on your team? I&apos;d love to hear about it.
            </p>
            <div className="mt-12 grid gap-6 border-t border-paper/15 pt-10 sm:grid-cols-3">
              <a href={`mailto:${profile.email}`} className="group">
                <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Email</p>
                <p className="mt-1 text-lg group-hover:text-accent">{profile.email}</p>
              </a>
              <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="group">
                <p className="font-mono text-xs uppercase tracking-widest text-paper/50">Phone</p>
                <p className="mt-1 text-lg group-hover:text-accent">{profile.phone}</p>
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="group">
                <p className="font-mono text-xs uppercase tracking-widest text-paper/50">GitHub</p>
                <p className="mt-1 text-lg group-hover:text-accent">@{profile.githubHandle} ↗</p>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-6xl flex-col justify-between gap-2 px-6 py-10 text-sm text-ink-soft sm:flex-row">
        <p>
          © 2026 {profile.name}
        </p>
        <p>Built with Next.js & Tailwind CSS</p>
      </footer>
    </>
  );
}
