"use client"

import styles from './page.module.scss'
import {ReactLenis} from '@studio-freight/react-lenis'
import Scene from "@/components/Scene/Scene";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import {useState} from "react";

export default function Root() {


    const [loading, setLoading] = useState(true)
    console.log(loading)

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