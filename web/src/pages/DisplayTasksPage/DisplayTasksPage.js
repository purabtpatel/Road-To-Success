//import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import TaskCell from 'src/components/TaskCell'

const DisplayTasksPage = ({ user }) => {
  return (
    <>
      <MetaTags title="DisplayTasks" description="DisplayTasks page" />
      <div></div>
      <div>
        <TaskCell user_id={user} />
      </div>
    </>
  )
}

export default DisplayTasksPage
//<Link to={routes.displayTasks()}>DisplayTasks</Link>
