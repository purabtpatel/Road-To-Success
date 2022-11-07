import AppointmentItem from '../AppointmentItem/AppointmentItem'

export const QUERY = gql`
  query AppointmentListsQuery {
    AppointmentList {
      id
      Title
      Duration
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ appointmentLists }) => {
  return (
    <ul>
      {appointmentLists.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
