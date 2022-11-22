import sanityClient from "../../client";

export default function ContactPage({ overviewPages }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'kontakt');

    return <>
        <h1 className="headline">{membersOverview[0].pageTitle}</h1>
        <p>{membersOverview[0].pageDescription}</p>
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