import * as React from "react";
import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
// import { useRef } from "react";

// utils
import breakpoint from "./../../utils/breakpoint";

type Props = {};

interface IOverlay {
  title: string;
  start: Date;
  end: Date;
  description: string;
}

export default function Calendar({ events }: Props) {
  //   const calendarRef = useRef(null);
  const [showOverlay, setShowOverlay] = React.useState(false);
  const [overlayData, setOverlayData] = React.useState<IOverlay>({
    title: "",
    start: "",
    end: "",
    description: "",
  });
  const dateOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const currentBreakpoint = breakpoint();

  const openOverlay = (info) => {
    setShowOverlay(true);
    setOverlayData({
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description,
    });
    console.log(info);
  };

  return (
    <>
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
        initialView={
          currentBreakpoint === "isMobile" ? "listMonth" : "dayGridMonth"
        }
        //   editable
        //   selectable
        eventClick={(info) => {
          openOverlay(info);
        }}
        //   eventMouseEnter={() => alert("Tooltip anzeigen mit lesen sie mehr")}
        //   eventMouseLeave={() => alert("Tooltip ausblenden")}
        headerToolbar={{
          start: "title",
          center:
            currentBreakpoint === "isMobile" ? "" : "listMonth dayGridMonth",
          end:
            currentBreakpoint === "isMobile"
              ? "listMonth dayGridMonth today prev,next"
              : "today prev,next",
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
      {showOverlay && overlayData && (
        <div
          className="eventOverlayBackground"
          onClick={() => setShowOverlay(false)}
        >
          <span
            className="eventOverlayBox"
            onClick={(event) => event.stopPropagation()}
          >
            <span
              className="overlayXMark"
              onClick={() => setShowOverlay(false)}
            >
              &#x2716;
            </span>
            <h3>{overlayData.title}</h3>
            <div>
              Datum:{" "}
              {overlayData.start.toLocaleDateString("de-DE", dateOptions)}
            </div>
            <div>
              Uhrzeit:{" "}
              {overlayData.start.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}{" "}
              Uhr
            </div>
          </span>
        </div>
      )}
    </>
  );
}
