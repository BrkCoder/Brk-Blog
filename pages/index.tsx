import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import styles from './index.module.scss'
import Layout, { siteTitle } from '../components/layout'
import { posts as allPosts } from '../mocks/posts'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import CSSRulePlugin from 'gsap/dist/CSSRulePlugin'

export default function Home() {
    const postsRef = useRef([])
    const postsTweenRef = useRef([])
    const [currentPosts, setCurrentPosts] = useState(allPosts)

    gsap.registerPlugin(ScrollTrigger)
    gsap.registerPlugin(CSSRulePlugin)

    useEffect(() => {
        const enterTimelines = []
        const hoverTimelines = []
        postsRef.current = postsRef.current.slice(0, currentPosts.length)
        postsTweenRef.current = postsRef.current.slice(0, currentPosts.length)
        postsRef.current.forEach((ref, index) => {
            const enterTimeLine = gsap.timeline()
            const hoverTimeline = gsap.timeline()
            enterTimeLine.from(ref, { y: '30rem', opacity: 0 })
            enterTimeLine.to(ref, { y: 0, opacity: 1, duration: 0.4 })

            postsTweenRef.current[index] = hoverTimeline.to(ref, { duration: 0.15, scale: 1.05, ease: 'power1' })
            postsTweenRef.current[index].pause();

            ScrollTrigger.create({ // first circle animation
                trigger: ref,
                start: 'top bottom',
                end: 'top bottom',
                animation: enterTimeLine,
            })
            enterTimelines.push(enterTimeLine)
            hoverTimelines.push(hoverTimeline)
        })

        ScrollTrigger.matchMedia({
            '(min-width: 0px) and (max-width: 640px)': () => {
                const [firstTimeLine] = enterTimelines
                firstTimeLine.play()
            },
        })
        return () => {
            enterTimelines.forEach(tl => tl.kill())
            hoverTimelines.forEach(tl => tl.kill())
        }
    }, [currentPosts])

    const onMouseEnterHandler = (index) => {
        if (postsTweenRef.current && postsTweenRef.current[index]) {
            console.log('call on mouse enter')
            postsTweenRef.current[index].play()
        }
    }

    const onMouseLeaveHandler = (index) => {
        if (postsTweenRef.current && postsTweenRef.current[index]) {
            postsTweenRef.current[index].reverse()
        }
    }

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
                                 className={styles.post} onMouseEnter={(event) => onMouseEnterHandler(index)}
                                 onMouseLeave={(event) => onMouseLeaveHandler(index)}>
                            <h1>{post.name}</h1>
                            <p>{post.content}</p>
                        </section>,
                    )}
                </div>
            </div>
        </Layout>
    )
}
