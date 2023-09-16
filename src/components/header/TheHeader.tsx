"use client";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import s from "./theHeader.module.scss";
import { useTranslations } from "next-intl";

export const TheHeader = ({ currentLanguage }: { currentLanguage: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  const switchLang = (lang: string) => {
    router.replace(`${pathname}`, { locale: lang });
  };

  const toBack = () => {
    router.back();
  };

  return (
    <div className={s.mainWrapper}>
      <div>
        <button onClick={toBack}>{"<"}</button>
      </div>
      <div>
        <p>{t("hello-world")}</p>
      </div>
      <div>
        <select
          onChange={(e) => switchLang(e.target.value)}
          value={currentLanguage}
          className={s.select}
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="ua">Українська</option>
          <option value="it">Italian</option>
          <option value="ru">Русский</option>
          <option value="de">Deutsch</option>
        </select>
      </div>
    </div>
  );
};

type Props = {
  currentLanguage: string;
};
