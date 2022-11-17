import { render } from '@redwoodjs/testing/web'

import DisplayTasksPage from './DisplayTasksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DisplayTasksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayTasksPage />)
    }).not.toThrow()
  })
})
