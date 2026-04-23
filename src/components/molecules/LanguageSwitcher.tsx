"use client";

import { useRouter } from "next/navigation";

import { useLocale } from "next-intl";

type LocaleCode = "nl" | "en";

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
    <div className="flex items-center gap-2 bg-white rounded-lg p-1.5 shadow-sm">
      {locales.map((code) => {
        const isActive = code === locale;

        return (
          <button
            key={code}
            type="button"
            onClick={() => {
              handleLocaleChange(code);
            }}
            className={`px-3 py-1 rounded transition-all ${
              isActive
                ? "bg-blue-600 text-white font-semibold"
                : "text-gray-600 hover:bg-gray-100 cursor-pointer"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
