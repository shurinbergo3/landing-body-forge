import { getDict, isLocale } from "@/lib/i18n";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import ActiveShowcase from "@/components/ActiveShowcase";
import AICoach from "@/components/AICoach";
import Ecosystem from "@/components/Ecosystem";
import Progress from "@/components/Progress";
import Gallery from "@/components/Gallery";
import DownloadCTA from "@/components/DownloadCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "ru";
  const dict = getDict(locale);

  return (
    <>
      <Nav dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} locale={locale} />
        <Marquee dict={dict} />
        <Stats dict={dict} />
        <Features dict={dict} />
        <ActiveShowcase dict={dict} />
        <AICoach dict={dict} />
        <Ecosystem dict={dict} locale={locale} />
        <Progress dict={dict} />
        <Gallery dict={dict} locale={locale} />
        <DownloadCTA dict={dict} locale={locale} />
        <FAQ dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
