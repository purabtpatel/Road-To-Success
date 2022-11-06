import { render } from '@redwoodjs/testing/web'

import TestingGooglePage from './TestingGooglePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('TestingGooglePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestingGooglePage />)
    }).not.toThrow()
  })
})
