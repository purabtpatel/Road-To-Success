import { render } from '@redwoodjs/testing/web'

import MonthlyView from './MonthlyView'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MonthlyView', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MonthlyView />)
    }).not.toThrow()
  })
})
