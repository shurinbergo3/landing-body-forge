import { posts } from "@/content/blog";

export type BlogFaq = { q: string; a: string };

export type BlogLocaleContent = {
  title: string;
  description: string;
  excerpt: string;
  keyword: string;
  tag: string;
  readingMin: number;
  body: string;
  faq: BlogFaq[];
};

export type BlogPost = {
  slug: string;
  date: string; // YYYY-MM-DD
  accent: "volt" | "warm" | "cool" | "violet";
  audience: "hot" | "warm";
  related: string[];
  ru: BlogLocaleContent;
  en: BlogLocaleContent;
};

export type Lang = "ru" | "en";

const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): BlogPost[] {
  return sorted;
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getContent(post: BlogPost, lang: Lang): BlogLocaleContent {
  return lang === "ru" ? post.ru : post.en;
}

export function getRelated(post: BlogPost, limit = 3): BlogPost[] {
  const picked = post.related
    .map((s) => getPost(s))
    .filter((p): p is BlogPost => Boolean(p) && p!.slug !== post.slug);
  if (picked.length >= limit) return picked.slice(0, limit);
  const fill = sorted.filter(
    (p) => p.slug !== post.slug && !picked.some((x) => x.slug === p.slug),
  );
  return [...picked, ...fill].slice(0, limit);
}

export function blogHref(lang: Lang, slug?: string): string {
  const base = lang === "ru" ? "/ru/blog" : "/blog";
  return slug ? `${base}/${slug}` : base;
}
