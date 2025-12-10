"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

export function HeroSection(): React.ReactElement {
  const t = useTranslations("hero");

  return (
    <section className="relative w-full aspect-[440/180] md:aspect-[3/1] overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-center gap-2 md:gap-4 text-white pl-5 md:pl-12 lg:pl-20">
        <div className="font-family-hero text-base md:text-2xl lg:text-3xl leading-tight">
          <p className="mb-0">{t("line1")}</p>
          <p>{t("line2")}</p>
        </div>
        <div className="font-family-hero text-base md:text-2xl lg:text-3xl leading-tight">
          <p className="mb-0">{t("line3")}</p>
          <p className="mb-0">{t("line4")}</p>
          <p>{t("line5")}</p>
        </div>
        <div className="font-family-hero text-xs md:text-lg lg:text-xl leading-tight">
          <p className="mb-0">{t("phoneLabel")}</p>
          <p>{t("phoneNumber")}</p>
        </div>
      </div>
    </section>
  );
}

