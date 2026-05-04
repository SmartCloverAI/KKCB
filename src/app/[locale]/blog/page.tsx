import { BlogCard, InnerCta, PageHero } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import { getAllPostSummaries } from "@/lib/content";
import { ensureLocale } from "@/lib/site-utils";

export default async function BlogIndexPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const posts = getAllPostSummaries(locale);

  return (
    <main className="inner-page">
      <PageHero lede={dictionary.blog.intro} title={dictionary.blog.title} />
      <section className="section">
        <div className="blog-grid">
          {posts.map((post) => (
            <BlogCard key={post.slug} locale={locale} post={post} />
          ))}
        </div>
      </section>
      <InnerCta dictionary={dictionary} locale={locale} />
    </main>
  );
}
