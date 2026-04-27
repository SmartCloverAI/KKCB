import { headers } from "next/headers";
import React from "react";

import { resolveServedByHostId } from "@/lib/served-by";

type ServedByFooterProps = {
  brandSuffix?: string;
  brandPosition?: "start" | "end";
  label: string;
};

type ServedByFooterNoteProps = {
  brandSuffix?: string;
  brandPosition?: "start" | "end";
  hostId: string;
  label: string;
};

export async function ServedByFooter({
  brandSuffix,
  brandPosition = "start",
  label
}: ServedByFooterProps) {
  const headerStore = await headers();
  const hostId = resolveServedByHostId(
    headerStore.get("x-vercel-id"),
    process.env.EE_HOST_ID
  );

  return (
    <ServedByFooterNote
      brandPosition={brandPosition}
      brandSuffix={brandSuffix}
      hostId={hostId}
      label={label}
    />
  );
}

export function ServedByFooterNote({
  brandSuffix,
  brandPosition = "start",
  hostId,
  label
}: ServedByFooterNoteProps) {
  const brand = (
    <a href="https://ratio1.ai" rel="noreferrer" target="_blank">
      Ratio1
    </a>
  );

  return (
    <p className="site-footer__served-by">
      {brandPosition === "start" ? brand : null}
      <span>{label}</span>
      {brandPosition === "end" ? brand : null}
      {brandSuffix ? <span>{brandSuffix}</span> : null}
      <strong>{hostId}</strong>
    </p>
  );
}
