import Image from "next/image";
import styles from "./page.module.css";
import DetailsButton from "@/components/detailsbutton/page";
import Link from "next/link";
export default function Medieval() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Medieval Times</h1>
      <section className={styles.desc}>
        <p>
          Lo! Gather ye round, for I shall tell thee of a wondrous place, known
          far and wide as Medieval Tymes, where lords and ladies of all ages
          mayst travel back to an age of valor, chivalry, and noble sport.
          Within the grand halls of this eatery and destinatione, thou shalt
          partake in a sumptuous feast, served as it was in the olden
          days—without fork or spoon, but with thy very hands! (Fork and knife
          available upon request).
        </p>
        <br />
        <p>
          Whilst thou dost dine, a grand spectacle unfolds before thine eyes:
          noble knights, clad in gleaming armor, dost take up the lance and
          sword to engage in jousts and combat most thrilling. The crowd doth
          cheer mightily for their chosen champion, whose honor is at stake upon
          the field of valor.
        </p>
        <br />
        <p>
          Musicians play lively tunes, and jesters do entertain with japes and
          antics to delight young and old alike. The hall is bedecked with
          banners, and the air is thick with the scent of roasted meats and the
          spirit of merriment. Indeed, Medieval Tymes is a place where the
          spirit of the Middle Ages is rekindled, offering families and
          travelers a taste of history mingled with the thrill of gallant
          spectacle and hearty feasting.
        </p>
      </section>
      <section>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.tableHeading}>Aspect of Medieval Times</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/knights-combat" className={styles.link}>
                  Knights & Combat
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/food-dining" className={styles.link}>
                  Food & Dining
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/entertainment" className={styles.link}>
                  Entertainment
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/armor-weapons" className={styles.link}>
                  Armor & Weapons
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/historical-accuracy" className={styles.link}>
                  Historical Accuracy
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/feudal-system" className={styles.link}>
                  Feudal System
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/hygiene" className={styles.link}>
                  Hygiene
                </Link>
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <td>
                <Link href="/medieval/purpose" className={styles.link}>
                  Purpose
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
