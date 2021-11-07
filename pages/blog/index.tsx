import Head from 'next/head'
import Construction from '../../components/construction'
import Layout, { siteTitle } from '../../components/layout'
const Blog = () => {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <h1>Blog</h1>
        </Layout>
    )
}

export default Blog;
