// IMPORTS

import { useEffect, useRef, useState } from "react";
import './Calendar.css'

import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";

import enLocale from '@fullcalendar/core/locales/en-gb';

import showDescription from "../Tooltip/Tooltip";
import calendarFunctions from "./CalendarUtil";


// CALENDAR COMPONENT

export default function Calendar(){

  const calendar = useRef(null)
  const [calendarApi, setCalendarApi] = useState(null)

  useEffect(() => {
    (async function getCalendarApi(){
      const api = await calendar.current.getApi()
      setCalendarApi(api)
    })()
  },[])
  
  

  // fetching data in json format, parsing it to a js object and setting it to the userEvents state
  const [userEvents, setUserEvents] = useState([
    {
      'id' : 1,
      'title' : 'SIH 2023',
      'start' : '2023-01-01',
      'description' : 'THIS IS A SAMPLE DESCRIPTION, STYLING CAN BE CHANGED LATER',
      'url' : 'https://www.react.dev'
      
    },

    {
      'id' : 2,
      'title' : 'Coder Series',
      'start' : '2023-12-24',
      'description' : 'THIS IS A SAMPLE DESCRIPTION, STYLING CAN BE CHANGED LATER',
      'url' : 'https://www.react.dev'
    },

    {
      'id' : 3,
      'title' : 'YUKTA',
      'start' : '2023-12-29',
      'description' : 'THIS IS A SAMPLE DESCRIPTION, STYLING CAN BE CHANGED LATER',
      'url' : 'https://www.react.dev'
    },

  ]) 


  // we can fetch the data from the database using async/await or by old-school promises-chaining and then set the
  //userEvents state to the fetched data

  // we can additionally set a 'use-effect' hook to constantly look for changes in the userEvents state and 
  //re-render the calendar accordingly

  useEffect(() => {
    if (calendarApi !== null) {
      calendarFunctions.nextMonth(calendarApi)
    }
  }, [calendarApi])

  return (
    <div className="calendar">
        <div className="calendar-container">

            <h1 className="calendar-title">Your Calendar </h1>
            <FullCalendar 
            
            ref={calendar}
            // basic styling and setting up respective plugins
            locale={enLocale}
            aspectRatio={window.innerWidth <= '600px' ? 2.8 : 2.8}
            plugins={[daygridPlugin, timegridPlugin, multiMonthPlugin, interactionPlugin, listPlugin]}

            initialView={'dayGridMonth'}
            contentHeight={window.innerWidth <= '600px' ? '100vh' :'78vh'}
            themeSystem="bootstrap"

            // events
            progressiveEventRendering={true}
            events={userEvents}
            eventDisplay="list"
            eventBackgroundColor="#29ADB2"

            // when the event element mounts, and on hover, we trigger a popover/tooltip to show general details about the event
            eventDidMount={(info) => {
              showDescription(info)
            }}
            
            // additional features to navigate the calendar

            headerToolbar={{start : 'today prevYear,prev,next,nextYear', center : 'title', end : 'dayGridMonth,dayGridWeek,timeGridDay,listMonth'}}
            // selectable={true}

            />
        </div>
    </div>
  );


}