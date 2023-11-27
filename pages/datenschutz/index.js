import sanityClient from "../../client";

export default function DataProtection({ overviewPages }) {
    const dataProtectionData = overviewPages.filter(page => page.identifier === 'datenschutz');

    return <>
        <h1 className="headline">{dataProtectionData[0].pageTitle}</h1>
        <p dangerouslySetInnerHTML={{ __html: dataProtectionData[0].pageDescription }}></p>
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