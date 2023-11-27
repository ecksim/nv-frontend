import sanityClient from "../../client";

export default function Impress({ overviewPages }) {
    const impressData = overviewPages.filter(page => page.identifier === 'impressum');

    return <>
        <h1 className="headline">{impressData[0].pageTitle}</h1>
        <p dangerouslySetInnerHTML={{ __html: impressData[0].pageDescription }}></p>
    </>;
}

export async function getStaticProps() {
    const overviewPages = await sanityClient.fetch(`*[_type == "overviewPage"]`);

    return {
        props: {
            overviewPages
        }
    };
}