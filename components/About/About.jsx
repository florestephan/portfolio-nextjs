import styles from './about.module.scss'
import {useMotionValue} from "framer-motion";

function About() {

    const wordHead = "About";

    function useTrackerMotionValue(tracker, pro = 'progress') {
        const progress = useMotionValue();
        const {onscroll} = useScrollBar();

    }

    return (
        <section className={styles.about}>
            <h2>
                {wordHead.split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </h2>

            <p className={styles.blockText}>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant
                impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un
                imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de
                texte.
            </p>


        </section>
    );
}

export default About;