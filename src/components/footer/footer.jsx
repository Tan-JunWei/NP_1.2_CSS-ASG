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
						<h4>For Business</h4>

						<a href="#">
							<p>Employer</p>
						</a>

						<a href="#">
							<p>Health Plan</p>
						</a>

						<a href="#">
							<p>Individual</p>
						</a>
					</div>

					<div className={styles.footerLinksSection}>
						<h4>Resources</h4>

						<a href="#">
							<p>Resource Center</p>
						</a>

						<a href="#">
							<p>Testimonials</p>
						</a>

						<a href="#">
							<p>STV</p>
						</a>
					</div>

					<div className={styles.footerLinksSection}>
						<h4>Company</h4>
						<a href="#">
							<p>About Us</p>
						</a>

						<a href="#">
							<p>Press</p>
						</a>

						<a href="#">
							<p>Careers</p>
						</a>

						<a href="#">
							<p>Contact</p>
						</a>
					</div>

					<div className={styles.footerLinksSection}>
						<h4>Follow Us</h4>
						<div className={styles.socialMedia}>
							<a href="#">
								<FaFacebook />
							</a>

							<a href="#">
								<BsGithub />
							</a>

							<a href="#">
								<FaSquareXTwitter />
							</a>

							<a href="#">
								<FaLinkedin />
							</a>
						</div>
					</div>

				</div>

				<hr />

				<div className={styles.footerCopyright}>
					<p>
						&copy; {new Date().getFullYear()} Plateful. All rights reserved.
					</p>
				</div>

			</div>
		</div>
	);
}
