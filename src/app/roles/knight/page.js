import Image from "next/image";
import KnightImg from '../../../assets/img/knight.png'
import styles from "../roles.module.css";
import DetailsButton from "@/components/detailsbutton/page";
export default function Knight() {
    return (
        <main className={styles.container}>
            <Image src={KnightImg} alt="Knight" height={500} />
            <DetailsButton details={'sword'} top={175} left={'45%'} href={'/details/sword'} />
            <DetailsButton details={'armor'} top={'50%'} left={'47%'} href={'/details/armor'} />
            <h1>Knight</h1>
            <section className={styles.desc}>
            <p className={styles.descText}>Knights were soldiers, usually working under a king or lord, who&apos;s main role was to protect the lord from any danger, as well as fight any people the lord deemed to be a threat. Knights had many different styles of weaponry and armor, and followed many different styles of combat. Click on the buttons on the image above to learn more about some items a knight might have used!</p>
            </section>
        </main>
    );
}