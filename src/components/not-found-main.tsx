import Link from "next/link";
import React from "react";

import { getDictionary } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { withLocale } from "@/lib/site-utils";

const notFoundCopy: Record<
  Locale,
  {
    action: string;
    lede: string;
    title: string;
  }
> = {
  en: {
    action: "Back to home",
    lede: "We could not find the page you requested.",
    title: "Page not found"
  },
  ro: {
    action: "Înapoi la prima pagină",
    lede: "Nu am găsit pagina căutată.",
    title: "Pagina nu a fost găsită"
  }
};

export function NotFoundMain({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  const copy = notFoundCopy[locale];

  return (
    <main className="inner-page">
      <section className="page-hero page-hero--centered">
        <div className="page-hero__inner page-hero__inner--centered">
          <p className="eyebrow">{dictionary.brand.name}</p>
          <div className="page-hero__content">
            <h1>{copy.title}</h1>
            <p>{copy.lede}</p>
            <div className="button-row">
              <Link className="button button--primary" href={withLocale(locale, "/")}>
                {copy.action}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
