import React, { useRef, useState } from 'react';
import styles from '@/src/styles/Carousel.module.css';

const Gallery = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    setIsDown(true);
    slider.classList.add(styles.active); // Use the scoped class
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    setIsDown(false);
    slider.classList.remove(styles.active); // Use the scoped class
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    setIsDown(false);
    slider.classList.remove(styles.active); // Use the scoped class
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const slider = sliderRef.current;
    const x = e.pageX - slider.offsetLeft;
    const SCROLL_SPEED = 3;
    const walk = (x - startX) * SCROLL_SPEED;
    slider.scrollLeft = scrollLeft - walk;
  };

  return (
    <ul
      className={styles.gallery} // Use the scoped class
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <li className={styles.listitem} style={{ background: '#f6bd60' }}></li>
      <li className={styles.listitem} style={{ background: '#f7ede2' }}></li>
      <li className={styles.listitem} style={{ background: '#f5cac3' }}></li>
      <li className={styles.listitem} style={{ background: '#84a59d' }}></li>
      <li className={styles.listitem} style={{ background: '#f28482' }}></li>
    </ul>
  );
};

export default Gallery;
