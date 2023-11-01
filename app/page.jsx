"use client"

import styles from './page.module.scss'
import {ReactLenis} from '@studio-freight/react-lenis'
import Scene from "@/components/Scene/Scene";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";

export default function Root() {

    return (
        <>
            <ReactLenis options={{orientation: 'horizontal'}} root>
                <main className={styles.main}>
                    <Home/>
                    <About/>
                    <Works/>
                </main>
                <Scene/>
            </ReactLenis>
        </>

    )
}