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
  featured = false,
}: {
  post: BlogPost;
  lang: Lang;
  dict: Dict;
  featured?: boolean;
}) {
  const c = getContent(post, lang);
  return (
    <Link
      href={blogHref(lang, post.slug)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-b from-ink-700 to-ink-800 p-7 transition-all duration-300 ease-apple hover:-translate-y-1 hover:border-white/15 ${
        featured ? "sm:col-span-2 sm:p-9" : ""
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-40 w-40 opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${glow[post.accent]}`}
      />
      <div className="relative flex items-center gap-3">
        <span className="rounded-full border border-volt/25 bg-volt/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-volt">
          {c.tag}
        </span>
        <span className="text-[12px] text-ash-400">
          {c.readingMin} {dict.blog.readSuffix}
        </span>
      </div>
      <h3
        className={`relative mt-5 text-balance font-bold leading-[1.15] tracking-tight text-white transition-colors group-hover:text-volt ${
          featured ? "text-[clamp(1.4rem,2.6vw,1.9rem)]" : "text-[1.32rem]"
        }`}
      >
        {c.title}
      </h3>
      <p className="relative mt-3 line-clamp-3 text-[14px] leading-relaxed text-ash-400">
        {c.excerpt}
      </p>
      <span className="relative mt-6 inline-flex items-center gap-1.5 text-[14px] font-medium text-white">
        {lang === "ru" ? "Читать" : "Read"}
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
