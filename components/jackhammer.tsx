import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import styles from './jackhammer.module.scss'

let frameNumber = 0

const ShowTimeLeft = (endDate: Date) => {
    const now = new Date()
    const nowUtc = new Date(now.getTime() + now.getTimezoneOffset() * 60000)

    let msDiff = (endDate.getTime() - nowUtc.getTime()) / 1000

    // calculate (and subtract) whole days
    const days = Math.floor(msDiff / 86400)
    msDiff -= days * 86400

    // calculate (and subtract) whole hours
    const hours = Math.floor(msDiff / 3600) % 24
    msDiff -= hours * 3600

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(msDiff / 60) % 60
    msDiff -= minutes * 60

    // what's left is seconds
    const seconds = Math.floor(msDiff % 60)

    return {
        days,
        hours,
        minutes,
        seconds,
    }
}

const animateJackhammer = (jackhammerTip, jackhammer, jackBody, jackArms) => {
    frameNumber++

    gsap.set(jackhammerTip.current, { x: 0, y: (frameNumber % 3) * -3 })
    gsap.set(jackhammer.current, { x: 0, y: -1 * Math.sin(frameNumber * 1.5) })

    const jackBodyAmount = Math.sin(frameNumber) + 2
    gsap.set(jackBody.current, { x: 0, y: -1 * jackBodyAmount })
    gsap.set(jackArms.current, { x: 0, y: -1 * jackBodyAmount })

    if (frameNumber == 1000) frameNumber = 0
}

const animateIn = (jackhammerSVG) => {
    return gsap.to(jackhammerSVG.current, {
        duration: 1,
        delay: 0.2,
        opacity: 1,
    })
}

const Jackhammer = () => {
    const endDate = new Date('January 31, 2022 20:00:00')

    const [daysLeft, setDaysLeft] = useState(0)
    const [hoursLeft, setHoursLeft] = useState(0)
    const [minutesLeft, setMinutesLeft] = useState(0)
    const [secondsLeft, setSecondsLeft] = useState(0)

    const boxRef = useRef()

    const jackhammerTip = useRef()
    const jackhammer = useRef()
    const jackBody = useRef()
    const jackArms = useRef()
    const jackhammerSVG = useRef()

    useEffect(() => {
        updateTime()
        const animation = animateIn(jackhammerSVG)
        const counterIntervalId = initJackhammerCounter()
        const animationIntervalId = initJackhammerAnimation()
        return () => {
            animation.kill()
            clearInterval(animationIntervalId)
            clearInterval(counterIntervalId)
        }
    }, [])

    const updateTime = () => {
        const { days, hours, minutes, seconds } = ShowTimeLeft(endDate)
        setDaysLeft(days)
        setHoursLeft(hours)
        setMinutesLeft(minutes)
        setSecondsLeft(seconds)
    }

    const initJackhammerCounter = () => {
        return setInterval(updateTime, 1000)
    }

    const initJackhammerAnimation = () => {
        return setInterval(() => {
            animateJackhammer(jackhammerTip, jackhammer, jackBody, jackArms)
        }, 40)
    }

    return (
            <div className={styles.jackhammer}>
                <div className={styles.svgHolder}>
                    <svg
                        id={styles.jackhammerSVG}
                        ref={jackhammerSVG}
                        version='1.1'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 196.3 276.8'
                        enableBackground='new 0 0 196.3 276.8'
                        xmlSpace='preserve'
                        preserveAspectRatio='xMidYMax'
                    >
                        <g id='jackhammerMan'>
                            <g id='jackBody' ref={jackBody}>
                                <circle
                                    className={styles.vestColor}
                                    cx='98.2'
                                    cy='118.8'
                                    r='88.6'
                                />
                                <rect
                                    x='37.2'
                                    y='144'
                                    className={styles.vestColor}
                                    width='121.9'
                                    height='45.2'
                                />
                                <rect
                                    x='34.2'
                                    y='133.9'
                                    className={styles.vestStipeColor}
                                    width='127.7'
                                    height='20.2'
                                />
                                <polygon
                                    className={styles.chestColor}
                                    points='98.2,125.7 64.2,75.9 131.5,75.9 		'
                                />
                                <g>
                                    <line
                                        className={styles.chestHairColor}
                                        fill='none'
                                        strokeWidth='3.312'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        x1='88'
                                        y1='100.4'
                                        x2='88'
                                        y2='105.4'
                                    />

                                    <line
                                        className={styles.chestHairColor}
                                        fill='none'
                                        strokeWidth='3.312'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        x1='97.6'
                                        y1='103.2'
                                        x2='97.7'
                                        y2='108.2'
                                    />

                                    <line
                                        className={styles.chestHairColor}
                                        fill='none'
                                        strokeWidth='3.312'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        x1='92.8'
                                        y1='105.8'
                                        x2='92.8'
                                        y2='110.7'
                                    />

                                    <line
                                        className={styles.chestHairColor}
                                        fill='none'
                                        strokeWidth='3.312'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        x1='102.4'
                                        y1='105.9'
                                        x2='102.5'
                                        y2='110.9'
                                    />

                                    <line
                                        className={styles.chestHairColor}
                                        fill='none'
                                        strokeWidth='3.312'
                                        strokeLinecap='round'
                                        strokeMiterlimit='10'
                                        x1='107.4'
                                        y1='100.4'
                                        x2='107.5'
                                        y2='105.3'
                                    />
                                </g>
                            </g>
                            <rect
                                className='shadow_1_'
                                x='0'
                                y='272'
                                opacity='0.22'
                                width='196.3'
                                height='4.8'
                            />
                            <g id='jackhammerTip' ref={jackhammerTip}>
                                <rect
                                    x='92.5'
                                    y='210.9'
                                    className={styles.jackhammerShaftColor}
                                    width='11.4'
                                    height='61.1'
                                />
                                <rect
                                    x='92.5'
                                    y='265.2'
                                    className={styles.jackhammerTipColor}
                                    width='11.4'
                                    height='6.8'
                                />
                            </g>
                            <g id='head_1_'>
                                <path
                                    className={styles.skinColor}
                                    d='M98.2,96.2L98.2,96.2c-21.2,0-38.6-17.4-38.6-38.6v-6.7c0-21.2,17.4-38.6,38.6-38.6h0
							c21.2,0,38.6,17.4,38.6,38.6v6.7C136.7,78.8,119.4,96.2,98.2,96.2z'
                                />
                                <g id='hat_1_'>
                                    <path
                                        className={styles.hatColorDk}
                                        d='M55.6,42.5h85.2c0-24.5-22.2-41.2-42.6-41.2h0C77.8,1.2,55.6,17,55.6,42.5z'
                                    />
                                    <polygon
                                        className={styles.hatColorLt}
                                        points='98,33 85.1,0 110.7,0 			'
                                    />
                                    <polygon
                                        className={styles.hatColorLt}
                                        points='145.4,45.7 50.9,45.7 56,36.8 140.4,36.8 			'
                                    />
                                </g>
                                <g id='mask_1_'>
                                    <ellipse
                                        className={styles.maskColor}
                                        cx='98.2'
                                        cy='76.6'
                                        rx='23.1'
                                        ry='19.6'
                                    />
                                    <rect
                                        x='85'
                                        y='72.6'
                                        className={styles.maskVentColor}
                                        width='26.4'
                                        height='2.2'
                                    />
                                    <rect
                                        x='85'
                                        y='78.5'
                                        className={styles.maskVentColor}
                                        width='26.4'
                                        height='2.2'
                                    />
                                    <rect
                                        x='85'
                                        y='84.4'
                                        className={styles.maskVentColor}
                                        width='26.4'
                                        height='2.2'
                                    />
                                </g>
                            </g>
                            <g id='legs_1_'>
                                <path
                                    className={styles.pantsColor}
                                    d='M169.2,171.9H27.1c8,10.8,18.4,19.7,30.5,25.9c-0.7,1.1-1.4,2.3-2.1,3.6c-3.3,5.9-6.5,13.3-8.4,22.1
							c-4.1,0.7-7.3,4.3-7.3,8.7c0,3.7,2.3,6.9,5.5,8.2c0,8.8,1.5,18.6,5.2,29.2l17.6-6.1c-6.5-18.7-5.4-36.2,3.3-52.2
							c1.3-2.3,2.6-4.5,4-6.4c7.3,1.9,14.9,3,22.8,3c7.9,0,15.5-1,22.8-3c1.2,1.8,2.5,3.7,3.7,5.8c9,16.1,10.3,33.9,3.7,52.8l17.6,6.1
							c3.7-10.6,5.2-20.3,5.2-29.2c3.2-1.3,5.5-4.5,5.5-8.2c0-4.3-3.1-7.9-7.3-8.7c-1.9-8.8-5.1-16.2-8.4-22.1c-0.7-1.2-1.4-2.4-2.1-3.6
							C150.8,191.6,161.2,182.7,169.2,171.9z'
                                />
                                <path
                                    className={styles.feetColor}
                                    d='M147.8,249.2c12.6,0,22.8,10.2,22.8,22.8H125C125,259.4,135.2,249.2,147.8,249.2z'
                                />
                                <path
                                    className={styles.feetColor}
                                    d='M48.5,249.2c-12.6,0-22.8,10.2-22.8,22.8h45.6C71.3,259.4,61.1,249.2,48.5,249.2z'
                                />
                            </g>
                            <g id='jackhammer' ref={jackhammer}>
                                <rect
                                    x='54.5'
                                    y='184.5'
                                    className={styles.jackhammerHandleColorDk}
                                    width='87.3'
                                    height='10.3'
                                />
                                <rect
                                    x='54.5'
                                    y='184.5'
                                    className={styles.jackhammerHandleColorLt}
                                    width='87.3'
                                    height='5.1'
                                />
                                <path
                                    className={styles.jackhammerHandleColorLt}
                                    d='M99.7,232.6h-3.1c-6.1,0-11-5-11-11v-34.5c0-6.1,5-11,11-11h3.1c6.1,0,11,5,11,11v34.5
							C110.8,227.6,105.8,232.6,99.7,232.6z'
                                />
                                <rect
                                    x='85.6'
                                    y='200.8'
                                    className={styles.jackhammerHandleColorDk}
                                    width='25.1'
                                    height='19.1'
                                />
                                <path
                                    className={styles.jackhammerMainColor}
                                    d='M105.4,213.3H90.9c-6.1,0-11-5-11-11v-26.1c0-6.1,5-11,11-11h14.5c6.1,0,11,5,11,11v26.1
							C116.5,208.3,111.5,213.3,105.4,213.3z'
                                />
                                <rect
                                    x='88.9'
                                    y='165.1'
                                    className={styles.jackhammerHandleColorLt}
                                    width='18.5'
                                    height='9.1'
                                />
                            </g>
                            <g id='jackArms' ref={jackArms}>
                                <path
                                    className={styles.skinColor}
                                    d='M182.8,145.4l-15.8,50.4c-3,9.4-13.2,14.7-22.6,11.7l0,0c-9.4-3-14.7-13.2-11.7-22.6l15.8-50.4l21.6-68
							C185.9,88.5,191.6,117.6,182.8,145.4z'
                                />
                                <path
                                    className={styles.skinColor}
                                    d='M13.6,145.5l15.8,50.4c3,9.4,13.2,14.7,22.6,11.7l0,0c9.4-3,14.7-13.2,11.7-22.6l-15.8-50.4l-21.6-68
							C10.4,88.6,4.7,117.6,13.6,145.5z'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='25.9'
                                    y1='171.4'
                                    x2='34.5'
                                    y2='168.8'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='28.8'
                                    y1='180.7'
                                    x2='37.3'
                                    y2='178.2'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='23.4'
                                    y1='162'
                                    x2='32'
                                    y2='159.5'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='20.6'
                                    y1='152.7'
                                    x2='29.2'
                                    y2='150.2'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='18.1'
                                    y1='143.3'
                                    x2='26.7'
                                    y2='140.8'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='29.8'
                                    y1='165.3'
                                    x2='38.3'
                                    y2='162.7'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='32.6'
                                    y1='174.6'
                                    x2='41.2'
                                    y2='172.1'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='27.3'
                                    y1='155.9'
                                    x2='35.8'
                                    y2='153.4'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='24.4'
                                    y1='146.6'
                                    x2='33'
                                    y2='144.1'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='21.9'
                                    y1='137.2'
                                    x2='30.5'
                                    y2='134.7'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='15.2'
                                    y1='134'
                                    x2='23.8'
                                    y2='131.5'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='169.9'
                                    y1='171.4'
                                    x2='161.4'
                                    y2='168.8'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='167.1'
                                    y1='180.7'
                                    x2='158.6'
                                    y2='178.2'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='172.5'
                                    y1='162'
                                    x2='163.9'
                                    y2='159.5'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='175.3'
                                    y1='152.7'
                                    x2='166.7'
                                    y2='150.2'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='177.8'
                                    y1='143.3'
                                    x2='169.2'
                                    y2='140.8'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='166.1'
                                    y1='165.3'
                                    x2='157.5'
                                    y2='162.7'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='163.3'
                                    y1='174.6'
                                    x2='154.7'
                                    y2='172.1'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='168.6'
                                    y1='155.9'
                                    x2='160.1'
                                    y2='153.4'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='171.4'
                                    y1='146.6'
                                    x2='162.9'
                                    y2='144.1'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='174'
                                    y1='137.2'
                                    x2='165.4'
                                    y2='134.7'
                                />

                                <line
                                    className={styles.armHairColor}
                                    fill='none'
                                    strokeWidth='2.208'
                                    strokeLinecap='round'
                                    strokeMiterlimit='10'
                                    x1='180.7'
                                    y1='134'
                                    x2='172.1'
                                    y2='131.5'
                                />
                            </g>
                        </g>
                    </svg>
                </div>

                <div id='jackhammerTitle' className={styles.jackhammerTitle}>Our Website is Under Construction.</div>
                <div id={styles.jackhammerCountdown}>
                    <svg
                        version='1.1'
                        id='svgCountdown'
                        xmlns='http://www.w3.org/2000/svg'
                        xmlnsXlink='http://www.w3.org/1999/xlink'
                        x='0px'
                        y='0px'
                        viewBox='0 0 406 114'
                        enableBackground='new 0 0 406 114'
                        xmlSpace='preserve'
                    >
                        <g>
                            <polygon
                                className={styles.shadowColor}
                                id='countdownshadow'
                                points='406,114 406,14 400,8 0,108 6,114 406,114 	'
                            />
                            <g
                                className='jackhammerCube'
                                id={styles.jackhammerCube1}
                            >
                                <rect
                                    className={styles.boxSide}
                                    x='0'
                                    y='20'
                                    width='100'
                                    height='100'
                                />
                                <rect
                                    className={styles.boxTop}
                                    x='0'
                                    y='12'
                                    width='100'
                                    height='100'
                                />
                                <text
                                    id='daysLeft'
                                    className={styles.jhcount}
                                    textAnchor='middle'
                                    transform='matrix(1 0 0 1 50 70)'
                                >
                                    {daysLeft}
                                </text>
                                <text
                                    transform='matrix(1 0 0 1 50 100)'
                                    className={styles.jhtime}
                                >
                                    days
                                </text>
                            </g>
                            <g
                                className='jackhammerCube'
                                id={styles.jackhammerCube2}
                            >
                                <rect
                                    x='100'
                                    y='20'
                                    className={styles.boxSide}
                                    width='100'
                                    height='100'
                                />
                                <rect
                                    x='100'
                                    y='12'
                                    className={styles.boxTop}
                                    width='100'
                                    height='100'
                                />
                                <text
                                    id='hoursLeft'
                                    className={styles.jhcount}
                                    textAnchor='middle'
                                    transform='matrix(1 0 0 1 150 70)'
                                >
                                    {hoursLeft}
                                </text>
                                <text
                                    transform='matrix(1 0 0 1 150 100)'
                                    className={styles.jhtime}
                                >
                                    hours
                                </text>
                            </g>
                            <g
                                className='jackhammerCube'
                                id={styles.jackhammerCube3}
                            >
                                <rect
                                    x='200'
                                    y='20'
                                    className={styles.boxSide}
                                    width='100'
                                    height='100'
                                />
                                <rect
                                    x='200'
                                    y='12'
                                    className={styles.boxTop}
                                    width='100'
                                    height='100'
                                />
                                <text
                                    id='minutesLeft'
                                    className={styles.jhcount}
                                    textAnchor='middle'
                                    transform='matrix(1 0 0 1 250 70)'
                                >
                                    {minutesLeft}
                                </text>
                                <text
                                    transform='matrix(1 0 0 1 250 100)'
                                    className={styles.jhtime}
                                >
                                    minutes
                                </text>
                            </g>
                            <g
                                className={styles.jackhammerCube}
                                id={styles.jackhammerCube4}
                            >
                                <rect
                                    x='300'
                                    y='20'
                                    className={styles.boxSide}
                                    width='100'
                                    height='100'
                                />
                                <rect
                                    x='300'
                                    y='12'
                                    className={styles.boxTop}
                                    width='100'
                                    height='100'
                                />
                                <text
                                    id='secondsLeft'
                                    className={styles.jhcount}
                                    textAnchor='middle'
                                    transform='matrix(1 0 0 1 350 70)'
                                >
                                    {secondsLeft}
                                </text>
                                <text
                                    transform='matrix(1 0 0 1 350 100)'
                                    className={styles.jhtime}
                                >
                                    seconds
                                </text>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
    )
}

export default Jackhammer
