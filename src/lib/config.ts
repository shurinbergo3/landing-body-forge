// Ссылки на приложение в App Store.
// id6761138589 — Body Forge - AI Fitness Coach.
// Если появится отдельный маркетинговый домен/почта поддержки — поменять здесь.
export const APP_ID = "6761138589";

export const APP_STORE_URL: Record<string, string> = {
  ru: `https://apps.apple.com/ru/app/id${APP_ID}`,
  en: `https://apps.apple.com/us/app/id${APP_ID}`,
};

export const SUPPORT_EMAIL = "alex@buildbyalex.com";

export function storeUrl(locale: string) {
  return APP_STORE_URL[locale] ?? APP_STORE_URL.en;
}
