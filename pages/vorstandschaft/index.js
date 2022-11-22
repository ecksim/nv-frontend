import sanityClient from "../../client";

export default function ManagementMembers({ overviewPages }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'vorstand');
    return <>
        <h1 className="headline">{membersOverview[0].pageTitle}</h1>
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