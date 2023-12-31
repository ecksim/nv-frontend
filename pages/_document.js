import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="de">
            <Head><link rel="shortcut icon" href="/favicon.png" /></Head>
            <body>
                <section className='mainWrapper'>
                    <Main />
                </section>
                <NextScript />
            </body>
        </Html>
    )
}