import { Flex } from "@chakra-ui/react"

import React, { useState } from 'react'

const TaskCard = ({ task }) => {
  var initColor;
  if (task.status_id == 1) { //not started
    initColor = 'red.50';
  }
  else if (task.status_id == 2) { //started
    initColor = 'blue.50';
  }
  else if (task.status_id == 3) { //completed
    initColor = 'green.50';
  }
  else if (task.status_id == 4) { //rolled over
    initColor = 'yellow.50';
  }
  const [statusText, setStatusText] = useState(task.status_id);
  const [statusColor, setStatusColor] = useState(initColor);

  function handleStatusClick() {
    if (statusText == 1) { //not started
      setStatusText(2); //started
      setStatusColor('blue.50');
    }
    else if (statusText == 2) { //started
      setStatusText(3); //completed
      setStatusColor('green.50');
    }
    else if (statusText == 3) { //completed
      setStatusText(4); //rolled over
      setStatusColor('yellow.50');
    }
    else if (statusText == 4) { //rolled over
      setStatusText(1); //not started
      setStatusColor('red.50');
    }
  }


  return (
    <>
      {statusText != 5 ?
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
