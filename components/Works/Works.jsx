import styles from './works.module.scss'
import {Canvas} from '@react-three/fiber'
import Flag from "@/components/Works/Flag";
import {Suspense} from "react";
import {motion} from "framer-motion";

function Works() {

    return (
        <section className={styles.works}>

            <div className={styles.maskTitle}>
                <motion.a target="_blank" href="https://www.wrksagency.com/"
                          initial={{y: "100%"}}
                          whileInView={{y: "0%"}}
                          viewport={{once: true}}
                          transition={{delay: 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}>
                    <h2>wrksagency<span>.com</span></h2>
                </motion.a>
            </div>


            <div className={styles.arrow}>
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

                <span>next</span>
            </div>

            <Canvas className={styles.canvas}>
                <Suspense fallback={null}>
                    <ambientLight intensity={2}/>
                    <Flag img="/wrks-back.png"/>
                </Suspense>
            </Canvas>

            <div className={styles.maskNumber}>
                <motion.h3
                    initial={{y: "100%"}}
                    whileInView={{y: "0%"}}
                    viewport={{once: true}}
                    transition={{delay: 0.3, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
                    className={styles.number}>
                    N°1
                </motion.h3>
            </div>

            <div className={styles.blockText}>
                <p className={styles.role}>
                    <motion.span
                        initial={{y: "100%"}}
                        whileInView={{y: "0%"}}
                        viewport={{once: true}}
                        transition={{delay: 0.5, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}>
                        Role : Developer <br/>
                        Stack : PHP / GSAP / Wordpress
                    </motion.span>
                </p>
                <h3 className={styles.with}>
                    <motion.div
                        initial={{y: "100%"}}
                        whileInView={{y: "0%"}}
                        viewport={{once: true}}
                        transition={{delay: 0.4, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}>
                        <span>w/</span> mashvp
                    </motion.div>
                </h3>
            </div>

        </section>
    );
}

export default Works;