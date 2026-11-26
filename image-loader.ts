// Image loader for the static GitHub Pages build: serves files from /public as-is,
// with the site's basePath in front. The `w` query keeps Next's width check happy;
// static hosting ignores it.
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
