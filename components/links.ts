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
        url: '#',
        icons: ['fas', 'code'],
        ariaHidden: true,
        headline: true
    },
    {
        label: 'Projects',
        url: '#'
    },
    {
        label: 'About',
        url: '#'
    },
    {
        label: 'Contact',
        url: '#'
    },
    {
        label: 'LinkedIn',
        url: '#',
        icons: ['fab', 'linkedin'],
        target: '_blank',
        ariaHidden: true,
        screenReader: true
    },
    {
        label: 'Github',
        url: '#',
        icons: ['fab' ,'github'],
        target: '_blank',
        ariaHidden: true,
        screenReader: true
    },
    {
        label: 'Resume',
        url: '#',
        target: '_blank',
        button: true
    }
]