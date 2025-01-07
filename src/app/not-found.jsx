'use client'; 

import React, { useEffect, useState } from "react";
import styles from "@/src/styles/pages/not-found.module.css";

const messages = [
  "Oops! Looks like you're lost.",
  "404: The page you're looking for doesn't exist.",
  "Well, this is awkward...",
  "The page is missing, but you're still awesome!",
  "Are you sure this is where you wanted to go?",
];

const images = [
  "/about/Placeholder.png", // Replace with actual image paths
  "/about/Placeholder.png",
  "/about/Placeholder.png",
  "/about/Placeholder.png",
  "/about/Placeholder.png",
];

export default function NotFound() {
  const [randomImage, setRandomImage] = useState("");
  const [randomMessage, setRandomMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate a random image and message every time the page loads
    const image = images[Math.floor(Math.random() * images.length)];
    const message = messages[Math.floor(Math.random() * messages.length)];
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setRandomImage(image);
      setRandomMessage(message);
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {randomImage && (
        <img 
          src={randomImage} 
          alt="404" 
          className={styles.image}
        />
      )}
      <p className={styles.message}>{randomMessage}</p>
      <button 
        className={styles.button}
        onClick={() => window.location.href = "/"}
      >
        Back to Home
      </button>
    </div>
  );
}
