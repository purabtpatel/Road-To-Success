// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <MonthlyView {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import MonthlyView from './MonthlyView'

export const generated = () => {
  return <MonthlyView />
}

export default {
  title: 'Components/MonthlyView',
  component: MonthlyView,
}
