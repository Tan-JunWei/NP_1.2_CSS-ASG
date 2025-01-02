'use client';

// import Gallery from "@/src/components/image carousel/carousel"; - TO BE REPLACED
import styles from "./page.module.css";
import GoogleMap from "@/src/components/google map/googlemap";

export default function Home() {
  return (
      <div className={styles.container}>
        <h1 className={styles.header}>Home</h1>
        {/*
        <Gallery />
        <GoogleMap /> --- Uncomment to use */} 
      </div>
  );
}