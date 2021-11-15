import React from 'react'
import Head from 'next/head'
import Header from './header'
import styles from './layout.module.scss'

const siteTitle = `Brk's Blog`

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link
                    rel='preload'
                    href={'/fonts/PassionOne/PassionOne-regular.ttf'}
                    as='font'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href={'/fonts/PassionOne/PassionOne-Bold.ttf'}
                    as='font'
                    crossOrigin=''
                />
                <link
                    rel='preload'
                    href={'/fonts/PassionOne/PassionOne-Black.ttf'}
                    as='font'
                    crossOrigin=''
                />
                <link rel='icon' href={'./favicon.png'} />
                <meta name='description' content="Brk's Coding Blog" />
                <meta name='og:title' content={siteTitle} />
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.header}>
                <Header />
            </div>
            <main className={styles.content}>{children}</main>
        </>
    )
}
