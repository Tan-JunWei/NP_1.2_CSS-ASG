"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/src/styles/pages/top-picks.module.css";

const Page = () => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const columnCount = 5;
  const scrollSpeeds = [3, 2, 1.5, 2, 3];
  const imageFolder = "/top-picks";
  const images = [
    "bak_chor_mee.jpg",
    "briyani.jpeg",
    "butter_chicken.jpg",
    "char_kway_teow.jpg",
    "char_siew_rice.jpg",
    "duck_rice.jpeg",
    "fishball_noodles.jpg",
    "fish_head_curry.jpg",
    "hainanese-chicken-rice.jpg",
    "hokkien_mee.jpg",
    "mee_pok.jpg",
    "mee_rebus.jpg",
    "mee_siam.jpg",
    "nasi_lemak.jpeg",
    "roti_prata.jpg",
    "satay.jpg",
    "wanton_mee.jpg",
  ].map((filename) => `${imageFolder}/${filename}`);

  const [shuffledImages, setShuffledImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const columnsRef = useRef([]);
  const scrollVelocities = useRef(Array(columnCount).fill(0));
  const isScrolling = useRef(false);

  // Shuffle images on load
  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  // Smooth scrolling logic
  useEffect(() => {
    const animateScroll = () => {
      let active = false;
      columnsRef.current.forEach((column, index) => {
        if (column && Math.abs(scrollVelocities.current[index]) > 0.1) {
          active = true;
          scrollVelocities.current[index] *= 0.98; // Smooth decay
          column.scrollTop += scrollVelocities.current[index];

          // Reset scrolling at boundaries
          if (column.scrollTop + column.clientHeight >= column.scrollHeight) {
            column.scrollTop = 0;
          } else if (column.scrollTop <= 0) {
            column.scrollTop = column.scrollHeight;
          }
        }
      });

      if (active) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling.current = false;
      }
    };

    const handleScroll = (e) => {
      e.preventDefault();
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      columnsRef.current.forEach((_, index) => {
        if (columnsRef.current[index]) {
          scrollVelocities.current[index] += scrollDirection * scrollSpeeds[index];
        }
      });

      if (!isScrolling.current) {
        isScrolling.current = true;
        animateScroll();
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  const selectImage = (image) => {
    if (selectedImages.length < 3 && !selectedImages.includes(image)) {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const removeImage = (image) => {
    setSelectedImages(selectedImages.filter((img) => img !== image));
  };

  const getRecommendations = async () => {
    if (selectedImages.length !== 3) {
      alert("Please select exactly 3 dishes.");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);
    setShowPopup(false);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "The user likes the 3 selected dishes, please provide a review of their taste and recommend a dish similar to the 3.",
            },
            {
              role: "user",
              content: `Here are the 3 selected dishes: ${selectedImages
                .map((img) => img.replace(".jpg", "").replace("_", " "))
                .join(", ")}.`,
            },
          ],
        }),
      });

      if (!res.ok) throw new Error("Failed to fetch recommendations.");

      const data = await res.json();
      setResponse(data.choices[0].message.content);
      setShowPopup(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div className={styles.container}>
      <div className={styles.scrollContainer}>
        {Array.from({ length: columnCount }).map((_, columnIndex) => (
          <div
            key={columnIndex}
            className={styles.column}
            ref={(el) => (columnsRef.current[columnIndex] = el)}
          >
            {shuffledImages.map((image, i) => (
              <img
                key={`${columnIndex}-${i}`}
                src={image}
                alt={`Food ${i}`}
                onClick={() => selectImage(image)}
              />
            ))}
          </div>
        ))}
      </div>

      <div className={styles.selectionPanel}>
        <h3>Your Selection (3 Required):</h3>
        <div className={styles.selectedImages}>
          {selectedImages.map((image, index) => (
            <div key={index} className={styles.card}>
              <img
                src={image}
                alt={`Selected ${index}`}
                onClick={() => removeImage(image)}
              />
            </div>
          ))}
        </div>
        <button
          className={styles.recommendationButton}
          onClick={getRecommendations}
          disabled={loading || selectedImages.length !== 3}
        >
          {loading ? "Analyzing..." : "Get Recommendations"}
        </button>
      </div>

      {showPopup && (
        <div>
          <div className={styles.popupOverlay} onClick={closePopup}></div>
          <div className={styles.popupContent}>
            <h3>🍽️ Recommendations For You</h3>
            <div className={styles.responseText}>
              {response && (
                <>
                  <div className={styles.dishList}>
                    {response.split("\n").map((line, index) => {
                      if (line.match(/^\d+\.\*\*/)) {
                        const [title, ...descParts] = line.replace(/^\d+\.\*\*/, "").split(/-/);
                        return (
                          <div key={index} className={styles.dishItem}>
                            <h4 className={styles.dishTitle}>{title.trim()}</h4>
                            <p className={styles.dishDescription}>{descParts.join(" ").trim()}</p>
                          </div>
                        );
                      }
                      if (line.includes("recommend trying")) {
                        return (
                          <div key={index} className={styles.recommendationBox}>
                            <p className={styles.recommendationText}>
                              {line.replace(/\*\*/g, "").replace("I recommend trying", "⭐ We Recommend:")}
                            </p>
                          </div>
                        );
                      }
                      return <p key={index} className={styles.generalText}>{line}</p>;
                    })}
                  </div>
                </>
              )}
            </div>
            <button className={styles.closeButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}

      {error && <div className={styles.error}>Error: {error}</div>}
    </div>
  );
};

export default Page;