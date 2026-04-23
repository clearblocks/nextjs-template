"use client";

import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "@/components/molecules";

export function Header(): React.ReactElement {
  const t = useTranslations("header");

  return (
    <header className="bg-white px-1 py-2 md:px-4 md:py-3 flex justify-between items-center">
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
    </header>
  );
}

