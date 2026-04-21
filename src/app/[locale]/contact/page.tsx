import { PageHero } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import { ensureLocale } from "@/lib/site-utils";

export default async function ContactPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.contact;

  return (
    <main className="inner-page">
      <PageHero lede={page.lede} title={page.title} />
      <section className="section section--split">
        <article className="reference-card">
          <p className="eyebrow">{page.visitTitle}</p>
          {page.visitBody.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </article>
        <article className="reference-card">
          <p className="eyebrow">{page.legalTitle}</p>
          {page.legalBody.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </article>
      </section>
    </main>
  );
}
