import Link from "next/link";
import styles from "@/src/styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navitem} href="/">Home</Link>
      <Link className={styles.navitem} href="/history">History</Link>
      <Link className={styles.navitem} href="/about">About</Link>
      <Link className={styles.navitem} href="/contact">Contact</Link>
    </nav>
  );
}