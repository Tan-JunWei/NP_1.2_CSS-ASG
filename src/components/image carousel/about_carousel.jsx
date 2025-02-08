/* Image Carousel component done by: Ryan Tan Jia Jun */

'use client';

import { useRef, useEffect } from 'react';
import styles from "@/src/styles/about_carousel.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
//css for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




const CarouselSlider = () => {
    return (
        <>
        <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={false}
        mousewheel={false}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className={styles.mySwiper}
        >
          <SwiperSlide>
          <div className={styles.carditem}>
            <img
            className={styles.images}
            src="/about/rjj.png" 
            width={250}
            height={250}
            alt="Ryan Tan"
            />
            <div className="cardtext">
            <h2 className={styles.username}>Ryan Tan</h2>
            <p className={styles.user_description}>
            Hi there! I'm Ryan Tan, one of the four passionate foodies behind this blog.
            I love sharing tips and tricks that bring a personal touch to the kitchen.
            Whether I’m experimenting with new ingredients or perfecting classic dishes,
            I’m always looking for ways to make food approachable, fun, and delicious.  
            </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.carditem}>
            <img
            className={styles.images}
            src="/about/jx.png"  
            width={500}
            height={500}
            alt="Jun Wei"
            />
            <div className="cardtext">
            <h2 className={styles.username}>Tan Jun Wei</h2>
            <p className={styles.user_description}>
            Hey everyone! I'm Jun Wei, one of the four enthusiastic food lovers running this blog. Cooking has always been a passion of mine, and I enjoy sharing insights that make every meal special. From testing out creative flavor combinations to mastering timeless recipes, my goal is to help make cooking an enjoyable and rewarding experience for all.
            </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide><div className={styles.carditem}>
            <img
            className={styles.images}
            src="/about/Jh.jpeg" 
            width={500}
            height={500}
            alt="Jo Hanson"
            />
            <div className="cardtext">
            <h2 className={styles.username}>Jo Hanson</h2>
            <p className={styles.user_description}>Hello! I’m Jo Hanson, part of the team of four food enthusiasts behind this blog. I love exploring the art of cooking and sharing practical tips to elevate everyday meals. Whether I’m trying out bold new flavors or refining traditional favorites, I’m always eager to inspire others to have fun in the kitchen.</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className={styles.carditem}>
            <img
            className={styles.images}
            src="/about/rl.jpg"
            width={500}
            height={500}
            alt="Ryan Low"
            />
            <div className="cardtext">
            <h2 className={styles.username}>Ryan Low</h2>
            <p className={styles.user_description}>Hi there! I’m Ryan Low, one of the four food-loving minds behind this blog. My passion lies in making cooking exciting and accessible for everyone. Whether it’s experimenting with fresh ingredients or finding simple ways to enhance classic recipes, I believe that great food should be both fun and effortless.</p>
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
        </>
    );
  };


export default CarouselSlider;
