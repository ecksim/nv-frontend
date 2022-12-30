import sanityClient from "../../client";

import Calendar from "../../src/components/Calendar/Calendar";


export default function EventsOverview({ overviewPages, events }) {

    const eventsOverview = overviewPages.filter(page => page.identifier === 'kalender');
    return <>
        <h1 className="headline">{eventsOverview[0].pageTitle}</h1>
        <p>{eventsOverview[0].pageDescription}</p>
        <Calendar events={events} />
    </>;
}

export async function getStaticProps() {
    const overviewPages = await sanityClient.fetch(`*[_type == "overviewPage"]`);
    const events = await sanityClient.fetch(`*[_type == "event"]`);

    return {
        props: {
            overviewPages,
            events,
        }
    };
}
