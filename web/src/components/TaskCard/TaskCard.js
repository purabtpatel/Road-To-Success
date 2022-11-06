import { Flex } from "@chakra-ui/react"


const TaskCard = ({task}) => {
  let status;
  let color;
  if (task.status === "Started") {
    status = <button>Started</button>;
    color = "blue.50";
  }
  else if (task.status === "Complete") {
    status =  <button>Complete</button>;
    color = "green.50";
  }
  else if (task.status === "Not Started") {
    status = <button>Not Started</button>;
    color = "red.50";
  }
  else if (task.status === "Rolled Over") {
    status = <button>Rolled Over</button>;
    color = "yellow.50";
  }
  else if (task.status === "Deleted") {return null}

  return (
    <Flex direction='row' justifyContent='space-between' background={color} p={1} rounded={6}>
      <Flex >
        {status}
      </Flex>
      <Flex>
        {task.title}
      </Flex>
      <Flex>
        {task.urgency}
      </Flex>
      <Flex>
        {task.priority}
      </Flex>
    </Flex>
  )
}

export default TaskCard
