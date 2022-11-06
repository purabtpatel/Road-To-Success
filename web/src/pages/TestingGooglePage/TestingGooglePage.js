import { main } from 'api/src/functions/gcalendar.js'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const TestingGooglePage = () => {
  return (
    <>
      <MetaTags title="TestingGoogle" description="TestingGoogle page" />

      <h1>TestingGooglePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/TestingGooglePage/TestingGooglePage.js</code>
        {main}
      </p>
      <p>
        My default route is named <code>testingGoogle</code>, link to me with `
        <Link to={routes.testingGoogle()}>TestingGoogle</Link>`
      </p>
    </>
  )
}

export default TestingGooglePage
