'use client';

import styles from "./page.module.css";
import Singapore3D from "@/app/singapore3D";

export default function Home() {
  return (
      <div className={styles.container}>
        <h1 className={styles.header}>Home</h1>
        <Singapore3D />
      </div>
  );
}