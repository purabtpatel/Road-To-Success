import { Loading, Empty, Failure, Success } from './AppointmentListsCell'
import { standard } from './AppointmentListsCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty /> : <></>
}

export const failure = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const success = (args) => {
  return Success ? <Success appointments={standard().appointments} /> : <></>
}

export default { title: 'Cells/AppointmentListsCell' }
