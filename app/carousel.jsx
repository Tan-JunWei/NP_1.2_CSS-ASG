import React, { useRef, useState } from 'react';
import './Gallery.css'; // Ensure to include the CSS in a separate file or inline

const Gallery = () => {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    const slider = sliderRef.current;
    setIsDown(true);
    slider.classList.add('active');
    setStartX(e.pageX - slider.offsetLeft);
    setScrollLeft(slider.scrollLeft);
  };

  const handleMouseLeave = () => {
    const slider = sliderRef.current;
    setIsDown(false);
    slider.classList.remove('active');
  };

  const handleMouseUp = () => {
    const slider = sliderRef.current;
    setIsDown(false);
    slider.classList.remove('active');
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
      className="gallery"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <li style={{ background: '#f6bd60' }}></li>
      <li style={{ background: '#f7ede2' }}></li>
      <li style={{ background: '#f5cac3' }}></li>
      <li style={{ background: '#84a59d' }}></li>
      <li style={{ background: '#f28482' }}></li>
    </ul>
  );
};

export default Gallery;
