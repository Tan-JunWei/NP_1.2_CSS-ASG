import styles from "@/src/styles/homebutton.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";


export default function HomeButton() {
    const phrases = ["Learn more about Singapore food", "culture here!"];

    return (
        <div className={styles.container}>
        <div className={styles.description}>
            {phrases.map((phrase, index) => (
                <AnimatedText key={index}>{phrase}</AnimatedText>
            ))}
        </div>
            <AnimatedButton />
        </div>
    );
}



function AnimatedButton() {
    const button = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(button.current, {
            scrollTrigger: {
                trigger: button.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
                markers: true,
            },
            left: "-200px",
            opacity: 0,
        });

    }, []);

    return (
        <button ref={button} className={styles.button} onClick={() => window.location.href = "/history"}>
            Let's go!
        </button>
    );
}


function AnimatedText({ children }) {
    
    const text = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from(text.current, {
            scrollTrigger: {
                trigger: text.current,
                start: "0px bottom",
                end: "bottom+=400px bottom",
                scrub: true,
                markers: true,
            },
            left: "-200px",
            opacity: 0,
        });


    }, []);





    return <p ref={text}>{children}</p>;
}

