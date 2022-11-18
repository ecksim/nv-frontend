import sanityClient from "../../client";
import Navi from "../../src/components/Navi/Navi";

export default function ManagementMembers({ navigation, overviewPages }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'vorstand');
    return <>
        <Navi naviItems={navigation} />
        <h1>{membersOverview[0].pageTitle}</h1>
    </>;
}

export async function getStaticProps() {
    const navigation = await sanityClient.fetch(`*[_type == "NaviEntry"]`);
    const overviewPages = await sanityClient.fetch(`*[_type == "overviewPage"]`);

    return {
        props: {
            navigation,
            overviewPages,
        }
    };
}