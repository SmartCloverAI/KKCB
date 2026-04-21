import { MediaCard, PageHero } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import { ensureLocale } from "@/lib/site-utils";

export default async function MethodPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const page = dictionary.pages.method;

  return (
    <main className="inner-page">
      <PageHero lede={page.lede} title={page.title} />
      <section className="section section--split">
        <div className="principles">
          {page.principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
          <blockquote>{page.quote}</blockquote>
        </div>
        <MediaCard id="guided-walk" locale={locale} />
      </section>
    </main>
  );
}
