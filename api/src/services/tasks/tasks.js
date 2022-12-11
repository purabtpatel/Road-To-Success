import { db } from 'src/lib/db'

export const tasks = ({ user_id }) => {
  return db.task.findMany({
    where: { user_id },
  })
}

export const task = ({ id }) => {
  return db.task.findUnique({
    where: { id },
  })
}
export const allTasks = () => {
  return db.task.findMany()
}
export const getByDate = ({ user_id, date }) => {
  return db.task.findMany({
    where: { user_id, date },
  })
}

export const createTask = ({ input }) => {
  return db.task.create({
    data: input,
  })
}

export const updateTask = ({ id, input }) => {
  return db.task.update({
    data: input,
    where: { id },
  })
}

export const deleteTask = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}

export const Task = {
  User: (_obj, { root }) => {
    return db.task.findUnique({ where: { id: root?.id } }).User()
  },
}

export const getUserTasksOfUrgency = ({ user_id, urgency }) => {
  return db.task.findMany({
    where: { user_id, urgency },
  })
}

export const getUserTasksOfPriority = ({ user_id, priority }) => {
  return db.task.findMany({
    where: { user_id, priority },
  })
}

export const rollTasksOver = ({ date }) => {
  var userId = context.currentUser.id
  var masterList = db.task.findMany({
    where: { userId, date },
  })

  console.log(masterList.length)
}
