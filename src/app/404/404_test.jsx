import RootLayout from "@/src/layout/layout";
import styles from "@/src/styles/pages/404.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const messages = [
  "Oops! Looks like you're lost.",
  "404: The page you're looking for doesn't exist.",
  "Well, this is awkward...", 
  "The page is missing, but you're still awesome!",
  "Are you sure this is where you wanted to go?",
];

const images = [
  "/about/Placeholder.png", // Replace with your actual image paths
  "/about/Placeholder.png",
  "/about/Placeholder.png",
  "/about/Placeholder.png",
  "/about/Placeholder.png",
];

export default function Custom404() {
  const [randomMessage, setRandomMessage] = useState("");
  const [randomImage, setRandomImage] = useState("");

  useEffect(() => {
    // Generate a random message and image every time the page loads
    const message = messages[Math.floor(Math.random() * messages.length)];
    const image = images[Math.floor(Math.random() * images.length)];
    setRandomMessage(message);
    setRandomImage(image);
  }, []);

  return (
    <RootLayout>
      <div className={styles.container}>
        <h1 className={styles.header}>404 - Page Not Found</h1>
        <p className={styles.message}>{randomMessage}</p>
        {randomImage && <img src={randomImage} alt="404" className={styles.image} />}
        <Link href="/">
          <button className={styles.button}>Back to Home</button>
        </Link>
      </div>
    </RootLayout>
  );
}
