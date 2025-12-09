"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useLocale } from "next-intl";

const languages = {
  nl: { src: "/images/dutch-flag.png", alt: "Nederlands" },
  en: { src: "/images/british-flag.png", alt: "English" },
};

type LocaleCode = keyof typeof languages;

function setLocaleCookie(locale: string): void {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

export function LanguageSwitcher(): React.ReactElement {
  const locale = useLocale() as LocaleCode;
  const router = useRouter();

  const handleLocaleChange = (newLocale: LocaleCode): void => {
    if (newLocale === locale) {
      return;
    }

    setLocaleCookie(newLocale);
    router.refresh();
  };

  const locales: LocaleCode[] = ["nl", "en"];

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg p-1.5">
      {locales.map((code) => {
        const lang = languages[code];
        const isActive = code === locale;

        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              handleLocaleChange(code);
            }}
            className={`transition-all ${isActive ? "" : "grayscale hover:grayscale-50 cursor-pointer"}`}
            aria-label={`Switch to ${lang.alt}`}
            aria-pressed={isActive}
          >
            <Image
              src={lang.src}
              alt={lang.alt}
              width={20}
              height={14}
              className="rounded-sm"
            />
          </button>
        );
      })}
    </div>
  );
}
