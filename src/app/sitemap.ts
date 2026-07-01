import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
import { locales } from "@/lib/i18n";
import { privacyLocales } from "@/lib/privacy";
import { getAllPosts } from "@/lib/blog";

const url = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const homeLanguages: Record<string, string> = {
    "x-default": url("/"),
    en: url("/"),
    ru: url("/ru"),
  };

  const home: MetadataRoute.Sitemap = locales.map((locale) => ({
    url: locale === "en" ? url("/") : url(`/${locale}`),
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: { languages: homeLanguages },
  }));

  const blogLanguages: Record<string, string> = {
    "x-default": url("/blog"),
    en: url("/blog"),
    ru: url("/ru/blog"),
  };

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: url("/blog"),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: { languages: blogLanguages },
    },
    {
      url: url("/ru/blog"),
      changeFrequency: "weekly",
      priority: 0.75,
      alternates: { languages: blogLanguages },
    },
  ];

  const posts = getAllPosts();
  const blogPosts: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const langs: Record<string, string> = {
      "x-default": url(`/blog/${post.slug}`),
      en: url(`/blog/${post.slug}`),
      ru: url(`/ru/blog/${post.slug}`),
    };
    return [
      {
        url: url(`/blog/${post.slug}`),
        lastModified: post.date,
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: { languages: langs },
      },
      {
        url: url(`/ru/blog/${post.slug}`),
        lastModified: post.date,
        changeFrequency: "monthly" as const,
        priority: 0.65,
        alternates: { languages: langs },
      },
    ];
  });

  const privacyLanguages = Object.fromEntries(
    privacyLocales.map((l) => [l, url(`/privacy/${l}`)]),
  );

  const privacy: MetadataRoute.Sitemap = privacyLocales.map((locale) => ({
    url: url(`/privacy/${locale}`),
    changeFrequency: "yearly",
    priority: 0.3,
    alternates: { languages: privacyLanguages },
  }));

  return [...home, ...blogIndex, ...blogPosts, ...privacy];
}
