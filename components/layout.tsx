import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'
const name = 'Your Name'
export const siteTitle = `Title`

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" href="./favicon.png" />
                <meta name="description" content="Title" />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <div className={styles.header}>
            </div>
            <main className={styles.content}>{children}</main>
        </>
    )
}