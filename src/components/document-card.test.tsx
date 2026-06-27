import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

type TestDocument = {
  title: string;
  description: string;
  href?: string;
  fileType: string;
  language: string;
  date: string;
  downloadLabel?: string;
  downloads?: Array<{
    href: string;
    label: string;
    fileType: string;
  }>;
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
    expect(html).toContain('class="eyebrow document-card__meta"');
    expect(html).toContain("<span>PDF</span>");
    expect(html).toContain("<span>romana</span>");
    expect(html).toContain("<span>16 mai 2026</span>");
  });

  it("renders multiple direct download actions when a document has PDF and DOCX variants", async () => {
    const modulePath = "./document-card";
    const module = await import(modulePath).catch(() => null);

    expect(module).not.toBeNull();

    const { DocumentCard } = module as {
      DocumentCard: React.ComponentType<{ document: TestDocument }>;
    };
    const document: TestDocument = {
      title: "Cerere voluntar / membru",
      description: "Formular blank in limba romana.",
      fileType: "PDF + DOCX",
      language: "romana",
      date: "16 mai 2026",
      downloads: [
        {
          href: "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.pdf",
          label: "Descarca PDF",
          fileType: "PDF"
        },
        {
          href: "/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.docx",
          label: "Descarca DOCX editabil",
          fileType: "DOCX"
        }
      ]
    };

    const html = renderToStaticMarkup(<DocumentCard document={document} />);

    expect(html).toContain("PDF + DOCX");
    expect(html).toContain('href="/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.pdf"');
    expect(html).toContain('href="/documents/cerere-voluntar-membru-kkcb-ro-2026-05-16.docx"');
    expect(html).toContain("Descarca PDF");
    expect(html).toContain("Descarca DOCX editabil");
    expect(html.match(/download=""/g)).toHaveLength(2);
  });
});
