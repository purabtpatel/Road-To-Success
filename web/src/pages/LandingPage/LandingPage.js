import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

import { GoogleLogin } from '@react-oauth/google'

const LandingPage = () => {
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color: #717891' }} />
      <header>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to={routes.home()}>Home</Link>
              </li>
              <li>
                <Link to={routes.home()}>Sign Up</Link>
              </li>
              <li>
                <Link to={routes.home()}>Log In</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="horizontal-bar"></div>
      <div className="heading">
        <h1>
          {' '}
          Manage <span id="your">your</span> tasks,<br></br>{' '}
          <span id="your">your</span> way
        </h1>
      </div>
    </>
  (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />

      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>

}

export default LandingPage
