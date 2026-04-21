import mediaManifest from "../../content/media-manifest.json";

import type { Locale } from "@/lib/i18n";

export type MediaEntry = {
  id: string;
  originalFilename: string;
  source: string;
  src: string;
  category: "program" | "story" | "community" | "archive";
  alt: Record<Locale, string>;
  caption: Record<Locale, string>;
};

export const media = mediaManifest as MediaEntry[];

export const mediaById = Object.fromEntries(
  media.map((entry) => [entry.id, entry])
) as Record<string, MediaEntry>;

export function getLocalizedMedia(id: string, locale: Locale): MediaEntry & {
  localizedAlt: string;
  localizedCaption: string;
} {
  const entry = mediaById[id];

  if (!entry) {
    throw new Error(`Unknown media id: ${id}`);
  }

  return {
    ...entry,
    localizedAlt: entry.alt[locale],
    localizedCaption: entry.caption[locale]
  };
}
