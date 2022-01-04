import React from 'react'
import styles from './contact.module.scss'

const Contact = () => {
    return (
        <div id="contact" className={styles.sectionPlum}>
            <section className={styles.contact}>
                <h2>Contact me</h2>
                <p>
                    I'm always interested in hearing about new opportunities,
                    learn new technologies, or build web apps for fun.
                </p>
                <p><a href="mailto:baribarakinbal@gmail.com" className={styles.button}>Email me</a></p>
            </section>
        </div>
    )
}

export default  Contact;