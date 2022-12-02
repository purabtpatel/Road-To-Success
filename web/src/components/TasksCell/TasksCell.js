import { useMutation } from "@redwoodjs/web"
import TaskCard from "../TaskCard/TaskCard"
import { Divider, Select, toast } from '@chakra-ui/react'
export const QUERY = gql`
  query FindTaskQuery($user_id: Int!) {
    tasks(user_id: $user_id) {
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
const CREATE_TASK = gql`
  mutation CreateTaskMutation($input: CreateTaskInput!) {
    createTask(input: $input) {
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
  const [updateTask] = useMutation(CREATE_TASK, {onCompleted: () => {
    window.location.reload()
    toast.Success("Task Created")
  }})
  const onSubmit = (data) => {
    const date = new Date()
    updateTask({variables: {input: {user_id, data}}})
  }

  return (
    <ul style={{ listStyleType: 'none' }}>
      {tasks.map((item) => {
        return <li key={item.id}><TaskCard task={item} /></li>
      })}
      {/*input form for new tasks8*/}
      <Divider />
      <p>Add new task:</p>
      <li>
        <form style={{ display:'flex', flexDirection: "row" }} onSubmit={onSubmit}>
          <select size='xs' name="status_id" id="status_id" placeholder="Status" style={{width:'22%'}}>
            <option value="1">Not Started</option>
            <option value="2">Started</option>
            <option value="3">Completed</option>
            <option value="4">Rolled Over</option>
          </select>
          <input type="text" id="title" name="title" placeholder="Title" style={{width:'22%'}} required />
          <select name="urgency" id="urgency" placeholder="Urgency" style={{width:'22%'}}>
            <option value="1">High</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
          <input type="number" step={1} id="priority" name="priority" placeholder="Priority" style={{width:'22%'}}/>
          <input type="submit" value="Save" style={{width:'12%'}} />
        </form>
      </li>
    </ul>
  )
}
