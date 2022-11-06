import { Loading, Empty, Failure, Success } from './TasksCell'
import { standard } from './TasksCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty /> : <></>
}

export const failure = (args) => {
  return Failure ? <Failure error={new Error('Failed to Load Tasks')} {...args} /> : <></>
}

export const success = (args) => {
  return Success ? <Success tasks={standard().tasks}/> : <></>
}

export default { title: 'Cells/TasksCell' }
