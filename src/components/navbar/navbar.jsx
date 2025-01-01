"use client"; // treat this file as a client side code

import Link from "next/link";
import styles from "@/src/styles/Navbar.module.css";
import Image from "next/image";

/* Importing icons from react-icons */
import { IconContext } from "react-icons"; /* for styling icons */
import { FaHome, FaHistory, FaInfoCircle} from 'react-icons/fa';
import { GiKnifeFork } from "react-icons/gi";
import { PiChefHatBold } from "react-icons/pi";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Website Icon */}
      <div className={styles.navlogo}>
        <Link href="/">
          <Image src="/website logo.jpg" alt="logo" width={50} height={50} />
        </Link>
        <h1>Plateful</h1>
      </div>

      <div className={styles.navlinks}>
        <Link className={styles.navitem} href="/">
          <FaHome style= {{fontSize: '20px'}}/> Home
        </Link>
        
        <Link className={styles.navitem} href="/recipes">
          <GiKnifeFork style= {{fontSize: '20px'}}/> Recipes
        </Link>

        <Link className={styles.navitem} href="/history">
          <FaHistory style= {{fontSize: '20px'}}/> History
        </Link>

        <Link className={styles.navitem} href="/favourites">
          <PiChefHatBold style= {{fontSize: '20px'}}/> Our Top Choices
        </Link>

        <Link className={styles.navitem} href="/about">
          <FaInfoCircle style= {{fontSize: '20px'}}/> About
        </Link>
      </div>
    </nav>
  );
}