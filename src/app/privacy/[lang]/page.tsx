import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict, localePath } from "@/lib/i18n";
import { privacyDocs, isPrivacyLocale } from "@/lib/privacy";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isPrivacyLocale(lang)) return {};
  const doc = privacyDocs[lang];
  return {
    title: `${doc.title} - Body Forge`,
    description: doc.lead,
    alternates: { canonical: `/privacy/${lang}` },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isPrivacyLocale(lang)) notFound();

  const chrome = lang === "ru" ? "ru" : "en";
  const dict = getDict(chrome);

  return (
    <>
      <Nav dict={dict} locale={chrome} />
      <PrivacyPolicy lang={lang} homeHref={localePath(chrome)} />
      <Footer dict={dict} locale={chrome} />
    </>
  );
}
