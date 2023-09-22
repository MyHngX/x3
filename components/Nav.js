import { useState } from "react";
import style from "./style.module.scss";

export default function Nav({searchVal, setValue}) {
  return (
    <nav className={style.nav}>
      <input
        placeholder="Search tags: 'grey', 'purple', 'dark'. "
        value={searchVal}
        onChange={(e) => setValue(e.target.value)}
      />
    </nav>
  );
}
