import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'
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
  )
}

export default LandingPage
