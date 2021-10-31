import Image from 'next/image'
import logo from '../public/images/logo.png'
import styles from './logo.module.scss'
const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src={logo} layout="responsive" placeholder="blur" />
        </div>
    )
}

export default Logo
