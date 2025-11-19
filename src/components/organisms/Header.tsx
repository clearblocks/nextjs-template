"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/molecules";

export function Header(): React.ReactElement {
  const t = useTranslations("header");

  return (
    <header className="bg-[#ffc9e1] px-1 py-2 flex justify-end items-center">
      <div className="flex items-center gap-4 mr-auto ml-4">
        <div className="relative w-[41px] h-[49px]">
          <Image
            src="/images/logo.png"
            alt="Irongirl Logo"
            fill
            className="rounded-[50px] object-cover"
          />
        </div>
        <span className="font-family-hero text-[24px] text-primary absolute ml-10 mt-5">
          {t("logoText")}
        </span>
      </div>
      <LanguageSwitcher />
    </header>
  );
}

