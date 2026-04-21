import Link from "next/link";

import { PageHero } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import { ensureLocale, withLocale } from "@/lib/site-utils";

export default async function GetInvolvedPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.getInvolved;

  return (
    <main className="inner-page">
      <PageHero lede={page.lede} title={page.title} />
      <section className="section">
        <div className="reference-grid">
          {page.cards.map((card) => (
            <article key={card.title} className="reference-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
        <div className="button-row button-row--spaced">
          {page.actions.map((action) => (
            <Link
              key={action.href}
              className={`button button--${action.variant ?? "primary"}`}
              href={withLocale(locale, action.href)}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
