"use client";
import { useParams } from "next/navigation";

const rowData = {
  "knights-combat": {
    aspect: "Knights and Combat",
    eatery:
      "Choreographed jousts and duels, with knights performing scripted acts of valor for entertainment.",
    history:
      "Knights engaged in real warfare, tournaments, and served lords or kings as part of a feudal system.",
  },
  "food-dining": {
    aspect: "Food and Dining",
    eatery:
      "Hearty meals served without utensils, eaten with hands for thematic immersion.",
    history:
      "Medieval meals varied by class: peasants ate simple fare, while nobles enjoyed elaborate banquets with utensils in later periods.",
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
    <div style={{ padding: "20px", fontFamily: "Garamond, serif" }}>
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
            <td>{row.aspect}</td>
            <td>{row.eatery}</td>
            <td>{row.history}</td>
          </tr>
        </tbody>
      </table>
      <a href="/medieval-times" style={{ textDecoration: "underline" }}>
        Back to Table
      </a>
    </div>
  );
}
