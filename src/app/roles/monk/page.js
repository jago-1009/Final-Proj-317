import Image from "next/image";
import MonkImg from '../../../assets/img/monk.png'
import styles from "../roles.module.css";

export default function Monk() {
    return (
        <div className={styles.container}>
            <Image src={MonkImg} alt="Monk" height={500} />
            <h1>Priest</h1>
        </div>
        
    );
}