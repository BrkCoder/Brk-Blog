import Head from 'next/head'
import Jackhammer from '../components/jackhammer'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Jackhammer />
        </Layout>
    )
}
