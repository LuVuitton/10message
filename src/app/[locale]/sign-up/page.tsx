"use client";
import React from "react";
import s from "./sign-up.module.scss";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldError,
} from "react-hook-form";
import { SignUpFormSchema } from "../sign-up/SignUpFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputError } from "@/components/auth/InputError";
import { useTranslations } from "next-intl";
import { AuthInput } from "@/components/auth/authInput/AuthInput";

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
            type={"password"}
            register={register}
            registerName={"password"}
            placeholder={t("fields-name.password")}
            error={errors.password}
            errorMessage={errors?.password?.message}
          />

          <AuthInput
            type={"password"}
            register={register}
            registerName={"passwordConfirm"}
            placeholder={t("fields-name.passwordConfirm")}
            error={errors.passwordConfirm}
            errorMessage={errors?.passwordConfirm?.message}
          />

          <div>
            <input type="checkbox" {...register("agreements")} />
            {t("fields-name.agreements")}
          </div>
          <InputError
            error={errors.agreements}
            errorMessage={errors?.agreements?.message}
          />

          <button type="submit">{t("common.sign-up-btn")}</button>
        </div>
      </form>
    </div>
  );
}

//        <input {...register("email")} placeholder={t("fields-name.email")} />
//         <InputError
//           error={errors.email}
//           errorMessage={errors?.email?.message}
//         />
//        <input
//           {...register("password")}
//           placeholder={t("fields-name.password")}
//         />
//         <InputError
//           error={errors.password}
//           errorMessage={errors?.password?.message}
//         />

//         <input
//           {...register("passwordConfirm")}
//           placeholder={t("fields-name.passwordConfirm")}
//         />
//         <InputError
//           error={errors.passwordConfirm}
//           errorMessage={errors?.passwordConfirm?.message}
//         />
