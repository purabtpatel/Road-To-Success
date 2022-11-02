// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <AppointmentItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import AppointmentItem from './AppointmentItem'

export const generated = () => {
  return <AppointmentItem />
}

export default {
  title: 'Components/AppointmentItem',
  component: AppointmentItem,
}
