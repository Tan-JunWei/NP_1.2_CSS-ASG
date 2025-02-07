'use client';
import React from "react";
import styles from "./page.module.css";
import RecipeGrid from "@/src/components/recipegrid/recipegrid";
import FAQ from "@/src/components/FAQ/faq";
import SimpleParallax from "simple-parallax-js";

const ParallaxHeroSection = () => (
  <SimpleParallax orientation="up" scale={1.4}>
    <img src="/singapore.jpg" alt="image" className={styles.parallaxImage} />
  </SimpleParallax>
);

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <ParallaxHeroSection></ParallaxHeroSection>
          <h1 className={styles.header}>Welcome to Singapore's Food Paradise</h1>
          <p className={styles.subheader}>Discover the rich flavors and diverse culinary heritage of Singapore</p>
        </div>

        <div className={styles.content}>
          <h2 className={styles.rectitle}>Popular Recipes</h2>
          <hr className={styles.line}/>
          <RecipeGrid></RecipeGrid>
        </div>

        <div className={styles.button}>


          
        </div>



        <div className={styles.FAQSection}>
          <FAQ></FAQ>
        </div>
      </div>
  );
}