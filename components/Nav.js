import { useState } from "react";
import style from "./style.module.scss";
import { useRouter } from "next/navigation";

export default function Nav({ searchVal, setValue }) {
  const router = useRouter();
  const logOut = () => {
    sessionStorage.clear();
    router.push("/login");
  };
  return (
    <nav className={style.nav}>
      <input
        placeholder="Search by tags: 'grey', 'purple', 'dark'. "
        value={searchVal}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="button" className={style.signOut} onClick={() => logOut()}>
        Log out
      </button>
    </nav>
  );
}
