"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import s from "./sign-in.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputError } from "@/components/auth/InputError";
import { useTranslations } from "next-intl";
import { SignInFormSchema } from "./SignInFormSchema";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputsWrapper}>
        <input {...register("email")} placeholder={t("fields-name.email")} />
        <InputError
          error={errors.email}
          errorMessage={errors?.email?.message}
        />

        <input
          {...register("password")}
          placeholder={t("fields-name.password")}
        />
        <InputError
          error={errors.password}
          errorMessage={errors?.password?.message}
        />

        <button type="submit" disabled={!isValid}>
          {t("common.sign-in-btn")}
        </button>
      </div>
    </form>
  );
}
