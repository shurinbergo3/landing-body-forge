import { APP_ID } from "./config";

// Витрины, из которых тянем оценки и отзывы. Порядок задаёт приоритет показа.
const STOREFRONTS = ["us", "ru", "gb", "de", "pl", "ua", "ca", "au"];
const REVALIDATE = 60 * 60 * 24; // раз в сутки

export type Review = {
  id: string;
  rating: number;
  title: string;
  text: string;
  author: string;
  country: string;
};

export type AppRating = { average: number; count: number };

async function fetchJson(url: string): Promise<any | null> {
  try {
    const res = await fetch(url, { next: { revalidate: REVALIDATE } });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

// Apple не отдаёт глобальный агрегат - считаем средневзвешенное по витринам.
export async function getAppRating(): Promise<AppRating | null> {
  const results = await Promise.all(
    STOREFRONTS.map((c) =>
      fetchJson(`https://itunes.apple.com/lookup?id=${APP_ID}&country=${c}`),
    ),
  );

  let weighted = 0;
  let count = 0;
  for (const data of results) {
    const app = data?.results?.[0];
    const c = Number(app?.userRatingCount) || 0;
    const avg = Number(app?.averageUserRating) || 0;
    if (c > 0 && avg > 0) {
      weighted += avg * c;
      count += c;
    }
  }

  if (count === 0) return null;
  return { average: Math.round((weighted / count) * 10) / 10, count };
}

function parseFeed(data: any, country: string): Review[] {
  const raw = data?.feed?.entry;
  const entries = Array.isArray(raw) ? raw : raw ? [raw] : [];
  return entries
    .filter((e) => e?.["im:rating"]?.label)
    .map((e) => ({
      id: e.id?.label ?? `${country}-${e.author?.name?.label}-${e.title?.label}`,
      rating: Number(e["im:rating"].label) || 0,
      title: e.title?.label ?? "",
      text: e.content?.label ?? "",
      author: e.author?.name?.label ?? "",
      country,
    }));
}

// Свежие положительные отзывы со всех витрин, без дублей.
export async function getReviews(limit = 9): Promise<Review[]> {
  const perStore = await Promise.all(
    STOREFRONTS.map((c) =>
      fetchJson(
        `https://itunes.apple.com/${c}/rss/customerreviews/id=${APP_ID}/sortBy=mostRecent/json`,
      ).then((d) => parseFeed(d, c)),
    ),
  );

  const seen = new Set<string>();
  const picked: Review[] = [];
  for (const r of perStore.flat()) {
    if (r.rating < 4 || !r.text.trim()) continue;
    const key = `${r.author}|${r.title}`.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    picked.push(r);
    if (picked.length >= limit) break;
  }
  return picked;
}
