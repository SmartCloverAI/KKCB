import { headers } from "next/headers";
import React from "react";

import { NotFoundMain } from "@/components/not-found-main";
import { SiteFooter, SiteHeader } from "@/components/site-ui";
import { getDictionary } from "@/content/site";
import type { Locale } from "@/lib/i18n";
import { SITE_VERSION_LABEL } from "@/lib/site-version";
import { getLocaleFromHeaders, getLocaleTag } from "@/lib/site-utils";

export async function getNotFoundLocale() {
  return getLocaleFromHeaders(await headers());
}

export function NotFoundPageFrame({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);

  return (
    <div className="site-frame" lang={getLocaleTag(locale)}>
      <SiteHeader dictionary={dictionary} locale={locale} />
      <NotFoundMain locale={locale} />
      <SiteFooter dictionary={dictionary} versionLabel={SITE_VERSION_LABEL} />
    </div>
  );
}

export default async function NotFound() {
  return <NotFoundPageFrame locale={await getNotFoundLocale()} />;
}
