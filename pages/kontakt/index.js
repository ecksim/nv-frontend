import sanityClient from "../../client";
import Navi from "../../src/components/Navi/Navi";

export default function ContactPage({ navigation, overviewPages }) {
    const membersOverview = overviewPages.filter(page => page.identifier === 'kontakt');

    return <>
        <Navi naviItems={navigation} />
        <h1>{membersOverview[0].pageTitle}</h1>
        <p>{membersOverview[0].pageDescription}</p>
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