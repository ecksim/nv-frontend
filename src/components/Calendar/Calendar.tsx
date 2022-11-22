import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import { useRef } from "react";

type Props = {};

export default function Calendar({}: Props) {
  //   const calendarRef = useRef(null);
  return (
    <FullCalendar
      locale="de"
      allDaySlot={false}
      events={[
        {
          title: "Elfte Elfte",
          start: "2022-11-11T11:11:11",
          end: "2022-11-11T11:11:12 ",
          extendedProps: {
            department: "BioChemistry",
          },
          description: "Lecture",
        },
        {
          id: "a",
          title: "my event",
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
