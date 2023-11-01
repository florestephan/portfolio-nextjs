import styles from './about.module.scss'

function About() {

    const wordHead = "About";


    return (
        <section className={styles.about}>
            <h2>
                {wordHead.split("").map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </h2>

            <p className={styles.blockText}>
                I'm Stéphan,
                a twenty-five years old
                front-end developer. Currently
                based in France.
            </p>

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

                <span>works</span>
            </div>

            <div className={styles.footer}>
                <a href="https://twitter.com/StephanFlores" target="_blank">Twitter</a>
                <a href="https://www.linkedin.com/in/st%C3%A9phan-flores-05572315a/" target="_blank">Linkedin</a>
                <a href="https://github.com/florestephan" target="_blank">Github</a>
            </div>

            <p className={styles.blockText2}>
                NextJS, ThreeJS, Scss.<br/>
                Want to discuss ? <a href="mailto:hello@stephanflores.com">hello@stephanflores.com</a>
            </p>
        </section>
    );
}

export default About;