"use client";

import { useTranslations } from "next-intl";

import ironPriceData from "@/config/iron-price-data.json"
import laundryPriceData from "@/config/laundry-price-data.json"

interface PriceData {
  [category: string]: { [key: string]: number };
}

const typedLaundryPriceData: PriceData = laundryPriceData as unknown as PriceData;
const typedIronPriceData: PriceData = ironPriceData as unknown as PriceData;

import { PricingTable } from "./PricingTable";

export function PricingSection(): React.ReactElement {
  const t = useTranslations("pricing");

  return (
    <section className="px-5 py-5 flex flex-col gap-2 items-center w-full max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
      <PricingTable 
        title={t("laundry.title")}
        priceItems={Object.entries(typedLaundryPriceData).map(([key, price]) => ({ name: t(`laundry.items.${key}`), price }))}
        key="laundry" />
      
      {Object.entries(typedIronPriceData).map(([category, items], index: number) => (
        <PricingTable 
        title={index === 0 ? t("ironing.title") : undefined}
        subtitle={t(`ironing.${category}.title`)}
        priceItems={Object.entries(items).map(([key, price]) => ({ name: t(`ironing.${category}.items.${key}`), price }))}
        key={index} />
      ))}
    </section>
  );
}

