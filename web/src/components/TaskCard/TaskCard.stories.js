// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <TaskCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import TaskCard from './TaskCard'

export const generated = () => {
  var task = {status: 'Started', title: 'Code', urgency: "High", priority: 1};
  return <TaskCard task={task} />
}

export default {
  title: 'Components/TaskCard',
  component: TaskCard,
}
