"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { ContactForm } from "./ContactForm";

export function ContactSection(): React.ReactElement {
  const t = useTranslations("contact");

  return (
    <section className="px-5 py-2 flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-4 w-full max-w-[400px]">
        <p className="font-family-sans font-bold text-xl text-black">{t("callUs")}</p>

        <div className="flex items-center gap-2">
          <div className="relative w-[34px] h-[34px]">
            <Image
              src="/images/icon-contact.png"
              alt="Phone"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-family-sans text-xl text-black">{t("phoneNumber")}</p>
        </div>

        <a
          href={t("googleMapsUrl")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="relative w-[35px] h-[35px]">
            <Image
              src="/images/google-maps-icon.png"
              alt="Google Maps"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-family-sans text-xl text-black whitespace-pre-line">
            {t("address")}
          </p>
        </a>

        <p className="font-family-sans font-bold text-xl text-black mt-2">{t("formTitle")}</p>

        <ContactForm />
      </div>
    </section>
  );
}

