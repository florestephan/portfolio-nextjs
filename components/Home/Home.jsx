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

            <p className={styles.indication}>Touch your screen for a surprise</p>
            <div className={styles.headerMask}>
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

                <div className={styles.maskHeadRight}>
                    <motion.div
                        initial={{y: "100%"}}
                        whileInView={{y: "0%"}}
                        viewport={{once: true}}
                        transition={{threshold: 0.5, delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className={styles.footer}>
                        <a href="https://twitter.com/StephanFlores" target="_blank">Twitter</a>
                        <a href="https://www.linkedin.com/in/st%C3%A9phan-flores-05572315a/"
                           target="_blank">Linkedin</a>
                        <a href="https://github.com/florestephan" target="_blank">Github</a>
                    </motion.div>
                </div>

                <div className={styles.maskHeadRightMobile}>
                    <motion.div
                        initial={{y: "100%"}}
                        whileInView={{y: "0%"}}
                        viewport={{once: true}}
                        transition={{threshold: 0.5, delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                        className={styles.footer}>
                        <a href="https://twitter.com/StephanFlores" target="_blank">Twt</a>
                        <a href="https://www.linkedin.com/in/st%C3%A9phan-flores-05572315a/"
                           target="_blank">Lkn</a>
                        <a href="https://github.com/florestephan" target="_blank">Git</a>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className={styles.projects}>
                <div className={styles.project}>
                    <a target="_blank" href="https://stellaetsuzie.com/">Maison Stella & Suzie</a>
                    <p>w/Mashvp</p>
                    <p>r/Developer</p>
                </div>
                <div className={styles.project}>
                    <a target="_blank" href="https://gennaro-associes.com/">Gennaro & Associés - Cabinet Immobilier</a>
                    <p>w/Mashvp</p>
                    <p>r/Developer</p>
                </div>

                <div className={styles.project}>
                    <a target="_blank" href="https://officesgaronne.fr/">Office Garonne - Office Notarial</a>
                    <p>w/Mashvp</p>
                    <p>r/Developer</p>
                </div>

                <div className={styles.project}>
                    <a target="_blank" href="https://zana.fr/">Charles Zana - Interior design studio</a>
                    <p>w/Mashvp</p>
                    <p>r/Developer</p>
                </div>
            </motion.div>


            <div className={styles.lineMaskFoot}>
                <a href="mailto:hello@stephanflores.com" className={styles.date}>hello@stephanflores.com</a>
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