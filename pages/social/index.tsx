import Head from 'next/head'
import Jackhammer from '../../components/jackhammer'
import Layout, { siteTitle } from '../../components/layout'

const Social = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*<Jackhammer />*/}
        </Layout>
    )
}

export default Social
