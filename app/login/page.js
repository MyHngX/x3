"use client";

import Image from "next/image";
import style from "./style.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [values, setValues] = useState({ email: "", password: "" });
  const [error, setError] = useState(false);
  const validEmail = process.env.email;
  const validPassword = process.env.password;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    const { email, password } = values;

    if (email !== validEmail || password !== validPassword) setError(true);
    else {
      sessionStorage.setItem("authenticated", true);
      router.push("/");
    }
  };
  return (
    <div className={style.login}>
      <div className={style.imageOverlay}>
        <Image src={"/images/abstraction.png"} width={500} height={500} />
      </div>
      <div className={style.left}>
        <Image src={"/images/vector.svg"} width={37} height={37} />
        <h3>
          Drag and drop Images with NextJs. <br />
          Made with !happiness {"<3"}.
        </h3>
        <div className={style.imgRow}>
          <div className={style.img}>
            <img src="/images/img-2.jpg" />
          </div>
          <div className={style.img}>
            <img src="/images/img-4.jpg" />
          </div>
          <div className={style.img}>
            <img src="/images/img-1.jpg" />
          </div>
          <div className={style.img}>
            <img src="/images/img-3.jpg" />
          </div>
        </div>
      </div>
      <div className={style.right}>
        <div className={style.loginCont}>
          <h3 className={style.title}>Login to continue</h3>
          <form className={style.form}>
            {error && (
              <p className={style.error}>Email or password is incorrect.</p>
            )}
            <input
              placeholder="Email Address"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <button
              value={"Login"}
              className={style.submit}
              onClick={handleSubmission}
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
