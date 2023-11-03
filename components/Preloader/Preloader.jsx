'use client'

import styles from './preloader.module.scss'
import {useEffect, useState} from "react";
import {motion} from "framer-motion";

function Preloader() {

    const [counter, setCounter] = useState(1997)
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const startCountDown = () => {
            setIsActive(true)
        }
        const delay = setTimeout(startCountDown, 2000);

        return () => {
            clearTimeout(delay)
        }
    }, []);

    useEffect(() => {
        if (isActive) {
            const interval = setInterval(() => {
                if (counter < 2023) {
                    setCounter((counter) => counter + 1)
                } else {
                    clearInterval(interval)
                }
            }, 150)

            return () => {
                clearInterval(interval)
            }
        }
    }, [counter, isActive]);


    return (
        <motion.section className={styles.preloader}
                        initial={{clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"}}
                        animate={{clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"}}
                        transition={{ease: [0.22, 1, 0.36, 1], duration: 1.5, delay: 6.5}}
        >
            <h2>
                <motion.span
                    initial={{y: "100%"}}
                    animate={{y: "0%"}}
                    transition={{ease: [0.22, 1, 0.36, 1], duration: 0.9, delay: 0.8}}
                >
                    {counter}
                </motion.span>
            </h2>

            <div className={styles.maskText}>
                <p className={styles.text}>Hello
                </p>
            </div>

        </motion.section>
    );
}

export default Preloader;