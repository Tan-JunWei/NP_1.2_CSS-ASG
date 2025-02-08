/* Hero Section done by: Ryan Low Chee Yang & Tan Jun Wei */

'use client';
import React from "react";
import styles from "./page.module.css";
import RecipeGrid from "@/src/components/recipegrid/recipegrid";
import FAQ from "@/src/components/FAQ/faq";
import SimpleParallax from "simple-parallax-js";
import { FaChevronDown } from "react-icons/fa";
import HomeButton from "@/src/components/homebutton/index";
const ParallaxHeroSection = () => (
  <SimpleParallax orientation="up" scale={1.4}>
    <img src="/home/singapore.jpg" alt="image" className={styles.parallaxImage} />
  </SimpleParallax>
);

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <ParallaxHeroSection></ParallaxHeroSection>
          <h1 className={styles.header}>Welcome to Singapore's Food Paradise</h1>
          <p className={styles.subheader}>Discover the rich flavors and diverse culinary heritage of Singapore</p>

          <div className={styles.buttonWrapper}> {/* New wrapper for better positioning */}
            <button 
              className={styles.scrollButton} 
              onClick={() => {
                const targetElement = document.getElementById('contentSection');
                window.scrollTo({
                  top: targetElement.offsetTop - 70, // Offset by 70px to account for the fixed navbar
                  behavior: 'smooth',
                });
              }}              
            >
              Explore
              <FaChevronDown className={styles.bounceIcon}/>
            </button>
          </div>
        </div>

        <div id="contentSection" className={styles.contentSection}>
          <section className={styles.foodSection}>
            <h2>The Heart of Singapore: A Melting Pot of Culinary Cultures</h2>
            <div className={`${styles.foodItem} ${styles.left}`}>
              <img src="/home/cultures.png" alt="Cultural Diversity" className={styles.foodImage} />
              <p className={styles.foodText}>
                Singapore is a true melting pot, where cultures, flavors, and traditions come together to create a unique and vibrant food scene. The rich histories of Chinese, Malay, Indian, and other communities blend seamlessly, offering a diverse culinary landscape that’s as rich as it is exciting.
              </p>
            </div>
            <div className={`${styles.foodItem} ${styles.right}`}>
              <img src="/home/variety.png" alt="Food Variety" className={styles.foodImage} />
              <p className={styles.foodText}>
                Every dish in Singapore tells a story, shaped by centuries of trade, migration, and cultural exchange. From the bold spices of Indian curries to the delicate flavors of Chinese broths, our food is a reflection of the diverse cultures that call Singapore home.
              </p>
            </div>
            <div className={`${styles.foodItem} ${styles.left}`}>
              <img src="/home/marinabay.png" alt="Hawker Culture" className={styles.foodImage} />
              <p className={styles.foodText}>
                Our website is a celebration of this culinary diversity. It’s a place where we dive into the stories behind Singapore’s iconic dishes, explore the traditions that shape them, and discover the people who make our food scene so special. Join us as we share the rich flavors, the culture, and the passion that makes Singapore’s food truly unforgettable.
              </p>
            </div>
          </section>
        </div>

        <div className={styles.content}>
          <h2 className={styles.rectitle}>Popular Recipes</h2>
          <hr className={styles.line}/>
          <RecipeGrid></RecipeGrid>
        </div>

        <div className={styles.button}>
            <HomeButton/>
            
          
        </div>



        <div className={styles.FAQSection}>
          <FAQ></FAQ>
        </div>
      </div>
  );
}