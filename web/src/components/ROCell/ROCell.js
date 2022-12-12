
import { useMutation } from '@redwoodjs/web'

console.log('cell opened')

export const QUERY = gql`
  query FindROQuery($date: Date!) {
    rollTasksOver(date: $date) {
      id
    }
  }
`
console.log(' outta here ')
export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'orange' }}>Error: {error?.message}</div>
)

export const Success = ({ rollTasksOver }) => {
  console.log('aaa')
  return <div>hi</div>
}
