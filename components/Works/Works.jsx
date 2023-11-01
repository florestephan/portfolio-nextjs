import styles from './works.module.scss'
import * as THREE from 'three'
import {useRef, useState} from 'react'
import {Canvas, useFrame, useLoader} from '@react-three/fiber'
import {MeshDistortMaterial, useCursor} from '@react-three/drei'

function Works() {


    function Flag(img) {
        const ref = useRef()
        const [hovered, hover] = useState(true)
        const texture = useLoader(THREE.TextureLoader, img.img)
        useCursor(hovered)
        useFrame(() => {
            ref.current.distort = THREE.MathUtils.lerp(ref.current.distort, hovered ? 0.4 : 0, hovered ? 0.05 : 0.01)
        })
        return (
            <mesh onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={[2.7, 5, 2]}
                  position={[0, -0.2, 0]}>
                <planeGeometry args={[6, 1.2, 32, 32]}/>
                <MeshDistortMaterial map={texture} ref={ref} speed={2}></MeshDistortMaterial>
            </mesh>
        )
    }

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
                <ambientLight intensity={2}/>
                <Flag img="/wrks-back.png"/>
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