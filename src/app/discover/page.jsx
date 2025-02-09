/* Discover page done by: Ryan Low Chee Yang */

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollColumn from "@/src/components/discover/ScrollColumn.jsx";
import SelectionPanel from "@/src/components/discover/SelectionPanel.jsx";
import RecommendationPopup from "@/src/components/discover/RecommendationPopup.jsx";
import styles from "@/src/styles/pages/discover.module.css";

const Page = () => {
  const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  const columnCount = 5;
  const scrollSpeeds = [1.0, 1.3, 1.5, 1.3, 1.0]; // More distinct speed differences
  const baseScrollSpeed = 10; // Increased base speed for more noticeable effect
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

  const containerRef = useRef(null);
  const scrollVelocity = useRef(0);
  const isScrolling = useRef(false);
  const rafId = useRef(null);
  const columns = useRef([]);
  const lastTouchY = useRef(0);
  const touchStartTime = useRef(0);

  useEffect(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const animateScroll = () => {
    if (!containerRef.current) return;

    if (Math.abs(scrollVelocity.current) > 0.05) {
      scrollVelocity.current *= 0.985; // Slower decay for smoother scrolling
      
      columns.current.forEach((column, index) => {
        if (!column) return;
        const speed = scrollSpeeds[index] * baseScrollSpeed;
        const newScrollTop = column.scrollTop + scrollVelocity.current * speed;
        
        // Seamless looping
        if (newScrollTop >= column.scrollHeight - column.clientHeight) {
          column.scrollTop = 1;
        } else if (newScrollTop <= 0) {
          column.scrollTop = column.scrollHeight - column.clientHeight - 1;
        } else {
          column.scrollTop = newScrollTop;
        }
      });

      rafId.current = requestAnimationFrame(animateScroll);
    } else {
      isScrolling.current = false;
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const scrollDirection = e.deltaY > 0 ? 1 : -1;
      scrollVelocity.current = scrollDirection;

      if (!isScrolling.current) {
        isScrolling.current = true;
        rafId.current = requestAnimationFrame(animateScroll);
      }
    };

    const handleTouchStart = (e) => {
      lastTouchY.current = e.touches[0].clientY;
      touchStartTime.current = Date.now();
      scrollVelocity.current = 0;
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      const deltaY = lastTouchY.current - currentY;
      const timeDelta = Date.now() - touchStartTime.current;
      const touchVelocity = (deltaY / Math.max(1, timeDelta)) * 32;
      
      scrollVelocity.current = touchVelocity;
      lastTouchY.current = currentY;

      if (!isScrolling.current) {
        isScrolling.current = true;
        rafId.current = requestAnimationFrame(animateScroll);
      }
    };

    const handleTouchEnd = () => {
      scrollVelocity.current *= 5; // Increased momentum
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: true });
      container.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
      }
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  const selectImage = (image) => {
    if (selectedImages.length < 3 && !selectedImages.includes(image)) {
      setSelectedImages(prev => [...prev, image]);
    }
  };

  const removeImage = (image) => {
    setSelectedImages(prev => prev.filter(img => img !== image));
  };

  const getRecommendations = async () => {
    if (selectedImages.length !== 3) {
      setError("Please select exactly 3 dishes.");
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const [profileRes, recsRes] = await Promise.all([
        fetch("https://api.openai.com/v1/chat/completions", {
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
                  "You are a culinary taste profiler. Analyze the user's three selected dishes to determine their overall flavor preferences, spice tolerance, and preferred cuisine styles. Do not list or rate each dish individually; instead, provide a cohesive summary that captures the user's taste profile. Format your response in markdown using the header '# Your Taste Profile' followed by a concise summary.",
              },
              {
                role: "user",
                content: `Analyze my taste preferences based on these 3 selections: ${selectedImages
                  .map((img) =>
                    img.replace(/\.(jpg|jpeg)$/, "").replace(/[_-]/g, " ")
                  )
                  .join(", ")}`,
              },              
            ],
          }),
        }),
        fetch("https://api.openai.com/v1/chat/completions", {
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
                  "You are a culinary recommender. Based on the user's overall taste profile and their 3 selected dishes, recommend TWO entirely new dishes that the user has not already chosen. Make sure the recommended dishes are completely distinct from the selected ones. Provide a brief explanation for each recommendation that connects it to the user's overall taste preferences. Format your response in markdown with the header '# Recommended Dishes' followed by numbered recommendations in the format '1. Dish Name: Description'.",
              },
              {
                role: "user",
                content: `Recommend dishes based on these 3 selections: ${selectedImages
                  .map((img) =>
                    img.replace(/\.(jpg|jpeg)$/, "").replace(/[_-]/g, " ")
                  )
                  .join(", ")}`,
              },                         
            ],
          }),
        }),
      ]);

      if (!profileRes.ok || !recsRes.ok) {
        throw new Error("Failed to fetch recommendations.");
      }

      const [profileData, recsData] = await Promise.all([
        profileRes.json(),
        recsRes.json(),
      ]);

      const fullResponse = 
        profileData.choices[0].message.content + "\n\n" +
        recsData.choices[0].message.content;

      setResponse(fullResponse);
      setShowPopup(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.scrollContainer} ref={containerRef}>
        <AnimatePresence>
          {Array.from({ length: columnCount }).map((_, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: columnIndex * 0.1 }}
              className={styles.columnWrapper}
            >
              <ScrollColumn
                ref={el => columns.current[columnIndex] = el}
                images={shuffledImages}
                onImageSelect={selectImage}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <SelectionPanel
        selectedImages={selectedImages}
        onRemove={removeImage}
        onGetRecommendations={getRecommendations}
        loading={loading}
      />

      <RecommendationPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
        response={response}
        selectedImages={selectedImages}
      />

      <AnimatePresence>
        {error && (
          <motion.div 
            className={styles.error}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Page;
