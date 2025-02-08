"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import the specific animation functions we need from react-spring
import { animated, useSpring } from '@react-spring/web';
import { TwitterShareButton, FacebookShareButton, TwitterIcon, FacebookIcon } from "react-share";
import { marked } from "marked";
import styles from "./RecommendationPopup.module.css";

// Import the original components from react-share with aliases.
import {
  TwitterShareButton as RS_TwitterShareButton,
  FacebookShareButton as RS_FacebookShareButton,
} from "react-share";

// Wrapper for TwitterShareButton that removes the networkName prop.
const TwitterShareButtonWrapper = (props) => {
  const { networkName, ...rest } = props;
  return <RS_TwitterShareButton {...rest} />;
};

// Wrapper for FacebookShareButton that removes the networkName prop.
const FacebookShareButtonWrapper = (props) => {
  const { networkName, ...rest } = props;
  return <RS_FacebookShareButton {...rest} />;
};

const RecommendationPopup = ({ isOpen, onClose, response, selectedImages }) => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  if (!isOpen || !response) return null;

  const shareTitle = "Check out my Food Taste Profile!";

  const tasteProfileMatch = response.match(/#\s*Your Taste Profile\s*([\s\S]*?)(?:#\s*Recommended Dishes|$)/);
  const tasteProfile = tasteProfileMatch ? tasteProfileMatch[1].trim() : '';
  
  const recommendationsMatch = response.match(/#\s*Recommended Dishes\s*([\s\S]*)/);
  const recommendations = recommendationsMatch ? recommendationsMatch[1].trim() : '';
  

  const parsedRecommendations =
    recommendations
      ?.split("\n")
      .filter((line) => line.match(/^\d+\./))
      .map((line) => {
        const [name, ...desc] = line.substring(3).split(":");
        return {
          name: name.trim(),
          description: desc.join(":").trim(),
        };
      }) || [];

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className={styles.content}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <h3>🍽️ Your Flavor Profile</h3>
            <motion.button
              className={styles.closeButton}
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </div>

          <div className={styles.selectedPreview}>
            {selectedImages.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Selected ${index + 1}`}
                className={styles.previewImage}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: index * 0.1 }}
              />
            ))}
          </div>

          <div className={styles.tasteProfile}>
            <motion.div
              className={styles.section}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h4>Your Taste Profile</h4>
              <div
                className={styles.profileText}
                dangerouslySetInnerHTML={{ __html: marked(tasteProfile || "") }}
              />
            </motion.div>

            <motion.div
              className={styles.section}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h4>Recommended Dishes</h4>
              <div className={styles.recommendations}>
                {parsedRecommendations.map((rec, index) => (
                  <motion.div
                    key={index}
                    className={styles.recommendationCard}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <h5>{rec.name}</h5>
                    <p>{rec.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.actions}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div className={styles.shareButtons}>
              {shareUrl && (
                <>
                  <TwitterShareButtonWrapper
                    url={shareUrl}
                    title={shareTitle}
                    className={styles.shareButton}
                  >
                    <div className={styles.shareButtonContent}>
                      <TwitterIcon size={24} round />
                      <span>Share on Twitter</span>
                    </div>
                  </TwitterShareButtonWrapper>
                  <FacebookShareButtonWrapper
                    url={shareUrl}
                    quote={shareTitle}
                    className={styles.shareButton}
                  >
                    <div className={styles.shareButtonContent}>
                      <FacebookIcon size={24} round />
                      <span>Share on Facebook</span>
                    </div>
                  </FacebookShareButtonWrapper>
                </>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecommendationPopup;
