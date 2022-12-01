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
