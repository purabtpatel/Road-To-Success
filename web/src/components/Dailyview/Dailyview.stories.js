// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <Dailyview {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Dailyview from './Dailyview'

export const generated = () => {
  return <Dailyview />
}

export default {
  title: 'Components/Dailyview',
  component: Dailyview,
}
