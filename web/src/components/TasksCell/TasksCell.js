import { nominalTypeHack } from "prop-types"
import TaskCard from "../TaskCard/TaskCard"

export const QUERY = gql`
  query TasksQuery {
    tasks{
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tasks }) => {
  return (
    <ul style={{ 'list-style-type': 'none' }}>
      {tasks.map((item) => {
        return <li key={item.id}><TaskCard task={item} /></li>
      })}
    </ul>
  )
}
