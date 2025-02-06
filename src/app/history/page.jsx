/* History page done by: Jo Hanson Mok */

import styles from "@/src/styles/pages/history.module.css"

export default function History() {
    return (
        
<div className={styles.container}>
    <h1 className={styles.header}>The History of Food</h1>

    <div className={styles.pageWrapper}>
        <div className={styles.verticalBar}></div>
        <div className={styles.contentWrapper}>
            <section className={styles.section}>
                
                <img src="/history/before.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>Before 10,000 BCE</h2>
                    <li className={styles.listItem}>
                        Early humans relied on hunting, fishing, and gathering wild plants. Diets were regional, based on local flora and fauna.
                    </li>
                    <li className={styles.listItem}>
                        Tools for hunting and food preparation emerged, such as <span className={styles.tooltip} data-tooltip="A tool used in ancient times which looked sort of like small, rectangular saws.They were mostly used for cutting, but serrated knives may have been used like saws for cutting wood specifically.">flint knives</span>
                         and <span className={styles.tooltip} data-tooltip="A tool used in ancient times to grind food.">grinding stones</span>
                        .
                        
                    </li>
                    <li className={styles.listItem}>
                        Evidence of early cooking (e.g., roasting meat over fire) dates back approximately 1.5 million years.
                    </li>
                    <img src="/history/transition.png" alt="Ancient Civilization Food" className={styles.image2} />
                    <li className={styles.listItem}>
                        The transition from nomadic to settled life marked the domestication of animals and plants.
                    </li>
                </ul>
                </div>
            </section>

            <section className={styles.section}>
                
                <img src="/history/3000bce.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>~3000 BCE–500 CE</h2>
                    <li className={styles.listItem}>
                        Humans of ancient civilizations developed food further, with bread and beer made using wheat and barley becoming common.
                    </li>
                    <li className={styles.listItem}>
                        The development of rice in Asia, along with spices and sauces, became an integral part of food culture.
                    </li>
                </ul>
                </div>
            </section>

            <section className={styles.section}>
                
                <img src="/history/medieval.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>~500–1500 CE</h2>
                    <li className={styles.listItem}>
                        During the Medieval period, many countries developed unique food traditions.
                    </li>
                    <li className={styles.listItem}>
                        Trade routes led to the discovery of new types of food.
                    </li>
                </ul>
                </div>
            </section>

            <section className={styles.section}>
                
                <img src="/history/exploration.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>~1500–1800 CE</h2>
                    <li className={styles.listItem}>
                        Known as the Age of Exploration, global spice trades formed around the world.
                    </li>
                    <li className={styles.listItem}>
                        Large transfers of food occurred between the Old and New Worlds.
                    </li>
                    <li className={styles.listItem}>
                        New cooking methods, such as baking and roasting, were developed.
                    </li>
                </ul>
                </div>
            </section>

            <section className={styles.section}>
                
                <img src="/history/industrial.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>19th Century</h2>
                    <li className={styles.listItem}>
                        The Industrial Revolution brought advances in agriculture, such as mechanized plows and fertilizers, boosting food production.
                    </li>
                    <li className={styles.listItem}>
                        Canned foods and pasteurization improved food storage.
                    </li>
                    <li className={styles.listItem}>
                        Coffee, tea, and sugar became everyday staples worldwide.
                    </li>
                </ul>
                </div>
            </section>

            <section className={styles.section}>
                
                <img src="/history/20th.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>20th Century</h2>
                    <li className={styles.listItem}>
                        This period saw globalization and innovation in food, with the development of processed foods like frozen, pre-packaged, and convenience foods.
                    </li>
                    <li className={styles.listItem}>
                        The World Wars accelerated the development of canned food and MREs.
                    </li>
                    <li className={styles.listItem}>
                        The Green Revolution introduced high-yield crops and modern farming techniques.
                    </li>
                </ul>
                </div>
            </section>

            <section className={styles.section}>
                
                <img src="/history/21st.png" alt="Ancient Civilization Food" className={styles.image} />
                <div className={styles.textContent}>
                <ul className={styles.list}>
                <h2 className={styles.subheader}>21st Century</h2>
                    <li className={styles.listItem}>
                        Focus on food sustainability, such as organic farming and reduction of food waste.
                    </li>
                    <li className={styles.listItem}>
                        Development of global fusion cuisine as technology and transport blend traditional and modern cultures.
                    </li>
                    <li className={styles.listItem}>
                        Integration of technology into food, including food delivery, AI-driven nutrition plans, and vertical farming.
                    </li>
                </ul>
                </div>
            </section>
        </div>
        
    </div>
</div>
        
    );
}
