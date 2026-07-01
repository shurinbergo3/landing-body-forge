import type { ReactNode } from "react";
import "../../globals.css";
import { privacyLocales, isPrivacyLocale } from "@/lib/privacy";

export function generateStaticParams() {
  return privacyLocales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export default async function PrivacyLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const htmlLang = isPrivacyLocale(lang) ? lang : "en";
  return (
    <html lang={htmlLang}>
      <body className="bg-black antialiased">{children}</body>
    </html>
  );
}
