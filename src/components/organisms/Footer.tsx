"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function Footer(): React.ReactElement {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#f2ebeb] h-[150px] flex flex-col items-center justify-center px-2 py-5 gap-2">
      <p className="font-family-sans text-base text-black text-center leading-[30px]">
        {t("copyright")}
        <br />
        {t("address")}
      </p>
      <a
        href={t("googleMapsUrl")}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 transition-opacity"
      >
        <div className="relative w-[44px] h-[43px]">
          <Image
            src="/images/google-maps-icon.png"
            alt="Google Maps"
            fill
            className="object-cover"
          />
        </div>
      </a>
    </footer>
  );
}

