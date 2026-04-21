import Image from "next/image";
import Link from "next/link";

import { BlogCard, MediaCard, SectionIntro } from "@/components/site-ui";
import { getLocalizedMedia } from "@/content/media";
import { getDictionary } from "@/content/site";
import { getAllPostSummaries, getFeaturedPosts } from "@/lib/content";
import { ensureLocale, withLocale } from "@/lib/site-utils";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = ensureLocale(rawLocale);
  const dictionary = getDictionary(locale);
  const posts = getAllPostSummaries(locale);
  const featured = getFeaturedPosts(posts, locale, 3);
  const heroImage = getLocalizedMedia(dictionary.hero.imageId, locale);

  return (
    <main>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">{dictionary.hero.eyebrow}</p>
          <p className="hero__brand">
            <span>{dictionary.brand.name}</span>
            <em>{dictionary.brand.chapter}</em>
          </p>
          <h1>{dictionary.hero.title}</h1>
          <p className="hero__lede">{dictionary.hero.lede}</p>
          <div className="button-row">
            <Link
              className="button button--primary"
              href={withLocale(locale, dictionary.hero.primaryAction.href)}
            >
              {dictionary.hero.primaryAction.label}
            </Link>
            <Link
              className="button button--secondary"
              href={withLocale(locale, dictionary.hero.secondaryAction.href)}
            >
              {dictionary.hero.secondaryAction.label}
            </Link>
          </div>
          <p className="hero__note">{dictionary.hero.note}</p>
        </div>
        <figure className="hero__media">
          <div className="hero__image">
            <Image
              alt={heroImage.localizedAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              src={heroImage.src}
            />
          </div>
          <figcaption>{heroImage.localizedCaption}</figcaption>
        </figure>
      </section>

      <section className="highlights">
        {dictionary.hero.highlights.map((item) => (
          <div key={item.label} className="highlight">
            <span>{item.value}</span>
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      <section className="section">
        <SectionIntro
          eyebrow={dictionary.chapter.eyebrow}
          intro={dictionary.chapter.body}
          title={dictionary.chapter.title}
        />
        <div className="chapter-strip">
          <div className="chapter-strip__facts">
            {dictionary.chapter.facts.map((fact) => (
              <p key={fact} className="chapter-strip__fact">
                {fact}
              </p>
            ))}
          </div>
          <Link className="text-link" href={withLocale(locale, "/contact")}>
            {dictionary.chapter.detailLinkLabel}
          </Link>
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow={dictionary.pillars.eyebrow}
          intro={dictionary.pillars.intro}
          title={dictionary.pillars.title}
        />
        <div className="pillar-list">
          {dictionary.pillars.items.map((item, index) => (
            <article key={item.title} className="pillar-row">
              <span className="pillar-row__index">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
              <Link className="text-link" href={withLocale(locale, item.href)}>
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <SectionIntro
            eyebrow={dictionary.method.eyebrow}
            intro={dictionary.method.intro}
            title={dictionary.method.title}
          />
          <div className="method-steps">
            {dictionary.method.steps.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
        <MediaCard id="prayer-hands-bedside" locale={locale} />
      </section>

      <section className="section">
        <SectionIntro
          eyebrow={dictionary.evidence.eyebrow}
          intro={dictionary.evidence.intro}
          title={dictionary.evidence.title}
        />
        <div className="reference-grid">
          {dictionary.evidence.items.map((item) => (
            <article key={item.href} className="reference-card">
              <p className="eyebrow">{item.source}</p>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <a
                className="text-link"
                href={item.href}
                rel="noreferrer"
                target="_blank"
              >
                Open source
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow={dictionary.archive.eyebrow}
          intro={dictionary.archive.intro}
          title={dictionary.archive.title}
        />
        <div className="archive-grid">
          {dictionary.archive.imageIds.map((imageId, index) => (
            <MediaCard
              key={imageId}
              className={index === 0 ? "media-card--wide" : ""}
              id={imageId}
              locale={locale}
            />
          ))}
        </div>
      </section>

      <section className="section">
        <SectionIntro
          eyebrow={dictionary.blog.eyebrow}
          intro={dictionary.blog.intro}
          title={dictionary.blog.title}
        />
        <div className="blog-grid">
          {featured.map((post) => (
            <BlogCard key={post.slug} locale={locale} post={post} />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div>
          <p className="eyebrow">Continuous improvement</p>
          <h2>{dictionary.finalCta.title}</h2>
        </div>
        <div>
          <p>{dictionary.finalCta.body}</p>
          <div className="button-row">
            {dictionary.finalCta.actions.map((action) => (
              <Link
                key={action.href}
                className={`button button--${action.variant ?? "primary"}`}
                href={withLocale(locale, action.href)}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
