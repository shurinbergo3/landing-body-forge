import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDict, isLocale, locales } from "@/lib/i18n";
import { SITE_URL, storeUrl } from "@/lib/config";
import {
  getAllPosts,
  getPost,
  getContent,
  getRelated,
  blogHref,
  type Lang,
} from "@/lib/blog";
import { parseMarkdown, tableOfContents } from "@/lib/markdown";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Prose from "@/components/blog/Prose";
import BlogFAQ from "@/components/blog/BlogFAQ";
import BlogCTA from "@/components/blog/BlogCTA";
import PostCard from "@/components/blog/PostCard";

function lang(raw: string): Lang {
  return raw === "ru" ? "ru" : "en";
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllPosts().map((p) => ({ locale, slug: p.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const l = lang(locale);
  const c = getContent(post, l);
  const path = blogHref(l, slug);
  return {
    metadataBase: new URL(SITE_URL),
    title: `${c.title} — Body Forge`,
    description: c.description,
    keywords: c.keyword,
    alternates: {
      canonical: path,
      languages: {
        "x-default": blogHref("en", slug),
        en: blogHref("en", slug),
        ru: blogHref("ru", slug),
      },
    },
    openGraph: {
      title: c.title,
      description: c.description,
      type: "article",
      url: path,
      siteName: "Body Forge",
      locale: l === "ru" ? "ru_RU" : "en_US",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.description,
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const l = lang(locale);
  const post = getPost(slug);
  if (!post) notFound();

  const dict = getDict(locale);
  const c = getContent(post, l);
  const blocks = parseMarkdown(c.body);
  const toc = tableOfContents(blocks);
  const related = getRelated(post);
  const url = `${SITE_URL}${blogHref(l, slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: c.title,
        description: c.description,
        inLanguage: locale,
        datePublished: post.date,
        dateModified: post.date,
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "Body Forge" },
        publisher: {
          "@type": "Organization",
          name: "Body Forge",
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo/logo.png`,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Body Forge",
            item: `${SITE_URL}${l === "ru" ? "/ru" : "/"}`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.blog.nav,
            item: `${SITE_URL}${blogHref(l)}`,
          },
          { "@type": "ListItem", position: 3, name: c.title, item: url },
        ],
      },
      ...(c.faq.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: c.faq.map((it) => ({
                "@type": "Question",
                name: it.q,
                acceptedAnswer: { "@type": "Answer", text: it.a },
              })),
            },
          ]
        : []),
    ],
  };

  const dateLabel = new Intl.DateTimeFormat(l === "ru" ? "ru-RU" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav dict={dict} locale={locale} />
      <main className="pt-28 sm:pt-32">
        <article className="container-x">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-2 text-[13px] text-ash-400">
              <Link
                href={blogHref(l)}
                className="transition-colors hover:text-white"
              >
                {dict.blog.nav}
              </Link>
              <span>/</span>
              <span className="text-ash-300">{c.tag}</span>
            </div>

            <h1 className="mt-5 text-balance text-[clamp(2rem,5vw,3.3rem)] font-bold leading-[1.05] tracking-tightest text-white">
              {c.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] text-ash-400">
              <span className="rounded-full border border-volt/25 bg-volt/[0.06] px-3 py-1 font-semibold uppercase tracking-[0.12em] text-volt">
                {c.tag}
              </span>
              <span>{dateLabel}</span>
              <span className="h-1 w-1 rounded-full bg-ash-400/50" />
              <span>
                {c.readingMin} {dict.blog.readSuffix}
              </span>
            </div>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:grid-cols-[1fr_260px]">
            <div className="mx-auto w-full max-w-3xl lg:mx-0">
              <p className="border-l-2 border-volt/40 pl-5 text-[1.18rem] font-medium leading-relaxed text-white/90">
                {c.excerpt}
              </p>
              <Prose body={c.body} dict={dict} locale={locale} />
              <BlogFAQ items={c.faq} title={dict.blog.faqTitle} />
              <div className="mt-12">
                <BlogCTA dict={dict} locale={locale} />
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28">
                {toc.length > 1 && (
                  <nav className="rounded-2xl border border-white/[0.07] bg-ink-800/60 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ash-400">
                      {dict.blog.tocTitle}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {toc.map((t) => (
                        <li key={t.id}>
                          <a
                            href={`#${t.id}`}
                            className="block text-[13px] leading-snug text-ash-300 transition-colors hover:text-volt"
                          >
                            {t.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                )}
                <a
                  href={storeUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-volt mt-5 w-full"
                >
                  {dict.blog.ctaButton}
                </a>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mx-auto mt-20 max-w-6xl border-t border-white/[0.07] pt-12">
              <h2 className="text-[1.6rem] font-bold tracking-tightest text-white">
                {dict.blog.relatedTitle}
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} lang={l} dict={dict} />
                ))}
              </div>
            </div>
          )}
        </article>
      </main>
      <div className="mt-24">
        <Footer dict={dict} locale={locale} />
      </div>
    </>
  );
}
