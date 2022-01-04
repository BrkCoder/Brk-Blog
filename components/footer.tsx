import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2>Barak Inbal &middot; Developer</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/bari-barak-inbal-09205556" target="_blank">
                        <span className="fab fa-linkedin" aria-hidden="true"></span>
                        <FontAwesomeIcon icon={["fab", "linkedin"]} aria-hidden="true"/>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/BrkCoder" target="_blank">
                        <FontAwesomeIcon icon={["fab", "github"]} aria-hidden="true"/>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:baribarakinbal@gmail.com">
                        <FontAwesomeIcon icon={["fas", "envelope"]} aria-hidden="true"/>
                        <span className="sr-only">Email</span>
                    </a>
                </li>
            </ul>
            <p><small>&copy; 2021 Barak Inbal. All rights reserved.</small></p>
        </footer>
    )
}

export default Footer;