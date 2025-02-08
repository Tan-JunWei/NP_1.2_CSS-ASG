/* Hero Section done by: Ryan Low Chee Yang & Tan Jun Wei */

'use client';
import React from "react";
import styles from "./page.module.css";
import RecipeGrid from "@/src/components/recipegrid/recipegrid";
import FAQ from "@/src/components/FAQ/faq";
import SimpleParallax from "simple-parallax-js";
import { FaChevronDown, FaUtensils, FaRobot, FaCompass } from "react-icons/fa";
import HomeButton from "@/src/components/homebutton/index";
import { useRouter } from 'next/navigation';

const ParallaxHeroSection = ({ imageSrc = "/home/singapore.jpg" }) => (
  <SimpleParallax orientation="up" scale={1.4}>
    <img src={imageSrc} alt="image" className={styles.parallaxImage} />
  </SimpleParallax>
);

export default function Home() {
  const router = useRouter();

  return (
      <div className={styles.container}>
        <div className={styles.hero}>
          <ParallaxHeroSection></ParallaxHeroSection>
          <h1 className={styles.header}>Welcome to Singapore's Food Paradise</h1>
          <p className={styles.subheader}>Discover the rich flavors and diverse culinary heritage of Singapore</p>

          <div className={styles.buttonWrapper}>
            <button 
              className={styles.scrollButton} 
              onClick={() => {
                const targetElement = document.getElementById('contentSection');
                window.scrollTo({
                  top: targetElement.offsetTop - 70,
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
                Singapore is a true melting pot, where cultures, flavors, and traditions come together to create a unique and vibrant food scene. The rich histories of Chinese, Malay, Indian, and other communities blend seamlessly, offering a diverse culinary landscape that's as rich as it is exciting.
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
                Our website is a celebration of this culinary diversity. It's a place where we dive into the stories behind Singapore's iconic dishes, explore the traditions that shape them, and discover the people who make our food scene so special. Join us as we share the rich flavors, the culture, and the passion that makes Singapore's food truly unforgettable.
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

        <div className={styles.tasteExplorer}>
          <ParallaxHeroSection imageSrc="/home/discover.jpeg" />
          <div className={styles.tasteExplorerContent}>
            <h2 className={styles.tasteExplorerTitle}>Discover Your Next Favorite Dish</h2>
            <p className={styles.tasteExplorerSubtitle}>
              Let our AI-powered taste profiler guide your culinary journey through Singapore
            </p>
            
            <div className={styles.cardContainer}>
              <div className={styles.exploreCard}>
                <FaUtensils className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Select Your Favorites</h3>
                <p className={styles.cardText}>
                  Choose from a variety of iconic Singapore dishes that match your taste
                </p>
              </div>
              
              <div className={styles.exploreCard}>
                <FaRobot className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>AI Recommendations</h3>
                <p className={styles.cardText}>
                  Get personalized suggestions based on your food preferences
                </p>
              </div>
              
              <div className={styles.exploreCard}>
                <FaCompass className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Explore New Flavors</h3>
                <p className={styles.cardText}>
                  Discover new dishes that match your taste profile
                </p>
              </div>
            </div>
            
            <button 
              className={styles.exploreButton}
              onClick={() => router.push('/discover')}
            >
              Start Your Food Journey
            </button>
          </div>
        </div>

        <div className={styles.FAQSection}>
          <FAQ></FAQ>
        </div>
      </div>
  );
}
