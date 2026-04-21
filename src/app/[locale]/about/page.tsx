import { MediaCard, PageHero } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import { ensureLocale } from "@/lib/site-utils";

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.about;

  return (
    <main className="inner-page">
      <PageHero lede={page.lede} title={page.title} />
      <section className="section section--split">
        <div className="story-stack">
          <h2>{page.storyTitle}</h2>
          {page.storyBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <MediaCard id="historic-napoli-2013" locale={locale} />
      </section>
      <section className="section">
        <div className="timeline">
          {page.milestones.map((milestone) => (
            <article key={milestone.year} className="timeline__item">
              <p className="eyebrow">{milestone.year}</p>
              <h3>{milestone.title}</h3>
              <p>{milestone.body}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
