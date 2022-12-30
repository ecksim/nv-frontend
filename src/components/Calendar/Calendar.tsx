import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import { useRef } from "react";

type Props = { events: any[] };

export default function Calendar({ events }: Props) {
  //   const calendarRef = useRef(null);
  return (
    <FullCalendar
      locale="de"
      allDaySlot={false}
      events={[
        ...events,
        {
          title: "Silvester Heiligenberg",
          start: "2022-12-31T22:30:00",
          end: "2023-01-01T04:30:00 ",
          extendedProps: {
            department: "BioChemistry",
          },
          description: "Lecture",
        },
        {
          id: "Ich hätt gern ne million",
          title: "Ich hätt gern ne million",
          start: "2022-11-11",
        },
      ]}
      //   innerRef={calendarRef}
      plugins={[timeGridPlugin, dayGridPlugin, listPlugin]}
      initialView="dayGridMonth"
      //   editable
      //   selectable
      eventClick={(e) => {
        const extendedProps = e.el.fcSeg.eventRange.def.extendedProps;
        alert(
          `Overlay zu Veranstaltung mit Bild und link und so weiter. Beschreibung: ${extendedProps.description}`
        );
      }}
      //   eventMouseEnter={() => alert("Tooltip anzeigen mit lesen sie mehr")}
      //   eventMouseLeave={() => alert("Tooltip ausblenden")}
      headerToolbar={{
        start: "title",
        center: "listMonth dayGridMonth",
        end: "today prev,next",
      }}
      buttonText={{
        today: "Heute",
        month: "Monat",
        week: "week",
        day: "day",
        list: "Liste",
      }}
      firstDay={1}
    />
  );
}
