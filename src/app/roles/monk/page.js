import Image from "next/image";
import MonkImg from '../../../assets/img/monk.png'
import styles from "../roles.module.css";

export default function Monk() {
    return (
        <div className={styles.container}>
            <Image src={MonkImg} alt="Monk" height={500} />
            <h1>Priest</h1>
            <p>During the Middle Ages, priests held a central role in society. Their responsibilities extended far beyond leading religious ceremonies. Priests were community leaders, educators, and caregivers, often providing guidance on moral and practical issues.</p>
            <p>The Key Roles of Preists Included:</p>
            <ul>
                <li><strong>Spiritual Leadership: </strong>Conducting daily prayers, Mass, and other religious services.</li>
                <li><strong>Community Support: </strong>Acting as intermediaries between the people and God, priests offered confessions and penance, providing spiritual solace.</li>
                <li><strong>Education and Record-Keeping:</strong> In a largely illiterate society, priests were among the few educated individuals, responsible for teaching and maintaining important records like births, marriages, and deaths.</li>
            </ul>
            <p>Priests influence often extended into political matters, particularly as advisors to local leaders, showcasing their importance in both the sacred and secular realms of medieval life. Their lives were marked by dedication to serving God and their communities, making them integral to the fabric of medieval society.
            </p>
        </div>
        
    );
}