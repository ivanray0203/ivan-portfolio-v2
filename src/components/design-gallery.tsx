import Image from "next/image";
import { designWorks } from "@/data/profile";

/**
 * Masonry grid of graphic design work. Keeps each image's natural aspect ratio,
 * so portrait posters, square and wide banners all fit without cropping.
 */
export function DesignGallery({
  itemClassName = "",
  imageClassName = "",
  titleClassName = "",
  kindClassName = "",
}: {
  itemClassName?: string;
  imageClassName?: string;
  titleClassName?: string;
  kindClassName?: string;
}) {
  return (
    <ul className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {designWorks.map((d) => (
        <li key={d.src} className={`group mb-5 break-inside-avoid ${itemClassName}`}>
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${d.src}`}
            target="_blank"
            rel="noreferrer"
            className="block overflow-hidden"
          >
            <Image
              src={d.src}
              alt={`${d.title} – ${d.kind}`}
              width={d.width}
              height={d.height}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] ${imageClassName}`}
            />
          </a>
          <div className="flex items-baseline justify-between gap-3 px-1 pt-3">
            <p className={titleClassName}>{d.title}</p>
            <p className={`shrink-0 text-xs ${kindClassName}`}>{d.kind}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
