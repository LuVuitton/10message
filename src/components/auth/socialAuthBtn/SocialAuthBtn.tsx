import { useTranslations } from "next-intl";
import s from "./socialAuthBtn.module.scss";
import Image from "next/image";
import googleIMG from '../../../../public/google.png'

export const SocialAuthBtn: React.FC<Props> = ({ socailNetworkName }) => {

  const t = useTranslations("auth.social-auth")  

  const onClickHandler = () => console.log("make request to ", socailNetworkName);

  return (
    <div className={s.socialAuthWrapper}>
      {t("or")}
      
      <button onClick={onClickHandler} className={s.btn}>
        <Image className={s.btnImg} src={googleIMG} alt="google" />
        <p> {`${t("btnText")} ${socailNetworkName}`}</p>
       </button>
    </div>
  );
};

type Props = {
  socailNetworkName: "Google" | "Facebook" | "GitHub";
};
