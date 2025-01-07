import React from "react";
import styles from "@/src/styles/pages/top-picks.module.css";

const topPicks = [
  {
    id: 1,
    title: "Best Spicy Recipes",
    description: "Explore our top-rated spicy dishes that bring heat to your kitchen.",
    image: "/top-picks/spicy.jpg", // TODO: Replace with actual image paths
  },
  {
    id: 2,
    title: "Quick & Easy Meals",
    description: "Delicious recipes that you can whip up in under 30 minutes.",
    image: "/top-picks/quick.jpg", // TODO: ADD IMAGEEE
  },
  {
    id: 3,
    title: "Desserts to Die For",
    description: "Satisfy your sweet tooth with these heavenly dessert recipes.",
    image: "/top-picks/desserts.jpg", // TODO: ADD IMAGEEE
  },
];

export default function TopPicks() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Our Top Picks</h1>
      <div className={styles.grid}>
        {topPicks.map((pick) => (
          <div key={pick.id} className={styles.card}>
            <img src={pick.image} alt={pick.title} className={styles.image} />
            <h2 className={styles.title}>{pick.title}</h2>
            <p className={styles.description}>{pick.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
