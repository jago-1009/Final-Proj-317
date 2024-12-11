import Image from "next/image";
import styles from "./page.module.css";
import DetailsButton from "@/components/detailsbutton/page";
export default function Knight() {
  return (
    <div className={styles.container}>
      <h1>Medieval Times</h1>
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
      <section className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Medieval Times (Eatery)</th>
              <th>Medieval Period (History)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Knights & Combat</td>
              <td>
                Choreographed jousts and duels, with knights performing scripted
                acts of valor for entertainment.
              </td>
              <td>
                Knights engaged in real warfare, tournaments, and served lords
                or kings as part of a feudal system.
              </td>
            </tr>
            <tr>
              <td>Food & Dining</td>
              <td>
                Hearty meals served without utensils, eaten with hands for
                thematic immersion.
              </td>
              <td>
                Medieval meals varied by class: peasants ate simple fare, while
                nobles enjoyed elaborate banquets with utensils in later
                periods.
              </td>
            </tr>
            <tr>
              <td>Entertainment</td>
              <td>
                Jesters, music, and tournaments performed purely for modern
                amusement.
              </td>
              <td>
                Entertainment included minstrels, festivals, and tournaments
                that were competitive events, not scripted shows.
              </td>
            </tr>
            <tr>
              <td>Armor & Weapons</td>
              <td>
                Armor and weapons are designed for safety and spectacle, often
                exaggerated for effect.
              </td>
              <td>
                Historical armor was functional, made for protection in combat,
                and weapons were designed to be deadly.
              </td>
            </tr>
            <tr>
              <td>Historical Accuracy</td>
              <td>
                Loosely based on medieval aesthetics, with creative liberties
                for theatrical flair.
              </td>
              <td>
                Rich and complex history spanning centuries with evolving
                culture, technology, and power dynamics.
              </td>
            </tr>
            <tr>
              <td>Feudal System</td>
              <td>
                Simplified: the king and knights are the stars of the show.
              </td>
              <td>
                A hierarchical system of lords, vassals, and serfs with complex
                obligations and governance.
              </td>
            </tr>
            <tr>
              <td>Hygiene</td>
              <td>The venue is clean and sanitized for modern standards.</td>
              <td>
                The real medieval period had limited sanitation, with challenges
                in hygiene and disease prevention.
              </td>
            </tr>
            <tr>
              <td>Purpose</td>
              <td>
                Designed for family fun and education through entertainment.
              </td>
              <td>
                The actual medieval era was a time of survival, warfare,
                religious devotion, and societal evolution.
              </td>
            </tr>
          </tbody>
        </table>
      <ul>
        <li><a href="/medieval/knights-combat">Knights and Combat</a></li>
      </ul>
      </section>
    </div>
  );
}
