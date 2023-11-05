import styles from './works.module.scss'
import {Canvas} from '@react-three/fiber'
import Flag from "@/components/Works/Flag";
import {Suspense} from "react";
import {motion} from "framer-motion";

function Works({props}) {

    const data = props

    return (
        <section className={styles.works}>

            <div className={styles.maskTitle}>
                <motion.a target="_blank"
                          initial={{y: "100%"}}
                          whileInView={{y: "0%"}}
                          viewport={{once: true}}
                          transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}>
                    <h2>{data.name}<span>{data.ext}</span></h2>
                </motion.a>
            </div>


            {data.status && (
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
            )}

            <Canvas className={styles.canvas}>
                <Suspense fallback={null}>
                    <ambientLight intensity={2}/>
                    <Flag img={data.image}/>
                </Suspense>
            </Canvas>

            <div className={styles.maskNumber}>
                <motion.h3
                    initial={{y: "100%"}}
                    whileInView={{y: "0%"}}
                    viewport={{once: true}}
                    transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
                    className={styles.number}>
                    N°{data.id}
                </motion.h3>
            </div>

            <div className={styles.blockText}>
                <p className={styles.role}>
                    <motion.span
                        initial={{y: "100%"}}
                        whileInView={{y: "0%"}}
                        viewport={{once: true}}
                        transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}>
                        Role : {data.role} <br/>
                        Stack : {data.stack}
                    </motion.span>
                </p>
                <h3 className={styles.with}>
                    <motion.div
                        initial={{y: "100%"}}
                        whileInView={{y: "0%"}}
                        viewport={{once: true}}
                        transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}>
                        <span>w/</span>{data.with}
                    </motion.div>
                </h3>
            </div>

        </section>
    );
}

export default Works;