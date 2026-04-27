import Image from "next/image";
import Link from "next/link";

import { getLocalizedMedia } from "@/content/media";
import type { ActionLink, NavigationItem, SiteDictionary } from "@/content/site";
import { HeaderNavigation } from "@/components/header-nav";
import { ServedByFooter } from "@/components/served-by";
import { formatDate, withLocale } from "@/lib/site-utils";
import type { BlogPostSummary } from "@/lib/content";
import type { Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  dictionary: SiteDictionary;
};

type FooterProps = {
  dictionary: SiteDictionary;
  versionLabel: string;
};

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  intro: string;
};

type PageHeroProps = {
  title: string;
  lede: string;
};

type ActionButtonsProps = {
  locale: Locale;
  actions: ActionLink[];
};

type BlogCardProps = {
  locale: Locale;
  post: BlogPostSummary;
};

export function SiteHeader({ locale, dictionary }: HeaderProps) {
  return <HeaderNavigation dictionary={dictionary} locale={locale} />;
}

export function SiteFooter({ dictionary, versionLabel }: FooterProps) {
  const servedByBrandPosition = dictionary.footer.servedByBrandPosition ?? "start";
  const servedByBrandSuffix = dictionary.footer.servedByBrandSuffix;

  return (
    <footer className="site-footer">
      <div className="site-footer__intro">
        <p className="eyebrow">{dictionary.brand.name}</p>
        <p>{dictionary.footer.mission}</p>
        <p className="site-footer__version">
          <span>{dictionary.footer.versionLabel}</span>
          <strong>{versionLabel}</strong>
        </p>
        <ServedByFooter
          brandPosition={servedByBrandPosition}
          brandSuffix={servedByBrandSuffix}
          label={dictionary.footer.servedByLabel}
        />
      </div>
      <div className="site-footer__details">
        <div>
          <h2>{dictionary.footer.addressLabel}</h2>
          {dictionary.footer.addressLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div>
          <h2>{dictionary.footer.legalLabel}</h2>
          {dictionary.footer.legalLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({ eyebrow, title, intro }: SectionIntroProps) {
  return (
    <div className="section-intro">
      <div className="section-intro__head">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-intro__copy">{intro}</p>
    </div>
  );
}

export function PageHero({ title, lede }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <p className="eyebrow">Kids Kicking Cancer with Budo Romania</p>
        <div className="page-hero__content">
          <h1>{title}</h1>
          <p>{lede}</p>
        </div>
      </div>
    </section>
  );
}

export function ActionButtons({ locale, actions }: ActionButtonsProps) {
  return (
    <div className="button-row">
      {actions.map((action) => (
        <Link
          key={`${action.href}-${action.label}`}
          className={`button button--${action.variant ?? "primary"}`}
          href={withLocale(locale, action.href)}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}

export function MediaCard({
  id,
  locale,
  className = ""
}: {
  id: string;
  locale: Locale;
  className?: string;
}) {
  const image = getLocalizedMedia(id, locale);

  return (
    <figure className={`media-card ${className}`.trim()}>
      <div className="media-card__image">
        <Image
          alt={image.localizedAlt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          src={image.src}
        />
      </div>
      <figcaption>{image.localizedCaption}</figcaption>
    </figure>
  );
}

export function BlogCard({ locale, post }: BlogCardProps) {
  const cover = post.coverId ? getLocalizedMedia(post.coverId, locale) : null;

  return (
    <article className="blog-card">
      {cover ? (
        <div className="blog-card__image">
          <Image
            alt={cover.localizedAlt}
            fill
            sizes="(max-width: 900px) 100vw, 33vw"
            src={cover.src}
          />
        </div>
      ) : null}
      <div className="blog-card__body">
        <p className="eyebrow">{formatDate(locale, post.publishedAt)}</p>
        <h3>
          <Link href={withLocale(locale, `/blog/${post.slug}`)}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}

export function NavigationList({
  locale,
  items
}: {
  locale: Locale;
  items: NavigationItem[];
}) {
  return (
    <div className="navigation-list">
      {items.map((item) => (
        <Link key={item.href} href={withLocale(locale, item.href)}>
          {item.label}
        </Link>
      ))}
    </div>
  );
}
