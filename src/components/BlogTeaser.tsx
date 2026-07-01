import Link from "next/link";
import type { Dict } from "@/lib/dictionaries";
import { getAllPosts, blogHref, type Lang } from "@/lib/blog";
import PostCard from "./blog/PostCard";
import Reveal from "./Reveal";

export default function BlogTeaser({
  dict,
  locale,
}: {
  dict: Dict;
  locale: string;
}) {
  const lang: Lang = locale === "ru" ? "ru" : "en";
  const posts = getAllPosts().slice(0, 3);

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="glow-cool pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] blur-3xl" />
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="eyebrow">{dict.blog.eyebrow}</p>
            <h2 className="mt-4 text-balance text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] tracking-tightest text-white">
              {dict.blog.title}
            </h2>
            <p className="mt-5 text-[1.05rem] leading-relaxed text-ash-400">
              {dict.blog.subtitle}
            </p>
          </div>
          <Link
            href={blogHref(lang)}
            className="btn-ghost shrink-0 whitespace-nowrap"
          >
            {dict.blog.allTag}
            <span aria-hidden>→</span>
          </Link>
        </Reveal>

        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 0.06} className="h-full min-w-0">
              <PostCard post={post} lang={lang} dict={dict} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
