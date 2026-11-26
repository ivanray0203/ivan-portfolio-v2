import Image from "next/image";
import type { Project } from "@/data/profile";

type Shot = NonNullable<Project["gallery"]>[number];

function Phone({ shot, className = "" }: { shot: Shot; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[1.1rem] border-[3px] border-black bg-black shadow-xl shadow-black/40 ${className}`}
    >
      <Image
        src={shot.src}
        alt={shot.label}
        width={920}
        height={2000}
        className="block h-auto w-full"
      />
    </div>
  );
}

/** Three overlapping phones in an 8:5 box, used as a project card cover. */
export function PhoneCover({ shots, className = "" }: { shots: Shot[]; className?: string }) {
  const [a, b, c] = shots;
  return (
    <div
      className={`relative aspect-[8/5] w-full overflow-hidden bg-gradient-to-br from-[#0b1a33] via-[#13305c] to-[#1d4f91] ${className}`}
    >
      <div className="absolute inset-x-0 top-[8%] flex items-start justify-center">
        {b && <Phone shot={b} className="relative z-0 mt-[6%] w-[24%] -rotate-6 opacity-90" />}
        {a && <Phone shot={a} className="relative z-10 -mx-[3%] w-[28%]" />}
        {c && <Phone shot={c} className="relative z-0 mt-[6%] w-[24%] rotate-6 opacity-90" />}
      </div>
    </div>
  );
}

/** Horizontally scrolling strip of every screenshot with captions. */
export function PhoneGallery({
  shots,
  captionClassName = "",
}: {
  shots: Shot[];
  captionClassName?: string;
}) {
  return (
    <div className="-mx-6 overflow-x-auto px-6 pb-4 [scrollbar-width:thin]">
      <ul className="flex snap-x snap-mandatory gap-5">
        {shots.map((s) => (
          <li key={s.src} className="w-40 shrink-0 snap-start sm:w-48">
            <Phone shot={s} />
            <p className={`mt-2 text-center text-xs ${captionClassName}`}>{s.label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
