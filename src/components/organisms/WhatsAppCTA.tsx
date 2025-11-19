"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export function WhatsAppCTA(): React.ReactElement {
  const t = useTranslations("whatsappCta");

  return (
    <section className="relative w-full aspect-[440/310] overflow-hidden">
      <Image
        src="/images/whatsapp-cta-bg.jpg"
        alt="WhatsApp CTA background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-start justify-start p-5 gap-4">
        <p className="font-family-sans font-medium text-2xl text-white">
          {t("title")}
        </p>
        <a
          href={`https://wa.me/${t("phoneNumber").replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
        >
          <span className="font-family-sans font-bold text-2xl">{t("buttonLabel")}</span>
          <div className="relative w-8 h-8">
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

