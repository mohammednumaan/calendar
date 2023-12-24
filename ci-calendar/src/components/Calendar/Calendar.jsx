// IMPORTS

import { useState } from "react";
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Calendar.css'

import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";


// CALENDAR COMPONENT

export default function Calendar(){

  const [userEvents, setUserEvents] = useState([
    {
      'id' : 1,
      'title' : 'SIH 2023',
      'start' : '2023-11-01',
      'description' : 'THIS IS A SAMPLE DESCRIPTION, STYLING CAN BE CHANGED LATER'
    },

    {
      'id' : 2,
      'title' : 'Coder Series',
      'start' : '2023-12-24',
      'description' : 'THIS IS A SAMPLE DESCRIPTION, STYLING CAN BE CHANGED LATER'
    },

    {
      'id' : 3,
      'title' : 'YUKTA',
      'start' : '2023-12-29',
      'description' : 'THIS IS A SAMPLE DESCRIPTION, STYLING CAN BE CHANGED LATER'
    },

  ]) 

  // we can fetch the data from the database using async/await or by old-school promises-chaining and then set the
  //userEvents state to the fetched data

  // we can additionally set a 'use-effect' hook to constantly look for changes in the userEvents state and 
  //re-render the calendar accordingly


  return (
    <div className="calendar">
        <div className="calendar-container">

            <h1 className="calendar-title">Your Calendar </h1>
            <FullCalendar 

            // basic styling and setting up respective plugins

            aspectRatio={2.8}
            plugins={[daygridPlugin, timegridPlugin, multiMonthPlugin, interactionPlugin, listPlugin]}
            initialView={"dayGridMonth"}

            // events display and popup
            events={userEvents}

            // when the event element mounts, and on hover, we trigger a modal to show general details about the event

            eventDidMount={(info) => {

              return new bootstrap.Popover(info.el, {
                title : info.event.title,
                placement : 'auto',
                trigger : 'hover',
                customClass : 'popOverStyle',
                content : `<p>${info.event.extendedProps.description}</p>`,
                html : true
              })
            }}
            
            // additional features to navigate the calendar

            headerToolbar={{start : 'today prev,next', center : 'title', end : 'dayGridMonth,dayGridWeek,timeGridDay,list'}}
            selectable={true}

            />
        </div>
    </div>
  );
}