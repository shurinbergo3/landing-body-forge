import { getDict, isLocale } from "@/lib/i18n";
import { SITE_URL, storeUrl } from "@/lib/config";
import { getAppRating, getReviews } from "@/lib/reviews";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Reframe from "@/components/Reframe";
import Loop from "@/components/Loop";
import Features from "@/components/Features";
import ActiveShowcase from "@/components/ActiveShowcase";
import AICoach from "@/components/AICoach";
import Purpose from "@/components/Purpose";
import Library from "@/components/Library";
import Programs from "@/components/Programs";
import Ecosystem from "@/components/Ecosystem";
import Progress from "@/components/Progress";
import Gallery from "@/components/Gallery";
import BlogTeaser from "@/components/BlogTeaser";
import DownloadCTA from "@/components/DownloadCTA";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export const revalidate = 86400;

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  const dict = getDict(locale);
  const pageUrl = locale === "en" ? SITE_URL : `${SITE_URL}/${locale}`;

  const [reviews, rating] = await Promise.all([getReviews(), getAppRating()]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "Body Forge",
        description: dict.meta.description,
        applicationCategory: "HealthApplication",
        operatingSystem: "iOS",
        url: pageUrl,
        downloadUrl: storeUrl(locale),
        image: `${SITE_URL}/shots/${locale}/01-hero.png`,
        inLanguage: locale,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        ...(rating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: rating.average,
                ratingCount: rating.count,
                bestRating: 5,
                worstRating: 1,
              },
            }
          : {}),
        ...(reviews.length
          ? {
              review: reviews.slice(0, 5).map((r) => ({
                "@type": "Review",
                author: { "@type": "Person", name: r.author },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: r.rating,
                  bestRating: 5,
                  worstRating: 1,
                },
                ...(r.title ? { name: r.title } : {}),
                reviewBody: r.text,
              })),
            }
          : {}),
      },
      {
        "@type": "FAQPage",
        mainEntity: dict.faq.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: it.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav dict={dict} locale={locale} />
      <main>
        <Hero dict={dict} locale={locale} />
        <Marquee dict={dict} />
        <Reframe dict={dict} />
        <Loop dict={dict} />
        <Features dict={dict} />
        <ActiveShowcase dict={dict} locale={locale} />
        <AICoach dict={dict} />
        <Purpose dict={dict} />
        <Library dict={dict} locale={locale} />
        <Programs dict={dict} />
        <Progress dict={dict} />
        <Ecosystem dict={dict} locale={locale} />
        <Stats dict={dict} />
        <Gallery dict={dict} locale={locale} />
        <Reviews dict={dict} reviews={reviews} rating={rating} />
        <BlogTeaser dict={dict} locale={locale} />
        <DownloadCTA dict={dict} locale={locale} />
        <FAQ dict={dict} />
      </main>
      <Footer dict={dict} locale={locale} />
    </>
  );
}
