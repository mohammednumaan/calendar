import FullCalendar from "@fullcalendar/react";
import daygridPlugin from "@fullcalendar/daygrid";
import timegridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from '@fullcalendar/multimonth'
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import './Calendar.css'

export default function Calendar(){
  return (
    <div className="calendar">
        <div className="calendar-container">

            <h1 className="calendar-title">Your Calendar </h1>
            <FullCalendar 

            aspectRatio={2.8}
            plugins={[daygridPlugin, timegridPlugin, multiMonthPlugin, interactionPlugin, listPlugin]}
            initialView={"dayGridMonth"}
            
            headerToolbar={{start : 'today prev,next', center : 'title', end : 'dayGridMonth,dayGridWeek,timeGridDay,list'}}
            selectable={true}

        
            />

        </div>
      
    </div>
  );
}