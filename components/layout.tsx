import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'
import { identity } from './identity'
const name = identity?.name;
export const siteTitle = `${name}`

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" type="image/png" href="/images/favicon.png" />
                <meta name="description" content={name} />
                <meta name="og:title" content={siteTitle} />
            </Head>
            <main className={styles.content}>{children}</main>
        </>
    )
}