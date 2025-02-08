"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import styles from './SelectionPanel.module.css';

const SelectionPanel = ({ selectedImages, onRemove, onGetRecommendations, loading }) => {
  // Animation for the counter
  const counterProps = useSpring({
    number: selectedImages.length,
    from: { number: 0 },
    config: { tension: 300, friction: 20 },
  });

  // Progress ring calculation
  const circumference = 2 * Math.PI * 18; // radius = 18
  const progress = (selectedImages.length / 3) * circumference;

  return (
    <motion.div 
      className={styles.panel}
      initial={{ x: "-50%", y: 50, opacity: 0 }}
      animate={{ x: "-50%", y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h3>Your Selection</h3>
          <div className={styles.counter}>
            <svg width="40" height="40" className={styles.progressRing}>
              <circle
                stroke="#e2e8f0"
                strokeWidth="3"
                fill="none"
                r="18"
                cx="20"
                cy="20"
              />
              <circle
                stroke="#6a11cb"
                strokeWidth="3"
                fill="none"
                r="18"
                cx="20"
                cy="20"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                className={styles.progress}
              />
            </svg>
            <div className={styles.counterText}>
              <animated.span className={styles.count}>
                {counterProps.number.to(n => Math.floor(n))}
              </animated.span>
              <span className={styles.total}>/3</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.selectedImages}>
          <AnimatePresence mode="popLayout">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`${styles.imageSlot} ${selectedImages[index] ? styles.filled : ''}`}
                layout
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {selectedImages[index] ? (
                  <motion.div 
                    className={styles.imageContainer}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={selectedImages[index]}
                      alt={`Selected ${index + 1}`}
                      onClick={() => onRemove(selectedImages[index])}
                    />
                    <motion.button
                      className={styles.removeButton}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => onRemove(selectedImages[index])}
                    >
                      ×
                    </motion.button>
                  </motion.div>
                ) : (
                  <div className={styles.placeholder}>
                    {index + 1}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.button
          className={styles.recommendButton}
          onClick={onGetRecommendations}
          disabled={selectedImages.length !== 3 || loading}
          whileHover={selectedImages.length === 3 && !loading ? { scale: 1.02 } : {}}
          whileTap={selectedImages.length === 3 && !loading ? { scale: 0.98 } : {}}
        >
          {loading ? (
            <div className={styles.loadingButton}>
              <span className={styles.loadingSpinner} />
              Analyzing...
            </div>
          ) : (
            selectedImages.length === 3 ? "Get Recommendations" : `Select ${3 - selectedImages.length} More`
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SelectionPanel;
