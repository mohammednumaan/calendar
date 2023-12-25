// IMPORTS

import { useState } from "react";
import './Calendar.css'

import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";

import showDescription from "../Tooltip/Tooltip";


// CALENDAR COMPONENT

export default function Calendar(){


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


  return (
    <div className="calendar">
        <div className="calendar-container">

            <h1 className="calendar-title">Your Calendar </h1>
            <FullCalendar 
                  
            // basic styling and setting up respective plugins
            aspectRatio={window.innerWidth <= '600px' ? 2.8 : 2.8}
            plugins={[daygridPlugin, timegridPlugin, multiMonthPlugin, interactionPlugin, listPlugin]}

            initialView={'dayGridMonth'}
            contentHeight={window.innerWidth <= '600px' ? '100vh' :'78vh'}
            themeSystem="bootstrap"

            // events display and popup
            events={userEvents}
            eventDisplay="list"
            eventBackgroundColor="#29ADB2"

            // when the event element mounts, and on hover, we trigger a modal to show general details about the event

            eventDidMount={(info) => {
              showDescription(info)
            }}
            
            // additional features to navigate the calendar

            headerToolbar={{start : 'today prev,next', center : 'title', end : 'dayGridMonth,dayGridWeek,timeGridDay,listWeek'}}
            selectable={true}

            />
        </div>
    </div>
  );


}