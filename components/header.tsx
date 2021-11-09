import React from 'react'
import Menu from './menu'
import Logo from './logo'
import styles from './header.module.scss'
const Header = () => {
    return (
        <div className={styles.container}>
            <Logo />
            <Menu />
        </div>
    )
}

export default Header
