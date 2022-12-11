import { useMutation } from "@redwoodjs/web"
import TaskCard from "../TaskCard/TaskCard"
import { Divider, Select, toast } from '@chakra-ui/react'
export const QUERY = gql`
  query FindTaskQuery{
    tasks{
      id
      user_id
      title
      details
      status_id
      urgency
      priority
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>No tasks found</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ tasks }) => {
  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((item) => {
        if(item.status_id != 5) {
        return <li key={item.id}><TaskCard task={item} /></li>
        }
      })}
    </ul>
  )
}
