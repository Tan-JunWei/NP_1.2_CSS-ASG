"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "@/src/styles/pages/top-picks.module.css";

const Page = () => {
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

  const [shuffledImages, setShuffledImages] = useState(images);
  const [selectedImages, setSelectedImages] = useState([]);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const columnsRef = useRef([]);
  const scrollVelocities = useRef(Array(columnCount).fill(0));
  const isScrolling = useRef(false);

  const selectImage = (image) => {
    if (selectedImages.length < 3 && !selectedImages.includes(image)) {
      setSelectedImages([...selectedImages, image]);
    }
  };

  const removeImage = (image) => {
    setSelectedImages(selectedImages.filter((img) => img !== image));
  };

  const askChatGPT = async () => {
    if (selectedImages.length !== 3) {
      alert("Please select exactly 3 images.");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`,
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
                .join(", ")}. Please provide a review and suggest one additional dish.`,
            },
          ],
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error?.message || "Failed to call OpenAI API");
      }

      const data = await res.json();
      setResponse(data.choices[0].message.content);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  useEffect(() => {
    const animateScroll = () => {
      let active = false;

      columnsRef.current.forEach((column, index) => {
        if (column && Math.abs(scrollVelocities.current[index]) > 0.1) {
          active = true;
          scrollVelocities.current[index] *= 0.95;
          column.scrollTop += scrollVelocities.current[index];

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
          scrollVelocities.current[index] += scrollDirection * scrollSpeeds[index] * 5;
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

      <div className={styles.cardHolder}>
        <h3>Your Selection (3 Max):</h3>
        <div className={styles.selectedImages}>
          {selectedImages.map((image, index) => (
            <div key={index} className={styles.card}>
              <img src={image} alt={`Selected ${index}`} />
              <button onClick={() => removeImage(image)}>Remove</button>
            </div>
          ))}
        </div>
        <button onClick={askChatGPT} disabled={loading || selectedImages.length !== 3}>
          {loading ? "Loading..." : "Ask ChatGPT"}
        </button>
      </div>

      {response && (
        <div className={styles.response}>
          <h3>ChatGPT's Response:</h3>
          <p>{response}</p>
        </div>
      )}
      {error && <div className={styles.error}>Error: {error}</div>}
    </div>
  );
};

export default Page;
