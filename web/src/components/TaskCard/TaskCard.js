import { Flex } from "@chakra-ui/react"

import React, { useState } from 'react'

const TaskCard = ({ task }) => {
  var initColor;
  if (task.status_id == 1) { //not started
    initColor = 'red.100';
  }
  else if (task.status_id == 2) { //started
    initColor = 'blue.100';
  }
  else if (task.status_id == 3) { //completed
    initColor = 'green.100';
  }
  else if (task.status_id == 4) { //rolled over
    initColor = 'yellow.100';
  }
  const [statusText, setStatusText] = useState(task.status_id);
  const [statusColor, setStatusColor] = useState(initColor);
  const [urgencyText, setUrgencyText] = useState(task.urgency);
  const [priorityText, setPriorityText] = useState(task.priority);

  function handleStatusClick() {
    if (statusText == 1) { //not started
      setStatusText(2); //started
      setStatusColor('blue.100');
    }
    else if (statusText == 2) { //started
      setStatusText(3); //completed
      setStatusColor('green.100');
    }
    else if (statusText == 3) { //completed
      setStatusText(4); //rolled over
      setStatusColor('yellow.100');
    }
    else if (statusText == 4) { //rolled over
      setStatusText(1); //not started
      setStatusColor('red.100');
    }
  }


  return (
    <>
      {statusText != 5 ?
        <Flex direction='row' justifyContent='space-between' background={statusColor} p={1} rounded={6} margin={1}>
          <Flex >
            <button onClick={handleStatusClick}>{
              statusText == 1 ? "Not Started" : statusText == 2 ? "Started" : statusText == 3 ? "Completed" : "Rolled Over"
            }</button>
          </Flex>
          <Flex>
            {task.title}
          </Flex>
          <Flex>
            <button onClick={() => setUrgencyText(urgencyText == 1 ? 2 : urgencyText == 2 ? 3 : 1)}>
              {urgencyText == 1 ? "High" : urgencyText == 2 ? "Medium" : "Low"}
            </button>
          </Flex>
          <Flex>
            <button onClick={() => setPriorityText(priorityText == 1 ? 2 : priorityText == 2 ? 3 : 1)}>
              {priorityText}
            </button>

          </Flex>
        </Flex>
      :
        <></>
      }

    </>
  )
}

export default TaskCard
