"use client";

import React, { useState } from "react";

import type { SiteDictionary } from "@/content/site";

type BankContent = SiteDictionary["pages"]["getInvolved"]["bank"];

type BankDetailsProps = {
  bank: BankContent;
};

type BankField = {
  id: "iban" | "holder" | "bic";
  label: string;
  value: string;
  primary?: boolean;
};

export function BankDetails({ bank }: BankDetailsProps) {
  const [copiedField, setCopiedField] = useState<BankField["id"] | null>(null);

  const fields: BankField[] = [
    {
      id: "iban",
      label: bank.ibanLabel,
      value: bank.iban,
      primary: true
    },
    {
      id: "holder",
      label: bank.holderLabel,
      value: bank.holder
    },
    {
      id: "bic",
      label: bank.bicLabel,
      value: bank.bic
    }
  ];

  async function copyField(field: BankField) {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(field.value);
      setCopiedField(field.id);
      window.setTimeout(() => setCopiedField(null), 1600);
    } catch {
      setCopiedField(null);
    }
  }

  return (
    <dl className="bank-details">
      {fields.map((field) => {
        const isCopied = copiedField === field.id;
        const copyLabel = `${bank.copyLabel} ${field.label}`;
        const copiedLabel = `${field.label} ${bank.copiedLabel}`;

        return (
          <div
            className={
              field.primary
                ? "bank-details__row bank-details__row--primary"
                : "bank-details__row"
            }
            key={field.id}
          >
            <dt>{field.label}</dt>
            <dd>{field.value}</dd>
            <button
              aria-label={isCopied ? copiedLabel : copyLabel}
              className="bank-details__copy"
              onClick={() => {
                void copyField(field);
              }}
              type="button"
            >
              {isCopied ? bank.copiedLabel : bank.copyLabel}
            </button>
          </div>
        );
      })}
    </dl>
  );
}
