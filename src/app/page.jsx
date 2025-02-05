'use client';
import React from "react";
import styles from "./page.module.css";
import RecipeGrid from "../components/recipegrid/recipegrid";


export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1 className={styles.header}>Welcome to Singapore's Food Paradise</h1>
          <p className={styles.subheader}>Discover the rich flavors and diverse culinary heritage of Singapore</p>
        </div>
        <div className={styles.content}>
          <h2 className={styles.rectitle}>Popular Recipes</h2>
          <hr className={styles.line}/>
          <RecipeGrid></RecipeGrid>
        </div>
      </div>
  );
}