"use client";
import { useTranslations } from "next-intl";

import { useState } from "react";

export default function Profile() {
  const [count, setCount] = useState(1);
  const t = useTranslations();

  return (
    <div>
      <div>
        <h1>{t("test")}</h1>
      </div>

      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
