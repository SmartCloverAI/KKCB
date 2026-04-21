import Image from "next/image";
import { notFound } from "next/navigation";

import { getDictionary } from "@/content/site";
import { getAllPostSummaries, getPostBySlug, getPostCover } from "@/lib/content";
import { ensureLocale, formatDate, localeParams } from "@/lib/site-utils";

export function generateStaticParams() {
  return localeParams.flatMap(({ locale }) => {
    return getAllPostSummaries(locale).map((post) => ({
      locale,
      slug: post.slug
    }));
  });
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const post = getPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  const cover = getPostCover(locale, post.coverId);

  return (
    <main className="inner-page">
      <article className="post-shell">
        <header className="post-header">
          <p className="eyebrow">{dictionary.brand.name}</p>
          <h1>{post.title}</h1>
          <div className="post-header__meta">
            <span>{formatDate(locale, post.publishedAt)}</span>
            <span>{post.author}</span>
            <span>{post.readingTime}</span>
          </div>
          <p className="post-header__excerpt">{post.excerpt}</p>
        </header>
        {cover ? (
          <figure className="post-cover">
            <div className="post-cover__image">
              <Image
                alt={cover.localizedAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 80vw"
                src={cover.src}
              />
            </div>
            <figcaption>{cover.localizedCaption}</figcaption>
          </figure>
        ) : null}
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
