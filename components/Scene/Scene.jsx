"use client"

import styles from './scene.module.scss'
import {Canvas} from "@react-three/fiber";
import Model from "@/components/Scene/Model";
import {Environment, orthographicCamera} from "@react-three/drei";
import {useEffect} from "react";
import {useMotionValue, useSpring} from "framer-motion";

function Scene() {

    //mieux qu'un state pour les perfs, seulement l'objet est rerendu au lieu de tout le component
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }


    //Me permet de gérer le lerp sur le move du mesh
    const smoothMouse = {
        x: useSpring(mouse.x, {stiffness: 800, damping: 100, mass: 1}),
        y: useSpring(mouse.y, {stiffness: 800, damping: 100, mass: 1}),
    }

    const manageMouseMove = (e) => {
        const {clientX, clientY} = e;
        const {innerWidth, innerHeight} = window;
        const x = clientX / innerWidth;
        const y = clientY / innerHeight;
        mouse.x.set(x)
        mouse.y.set(y)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, []);

    return (
        <Canvas className={styles.canvas} camera={{position: [0, 0, 1], zoom: 1.5}}>
            <Model mouse={smoothMouse}/>
            <Environment preset="forest"/>
        </Canvas>
    );
}

export default Scene;