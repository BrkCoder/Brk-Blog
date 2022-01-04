import { identity } from './identity'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface LinkProps {
    label: string,
    url: string,
    target?: string,
    icons?: IconProp,
    ariaHidden?: boolean,
    screenReader?: boolean,
    headline? : boolean,
    button?: boolean
}

export const Links: LinkProps[] = [
    {
        label: identity?.name,
        url: '/',
        icons: ['fas', 'code'],
        ariaHidden: true,
        headline: true
    },
    {
        label: 'Projects',
        url: '/#projects'
    },
    {
        label: 'About',
        url: '#'
    },
    {
        label: 'Contact',
        url: '/#contact'
    },
    {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bari-barak-inbal-09205556',
        icons: ['fab', 'linkedin'],
        target: '_blank',
        ariaHidden: true,
        screenReader: true
    },
    {
        label: 'Github',
        url: 'https://github.com/BrkCoder',
        icons: ['fab' ,'github'],
        target: '_blank',
        ariaHidden: true,
        screenReader: true
    },
    {
        label: 'Resume',
        url: '/',
        target: '_blank',
        button: true
    }
]