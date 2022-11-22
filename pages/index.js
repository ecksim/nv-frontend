import Link from "next/link";
import FullCalendar from "@fullcalendar/react";
// The import order DOES MATTER here. If you change it, you'll get an error!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// components
import HeroImage from "../src/components/HeroImage/HeroImage";

export default function IndexPage() {
  return (
    <>
      <main>
        <h1 className="headline">Willkommen bei den Bodemännle Hattenweiler</h1>
        <HeroImage></HeroImage>
        <section>
          <p>
            Die fünfte Jahreszeit steht in den Startlöchern und wir freuen uns dieses Mal wieder gemeinsam mit Euch eine schöne Fasnet zu haben.
            Neben unseren Umzügen wird auch wieder der Westernball durch uns veranstaltet im Dorfgemeinschaftshaus in Hattenweiler stattfinden.
            Alle Veranstaltungen im Überblick findest du hier: <Link href={"/kalender"} title="kalender" >Kalender</Link>
          </p>
        </section>
      </main>
    </>
  );
}
