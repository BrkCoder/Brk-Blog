import React from 'react'
import styles from './menu.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Links = [
    {
        id: 1,
        name: 'Home',
        href: '/',
    },
    {
        id: 2,
        name: 'Blog',
        href: '/blog',
    },
    {
        id: 3,
        name: 'Categories',
        href: '/categories',
    },
    {
        id: 4,
        name: 'Social',
        href: '/social',
    },
    {
        id: 5,
        name: 'About',
        href: '/about',
    },
]
const Menu = () => {
    const router = useRouter()
    return (
        <ul className={styles.menu}>
            {Links.map((link) => {
                return (
                    <li key={link.id}>
                        <Link href={link.href}>
                            <a
                                className={
                                    router.pathname === link.href
                                        ? styles.active
                                        : styles.link
                                }
                            >
                                {link.name}
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Menu
