import Image from "next/image";
import ArcherImg from '../../../assets/img/archer.png'
import styles from "../roles.module.css";
export default function Archer() {
    return (
        <div className={styles.container}>
            <Image src={ArcherImg} alt="archer" height={500} />
            <h1>Archer</h1>
        </div>
    );
}