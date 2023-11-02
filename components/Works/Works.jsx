import styles from './works.module.scss'
import {Canvas} from '@react-three/fiber'
import Flag from "@/components/Works/Flag";
import {Suspense} from "react";

function Works() {


    return (
        <section className={styles.works}>
            <a target="_blank" href="https://www.wrksagency.com/"><h2>wrksagency<span>.com</span></h2></a>

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

            <h3 className={styles.number}>
                N°1
            </h3>

            <div className={styles.blockText}>
                <p className={styles.role}>
                    Role : Developer <br/>
                    Stack : PHP / GSAP / Wordpress
                </p>
                <h3 className={styles.with}>
                    <span>w/</span> mashvp
                </h3>
            </div>

        </section>
    );
}

export default Works;