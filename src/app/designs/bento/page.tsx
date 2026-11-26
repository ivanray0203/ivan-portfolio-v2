import type { Metadata } from "next";
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

export const metadata: Metadata = { title: `${profile.name} | Bento` };

const card =
  "rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors hover:border-white/20";

const gradientText =
  "bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent";

export default function BentoDesign() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#09090b] font-sans text-zinc-100">
      {/* Glow */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-violet-600/25 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-[30rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/15 blur-[140px]" />

      <header className="sticky top-4 z-50 mx-auto mt-4 flex w-fit items-center gap-1 rounded-full border border-white/10 bg-zinc-900/70 p-1.5 text-sm backdrop-blur-md">
        <Link href="/designs/bento" className="rounded-full bg-white px-4 py-1.5 font-semibold text-black">
          IR
        </Link>
        {["About", "Experience", "Projects", "Design", "Contact"].map((s) => (
          <a
            key={s}
            href={`#${s.toLowerCase()}`}
            className="hidden rounded-full px-3 py-1.5 text-zinc-400 hover:bg-white/10 hover:text-white sm:block"
          >
            {s}
          </a>
        ))}
        <Link href="/cv" className="rounded-full px-3 py-1.5 text-zinc-400 hover:bg-white/10 hover:text-white">
          CV
        </Link>
      </header>

      <main className="relative mx-auto max-w-6xl px-5 pb-20 pt-16">
        {/* Bento grid hero */}
        <section id="about" className="grid auto-rows-[minmax(140px,auto)] gap-4 md:grid-cols-4">
          <div className={`${card} flex flex-col justify-between md:col-span-3 md:row-span-2 md:p-10`}>
            <div className="flex items-center justify-between gap-4">
              <span className="w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                ● Available for work
              </span>
              <div className="rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-400 to-cyan-300 p-[3px]">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={500}
                  height={500}
                  priority
                  className="h-20 w-20 rounded-full bg-white object-cover sm:h-28 sm:w-28"
                />
              </div>
            </div>
            <div className="mt-10">
              <p className="text-zinc-400">Hi, I&apos;m</p>
              <h1 className="mt-1 text-5xl font-semibold tracking-tight sm:text-7xl">
                {profile.name}
              </h1>
              <p className={`mt-3 text-2xl font-medium sm:text-3xl ${gradientText}`}>{profile.role}</p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">{profile.summary}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-400">{profile.graphicDesign}</p>
            </div>
          </div>

          <div className={`${card} flex flex-col justify-between bg-gradient-to-br from-violet-600/30 to-fuchsia-600/10`}>
            <p className="text-sm text-zinc-400">Experience</p>
            <p className="text-6xl font-semibold">
              6<span className="text-violet-300">+</span>
            </p>
            <p className="text-sm text-zinc-400">years shipping web apps</p>
          </div>

          <div className={`${card} flex flex-col justify-between`}>
            <p className="text-sm text-zinc-400">Based in</p>
            <p className="text-2xl font-semibold">{profile.location}</p>
            <p className="text-sm text-zinc-400">Open to remote</p>
          </div>

          <div className={`${card} md:col-span-2`}>
            <p className="text-sm text-zinc-400">Education</p>
            <p className="mt-3 text-xl font-semibold">{education.degree}</p>
            <p className="text-zinc-400">
              {education.school} · {education.years}
            </p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={`${card} group flex flex-col justify-between`}
          >
            <p className="text-sm text-zinc-400">GitHub</p>
            <p className="text-lg font-semibold group-hover:text-violet-300">@{profile.githubHandle} ↗</p>
          </a>

          <a href={`mailto:${profile.email}`} className="group flex flex-col justify-between rounded-3xl bg-white p-6 text-black transition-colors hover:bg-zinc-200">
            <p className="text-sm text-zinc-500">Say hello</p>
            <p className="text-lg font-semibold">Email me →</p>
          </a>

          {/* Stack */}
          <div className={`${card} md:col-span-4`}>
            <p className="mb-5 text-sm text-zinc-400">Tech stack</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <p className={`mb-3 text-sm font-semibold ${gradientText}`}>{g.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Where I&apos;ve <span className={gradientText}>worked</span>
          </h2>
          <div className="mt-8 grid gap-4">
            {experience.map((job) => (
              <div key={job.company} className={`${card} grid gap-4 md:grid-cols-[220px_1fr] md:p-8`}>
                <div>
                  <p className="text-sm text-zinc-500">
                    {job.start} — {job.end}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold">{job.company}</h3>
                  <p className="text-sm text-violet-300">{job.title}</p>
                </div>
                <div>
                  <p className="leading-relaxed text-zinc-400">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tech.map((t) => (
                      <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected <span className={gradientText}>projects</span>
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-colors hover:border-white/20 ${i === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="overflow-hidden">
                  {p.gallery ? (
                    <PhoneCover
                      shots={p.gallery}
                      className={`transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "md:aspect-[16/6]" : ""}`}
                    />
                  ) : (
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      width={800}
                      height={500}
                      className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        i === 0 ? "aspect-[16/6]" : "aspect-[8/5]"
                      }`}
                    />
                  )}
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs uppercase tracking-widest text-zinc-500">{p.kind}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 max-w-2xl leading-relaxed text-zinc-400">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex max-w-full items-center gap-1 break-all rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-zinc-200"
                    >
                      {displayUrl(p.url)} ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Graphic design */}
        <section id="design" className="mt-24">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Graphic <span className={gradientText}>design</span>
          </h2>
          <p className="mb-8 mt-3 max-w-2xl text-zinc-400">
            Posters and banners made with AI tools like ChatGPT and Nano Banana.
          </p>
          <DesignGallery
            itemClassName="rounded-3xl border border-white/10 bg-white/[0.03] p-2.5 transition-colors hover:border-white/20"
            imageClassName="rounded-2xl"
            titleClassName="text-sm font-semibold"
            kindClassName="text-zinc-500"
          />
        </section>

        {/* Certifications */}
        <section className={`${card} mt-4`}>
          <p className="text-sm text-zinc-400">Trainings & certifications</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white/5 p-4">
                <p className="font-medium">{c.name}</p>
                <p className="text-sm text-zinc-500">{c.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative mt-24 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/30 via-zinc-900 to-cyan-600/20 p-10 text-center sm:p-16"
        >
          <h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
            Let&apos;s work <span className={gradientText}>together</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-zinc-400">
            Have a project or role in mind? My inbox is always open.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="rounded-full bg-white px-6 py-3 font-medium text-black hover:bg-zinc-200">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/-/g, "")}`} className="rounded-full border border-white/20 px-6 py-3 font-medium hover:bg-white/10">
              {profile.phone}
            </a>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-zinc-600">© 2026 {profile.name}</footer>
      </main>
    </div>
  );
}
