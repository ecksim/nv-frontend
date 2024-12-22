import sanityClient from "../../client";

import Calendar from "../../src/components/Calendar/Calendar";
import Button from './../../src/components/Button/button';


export default function EventsOverview({ overviewPages, events }) {

    const eventsOverview = overviewPages.filter(page => page.identifier === 'kalender');
    return <>
        <h1 className="headline">{eventsOverview[0].pageTitle}</h1>
        <p>{eventsOverview[0].pageDescription}</p>
        <p>🆕 Termine via iCal in Kalender importieren <Button target="https://bodemaennle.de/Termine-Bodemaennle.ics" hasArrow={true} type="primary">Hier klicken</Button></p>
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
