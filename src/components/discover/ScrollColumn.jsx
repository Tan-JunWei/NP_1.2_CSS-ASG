/* Discover page done by: Ryan Low Chee Yang */

"use client";
import React, { forwardRef } from 'react';
import styles from './ScrollColumn.module.css';

const ScrollColumn = forwardRef(({ images, onImageSelect }, ref) => {
  return (
    <div className={styles.column} ref={ref} aria-label="Food images column">
      {[...images, ...images].map((image, i) => (
        <img
          key={`${i}-${image}`}
          src={image}
          alt={`Food ${i + 1}`}
          onClick={() => onImageSelect(image)}
          className={styles.image}
          loading="lazy"
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onImageSelect(image);
            }
          }}
        />
      ))}
    </div>
  );
});

ScrollColumn.displayName = 'ScrollColumn';

export default ScrollColumn;
