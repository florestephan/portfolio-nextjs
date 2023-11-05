import {motion, useMotionValue, useSpring} from "framer-motion";
import styles from "@/components/CursorLerp/cursorlerp.module.scss"
import {useEffect} from "react";

function CursorLerp() {


    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothMouseCursor = {
        x: useSpring(mouse.x, {stiffness: 800, damping: 100, mass: 1}),
        y: useSpring(mouse.y, {stiffness: 800, damping: 100, mass: 1}),
    }


    const manageMouseLerp = (e) => {
        const {clientX, clientY} = e;
        mouse.x.set(clientX + 10)
        mouse.y.set(clientY + 10)
    }

    useEffect(() => {
        window.addEventListener("mousemove", manageMouseLerp)
        return () => {
            window.removeEventListener("mousemove", manageMouseLerp)
        }
    }, []);


    return (
        <motion.div style={{left: smoothMouseCursor.x, top: smoothMouseCursor.y}} className={styles.cursor}>
        </motion.div>);
}

export default CursorLerp;