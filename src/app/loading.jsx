// src/app/loading.js
import React from "react";
import styles from "@/src/styles/pages/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img
        src="/hapi-cat.gif" // Replace with the path to your GIF
        alt="Loading..."
        className={styles.loaderGif}
      />
    </div>
  );
}
