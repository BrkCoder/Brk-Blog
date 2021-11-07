import Head from 'next/head'
import Construction from '../../components/construction'
import Layout, { siteTitle } from '../../components/layout'
const Categories = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Categories</h1>
        </Layout>
    )
}

export default Categories;
