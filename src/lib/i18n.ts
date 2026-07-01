import { dictionaries, type Dict } from "./dictionaries";

export const locales = ["ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ru";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(locale: string): Dict {
  return dictionaries[isLocale(locale) ? locale : defaultLocale];
}

// Русский - дефолт без префикса в адресе, остальные локали с префиксом.
export function localePath(locale: string): string {
  return locale === defaultLocale ? "/" : `/${locale}`;
}
