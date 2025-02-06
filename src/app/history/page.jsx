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
                        Tools for hunting and food preparation emerged, such as <span className={styles.tooltip} data-tooltip="A tool used in ancient times which looked sort of like small, rectangular saws.They were mostly used for cutting, but serrated knives may have been used like saws for cutting wood specifically.">flint knives </span> 
                          and <span className={styles.tooltip} data-tooltip="A tool used in ancient times to grind food.">grinding stones</span>
                        .
                        
                    </li>
                    <li className={styles.listItem}>
                        Evidence of early cooking (e.g., roasting meat over fire) dates back approximately 1.5 million years.
                    </li>
                    <img src="/history/transition.png" alt="Ancient Civilization Food" className={styles.image2} />
                    <li className={styles.listItem}>
                        The transition from <span className={styles.tooltip} data-tooltip="A nomad is someone who lives by traveling from place to place. Nomadic thus means anything that involves moving around a lot. Nomadic hunter-gatherer tribes follow the animals they hunt, carrying tents with them.">nomadic</span> to settled life marked the domestication of animals and plants.
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
                        Humans of ancient civilizations developed food further, with bread and beer made using <span className={styles.tooltip} data-tooltip="This mainly occurred in the Mesopotamia and Fertile Crescent where irrigation systems allowed large-scale agriculture.">wheat and barley</span> becoming common.
                    </li>
                    <li className={styles.listItem}>
                        The development of rice in Asia, along with soy products, tea, and fermented sauces, became an integral part of food culture.
                    </li>
                    <li className={styles.listItem}>
                        The ancient Egyptians used <span className={styles.tooltip} data-tooltip="A type of oven used in ancient times.">clay ovens</span> to bake Bread, beer, fish, vegetables, and figs.
                    </li>
                    <li className={styles.listItem}> In Greece, they commonly used olive oil, wine, and bread. While Roman cuisine featured a variety of meats, seafood, and exotic spices imported through vast trade networks.
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
                    <li className={styles.listItem}>
                        The spread of Islam introduced <span className={styles.tooltip} data-tooltip="Introduction of new crops (e.g., citrus, sugarcane) via trade routes.">new ingredients</span> and <span className={styles.tooltip} data-tooltip="In Islam, the development of culinary techniques such as distillation and syrups.
">cooking techniques</span>.
                    </li>
                    <li className={styles.listItem}> In Singapore, the arrival of Indian, and Arab traders brought new spices and cooking methods. The island became a melting pot of cultures, leading to the development of unique dishes.
                    </li>
                    <li className={styles.listItem}> Asian countries like China and Japan experience a refinement of noodles, dumplings, and tea culture.
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
                        Known as the <span className={styles.tooltip} data-tooltip="The Age of Discovery (c. 1418 – c. 1620),[1] also known as the Age of Exploration, was part of the early modern period and largely overlapped with the Age of Sail. It was a period from approximately the late 15th century to the 17th century, during which seafarers from a number of European countries explored, colonized, and conquered regions across the globe. ">Age of Exploration</span>, global spice trades formed around the world.
                    </li>
                    <li className={styles.listItem}>
                        Large transfers of food occurred between the <span className={styles.tooltip} data-tooltip="The terms Old World and New World are used in reference to the Age of Exploration. Old World refers to Europe, Africa, and Asia, while New World refers to North America, South America, and the Caribbean.">Old and New Worlds</span>.
                    </li>
                    <li className={styles.listItem}>
                        New cooking methods, such as baking and roasting, were developed.
                    </li>
                    <li className={styles.listItem}> At this time, Singapore was a part of the Malay Archipelago. Local food was heavily influenced by the Malays and indigenous <span className={styles.tooltip} data-tooltip="The Malay term orang laut literally means 'sea peoples'. The Orang Laut are several seafaring ethnic groups and tribes living around Singapore, Peninsular Malaysia and the Indonesian Riau Islands. ">Orang Laut</span> people, focusing on seafood and tropical produce.
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
                        The Industrial Revolution brought advances in agriculture, such as <span className={styles.tooltip} data-tooltip="Mechanized plows are plows that use power to cut through soil, and are often attached to tractors. ">mechanized plows</span> and fertilizers, boosting food production.
                    </li>
                    <li className={styles.listItem}>
                        Canned foods and <span className={styles.tooltip} data-tooltip="Pasteurization is the process of heating, and then rapidly cooling, liquids or food in order to kill microbes that may expedite their spoilage or cause disease.  ">pasteurization</span> improved food storage.
                    </li>
                    <li className={styles.listItem}>
                        Coffee, tea, and sugar became everyday staples worldwide.
                    </li>
                    <li className={styles.listItem}> The British, led by Sir Stamford Raffles, established Singapore as a trading port. This marked the beginning of multicultural migration, leading to a rich tapestry of culinary traditions.
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
                        The World Wars accelerated the development of canned food and <span classname={styles.tooltip} data-tooltip="MRE stands for meal ready-to-eat. MREs are pre-cooked meals that are packaged in a lightweight container for later consumption.">MREs</span>.
                    </li>
                    <li className={styles.listItem}>
                        The Green Revolution introduced high-yield crops and modern farming techniques.
                    </li>
                    <li className={styles.listItem}> In Singapore, Migrants started street-side food stalls to cater to workers, creating what is now known as Singapore’s hawker culture. Dishes were cheap, portable, and flavorful.
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
                        Focus on food sustainability, such as <span classname={styles.tooltip} data-tooltip="Organic farming is a method of agriculture that uses natural processes to grow healthy food and protect the environment. ">organic farming</span> and reduction of food waste.
                    </li>
                    <li className={styles.listItem}>
                        Development of global fusion cuisine as technology and transport blend traditional and modern cultures.
                    </li>
                    <li className={styles.listItem}>
                        Integration of technology into food, including food delivery, AI-driven nutrition plans, and vertical farming.
                    </li>
                    <li className={styles.listItem}> Singapore's iconic hawker culture was inscribed on <span classname={styles.tooltip} data-tooltip="UNESCO: United Nations Educational, Scientific and Cultural Organization">UNESCO's</span> Representative List of the Intangible Cultural Heritage of Humanity in 2020.
                    </li>
                    <li className={styles.listItem}> Singapore became a <span classname={styles.tooltip} data-tooltip="MICHELIN Stars are awarded when the personality and talent of the chef are evident in their expertly crafted dishes; their food is refined and inspired.">Michelin-starred</span> city in 2016, with both hawker stalls and fine-dining establishments earning accolades.
                    </li>
                </ul>
                </div>
            </section>
        </div>
        
    </div>
</div>
        
    );
}
