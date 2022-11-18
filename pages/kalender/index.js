import sanityClient from "../../client";
import Navi from "../../src/components/Navi/Navi";


export default function EventsOverview({ navigation, overviewPages }) {
    const eventsOverview = overviewPages.filter(page => page.identifier === 'kalender');
    return <>
        <Navi naviItems={navigation} />
        <h1>{eventsOverview[0].pageTitle}</h1>
        <p>{eventsOverview[0].pageDescription}</p>
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
