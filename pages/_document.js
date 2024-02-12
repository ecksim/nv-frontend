import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="de">
            <Head>
                <link rel="shortcut icon" href="/favicon.png" />
                <title>Bodemännle Hattenweiler</title>
                <meta name="description" content="Die Webseite des Narrenverein Bodemännle Hattenweiler. Aktuelle Neuigkeiten, Termine und Kontaktinformationen" />
            </Head>
            <body>
                <section className='mainWrapper'>
                    <Main />
                </section>
                <NextScript />
            </body>
        </Html>
    )
}