"use client"

import styles from './page.module.scss'
import {ReactLenis} from '@studio-freight/react-lenis'
import Scene from "@/components/Scene/Scene";
import Home from "@/components/Home/Home";
import About from "@/components/About/About";
import Works from "@/components/Works/Works";
import {useEffect, useState} from "react";
import Preloader from "@/components/Preloader/Preloader";

export default function Root() {


    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 9000)
    }, []);

    return (
        <>
            <ReactLenis options={{orientation: 'horizontal'}} root>
                {loading && <Preloader/>}

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