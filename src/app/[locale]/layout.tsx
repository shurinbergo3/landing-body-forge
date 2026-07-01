import type { ReactNode } from "react";
import type { Metadata } from "next";
import "../globals.css";
import { getDict, isLocale, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "en";
  const dict = getDict(locale);
  const path = lang === "en" ? "/" : `/${lang}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: path,
      languages: {
        "x-default": "/",
        en: "/",
        ru: "/ru",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      type: "website",
      url: path,
      siteName: "Body Forge",
      locale: lang === "ru" ? "ru_RU" : "en_US",
      images: [{ url: `/shots/${lang}/01-hero.png`, width: 1290, height: 2796 }],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/shots/${lang}/01-hero.png`],
    },
    icons: { icon: "/logo/logo.png", apple: "/logo/logo.png" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = isLocale(locale) ? locale : "en";
  return (
    <html lang={lang}>
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
