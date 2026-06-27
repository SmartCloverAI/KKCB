import React from "react";

import type { DocumentDownload } from "@/content/site";

type DocumentCardProps = {
  document: DocumentDownload;
};

export function DocumentCard({ document }: DocumentCardProps) {
  const metadata = [document.fileType, document.language, document.date].join(" / ");

  return (
    <article className="reference-card document-card">
      <p className="eyebrow">{metadata}</p>
      <h3>{document.title}</h3>
      <p>{document.description}</p>
      <a className="button button--secondary" download href={document.href}>
        {document.downloadLabel}
      </a>
    </article>
  );
}
