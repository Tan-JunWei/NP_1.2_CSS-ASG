'use client';
import React from "react";
import styles from "./page.module.css";
import RecipeGrid from "../components/recipegird/recipegird";


export default function Home() {
  return (
      <div className={styles.container}>
        <h1 className={styles.header}>Home</h1>
        <div>
          <h3 className={styles.rectitle}>Recipes</h3>
          <hr className={styles.line}/>
          <RecipeGrid></RecipeGrid>
        </div>
      </div>
      
  );
}