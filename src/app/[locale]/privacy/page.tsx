import type { Metadata } from "next";
import { getDict, isLocale } from "@/lib/i18n";
import { privacyDocs, type PrivacyLocale } from "@/lib/privacy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const doc = privacyDocs[isLocale(locale) && locale in privacyDocs ? (locale as PrivacyLocale) : "en"];
  return {
    title: `${doc.title} - Body Forge`,
    description: doc.lead,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "ru";
  const dict = getDict(locale);
  const initial: PrivacyLocale = locale === "ru" ? "ru" : "en";

  return (
    <>
      <Nav dict={dict} locale={locale} />
      <PrivacyPolicy initial={initial} homeHref={`/${locale}`} />
      <Footer dict={dict} locale={locale} />
    </>
  );
}
