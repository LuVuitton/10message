import Link from "next/link";
import s from "./home.module.scss";

export default function Home() {
  return (
    <div className={s.mainWrapper}>
      <ul>
        <Link href={"chat"}>
          <li>chat</li>
        </Link>

        <Link href={"conversations"}>
          <li>conversations</li>
        </Link>

        <Link href={"online-stack"}>
          <li>online-stack</li>
        </Link>

        <Link href={"profile"}>
          <li>profile</li>
        </Link>

        <Link href={"sign-in"}>
          <li>sign-in</li>
        </Link>

        <Link href={"sign-up"}>
          <li>sign-up</li>
        </Link>
      </ul>
    </div>
  );
}
