import type { NextPage } from 'next'
import Head from 'next/head'
import { config, dom } from '@fortawesome/fontawesome-svg-core'

import Layout, { siteTitle } from '../components/layout'
import Navigation from '../components/navigation'
import Gradient from '../components/gradient'
import Intro from '../components/intro'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

config.autoAddCss = false

const Home: NextPage = () => {
    return (
        <Layout>
            <Head>
                <style>{dom.css()}</style>
                <title>{siteTitle}</title>
            </Head>
            <Navigation />
            <Intro />
            <Gradient />
            <Projects />
            <Gradient />
            <Contact />
            <Gradient />
            <Footer />
        </Layout>
    )
}

export default Home