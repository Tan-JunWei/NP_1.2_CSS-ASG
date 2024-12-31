'use client';

import Gallery from "@/src/components/image carousel/carousel";
import styles from "./page.module.css";
import Singapore3D from "@/src/components/3d/singapore3D"; 
import GoogleMap from "@/src/components/google map/googlemap";

export default function Home() {
  return (
      <div className={styles.container}>
        <h1 className={styles.header}>Home</h1>
        <Singapore3D />
        <Gallery />
        <GoogleMap />
      </div>
  );
}