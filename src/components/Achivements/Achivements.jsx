import React from "react";
import styles from "./Achivements.module.css";
import { getImageUrl } from "../../utils";
import achievement from "../../data/achivements.json";

export const Achivements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>Achievements</h2>
      <div className={styles.achievementsGrid}>
        {achievement.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={getImageUrl(item.imageSrc)} alt={item.title} className={styles.image} />
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
