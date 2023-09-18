"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import s from "./profile.module.scss";
import noPhotoImg from "../../../../../public/icons/user.png";

export default function Profile(props: Props) {
  const {
    params: { userID },
  } = props;
  const t = useTranslations();
  console.log(userID);

  const photos = [
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_9-62d561ac3b8f4__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_11-62d563bf1c133__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_88-62d6e9c65ff59__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_3-62d5579c32674__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_8-62d560fdb2b35__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_16-62d569967f9a9__700.jpg",
    "https://www.boredpanda.com/blog/wp-content/uploads/2022/07/pixar-characters_15-62e107b376b46__700.jpg",
  ]


  const mapPhotos = photos.map(e=> <Image key={e} alt="photo" src={e} width={95} height={95} className={s.photosImg}/>)

  return (
    <div className={s.profileWrapper}>
      <div className={s.profileContainer}>
        <div className={s.photoAndName}>
          <div className={s.photo}>
            <Image
              className={s.userImg}
              fill={true} //заполняет род эл
              src={false ? "userPhoto" : noPhotoImg}
              alt={false ? "user photo" : "user doesn't have photo"}
            />
          </div>
          <div className={s.userName}>{"userName"}</div>
        </div>
        <div className={s.info}>
          <div className={s.infoBlock}>
            <div className={s.infoMain}>1000</div>

            <div className={s.infoText}> подписчиков</div>
            <div className={s.infoDescription}>
              кол-во человек которые добавили этого пользователя в избранное после диалога
            </div>
          </div>
          <div className={s.infoBlock}>
            <div className={s.infoMain}>25</div>

            <div className={s.infoText}> метров от вас</div>
            <div className={s.infoDescription}>
              примерное расстояние на котором сейчас находится пользователь от вас
            </div>
          </div>
          <div className={s.infoBlock}>
            <div className={s.infoMain}>+</div>
            <div className={s.infoText}> добавить в избранное</div>
            <div className={s.infoDescription}>
              После добавления пользователь будет отображаться в разделе
              Избранное и вы сможете быстро его найти что бы продолжить диалог
            </div>
          </div>
        </div>

        <div className={s.photos}>
        {mapPhotos}
        </div>
      </div>
    </div>
  );
}

type Props = {
  params: {
    userID: string;
  };
};
