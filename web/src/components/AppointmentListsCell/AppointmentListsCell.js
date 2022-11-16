import AppointmentItem from '../AppointmentItem/AppointmentItem'

export const QUERY = gql`
  query AppointmentListsQuery {
    appointmentsLists {
      id
      title
      duration
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

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
}
