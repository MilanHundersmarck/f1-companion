import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'

export const siteTitle = 'F1 Companion'

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="F1 Companion" />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                
            </Head>
            <header >
                <nav className="navbar navbar-light mb-4" style={{"backgroundColor":"#E10600"}}>
                    <a className="navbar-brand text-white px-5" href="#">
                        {siteTitle}
                    </a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" href='/circuits'>Circuits</Link>
                        </li>
                    </ul>
                    
                </nav>
            </header>
            <main>{children}</main>
        </div>
        )
}