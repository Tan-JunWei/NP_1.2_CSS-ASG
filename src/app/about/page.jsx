// About page, made by Ryan Tan :D

import ControlledCarousel from '@/src/components/image carousel/about_carousel';
import styles from '@/src/styles/pages/about.module.css'
import Image from 'next/image';
import { StaticCopyUsage } from 'three';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            Welcome to Savor & Spice, a food blog dedicated to celebrating the joy of cooking, eating, and exploring diverse cuisines. 
            Whether you're a seasoned chef or a kitchen newbie, you'll find inspiration in our collection of flavorful recipes, cooking tips, and food stories from around the world. 
            Join us as we share the art of creating delicious dishes and the memories they inspire. 
            Let’s make every meal an adventure!
            </p>

            <h2 className={styles.main}>Meet the team!</h2>
            <ControlledCarousel></ControlledCarousel>
        </div>
    );
}