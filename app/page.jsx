"use client"

import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import {useEffect} from "react";
import Scene from "@/components/Scene/Scene";

export default function Home() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, []);

    return (
        <main className={styles.main}>
            <Scene/>
        </main>
    )
}