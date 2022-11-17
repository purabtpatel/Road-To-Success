export const QUERY = gql`
  query FindTaskQuery($user_id: Int!) {
    tasks: tasks(user_id: $user_id) {
      id
      user_id
      title
      details
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
    <ul>
      {tasks.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
