import React from 'react'
import styles from './projects.module.scss'

const Projects = () => {
    return (
        <div className={styles.sectionBlue}>
            <section className={styles.projects}>
                <h2>Projects I'm proud of</h2>
                <article>
                    <div className={styles.text}>
                        <h4>Latest Project</h4>
                        <h3>Fox Game</h3>
                        <p className={styles.blackbox}>
                            <span className={styles.block}>This is a tamagotchi game which enables you to raise a fox as your closest pet.</span>
                            <span className={styles.block}>Take care of your fox pet day and night. How long your pet will survive? it is up to you!</span>
                            <span className={styles.block}>The project originally written in Javascript and later on was rewritten to typescript.</span>
                            <span className={styles.block}>For more details check this
                            <a href='https://github.com/BrkCoder/fox-game'>repo</a
                            > on Github</span>
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Typescript</li>
                        </ul>
                    </div>
                    <img src='images/fox_game.jpg'
                         alt='Screenshot of the fox game.' />
                </article>
                <article className={styles.reverse}>
                    <div className={styles.text}>
                        <h4>Natours</h4>
                        <h3>Tours Website</h3>
                        <p className={styles.blackbox}>
                            <span className={styles.block}> This website offers you different exciting tours around the world such as:</span>
                            <span className={styles.block}> The sea explorer, 3 days tour, sleep in cozy hotels, difficult: easy</span>
                            <span className={styles.block}> The forest hiker, 7 days tour, sleep in cozy hotels, difficult: medium</span>
                            <span className={styles.block}> The snow adventure, 5 days tour, sleep in cozy hotels, difficult: hard</span>
                            <span className={styles.block}>For more details check this
                            <a href='https://github.com/BrkCoder/Natours'>repo</a
                            > on Github</span>
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <img src='images/natours.jpg'
                         alt='Screenshot of the natours website.' />
                </article>
                <article>
                    <div className={styles.text}>
                        <h4>Nexter</h4>
                        <h3>Real Estate Website</h3>
                        <p className={styles.blackbox}>
                            <span className={styles.block}> This website offers you as buyer opportunities like:</span>
                            <span className={styles.block}> Beautiful Family House, USA, 5 rooms, 325 m<sup>2</sup>, $1,200,000</span>
                            <span className={styles.block}> Modern Glass Villa, Canada, 6 rooms, 450 m<sup>2</sup>, $2,750,000</span>
                            <span className={styles.block}> Cozy Country House, UK, 4 rooms, 250 m<sup>2</sup>, $850,000</span>
                            <span className={styles.block}> Majestic Palace House, Germany, 18 rooms, 4230 m<sup>2</sup>, $9,500,000</span>
                            <span className={styles.block}>For more details check this
                            <a href='https://github.com/BrkCoder/Natours'>repo</a
                            > on Github</span>.
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS Grid</li>
                        </ul>
                    </div>
                    <img src='images/nexter.jpg'
                         alt='Screenshot of the nexter website.' />
                </article>
            </section>
        </div>
    )
}

export default Projects