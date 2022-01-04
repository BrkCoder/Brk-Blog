import React from 'react'
import styles from './intro.module.scss'

const Intro = () => {
    return (
        <section className={styles.intro}>
            <p className={styles.name}>Hi, my name is <span>Barak Inbal.</span></p>
            <h2>I develop the front end of websites.</h2>
            <p>
                I'm a developer specializing in HTML, CSS, Typescript, and Angular.
            </p>
            <p>
                <span>Currently, I'm working at</span>
                <a
                    href='https://www.varonis.com/'
                    target='_blank'
                >Varonis</a
                >.
            </p>
        </section>
    )
}

export default Intro