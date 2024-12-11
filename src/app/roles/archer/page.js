import Image from "next/image";
import Archerimg from "../../../assets/img/archer.png";
import styles from "../roles.module.css";

export default function Monk() {
  return (
    <div className={styles.container}>
      <Image src={Archerimg} alt="Archer" height={500} />
      <h1>Archers</h1>
      <p>
        Medieval archers played a vital role in the military and cultural
        landscape of the Middle Ages, particularly as the longbow emerged as a
        game-changing weapon. In the 13th century, English archers were renowned
        for their skill with the longbow, which required years of practice to
        master. Training often began in childhood, with young boys honing their
        abilities through regular practice, a process encouraged by laws
        mandating archery practice on Sundays and holidays. The effectiveness of
        these archers lay not only in their precision but also in the sheer
        power of their longbows, capable of penetrating armor at considerable
        distances.
      </p>
      <br></br>
      <p>
        The longbow itself was a technological marvel of its time, typically
        made from yew wood. It measured roughly six feet in length and demanded
        significant physical strength to draw. English longbowmen became
        legendary for their pivotal role in battles like Agincourt, where their
        rapid volleys overwhelmed heavily armored opponents. These archers often
        carried quivers with 24 to 36 arrows and could shoot at a rate of up to
        12 arrows per minute, combining speed and accuracy to devastating effect
        on the battlefield.
      </p>
      <br></br>
      <p>
        However, the life of an archer was not without hardship. Archers were
        often commoners and faced grueling training, the risk of injury, and the
        reality of war. Despite their critical role, they were sometimes seen as
        expendable compared to knights or other mounted troops. Still, their
        contributions reshaped medieval warfare, marking a shift towards the
        increased importance of infantry and ranged tactics in military
        strategy.
      </p>
      <section className={styles.sourceList}>
        <p>
          For more insights, you can explore additional details from thse
          sources!
        </p>
        <ul>
          <li className={styles.linkText}>
            <a href="https://catherinehanley.co.uk/historical-background/archery-in-the-thirteenth-century/">
              Catherine Hanlels historical overview
            </a>
          </li>
          <li className={styles.linkText}>
            <a href="https://www.medieval-life-and-times.info/medieval-life/medieval-archer.htm">
              Medieval Life and Times
            </a>
          </li>
          <li className={styles.linkText}>
            <a href="https://www.johnmooremuseum.org/medieval-archery-the-longbow/">
              John Moore Museum
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
