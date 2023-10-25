"use client"

import styles from './scene.module.scss'
import {Canvas} from "@react-three/fiber";
import Model from "@/components/Scene/Model";
import {Environment} from "@react-three/drei";
import {useEffect} from "react";

function Scene() {

    // const manageMouseMove = () => {
    //
    // }
    //
    // useEffect(() => {
    //     window.addEventListener("mousemove", manageMouseMove)
    //     return () => {
    //         window.removeEventListener("mousemove", manageMouseMove)
    //     }
    // }, []);

    return (
        <Canvas camera={{position: [0, 0, 5], zoom: 10}}>
            <Model/>
            <Environment preset="forest"/>
        </Canvas>
    );
}

export default Scene;