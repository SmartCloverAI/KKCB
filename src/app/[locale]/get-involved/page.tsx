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
  const bank = page.bank;

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
        <article className="bank-card" aria-labelledby="bank-transfer-title">
          <div className="bank-card__intro">
            <p className="eyebrow" id="bank-transfer-title">
              {bank.title}
            </p>
            <p>{bank.intro}</p>
          </div>
          <dl className="bank-details">
            <div>
              <dt>{bank.holderLabel}</dt>
              <dd>{bank.holder}</dd>
            </div>
            <div>
              <dt>{bank.ibanLabel}</dt>
              <dd>{bank.iban}</dd>
            </div>
            <div>
              <dt>{bank.bicLabel}</dt>
              <dd>{bank.bic}</dd>
            </div>
          </dl>
        </article>
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
