import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkProps, Links } from './links'
import styles from './navigation.module.scss'

const Link = ({ label, url, icons, target, screenReader, ariaHidden, button, headline }: LinkProps) => {
    if (button) {
        return (
            <a href={url} target={target} className={styles.button}> {label}
            </a>
        )
    }
    return (
        <a href={url} target={target}>
            {icons ? <FontAwesomeIcon icon={icons} aria-hidden={ariaHidden} className={headline? styles.headlineIcon: styles.icon}/> : null}
            {screenReader ? <span className='sr-only'>{label}</span> : label}
        </a>
    )
}

const Navigation = () => {
    const links: LinkProps[] = Links
    return (
        <nav className={styles.nav}>
            <ul>
                {
                    links.map((link) => {
                        return (
                            <li>
                                {link?.headline ?
                                    <h1>
                                        <Link {...link} />
                                    </h1> :
                                    <Link {...link} />
                                }
                            </li>
                        )
                    })
                }

            </ul>
        </nav>
    )
}

export default Navigation