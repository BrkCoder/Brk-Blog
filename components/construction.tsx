import React from 'react'
import Image from 'next/image'
import UnderConstruction from '../public/images/underconstruction.png'
import styles from './construction.module.scss'
const Construction = () => {
    return (
        <div className={styles.image}>
            <Image
                src={UnderConstruction}
                layout="responsive"
                placeholder="blur"
            />
        </div>
    )
}

export default Construction
