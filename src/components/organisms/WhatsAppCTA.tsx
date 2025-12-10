"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function WhatsAppCTA(): React.ReactElement {
  const t = useTranslations("whatsappCta");

  return (
    <section className="relative w-full aspect-[440/310] md:aspect-[3/1] overflow-hidden">
      <Image
        src="/images/whatsapp-cta-bg.jpg"
        alt="WhatsApp CTA background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start p-5 md:p-10 lg:p-16 gap-4 md:gap-6">
        <p className="font-family-sans font-medium text-2xl md:text-4xl lg:text-5xl text-white">
          {t("title")}
        </p>
        <a
          href={`https://wa.me/${t("phoneNumber").replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 md:gap-5 text-white hover:opacity-80 transition-opacity"
        >
          <span className="font-family-sans font-bold text-2xl md:text-4xl lg:text-5xl">{t("buttonLabel")}</span>
          <div className="relative w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14">
            <Image
              src="/images/whatsapp-green-icon.png"
              alt="WhatsApp"
              fill
              className="object-contain"
            />
          </div>
        </a>
      </div>
    </section>
  );
}

