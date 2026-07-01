import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from "next/script";
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
    verification: {
      google: "rm0_nswqHE7TytZuHtBfWVGC-BpFWi7yvuv_g04ttP4",
      other: {
        "msvalidate.01": "874888A481A37085C686C9CE85897BFD",
      },
    },
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
      <body className="bg-black antialiased">
        {children}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=110317821', 'ym');ym(110317821, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});`}
        </Script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/110317821"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </html>
  );
}
