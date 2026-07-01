import Link from "next/link";
import type { BlogPost, Lang } from "@/lib/blog";
import { getContent, blogHref } from "@/lib/blog";
import type { Dict } from "@/lib/dictionaries";

const glow: Record<BlogPost["accent"], string> = {
  volt: "glow-volt",
  warm: "glow-warm",
  cool: "glow-cool",
  violet: "glow-volt",
};

export default function PostCard({
  post,
  lang,
  dict,
}: {
  post: BlogPost;
  lang: Lang;
  dict: Dict;
}) {
  const c = getContent(post, lang);
  return (
    <Link
      href={blogHref(lang, post.slug)}
      className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-ink-700 to-ink-800 p-7 transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-white/15"
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${glow[post.accent]}`}
      />
      <div className="relative flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="rounded-full border border-volt/25 bg-volt/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-volt">
          {c.tag}
        </span>
        <span className="whitespace-nowrap text-[12px] text-ash-400">
          {c.readingMin} {dict.blog.readSuffix}
        </span>
      </div>
      <h3 className="relative mt-5 line-clamp-3 min-h-[3.45em] text-balance text-[1.32rem] font-bold leading-[1.15] tracking-tight text-white transition-colors group-hover:text-volt">
        {c.title}
      </h3>
      <p className="relative mt-3 line-clamp-3 text-[14px] leading-relaxed text-ash-400">
        {c.excerpt}
      </p>
      <span className="relative mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-medium text-white">
        {lang === "ru" ? "Читать" : "Read"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
