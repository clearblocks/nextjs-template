"use client";

import { useTranslations } from "next-intl";

import { PricingTable, PriceItem } from "./PricingTable";

export interface PricingSectionProps {
  washingItems: PriceItem[];
  ironingAdultsItems: PriceItem[];
  ironingChildrenItems: PriceItem[];
  linensItems: PriceItem[];
}

export function PricingSection({
  washingItems,
  ironingAdultsItems,
  ironingChildrenItems,
  linensItems,
}: PricingSectionProps): React.ReactElement {
  const t = useTranslations("pricing");

  return (
    <section className="px-10 py-5 flex flex-col gap-2 items-center">
      <PricingTable title={t("washing.title")} priceItems={washingItems} />

      <PricingTable
        title={t("ironingAdults.title")}
        subtitle={t("ironingAdults.subtitle")}
        priceItems={ironingAdultsItems}
      />

      <PricingTable subtitle={t("ironingChildren.subtitle")} priceItems={ironingChildrenItems} />

      <PricingTable subtitle={t("linens.subtitle")} priceItems={linensItems} />
    </section>
  );
}

