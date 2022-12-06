
import FullCalendar, { getEventClassNames } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

export const QUERY = gql`
query calendar_demo($start: String!, $end: String!) {
  getEvents(start: $start, end: $end) {
    events {
      summary
      start
      end
    }
  }
}
`

const CalendarView = ({getEvents}) => {
  // get events query
  console.log(getEvents)
  return (

    <div style={{float:"left", width:"68%", marginTop:"1rem", marginLeft:"1rem", background:"rgb(255,255,255)"}}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height={600}
        aspectRatio={1.5}
        weekends={true}


        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
      // events={getEvents.events}
      />
    </div>
  )
}

export default CalendarView
