/* Loading animation done by: Tan Jun Wei & Ryan Low Chee Yang */

'use client';

import { useState, useEffect } from "react";

export default function Loading() {
  const messages = [
    "Preheating the servers... 🔥",
    "Grilling some bytes... 🍽️",
    "Baking a couple of cookies... 🍪",
    "Brewing digital coffee... ☕",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 900); // Change text every 0.9s

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div style={styles.loaderContainer}>
      <img src="/loading/loading.gif" alt="Loading..." style={styles.loaderGif} />
      <p style={styles.loadingText}>{currentMessage}</p>
    </div>
  );
}

// Add styles for full-screen loading animation
const styles = {
  loaderContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 9999,
  },
  loaderGif: {
    width: "150px",
    height: "auto",
  },
  loadingText: {
    marginTop: "20px",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    textAlign: "center",
  },
};
