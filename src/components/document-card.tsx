import React from "react";

import type { DocumentDownload } from "@/content/site";

type DocumentCardProps = {
  document: DocumentDownload;
};

export function DocumentCard({ document }: DocumentCardProps) {
  const metadataItems = [document.fileType, document.language, document.date];
  const metadata = metadataItems.join(" / ");
  const downloads =
    document.downloads ??
    (document.href && document.downloadLabel
      ? [
          {
            fileType: document.fileType,
            href: document.href,
            label: document.downloadLabel
          }
        ]
      : []);

  return (
    <article className="reference-card document-card">
      <p aria-label={metadata} className="eyebrow document-card__meta">
        {metadataItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </p>
      <h3>{document.title}</h3>
      <p>{document.description}</p>
      <div aria-label={`Downloads for ${document.title}`} className="document-card__actions">
        {downloads.map((download) => (
          <a
            className="button button--secondary document-card__action"
            download
            href={download.href}
            key={download.href}
          >
            {download.label}
          </a>
        ))}
      </div>
    </article>
  );
}
