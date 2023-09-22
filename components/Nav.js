import { useState } from "react";
import style from "./style.module.scss";
import { useRouter } from "next/navigation";
import Modal from "./Modal";

export default function Nav({ searchVal, setValue }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const logOut = () => {
    sessionStorage.clear();
    router.push("/login");
  };
  return (
    <>
      {show && (
        <Modal
          text={"Are you sure you want to logout?"}
          closeModal={() => setShow(false)}
          btnVal={"Log out"}
          handleClick={() => logOut()}
        />
      )}
      <nav className={style.nav}>
        <input
          placeholder="Search by tags: 'grey', 'purple', 'dark'. "
          value={searchVal}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className={style.signOut}
          onClick={() => setShow(true)}
        >
          Log out
        </button>
      </nav>
    </>
  );
}
