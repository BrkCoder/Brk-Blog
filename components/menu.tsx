import styles from './menu.module.scss'
import Link from 'next/link'
const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <Link href="/">
                    <a className={styles.link}>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/Blog">
                    <a className={styles.link}>Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/Categories">
                    <a className={styles.link}>Categories</a>
                </Link>
            </li>
            <li>
                <Link href="/Social">
                    <a className={styles.link}>Social</a>
                </Link>
            </li>
            <li>
                <Link href="/About">
                    <a className={styles.link}>About</a>
                </Link>
            </li>
        </ul>
    )
}

export default Menu
