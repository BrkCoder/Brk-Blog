import { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../styles/global.scss'

library.add(fab, fas)

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
