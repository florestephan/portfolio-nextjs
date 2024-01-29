import styles from './about.module.scss'
import {motion} from "framer-motion";

function About() {

    const wordHead = "About";

    return (
        <section className={styles.about}>
            <div className={styles.maskH2}>
                <motion.h2
                    initial={{y: "100%"}}
                    whileInView={{y: "0%"}}
                    viewport={{once: true}}
                    transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
                >
                    {wordHead.split("").map((letter, index) => (
                        <span key={index}>{letter}</span>
                    ))}
                </motion.h2>
            </div>

            <div className={styles.maskText}>
                <motion.p
                    initial={{y: "100%"}}
                    whileInView={{y: "0%"}}
                    viewport={{once: true}}
                    transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
                    className={styles.blockText}>
                    I&apos;m Stéphan,
                    a twenty-five years old
                    front-end developer. Currently
                    based in France.
                </motion.p>
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

                <span>works</span>
            </div>

            <div className={styles.maskFoot}>
                <motion.div
                    initial={{y: "100%"}}
                    whileInView={{y: "0%"}}
                    viewport={{once: true}}
                    transition={{threshold: 0.5, delay: 0.7, duration: 1, ease: [0.22, 1, 0.36, 1]}}
                    className={styles.footer}>
                    <a href="https://twitter.com/StephanFlores" target="_blank">Twitter</a>
                    <a href="https://www.linkedin.com/in/st%C3%A9phan-flores-05572315a/" target="_blank">Linkedin</a>
                    <a href="https://github.com/florestephan" target="_blank">Github</a>
                </motion.div>
            </div>

            <div className={styles.maskText2}>
                <motion.p
                    initial={{y: "100%"}}
                    whileInView={{y: "0%"}}
                    viewport={{once: true}}
                    transition={{threshold: 0.5, delay: 0.7, duration: 1.5, ease: [0.22, 1, 0.36, 1]}}
                    className={styles.blockText2}>
                    Shopify, Wordpress, React.<br/>
                    Want to discuss ? <a href="mailto:hello@stephanflores.com">hello@stephanflores.com</a>
                </motion.p>
            </div>
        </section>
    );
}

export default About;