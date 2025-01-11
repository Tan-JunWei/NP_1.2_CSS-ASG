'use client';

import React, { useRef, useState } from 'react';
import styles from "@/src/components/image carousel/about_carousel.css";
import Image from 'next/image';

const GallerySlider = () => {
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
    setIsDown(false);
    sliderRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    sliderRef.current.classList.remove('active');
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
      <li style={{ background: '#f7ede2' }}>
     
        <Image
        className='image'
        src="/about/Placeholder.png"
        width={200}
        height={150}
        alt="PLACEHOLDER"/>
           <div className="text">
           <h3>Hi, I'm Ryan Tan!</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.           
            </p>
           </div>
           
            </li>
            <li style={{ background: '#f7ede2' }}>
     
      <Image
      className='image'
      src="/about/Placeholder.png"
      width={200}
      height={150}
      alt="PLACEHOLDER"/>
          <div className="text">
          <h3>Lorem ipsum dolor sit amet</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
          </li>
          <li style={{ background: '#f7ede2' }}>
     
        <Image
        className='image'
        src="/about/Placeholder.png"
        width={200}
        height={150}
        alt="PLACEHOLDER"/>
           <div className="text">
           <h3>Lorem ipsum dolor sit amet</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
           </div>
           
            </li>
      
      
     

    </ul>
  );
};

export default GallerySlider;
