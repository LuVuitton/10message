"use client";
import { useRouter } from "next-intl/client";
import { usePathname } from "next-intl/client";
import s from "./theHeader.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import settingImg from '../../../public/icons/setting.png'
import chatImg from '../../../public/icons/chat.png'
import favoritesImg from '../../../public/icons/favorites.png'
import usersImg from '../../../public/icons/users.png'
import Link from "next/link";

export const TheHeader = ({ currentLanguage }: { currentLanguage: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header");

  const switchLang = (lang: string) => {
    router.replace(`${pathname}`, { locale: lang });
  };

  const toBack = () => {
    router.back();
  };


  if(true) {
    return (
      <div>
      <div className={s.mainWrapper}>
        <div  className={s.btnWrapper}>
          <Image src={settingImg} alt="settings"/>
          <div className={s.btnTitle}>{t("btns.settings")}</div>
        </div>

          <Link className={s.btnWrapper} href={'/stack'}>
             <Image src={usersImg} alt="users"/>
          <div className={s.btnTitle}>{t("btns.online-stack")}</div>
          </Link>        

          <Link className={s.btnWrapper} href={'/conversations'}> <Image src={chatImg} alt="chat"/>
          <div className={s.btnTitle}>{t("btns.conversations")}</div>
          </Link>


          <Link className={s.btnWrapper} href={'/favorites'}> <Image src={favoritesImg} alt="favorites"/>
          <div className={s.btnTitle}>{t("btns.favorites")}</div>
          </Link>

      </div>
      </div>
    )
  }
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
