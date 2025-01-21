/* About page done by: Ryan Tan Jia Jun */

import Carousel from '@/src/components/image carousel/about_carousel';
import Image from 'next/image';
// import { StaticCopyUsage } from 'three';
import styles from '@/src/styles/pages/about.module.css'

export default function About() {
    return (
        <div>
            <h1 className={styles.header}>About</h1>
            <p className={styles.main}>
            Discover the Flavors of Singapore!
            </p>
            <Image 
            id={styles.mainimage}
            src="/about/Placeholder.png"
            width={200}
            height={150}
            alt="PLACEHOLDER"/>
            <p className={styles.p}>
            Welcome to Plateful, a food blog dedicated to celebrating the joy of cooking, eating, and exploring diverse cuisines. 
            Whether you're a seasoned chef or a kitchen newbie, you'll find inspiration in our collection of flavorful recipes, cooking tips, and food stories from around the world. 
            Join us as we share the art of creating delicious dishes and the memories they inspire. 
            Let’s make every meal an adventure!
            </p>

            <h2 className={styles.main}>Meet the team!</h2>
            <Carousel></Carousel>
        </div>
    );
}