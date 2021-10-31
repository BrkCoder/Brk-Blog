import Head from 'next/head'
import Construction from '../components/construction'
import Layout, { siteTitle } from '../components/layout'
export default function Home() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Construction />
        </Layout>
    )
}
