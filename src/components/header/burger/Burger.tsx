import Link from "next/link";
import s from "./burger.module.scss";
import { useState } from "react";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import { useTranslations } from "next-intl";

export const Burger = () => {
  const testMeID = "here-shoul-be-my-id";
  const [showLanguage, setShowLanguage] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("header.settings");

  const locale = [
    { lang: "English", value: "en" },
    { lang: "Українська", value: "ua" },
    { lang: "Español", value: "es" },
    { lang: "Deutsch", value: "de" },
    { lang: "Italiano", value: "it" },
    { lang: "Русский", value: "ru" },
  ];

  const loacaleList = locale.map((e) => (
    <li key={e.lang} className={s.listItem} onClick={() => switchLang(e.value)}>
      {e.lang}
    </li>
  ));

  const switchLang = (lang: string) => {
    setShowLanguage(!showLanguage);
    router.replace(`${pathname}`, { locale: lang });
  };

  return (
    <div className={s.burgerWrapper}>
      <div className={s.burgerContainer}>
        <ul className={s.list}>
          <Link href={`/profile/${testMeID}`}>
            <li className={s.listItem}>{t("my-profile")}</li>
          </Link>

          <li
            className={s.listItem}
            onClick={() => setShowLanguage(!showLanguage)}
          >
            {t("change-language")}
          </li>
          <li className={s.listItem}>{t("change-theme")}</li>
          <Link href={"/sign-in"}>
            <li className={s.listItem}>{t("log-out")}</li>
          </Link>
        </ul>
        {showLanguage && <ul className={s.languagelist}>{loacaleList}</ul>}
      </div>
    </div>
  );
};
