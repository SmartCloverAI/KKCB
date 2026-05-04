import { InnerCta, MediaCard, PageHero } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import { ensureLocale } from "@/lib/site-utils";

export default async function ResearchPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.research;

  return (
    <main className="inner-page">
      <PageHero lede={page.lede} title={page.title} />
      <section className="section section--split">
        <div className="principles">
          {page.focus.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <MediaCard id="team-with-student" locale={locale} />
      </section>
      <section className="section">
        <div className="reference-grid">
          {page.inspirations.map((item) => (
            <article key={item.href} className="reference-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a className="text-link" href={item.href} rel="noreferrer" target="_blank">
                {page.referenceLinkLabel}
              </a>
            </article>
          ))}
        </div>
      </section>
      <InnerCta dictionary={dictionary} locale={locale} />
    </main>
  );
}
