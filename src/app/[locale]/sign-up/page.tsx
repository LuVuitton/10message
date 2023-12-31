"use client";
import React from "react";
import s from "./sign-up.module.scss";
import {
  useForm,
  SubmitHandler,
} from "react-hook-form";
import { SignUpFormSchema } from "../sign-up/SignUpFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";
import { AuthInput } from "@/components/auth/authInput/AuthInput";
import { SocialAuthBtn } from "@/components/auth/socialAuthBtn/SocialAuthBtn";
import { AgreementsCheckbox } from "@/components/auth/agreementsCheckbox/AgreementsCheckbox";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
  passwordConfirm: string;
  agreements: boolean;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    resolver: yupResolver(SignUpFormSchema()),
    mode: "onTouched",
  });

  const t = useTranslations("auth");

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it

  return (
    <div className={s.mainWrapper}>
      <div className={s.titleAndDescription}>
        <h1>{t("common.regestration-title")}</h1>
        <p>{t("common.registration-description")}</p>
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

          <AuthInput
            type={"text"}
            register={register}
            registerName={"password"}
            placeholder={t("fields-name.password")}
            error={errors.password}
            errorMessage={errors?.password?.message}
          />

          <AuthInput
            type={"text"}
            register={register}
            registerName={"passwordConfirm"}
            placeholder={t("fields-name.passwordConfirm")}
            error={errors.passwordConfirm}
            errorMessage={errors?.passwordConfirm?.message}
          />

          <AgreementsCheckbox
            register={register}
            registerName={"agreements"}
            error={errors.agreements}
            errorMessage={errors?.agreements?.message}
          />

          <button className={s.submitBtn} type="submit">
            {t("common.sign-up-btn")}
          </button>
        </div>
      </form>
      <p className={s.or}>{t("social-auth.or")}</p>

      <div className={s.socialsBtns}>
      <SocialAuthBtn socailNetworkName={"Google"} btnPurpose={"sign-up"} />
      <SocialAuthBtn socailNetworkName={"Facebook"} btnPurpose={"sign-up"}/>
      </div>


      <Link href={'/sign-in'} className={s.alreadyHaveAccoutn}>{t("common.already-have-account")}</Link>
    </div>
  );
}
