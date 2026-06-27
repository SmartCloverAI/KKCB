import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

type TestDocument = {
  title: string;
  description: string;
  href: string;
  fileType: string;
  language: string;
  date: string;
  downloadLabel: string;
};

describe("DocumentCard", () => {
  it("renders document metadata and a direct download link", async () => {
    const modulePath = "./document-card";
    const module = await import(modulePath).catch(() => null);

    expect(module).not.toBeNull();

    const { DocumentCard } = module as {
      DocumentCard: React.ComponentType<{ document: TestDocument }>;
    };
    const document: TestDocument = {
      title: "Codul de etica",
      description: "Document oficial in limba romana.",
      href: "/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf",
      fileType: "PDF",
      language: "romana",
      date: "16 mai 2026",
      downloadLabel: "Descarca PDF"
    };

    const html = renderToStaticMarkup(<DocumentCard document={document} />);

    expect(html).toContain("Codul de etica");
    expect(html).toContain("Document oficial in limba romana.");
    expect(html).toContain('href="/documents/codul-de-etica-kkcb-ro-2026-05-16.pdf"');
    expect(html).toContain("Descarca PDF");
    expect(html).toContain("PDF");
    expect(html).toContain("romana");
    expect(html).toContain("16 mai 2026");
  });
});
