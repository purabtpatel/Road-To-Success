/* anything from backup was done by purab and appointmentlist was abby appointmentList
import AppointmentItem from '../AppointmentItem/AppointmentItem'

export const QUERY = gql`
  query AppointmentListsQuery {
    appointmentsLists {
      id
      title
      duration
import AppointmentItem from "../AppointmentItem/AppointmentItem"
export const QUERY = gql`
  query AppointmentListsQuery {
    appointmentLists {
      id
backup
    }
  }
`

function getDuration(startDateTime, endDateTime) {
  const start = new Date(startDateTime)
  const end = new Date(endDateTime)
  const diff = end.getTime() - start.getTime()
  return Math.round(diff / 60000);

}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

appointmentList
export const Success = ({ appointments }) => {
  const titlefeed = appointments.map((appointment) => (
    <h2 key={appointment.id}>Title: {appointment.title}</h2>
  ))
  return (
    <ul style={{ 'list-style-type': 'none' }}>
      <li>
        <AppointmentItem></AppointmentItem>{titlefeed}
      </li>
    </ul>
  )
=======
export const Success = ({ appointmentLists, startDate, endDate, viewtype }) => {

  if (viewtype === 'monthly') {
    return (
      <ul style={{ 'list-style-type': 'none' }} >
        {appointmentLists.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    )
  }
  else if (viewtype === 'weekly') {
    return (
      <ul style={{ 'list-style-type': 'none' }} >
        {appointmentLists.map((item) => {
          return <li key={item.id}>{JSON.stringify(item)}</li>
        })}
      </ul>
    )
  }
  else if (viewtype === 'daily') {
    //filter appointmentLists by startDate and endDate based on appointment's startDateTime
    const filteredAppointmentLists = appointmentLists.filter((item) => {
      return (item.startDateTime >= startDate && item.startDateTime <= endDate)
    })
    //sort filteredAppointmentLists by startDateTime
    filteredAppointmentLists.sort((a, b) => {
      return new Date(a.startDateTime) - new Date(b.startDateTime)
    })


    //startTime in string


    return (
      <ul style={{ 'list-style-type': 'none' }} >
        {filteredAppointmentLists.map((item) => {
          const startTime = item.startDateTime.substring(11, 16);
          const duration = getDuration(item.startDateTime, item.endDateTime);
          return <li key={item.id}>
            <AppointmentItem viewType={'daily'} id={item.id} title={item.summary} startTime={startTime} duration={duration} />
          </li>
        })}
      </ul>
    )
  } else {
    return (
      <div>ViewType missing</div>
    )
  }
backup
}
*/