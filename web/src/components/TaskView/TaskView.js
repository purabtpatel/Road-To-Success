import React, { useState } from 'react'
import TasksCell from 'src/components/TasksCell'
import { Box, Divider, Flex } from "@chakra-ui/react"
const TaskView = () => {
  // current date state
  const [date, setDate] = useState();

  return (
    <>
      {/* alligned horizontally */}
      <Flex alignItems='center' justifyContent='center'>

        <Flex direction='column' background='gray.50' p={12} rounded={6}>
          <Box fontSize='2xl'>
            <Flex justifyContent='space-between'>
              <h1>To Do List</h1>
              {/* input for date */}
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </Flex>
          </Box>
          <Divider/>

          <h2>{'TaskView'}</h2>
          <p>{'Find me in ./web/src/components/TaskView/TaskView.js'}</p>
          <TasksCell/>
          {/* display current date */}
          <p>{date}</p>
        </Flex>

      </Flex>
    </>
  )
}

export default TaskView
