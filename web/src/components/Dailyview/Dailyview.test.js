import { render } from '@redwoodjs/testing/web'

import Dailyview from './Dailyview'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Dailyview', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Dailyview />)
    }).not.toThrow()
  })
})
