import styles from "@/src/styles/pages/history.module.css"

export default function History() {
    return (
        <div>
            <h1 className={styles.header}>History</h1>
            <h2 className={styles.subheader}>Before 10,000 BCE</h2>
            <ul>
                <li>Early humans relied on hunting, fishing, and gathering wild plants. Diets were regional, based on local flora and fauna.</li>
                <li>Tools for hunting and food preparation emerged, such as flint knives and grinding stones.</li>
                <li>Evidence of early cooking (e.g., roasting meat over fire) dates back approximately 1.5 million years.</li>
                <li>The transition from nomadic to settled life marked the domestication of animals and plants.</li>
            </ul>
            <h2>~3000 BCE–500 CE</h2>
            <ul>
                <li>Humans of ancient civilizations developed food further, with bread and beer made using wheat and barley becoming common.</li>
                <li>The development of rice in Asia, along with spices and sauces, became an integral part of food culture.</li>
            </ul>
            <h2>~500–1500 CE</h2>
            <ul>
                <li>During the Medieval period, many countries developed unique food traditions.</li>
                <li>Trade routes led to the discovery of new types of food.</li>
            </ul>
            <h2>~1500–1800 CE</h2>
            <ul>
                <li>Known as the Age of Exploration, global spice trades formed around the world.</li>
                <li>Large transfers of food occurred between the Old and New Worlds.</li>
                <li>New cooking methods, such as baking and roasting, were developed.</li>
            </ul>
            <h2>19th Century</h2>
            <ul>
                <li>The Industrial Revolution brought advances in agriculture, such as mechanized plows and fertilizers, boosting food production.</li>
                <li>Canned foods and pasteurization improved food storage.</li>
                <li>Coffee, tea, and sugar became everyday staples worldwide.</li>
            </ul>
            <h2>20th Century</h2>
            <ul>
                <li>This period saw globalization and innovation in food, with the development of processed foods like frozen, pre-packaged, and convenience foods.</li>
                <li>The World Wars accelerated the development of canned food and MREs.</li>
                <li>The Green Revolution introduced high-yield crops and modern farming techniques.</li>
            </ul>
            <h2>21st Century</h2>
            <ul>
                <li>Focus on food sustainability, such as organic farming and reduction of food waste.</li>
                <li>Development of global fusion cuisine as technology and transport blend traditional and modern cultures.</li>
                <li>Integration of technology into food, including food delivery, AI-driven nutrition plans, and vertical farming.</li>
            </ul>
            
        </div>
        
    );
}