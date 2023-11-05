'use client'

import styles from './home.module.scss'
import {useInView, motion} from 'framer-motion'
import {useRef, useEffect} from "react";

function Home() {


    const wordHead = "FRONT-END"
    const wordEnd = "DEVELOPER"

    const animate = {
        initial: {y: "100%"},
        open: {y: "0%", transition: {duration: 1, ease: [0.33, 1, 0.68, 1]}}
    }
    // variants={animate} initial="initial" animate={isInView ? "open" : ""}

    const body = useRef(null)
    const isInView = useInView(body, {margin: "-10%"})

    return (
        <section ref={body} className={styles.home}>

            <div className={styles.lineMaskHead}>
                <motion.h1
                    initial={{y: "100%"}}
                    animate={{y: "0%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: 7.3}}
                >
                    {wordHead.split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </motion.h1>
            </div>

            <div className={styles.arrow}>
                <motion.div
                    initial={{y: "100%"}}
                    animate={{y: "0%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], duration: 1, delay: 7.2}}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="8"
                        fill="none"
                        viewBox="0 0 22 8"
                    >
                        <path
                            stroke="#CEC0AD"
                            strokeWidth="0.2"
                            d="M17.757 1L21 4m0 0l-3.243 3M21 4H0"
                        ></path>
                    </svg>

                    <span>scroll</span>
                </motion.div>
            </div>

            <p className={styles.mobileTxt}>Desktop for better experience</p>


            <div className={styles.lineMaskFoot}>
                <motion.h2
                    initial={{y: "100%"}}
                    animate={{y: "0%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: 7.2}}
                >
                    {wordEnd.split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </motion.h2>
            </div>
        </section>
    );
}

export default Home;