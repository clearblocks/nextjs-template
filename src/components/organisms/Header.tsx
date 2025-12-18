"use client";

import Image from "next/image";

import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/molecules";

export function Header(): React.ReactElement {
  const t = useTranslations("header");

  return (
    <header className="bg-[#ffc9e1] px-1 py-2 md:px-4 md:py-3 flex justify-between items-center">
      <LanguageSwitcher />
      <div className="mr-4 md:mr-6">
        <div className="relative w-[50px] h-[60px] md:w-[80px] md:h-[96px]">
          <Image
            src="/images/logo.png"
            alt="Irongirl Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}

