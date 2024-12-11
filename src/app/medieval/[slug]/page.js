"use client";
import { useParams } from "next/navigation";
import styles from "../page.module.css";
import Link from "next/link";
const rowData = {
  "knights-combat": {
    aspect: "Knights & Combat",
    eatery:
      "Choreographed jousts and duels, with knights performing scripted acts of valor for entertainment.",
    history:
      "Knights engaged in real warfare, tournaments, and served lords or kings as part of a feudal system.",
  },
  "food-dining": {
    aspect: "Food & Dining",
    eatery:
      "Hearty meals served without utensils, eaten with hands for thematic immersion.",
    history:
      "Medieval meals varied by class: peasants ate simple fare, while nobles enjoyed elaborate banquets with utensils in later periods.",
  },
  entertainment: {
    aspect: "Entertainment",
    eatery:
      "Jesters, music, and tournaments performed purely for modern amusement.",
    history:
      "Entertainment included minstrels, festivals, and tournaments that were competitive events, not scripted shows.",
  },
  "armor-weapons": {
    aspect: "Armor & Weapons",
    eatery:
      "Armor and weapons are designed for safety and spectacle, often exaggerated for effect.",
    history:
      "Medieval meals varied by class: peasants ate simple fare, while nobles enjoyed elaborate banquets with utensils in later periods.",
  },
  "historical-accuracy": {
    aspect: "Historical Accuracy",
    eatery:
      "Loosely based on medieval aesthetics, with creative liberties for theatrical flair.",
    history:
      "Rich and complex history spanning centuries with evolving culture, technology, and power dynamics.",
  },
  "feudal-system": {
    aspect: "Feudal System",
    eatery: "Simplified: the king and knights are the stars of the show.",
    history:
      "A hierarchical system of lords, vassals, and serfs with complex obligations and governance.",
  },
  hygiene: {
    aspect: "Hygiene",
    eatery: "The venue is clean and sanitized for modern standards.",
    history:
      "The real medieval period had limited sanitation, with challenges in hygiene and disease prevention.",
  },
  purpose: {
    aspect: "Purpose",
    eatery: "Designed for family fun and education through entertainment.",
    history:
      "The actual medieval era was a time of survival, warfare, religious devotion, and societal evolution.",
  },
  // Add more rows as needed
};

export default function SlugPage() {
  const { slug } = useParams(); // Get the dynamic slug
  const row = rowData[slug]; // Find the corresponding row data

  if (!row) {
    return <p>Content not found.</p>;
  }

  return (
    <div className={styles.slugContainer}>
      <h2 className={styles.pageHeader}>{row.aspect}</h2>
      <table className={styles.slugTable}>
        <thead>
          <tr className={styles.slugTableRow}>
            <th className={styles.slugTableHeader}>Medieval Times (Eatery)</th>
            <th className={styles.slugTableHeader}>
              Medieval Period (History)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.slugTableRow}>
            <td className={styles.slugTableCell}>{row.eatery}</td>
            <td className={styles.slugTableCell}>{row.history}</td>
          </tr>
        </tbody>
      </table>
      <Link className={styles.backToTable} href="/medieval">
        Back to Table
      </Link>
    </div>
  );
}
