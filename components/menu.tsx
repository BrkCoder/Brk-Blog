import styles from './menu.module.scss'

const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <a className={styles.item} href="#">
                    Home
                </a>
            </li>
            <li>
                <a className={styles.item} href="#">
                    Blog
                </a>
            </li>
            <li>
                <a className={styles.item} href="#">
                    Categories
                </a>
            </li>
            <li>
                <a className={styles.item} href="#">
                    Social
                </a>
            </li>
            <li>
                <a className={styles.item} href="#">
                    About
                </a>
            </li>
        </ul>
    )
}

export default Menu
