import styles from '@/src/styles/pages/about.module.css'
import Image from 'next/image';
import { StaticCopyUsage } from 'three';

export default function About() {
    return (
        <div>
            <h1 className={styles.header}>About</h1>
            <p className={styles.main}>
                Hi! We're a bunch if foodie who really love food and the wonderful world of the internet.
            </p>
            <Image 
            id={styles.mainimage}
            src="/about/Placeholder.png"
            width={200}
            height={150}
            alt="PLACEHOLDER"/>
            <p className={styles.p}>
                We created this website because of our love for singapore food and history behind it.
                Therefore, we created this website to share our love of food.
            </p>
        </div>
    );
}