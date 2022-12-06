import { render } from '@redwoodjs/testing/web'

import AppointmentItem from './AppointmentItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppointmentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppointmentItem />)
    }).not.toThrow()
  })
})
