import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  return (
    <>
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
          Manage <span id="your">your</span> task,<br></br>{' '}
          <span id="your">your</span> way
        </h1>
      </div>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
