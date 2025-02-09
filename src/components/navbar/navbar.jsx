/* Responsive navigation bar (Navbar) component done by: Tan Jun Wei */

"use client"; // treat this file as a client side code

import Link from "next/link";
import styles from "@/src/styles/Navbar.module.css";
import Image from "next/image";
import { useState } from "react";
import classNames from "classnames";

/* Importing icons from react-icons */
import { FaHome, FaHistory, FaInfoCircle } from "react-icons/fa";
import { GiKnifeFork } from "react-icons/gi";
import { PiChefHatBold } from "react-icons/pi";
import { RxHamburgerMenu } from "react-icons/rx"; /* Hamburger menu icon */
import { AiOutlineClose } from "react-icons/ai"; /* Close (X) icon */

export default function Navbar({ setLoading }) {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  // Function to handle link clicks and trigger loading
  const handleLinkClick = () => {
    setLoading(true);  // Show loading spinner when navigation starts
  };

  return (
    <nav className={classNames(styles.navbar, "fixed-navbar")}>
      {/* Website Icon */}
      <div className={styles.navlogo}>
        <Link href="/" className={styles.navlogolink} onClick={handleLinkClick}>
          <Image src="/nav-website logo.png" alt="logo" width={50} height={50} />
          <h1>Plateful</h1>
        </Link>
      </div>

      <div className={`${styles.navlinks}  ${hamburgerOpen ? styles.show : ""}`}>
        <Link
          className={styles.navitem}
          href="/"
          onClick={handleLinkClick} // Trigger loading when clicking
        >
          <FaHome /> Home
        </Link>

        <Link
          className={styles.navitem}
          href="/recipes"
          onClick={handleLinkClick}
        >
          <GiKnifeFork /> Recipes
        </Link>

        <Link
          className={styles.navitem}
          href="/history"
          onClick={handleLinkClick}
        >
          <FaHistory /> History
        </Link>

        <Link
          className={styles.navitem}
          href="/discover"
          onClick={handleLinkClick}
        >
          <PiChefHatBold /> Discover
        </Link>

        <Link
          className={styles.navitem}
          href="/about"
          onClick={handleLinkClick}
        >
          <FaInfoCircle /> About
        </Link>
      </div>

      <div className={styles.hamburger} onClick={toggleHamburger}>
        {hamburgerOpen ? (
          <AiOutlineClose style={{ fontSize: "30px" }} />
        ) : (
          <RxHamburgerMenu style={{ fontSize: "30px" }} />
        )}
      </div>
    </nav>
  );
}
