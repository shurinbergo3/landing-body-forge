import type { Metadata } from "next";
import { getDict, isLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/config";
import { getAllPosts, type Lang } from "@/lib/blog";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import PostCard from "@/components/blog/PostCard";

function lang(raw: string): Lang {
  return raw === "ru" ? "ru" : "en";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = lang(locale);
  const dict = getDict(locale);
  const path = l === "ru" ? "/ru/blog" : "/blog";
  return {
    metadataBase: new URL(SITE_URL),
    title: `${dict.blog.title} — Body Forge`,
    description: dict.blog.subtitle,
    alternates: {
      canonical: path,
      languages: { "x-default": "/blog", en: "/blog", ru: "/ru/blog" },
    },
    openGraph: {
      title: `${dict.blog.title} — Body Forge`,
      description: dict.blog.subtitle,
      type: "website",
      url: path,
      siteName: "Body Forge",
      locale: l === "ru" ? "ru_RU" : "en_US",
    },
  };
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const l = lang(locale);
  const dict = getDict(locale);
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${dict.blog.title} — Body Forge`,
    description: dict.blog.subtitle,
    url: `${SITE_URL}${l === "ru" ? "/ru/blog" : "/blog"}`,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav dict={dict} locale={locale} />
      <main className="pt-32 sm:pt-40">
        <section className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{dict.blog.eyebrow}</p>
            <h1 className="mt-4 text-balance text-[clamp(2.2rem,5.5vw,3.8rem)] font-bold leading-[1.03] tracking-tightest text-white">
              {dict.blog.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[1.1rem] leading-relaxed text-ash-400">
              {dict.blog.subtitle}
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.05}>
                <PostCard post={post} lang={l} dict={dict} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <div className="mt-24">
        <Footer dict={dict} locale={locale} />
      </div>
    </>
  );
}
