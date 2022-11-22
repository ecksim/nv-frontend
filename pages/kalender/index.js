import sanityClient from "../../client";

import Calendar from "../../src/components/Calendar/Calendar";


export default function EventsOverview({ overviewPages }) {
    const eventsOverview = overviewPages.filter(page => page.identifier === 'kalender');
    return <>
        <h1 className="headline">{eventsOverview[0].pageTitle}</h1>
        <p>{eventsOverview[0].pageDescription}</p>
        <Calendar />
    </>;
}

export async function getStaticProps() {
    const overviewPages = await sanityClient.fetch(`*[_type == "overviewPage"]`);


    return {
        props: {
            overviewPages,
        }
    };
}
