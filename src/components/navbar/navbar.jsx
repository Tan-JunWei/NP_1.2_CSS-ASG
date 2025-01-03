"use client"; // treat this file as a client side code

import Link from "next/link";
import styles from "@/src/styles/Navbar.module.css";
import Image from "next/image";
import { useState } from "react";

/* Importing icons from react-icons */
import { FaHome, FaHistory, FaInfoCircle} from 'react-icons/fa';
import { GiKnifeFork } from "react-icons/gi";
import { PiChefHatBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx"; /* Hambuger menu icon */
import { AiOutlineClose } from "react-icons/ai"; /* Close (X) icon */

export default function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  }

  return (
    <nav className={styles.navbar}>
      {/* Website Icon */}
      <div className={styles.navlogo}>
        <Link href="/">
          <Image src="/website logo.jpg" alt="logo" width={50} height={50} />
        </Link>
        <h1>Plateful</h1>
      </div>

      <div className={`${styles.navlinks}  ${hamburgerOpen ? styles.show : ""}`}>
        <Link className={styles.navitem} href="/">
          <FaHome /> Home
        </Link>
        
        <Link className={styles.navitem} href="/recipes">
          <GiKnifeFork /> Recipes
        </Link>

        <Link className={styles.navitem} href="/history">
          <FaHistory /> History
        </Link>

        <Link className={styles.navitem} href="/favourites">
          <PiChefHatBold /> Our Favourites
        </Link>

        <Link className={styles.navitem} href="/about">
          <FaInfoCircle /> About
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleHamburger}>
        {hamburgerOpen ? (
          <AiOutlineClose style={{ fontSize: '30px' }} />
        ) : (
          <RxHamburgerMenu style={{ fontSize: '30px' }} />
        )}
      </div>
    </nav>
  );
}