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
  return Success ? <Success appointmentLists={standard().appointments}/> : <></>
}

export const monthly = (args) => {
  return Success ? <Success appointmentLists={standard().appointments} viewtype='monthly'/> : <></>
}

export const weekly = (args) => {
  return Success ? <Success appointmentLists={standard().appointments} viewtype='weekly' startDate='2022-11-12' endDate='2022-11-13'/> : <></>
}

export const daily = (args) => {
  return Success ? <Success appointmentLists={standard().appointments} viewtype='daily' startDate='2022-11-18' endDate='2022-11-19'/> : <></>
}


export default { title: 'Cells/AppointmentListsCell' }
