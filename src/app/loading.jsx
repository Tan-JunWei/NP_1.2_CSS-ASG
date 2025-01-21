/* Loading animation done by: Ryan Low Chee Yang */

import React from "react";
import styles from "@/src/styles/pages/loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img
        src="/loading.gif"
        alt="Loading..."
        className={styles.loaderGif}
      />
    </div>
  );
}
