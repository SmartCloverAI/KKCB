"use client";

import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

import { NotFoundMain } from "@/components/not-found-main";
import { getLocaleFromPathname, getLocaleTag } from "@/lib/site-utils";

export default function LocalizedNotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  useEffect(() => {
    document.documentElement.lang = getLocaleTag(locale);
  }, [locale]);

  return <NotFoundMain locale={locale} />;
}
