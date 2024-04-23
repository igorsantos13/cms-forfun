"use client";
import React, { use } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Header() {
  const [top, setTop] = useState(true);

  function scrollHandler() {
    window.scrollY > 10 ? setTop(false) : setTop(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <header
      className={`${styles.header} ${top ? styles.fixed : styles.background}`}
    >
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentLogo}>
            <Link href={"/"}>DevMotors</Link>
          </div>

          <nav>
            <Link href={"/"}>Home</Link>
            <Link href={"/#servicos"}>SERIVÇOS</Link>
            <Link href={"/#contatos"}>CONTATOS</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
