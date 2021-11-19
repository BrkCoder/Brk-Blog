import Head from 'next/head'
import Jackhammer from '../../components/jackhammer'
import Layout, { siteTitle } from '../../components/layout'

const About = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/*<Jackhammer />*/}
        </Layout>
    )
}

export default About
