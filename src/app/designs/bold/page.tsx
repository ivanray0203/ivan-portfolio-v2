import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
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

const grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = { title: `${profile.name} | Bold` };

const allSkills = skillGroups.flatMap((g) => g.items);

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between border-b-4 border-black pb-3">
      <h2 className="text-4xl font-bold uppercase tracking-tight sm:text-6xl">{children}</h2>
      <span className="text-4xl font-bold sm:text-6xl">({n})</span>
    </div>
  );
}

export default function BoldDesign() {
  return (
    <div className={`${grotesk.className} min-h-screen bg-[#f4f1ea] text-black`}>
      <header className="sticky top-0 z-50 border-b-4 border-black bg-[#ffde3b]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <Link href="/designs/bold" className="text-xl font-bold uppercase">
            I.R.F.A ✶
          </Link>
          <nav className="hidden gap-1 md:flex">
            {["Work", "Skills", "Projects", "Design", "Contact"].map((s) => (
              <a
                key={s}
                href={`#${s.toLowerCase()}`}
                className="border-2 border-transparent px-3 py-1 font-medium uppercase hover:border-black hover:bg-white"
              >
                {s}
              </a>
            ))}
          </nav>
          <Link
            href="/cv"
            className="border-2 border-black bg-black px-4 py-1.5 font-bold uppercase text-[#ffde3b] shadow-[4px_4px_0_#ff4d00] transition-transform hover:-translate-y-0.5"
          >
            CV →
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="py-14 sm:py-20">
          <p className="mb-6 inline-block -rotate-1 border-2 border-black bg-[#ff4d00] px-3 py-1 font-bold uppercase text-white">
            Full Stack Web Developer — {profile.location}
          </p>
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
            <h1 className="text-[15vw] font-bold uppercase leading-[0.85] tracking-tighter sm:text-[11vw] xl:text-[10rem]">
              Ivan Ray
              <br />
              <span className="text-transparent [-webkit-text-stroke:3px_black]">Antonio</span>
            </h1>
            <div className="w-44 shrink-0 rotate-2 border-4 border-black bg-[#ffde3b] shadow-[8px_8px_0_black] sm:w-60">
              <Image
                src={profile.photo}
                alt={profile.name}
                width={500}
                height={500}
                priority
                className="aspect-square w-full border-b-4 border-black object-cover"
              />
              <p className="px-3 py-1.5 text-center text-sm font-bold uppercase">That&apos;s me ✶</p>
            </div>
          </div>
          <div className="mt-10 grid gap-6 border-t-4 border-black pt-6 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-2xl font-medium leading-snug sm:text-3xl">{profile.summary}</p>
              <p className="mt-5 inline border-2 border-black bg-white px-1 text-lg font-medium leading-relaxed [box-decoration-break:clone]">
                {profile.graphicDesign}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end md:justify-end">
              <a
                href={`mailto:${profile.email}`}
                className="w-full border-4 border-black bg-[#ffde3b] px-6 py-4 text-center text-xl font-bold uppercase shadow-[6px_6px_0_black] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:w-auto"
              >
                Hire me ↗
              </a>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="-mx-6 overflow-hidden border-y-4 border-black bg-black py-4 text-[#ffde3b]">
          <p className="whitespace-nowrap text-3xl font-bold uppercase">
            {[...allSkills, ...allSkills].map((s, i) => (
              <span key={i} className="mx-4">
                {s} <span className="text-[#ff4d00]">✶</span>
              </span>
            ))}
          </p>
        </div>

        {/* Work */}
        <section id="work" className="py-20">
          <Label n="01">Work</Label>
          <div>
            {experience.map((job) => (
              <div
                key={job.company}
                className="group grid gap-4 border-b-2 border-black py-8 transition-colors hover:bg-[#ffde3b] md:grid-cols-[1fr_2fr_auto] md:px-4"
              >
                <div>
                  <h3 className="text-3xl font-bold uppercase">{job.company}</h3>
                  <p className="font-medium">{job.title}</p>
                </div>
                <div>
                  <p className="text-lg leading-relaxed">{job.description}</p>
                  <p className="mt-3 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span key={t} className="border-2 border-black bg-white px-2 py-0.5 text-sm font-medium">
                        {t}
                      </span>
                    ))}
                  </p>
                </div>
                <p className="text-lg font-bold md:text-right">
                  {job.start}
                  <br />
                  {job.end}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20">
          <Label n="02">Skills</Label>
          <div className="mt-8 grid border-l-4 border-t-4 border-black sm:grid-cols-2 lg:grid-cols-5">
            {skillGroups.map((g, i) => (
              <div
                key={g.label}
                className={`border-b-4 border-r-4 border-black p-6 ${
                  ["bg-white", "bg-[#ff4d00] text-white", "bg-[#ffde3b]", "bg-[#3b5bff] text-white", "bg-[#ff9ecf]"][i % 5]
                }`}
              >
                <h3 className="mb-4 text-2xl font-bold uppercase">{g.label}</h3>
                <ul className="space-y-1 text-lg font-medium">
                  {g.items.map((s) => (
                    <li key={s}>→ {s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <Label n="03">Projects</Label>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="flex flex-col border-4 border-black bg-white shadow-[8px_8px_0_black] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0_#ff4d00]"
              >
                <div className="relative border-b-4 border-black">
                  {p.gallery ? (
                    <PhoneCover shots={p.gallery} />
                  ) : (
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      width={800}
                      height={500}
                      className="aspect-[8/5] w-full object-cover"
                    />
                  )}
                  <span
                    className={`absolute bottom-0 left-0 border-r-4 border-t-4 border-black px-3 py-1 text-4xl font-bold leading-none ${
                      ["bg-[#ffde3b]", "bg-[#3b5bff] text-white", "bg-[#ff4d00] text-white"][i % 3]
                    }`}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm font-bold uppercase">{p.kind}</p>
                  <h3 className="mt-1 text-2xl font-bold uppercase">{p.name}</h3>
                  <p className="mt-3 flex-1 leading-relaxed">{p.description}</p>
                  <p className="mt-5 border-t-2 border-black pt-3 text-sm font-medium">{p.tech.join(" / ")}</p>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 break-all border-2 border-black bg-[#ffde3b] px-2 py-2 text-center text-xs font-bold sm:text-sm transition-colors hover:bg-black hover:text-[#ffde3b]"
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
        <section id="design" className="py-20">
          <Label n="04">Design</Label>
          <p className="mb-8 mt-4 max-w-2xl text-lg font-medium">
            Posters and banners made with AI tools like ChatGPT and Nano Banana.
          </p>
          <DesignGallery
            itemClassName="border-4 border-black bg-white p-2 shadow-[6px_6px_0_black] transition-shadow hover:shadow-[10px_10px_0_#ff4d00]"
            titleClassName="font-bold uppercase"
            kindClassName="font-medium"
          />
        </section>

        {/* Education */}
        <section className="grid gap-6 py-10 md:grid-cols-2">
          <div className="border-4 border-black bg-white p-6">
            <h3 className="text-sm font-bold uppercase">Education</h3>
            <p className="mt-2 text-2xl font-bold">{education.degree}</p>
            <p className="font-medium">{education.school} · {education.years}</p>
          </div>
          <div className="border-4 border-black bg-white p-6">
            <h3 className="text-sm font-bold uppercase">Trainings & Certifications</h3>
            <ul className="mt-2 space-y-1 font-medium">
              {certifications.map((c) => (
                <li key={c.name}>✶ {c.name} ({c.year})</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* Contact */}
      <section id="contact" className="mt-16 border-t-4 border-black bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-6xl font-bold uppercase leading-[0.9] tracking-tighter sm:text-9xl">
            Let&apos;s
            <br />
            <span className="text-[#ffde3b]">talk.</span>
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { k: "Email", v: profile.email, href: `mailto:${profile.email}` },
              { k: "Phone", v: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` },
              { k: "GitHub", v: `@${profile.githubHandle}`, href: profile.github },
            ].map((x) => (
              <a
                key={x.k}
                href={x.href}
                className="border-4 border-white p-5 transition-colors hover:bg-[#ffde3b] hover:text-black"
              >
                <p className="text-sm font-bold uppercase">{x.k}</p>
                <p className="mt-1 text-xl font-medium break-all">{x.v}</p>
              </a>
            ))}
          </div>
          <p className="mt-16 text-sm font-medium uppercase text-white/60">© 2026 {profile.name}</p>
        </div>
      </section>
    </div>
  );
}
