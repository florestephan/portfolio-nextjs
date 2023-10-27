"use client"

import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import {useEffect} from "react";
import Scene from "@/components/Scene/Scene";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";

export default function Root() {

    useEffect(() => {
        const lenis = new Lenis({
            orientation: 'horizontal'
        })

        function raf(time) {
            lenis.raf(time)

            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);


    return (
        <>
            <main className={styles.main}>
                <Home/>
                <About/>
                <Works/>
            </main>
            <Scene/>
        </>

    )
}