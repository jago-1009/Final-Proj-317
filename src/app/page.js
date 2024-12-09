"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import monk from '../assets/img/monk.png'
import knight from '../assets/img/knight.png'
import archer from '../assets/img/archer.png'
import Funfact from "@/components/funfact/page";
import dynamic from "next/dynamic";
const FunFactComp = dynamic(() => import("@/components/funfact/page"), {
  ssr:false
})
export default function Home() {
  const images = {
    monk: {
      src: monk,
      alt: "monk"
    },
    knight: {
      src: knight,
      alt: "knight"
    },
    archer: {
      src: archer,
      alt: "archer"
    }
  }
 const icons = ["archer", "knight", "monk"];
 const iconNames = ["Archer", "Knight", "Priest"];
 const [icon, setIcon] = useState("archer");
 const [prevIcon, setPrevIcon] = useState("monk");
 const [nextIcon, setNextIcon] = useState("knight");

 function changeIcon(direction) {
  const currentIndex = icons.indexOf(icon);
  let nextIndex
  if (direction === "left") {
    nextIndex = (currentIndex + 1);
  }
  if (direction === "right") {
    nextIndex = (currentIndex - 1);
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
    <div className={styles.wrapper}>
      <div className={styles.container}>
    <h1>The Medieval Period</h1>
    <p>The Medieval Period, also known as the Middle Ages, is a period of history that covers the period from the 5th to the 15th centuries. It lasted approximately 1,000 years, starting with the fall of the Western Roman Empire.
    Throughout the period, there was cultural, social, economic, and religious changes very frequently. The period is most commonly divided into three sub-periods: the Early Middle Ages, the High Middle Ages, and the Late Middle Ages.</p>
    <FunFactComp top={"40%"} left={"70%"} fact={"Despite what people think, the Medieval Period was not considered the \'Dark Age\'!"} width={"40%"} />
    <br />
    <p>Throughout the Medieval Period, there were many different roles that people could take. Click through the images below to find out more about people in those roles!</p>
    <div className={styles.page}>
      
      <div className={styles.left} onClick={() => changeIcon("left")}>Left</div>
      <div className={styles.icons}>
      <Image  className={styles.iconL} src={images[prevIcon].src} alt={images[prevIcon].alt}></Image>
      <Image  className={styles.iconC} src={images[icon].src} alt={images[icon].alt}></Image>
      <Image className={styles.iconR} src={images[nextIcon].src} alt={images[nextIcon].alt}></Image>
      </div>
      <div className={styles.right} onClick={() => changeIcon("right")}></div>
    </div>
    <h2 className={styles.title}>{iconNames[icons.indexOf(icon)]}</h2>
    <a className={styles.button} href={`/roles/${icons[icons.indexOf(icon)]}`}>Learn More</a>
    </div>
    </div>
  );
}
