import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Layout, { siteTitle } from '../components/layout'
import { posts as allPosts } from '../mocks/posts'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

export default function Home() {
    const postsRef = useRef([])
    const [currentPosts, setCurrentPosts] = useState(allPosts)
    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        postsRef.current = postsRef.current.slice(0, currentPosts.length)
        const timelines = [];
        postsRef.current.forEach(ref => {
            const tl = gsap.timeline();
            gsap.set(ref, { y: "30rem", opacity: 0})
            tl.from(ref, { y: "30rem", opacity: 0});
            tl.to(ref, {y : 0 , opacity: 1, duration: 0.4})
            ScrollTrigger.create({ // first circle animation
                trigger: ref,
                start: "top bottom",
                end: "top bottom",
                markers: true,
                animation: tl,
            });
            timelines.push(tl)
        })

        return () => {
            timelines.forEach(tl => tl.kill())
        }
    }, [currentPosts])
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <div className={styles.headline}>
                <h1 className={styles.title}>Recent Posts</h1>
            </div>
            <div className={styles.postContainer}>
                <div className={styles.postList}>
                    {currentPosts.map((post, index) =>
                        <section key={post.id} ref={el => postsRef.current[index] = el}
                                 className={styles.post}>
                            <h1>{post.name}</h1>
                            <p>{post.content}</p>
                        </section>,
                    )}
                </div>
            </div>
        </Layout>
    )
}
