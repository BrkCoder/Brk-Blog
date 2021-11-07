import Head from 'next/head'
import Construction from '../../components/construction'
import Layout, { siteTitle } from '../../components/layout'
const Social = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Social</h1>
        </Layout>
    )
}

export default Social;
