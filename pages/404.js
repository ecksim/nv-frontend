import Image from "next/image"

export default function Custom404() {
    return <>
        <h1 className="headline">Error 404 - Wir haben von hier bis Hollywood gesucht, konnten aber leider die gewünschte Seite nicht finden</h1>
        <figure className="imageGrid">
            <Image alt="Ein Bodemännle vor dem Hollywood Schritzug" src="/404.jpg" layout="fill" className="image404" />
        </figure>
    </>
}