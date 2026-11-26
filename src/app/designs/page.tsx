import Link from "next/link";

const designs = [
  {
    href: "/designs/terminal",
    name: "1 · Terminal",
    blurb: "Dark, developer-focused. Code-editor windows, monospace type and green accents.",
    swatch: "bg-[#0b0f14] border-[#7ee787]",
  },
  {
    href: "/designs/bold",
    name: "2 · Bold",
    blurb: "Neo-brutalist. Giant type, thick black borders, yellow and orange blocks.",
    swatch: "bg-[#ffde3b] border-black",
  },
  {
    href: "/designs/bento",
    name: "3 · Bento",
    blurb: "Modern dark SaaS look. Bento-grid cards, soft glows and violet-to-cyan gradients.",
    swatch: "bg-gradient-to-br from-violet-600 to-cyan-500 border-white/20",
  },
  {
    href: "/",
    name: "Current",
    blurb: "The editorial paper-and-navy design you already have.",
    swatch: "bg-[#f6f4ef] border-[#14213d]",
  },
];

export default function DesignsIndex() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-serif text-4xl font-medium">Pick a design</h1>
      <p className="mt-2 text-ink-soft">Same CV content, four different looks.</p>
      <ul className="mt-10 space-y-4">
        {designs.map((d) => (
          <li key={d.href}>
            <Link
              href={d.href}
              className="flex items-center gap-5 rounded-2xl border border-line p-5 transition-colors hover:border-ink"
            >
              <span className={`h-14 w-14 shrink-0 rounded-xl border-4 ${d.swatch}`} />
              <span>
                <span className="block text-lg font-medium">{d.name}</span>
                <span className="text-sm text-ink-soft">{d.blurb}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
