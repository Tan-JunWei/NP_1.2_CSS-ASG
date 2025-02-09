/* Responsive footer component done by: Tan Jun Wei */

import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import styles from "@/src/styles/footer.module.css";

export default function Footer() {
	return (
		<div className={styles.footerContainer}>
			<div className={`${styles.footerContent} ${styles.sectionPadding}`}>
				<div className={styles.footerLinks}>

					<div className={styles.footerLinksSection}>
						<h4>About</h4>

						<a href="/about">
							<p>About Us</p>
						</a>

						<a href="/#faq">
							<p>FAQ</p>
						</a>

						<a href="/about">
							<p>Contact</p>
						</a>
					</div>

					<div className={styles.footerLinksSection}>
						<h4>Food</h4>

						<a href="/recipes">
							<p>All recipes</p>
						</a>

						<a href="/discover">
							<p>Discover</p>
						</a>

					</div>

					<div className={styles.footerLinksSection}>
						<h4>Food History</h4>
						<a href="/history">
							<p>SG Food History</p>
						</a>
					</div>

					<div className={styles.footerLinksSection}>
						<h4>Follow Us</h4>
						<div className={styles.socialMedia}>
							<a href="https://github.com/Tan-JunWei/NP_1.2_CSS-ASG.git">
								<BsGithub />
							</a>

							<a href="https://www.facebook.com/plateful.anz">
								<FaFacebook />
							</a>

							<a href="https://x.com/nashplateful">
								<FaSquareXTwitter />
							</a>

							<a href="https://www.linkedin.com/company/plateful-uk">
								<FaLinkedin />
							</a>
						</div>
					</div>

				</div>

				<div className={styles.footerHR}/>

				<div className={styles.footerCopyright}>
					{/* Ensures that the year is updated to the current one instead of a static value */}
					<p>
						&copy; {new Date().getFullYear()} Plateful. All rights reserved.
					</p>
				</div>

			</div>
		</div>
	);
}
