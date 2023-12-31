import { Html, Head, Main, NextScript } from 'next/document'
import { Analytics } from '@vercel/analytics/react';

export default function Document() {
    return (
        <Html lang="de">
            <Head><link rel="shortcut icon" href="/favicon.png" /></Head>
            <body>
                <section className='mainWrapper'>
                    <Main />
                </section>
                <NextScript />
                <Analytics />
            </body>
        </Html>
    )
}