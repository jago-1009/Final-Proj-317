import Image from "next/image";
import KnightImg from '../../../assets/img/knight.png'
import styles from "../roles.module.css";

export default function Knight() {
    return (
        <div className={styles.container}>
            <Image src={KnightImg} alt="Knight" height={500} />
            <h1></h1>
        </div>
    );
}