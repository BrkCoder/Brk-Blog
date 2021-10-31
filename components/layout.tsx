import Head from 'next/head'
import Header from './header'
import styles from './layout.module.scss'
const name = 'Your Name'
export const siteTitle = `Brk's Blog`

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Brk's Coding Blog" />
                <meta name="og:title" content={siteTitle} />
                {/* <meta name="twitter:card" content="summary_large_image" /> */}
            </Head>
            <div className={styles.header}>
                <Header />
            </div>
            <main className={styles.content}>{children}</main>
        </>
    )
}
