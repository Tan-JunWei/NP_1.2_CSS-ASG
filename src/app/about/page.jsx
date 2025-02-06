/* About page done by: Ryan Tan Jia Jun */
'use client';
import Carousel from '@/src/components/image carousel/about_carousel';
import Image from 'next/image';
import styles from '@/src/styles/pages/about.module.css'
import TypingAni from '@/src/components/typing animation/typingAni';

export default function About() {
    return (
        <div>
            <p className={styles.main}>
            Discover the Flavors of Singapore!
            </p>
            <div className={styles.Image}>
            <Image 
            id={styles.mainimage}
            src="/website logo.png"
            width={250}
            height={250}
            alt="website logo"/>
            </div>
            <div className={styles.typing}>
            <TypingAni></TypingAni>
            </div>
            <div className={styles.text}>
            <p>
            Welcome to Plateful, a food blog dedicated to celebrating the joy of cooking, eating, and exploring diverse cuisines. 
            Whether you're a seasoned chef or a kitchen newbie, you'll find inspiration in our collection of flavorful recipes, cooking tips, and food stories from around the world. 
            Join us as we share the art of creating delicious dishes and the memories they inspire. 
            Let’s make every meal an adventure!
            </p>
            </div>
          
            <h2 className={styles.main}>Meet the team!</h2>
            <div className={styles.Carousel}>
            <Carousel></Carousel>
            </div>

        </div>
    );
}