"use client";

import { useTranslations } from "next-intl";

export function MethodSection(): React.ReactElement {
  const t = useTranslations("method");

  return (
    <section className="px-5 py-5 flex flex-col gap-2 text-black">
      <ul className="font-family-sans text-base leading-[30px] list-disc pl-6">
        {Array.from({ length: 7 }).map((_, i) => (
          <li key={i}>{t(`steps.${i}`)}</li>
        ))}
      </ul>

      <h3 className="font-family-sans font-medium text-[26px] mt-4">{t("washingTitle")}</h3>
      <ul className="font-family-sans text-base leading-[30px] list-disc pl-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>{t(`washingSteps.${i}`)}</li>
        ))}
      </ul>

      <h3 className="font-family-sans font-medium text-[26px] mt-4">{t("ironingTitle")}</h3>
      <ul className="font-family-sans text-base leading-[30px] list-disc pl-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <li key={i}>{t(`ironingSteps.${i}`)}</li>
        ))}
      </ul>
    </section>
  );
}

