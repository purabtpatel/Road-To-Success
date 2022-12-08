/* const AppointmentItem = () => {
  //mock data
  const appointments = [{ id: 42, title: 'Finish HW', Duration: '10 mins' }]

  const titlefeed = appointments.map((appointment) => (
    <h2 key={appointment.id}> Title: {appointment.title}</h2>
  ))
  const duration = appointments.map((appointment) => (
    <h2 key={appointment.id}> Duration: {appointment.Duration}</h2>
  ))

  return (
    <div className="appointmentItem">
      <h2 className="innertext title ">{titlefeed}</h2>

      <p className="innertext duration">{duration}</p>
      <div className="mini-horizontal-bar"></div>
    </div>
  ) done by abby */
/* done by purab  
import { Flex } from "@chakra-ui/react"
import { Redirect } from "@redwoodjs/router"

const AppointmentItem = ({id, title, startTime, duration, viewType}) => {
  if(viewType === 'monthly') {
    return (
      <div>
        <h2>{title}</h2>
        <p>{startTime}</p>
        <p>{duration}</p>
        <p>{id}</p>
      </div>
    )
  }
  else if(viewType === 'weekly') {
    return (
      <div>
        <h2>{title}</h2>
        <p>{startTime}</p>
        <p>{duration}</p>
        <p>{id}</p>
      </div>
    )
  }
  else if(viewType === 'daily') {
    return (
      //<Flex>{id}</Flex>
      <Flex direction='row' background={'gray.50'} p={1} rounded={6} height={duration/5}>
        <h2>{title}</h2>
        <Flex>{startTime}</Flex>
        <Flex>{duration}</Flex>
      </Flex>
    )
  }
  else {
    return (
      <div>ViewType missing</div>
    )
  }
}

export default AppointmentItem
*/