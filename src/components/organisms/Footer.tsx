"use client";

import { useTranslations } from "next-intl";

export function Footer(): React.ReactElement {
  const t = useTranslations("footer");

  return (
    <footer className="bg-white h-[150px] flex flex-col items-center justify-center px-2 py-5 gap-2">
      <p className="font-family-sans text-base text-black text-center leading-[30px]">
        {t("copyright")}
      </p>
    </footer>
  );
}

