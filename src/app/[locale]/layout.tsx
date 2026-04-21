import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { ensureLocale, getLocaleTag } from "@/lib/site-utils";

export function generateStaticParams() {
  return [{ locale: "ro" }, { locale: "en" }];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description
  };
}

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale) as Locale;
  const dictionary = getDictionary(locale);

  return (
    <div className="site-frame" lang={getLocaleTag(locale)}>
      <SiteHeader dictionary={dictionary} locale={locale} />
      {children}
      <SiteFooter dictionary={dictionary} />
    </div>
  );
}
