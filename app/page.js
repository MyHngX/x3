"use client";

import React, { useEffect, useState } from "react";
import style from "./page.module.scss";
import GridImageDisplay from "@components/components/ImageGrid";
import { useRouter } from "next/navigation";


export default function App() {
  const router = useRouter();
  useEffect(() => {
    const authenticated = sessionStorage.getItem("authenticated");

    if (!authenticated) router.push("/login");
  }, []);
  return (
    <main className={style.main}>
      <GridImageDisplay />
    </main>
  );
}
