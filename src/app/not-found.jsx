'use client'; 

import React, { useEffect, useState } from "react";
import styles from "@/src/styles/pages/not-found.module.css";

const items = [
  { image: "/404/spilled-milk.png", 
    message: `Don't cry over spilled milk... unless it's yours, then go ahead and have a good cry. But seriously, it's just milk. We'll clean it up. 
    Eventually.`
  }, 
  { image: "/404/vending.png", 
    message: `Out of order and out of snacks! Looks like you're out of luck, my friend. No chips, no candy, just pure disappointment. 
    Guess you’ll have to snack on your hopes and dreams for now!`
  },
  { image: "/404/broken-egg.png", 
    message: `This is egg-straordinary broken... in a bad way. Seems like someone didn't handle things with care. Now we're just left with a scrambled
    situation.`
  }
];

export default function NotFound() {
  const [currentItem, setCurrentItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentItem(items[randomIndex]);
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true); // Once the images are loaded, set isLoaded to true
  };

  return (
    <div className={styles.container}>
      {currentItem && (
        <>
          <img 
            src={currentItem.image} 
            alt="404" 
            className={styles.image}
            onLoad={handleImageLoad}
          />
          <p className={styles.message}>{currentItem.message}</p>
        </>
      )}
      {isLoaded && (
        <button 
          className={styles.button}
          onClick={() => window.location.href = "/"}
        >
          Back to Home
        </button>
      )}
    </div>
  );
}
