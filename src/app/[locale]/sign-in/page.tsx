"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./sign-in.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { SignInFormSchema } from "./SignInFormSchema";
import { SocialAuthBtn } from "@/components/auth/socialAuthBtn/SocialAuthBtn";
import Link from "next/link";
import { AuthInput } from "@/components/auth/authInput/AuthInput";

type Inputs = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(SignInFormSchema()),
    mode: "onTouched",
  });

  const t = useTranslations("auth");

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className={s.mainWrapper}>
      <div className={s.titleAndDescription}>
        <h1>{t("common.sign-in-title")}</h1>
        <p>{t("common.sign-in-description")}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={s.inputsWrapper}>
          <AuthInput
            type={"email"}
            register={register}
            registerName={"email"}
            placeholder={t("fields-name.email")}
            error={errors.email}
            errorMessage={errors?.email?.message}
          />

          <div className={s.pass}>
            <AuthInput
              type={"text"}
              register={register}
              registerName={"password"}
              placeholder={t("fields-name.password")}
              error={errors.password}
              errorMessage={errors?.password?.message}
            />
            <div className={s.forgotPass}>
              <Link href={"#"}>{t("common.forgot-pass")}</Link>
            </div>
          </div>

          <button className={s.submitBtn} type="submit">
            {t("common.sign-in-btn")}
          </button>
        </div>
      </form>
      <p className={s.or}>{t("social-auth.or")}</p>

      <div className={s.socialsBtns}>
        <SocialAuthBtn socailNetworkName={"Google"} btnPurpose={"sign-in"} />
        <SocialAuthBtn socailNetworkName={"Facebook"} btnPurpose={"sign-in"} />
      </div>
      <Link href={"/sign-up"} className={s.dontHaveAccoutn}>
        {t("common.dont-have-account")}
      </Link>
      <p className={s.dontHaveAccoutnDesc}>
        {t("common.dont-have-account-description")}
      </p>
    </div>
  );
}
