import { Flex } from "@chakra-ui/react"

import React, { useState } from 'react'

const TaskCard = ({ task }) => {
  var initColor;
  if (task.status === 'Not Started') {
    initColor = 'red.50';
  }
  else if (task.status === 'Started') {
    initColor = 'blue.50';
  }
  else if (task.status === 'Completed') {
    initColor = 'green.50';
  }
  else if (task.status === 'Rolled Over') {
    initColor = 'yellow.50';
  }
  const [statusText, setStatusText] = useState(task.status);
  const [statusColor, setStatusColor] = useState(initColor);

  function handleStatusClick() {
    if (statusText === 'Not Started') {
      setStatusText('Started');
      setStatusColor('blue.50');
    }
    else if (statusText === 'Started') {
      setStatusText('Completed');
      setStatusColor('green.50');
    }
    else if (statusText === 'Completed') {
      setStatusText('Rolled Over');
      setStatusColor('yellow.50');
    }
    else if (statusText === 'Rolled Over') {
      setStatusText('Not Started');
      setStatusColor('red.50');
    }
  }


  return (
    <>
      {statusText !== "Deleted" ?
        <Flex direction='row' justifyContent='space-between' background={statusColor} p={1} rounded={6}>
          <Flex >
            <button onClick={handleStatusClick}>{statusText}</button>

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
      :
        <></>
      }

    </>
  )
}

export default TaskCard
