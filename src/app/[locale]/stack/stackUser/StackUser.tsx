"use client";

import s from "./stackUser.module.scss";
import noPhotoImg from "../../../../../public/icons/user.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";

export const StackUser: React.FC<Props> = ({
  userPhoto,
  userName,
  subscribersCount,
  distanceFromUser,
  userID,
}) => {
  const router = useRouter();
  const t = useTranslations("common");

  const sendMessageHandler = () => {
    router.push("/chat");
    // router.push(`/chat${userID}`)
  };

  return (
    <div className={s.stackWrapper}>
      <div className={s.userContainer}>
        <Link href={`/profile/${userID}`}>
          <div className={s.photoAndName}>
            <div className={s.photo}>
              <Image
                className={s.userImg}
                fill={true} //заполняет род эл
                src={userPhoto ? userPhoto : noPhotoImg}
                alt={userPhoto ? "user photo" : "user doesn't have photo"}
              />
            </div>
            <div className={s.userName}>{userName}</div>
          </div>
        </Link>
        <div className={s.distance}>
          <div className={s.distanceFromUser}>
            {distanceFromUser} <div className={s.meters}>{t("meters")}</div>
          </div>
          <div className={s.distanceText}>{t("from-you")} </div>
        </div>

        <div className={s.subscribersCount}>
          <div className={s.subsCount}>
            {" "}
            {subscribersCount} {t("subscribers")}
          </div>
          <button onClick={sendMessageHandler} className={s.btn}>
            {t("send-message")}
          </button>
        </div>
      </div>
    </div>
  );
};

type Props = {
  userPhoto: string | null;
  userName: string;
  subscribersCount: number;
  distanceFromUser: string;
  userID: string;
};
