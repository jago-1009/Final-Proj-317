"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
 const icons = ["archer", "knight", "monk"];
 const [icon, setIcon] = useState("archer");
 const [prevIcon, setPrevIcon] = useState("monk");
 const [nextIcon, setNextIcon] = useState("knight");
 function changeIcon(direction) {
  const currentIndex = icons.indexOf(icon);
  let nextIndex
  if (direction === "left") {
    nextIndex = (currentIndex - 1);
  }
  if (direction === "right") {
    nextIndex = (currentIndex + 1);
  }
  if (nextIndex > icons.length - 1) {
    nextIndex = 0
    setNextIcon(icons[nextIndex + 1]);
    setPrevIcon(icons[icons.length - 1]);
    setIcon(icons[nextIndex]);
  }
  else if (nextIndex == icons.length - 1) {
    setNextIcon(icons[0]);
    setIcon(icons[nextIndex]);
    setPrevIcon(icons[nextIndex - 1]);
  }
  else if (nextIndex < 0) {
    nextIndex = icons.length - 1
    setPrevIcon(icons[nextIndex - 1]);
    setNextIcon(icons[0]);
    setIcon(icons[nextIndex]);
    
  }
  else if (nextIndex === 0) {
    setPrevIcon(icons[icons.length - 1]);
    setNextIcon(icons[nextIndex + 1]);
    setIcon(icons[nextIndex]);
  }
  else {
    setIcon(icons[nextIndex]);
    setPrevIcon(icons[nextIndex - 1]);
    setNextIcon(icons[nextIndex + 1]);
  }
 }
  return (
    <div className={styles.page}>
      <div className={styles.arrow} onClick={() => changeIcon("left")}>Change Me Left</div>
      <div className={styles.icons}>
      <h1 className={styles.iconL}>{prevIcon}</h1>
        <h1 className={styles.iconC}>{icon}</h1>
        <h1 className={styles.iconR}>{nextIcon}</h1>
       
      </div>
      <div className={styles.arrow} onClick={() => changeIcon("right")}>Change Me Right</div>
    </div>
  );
}
