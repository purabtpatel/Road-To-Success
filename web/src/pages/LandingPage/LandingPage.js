/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

import AppointmentsCell from 'src/components/AppointmentsCell'

const authorizeApp = () => {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https://www.googleapis.com/auth/calendar.events&include_granted_scopes=true&response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`
}

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <div className='LandingPage'>
      <header>
        <div className="navigation">
          <nav>
            <ul>
              <li>
                {isAuthenticated ? (
                  currentUser && !currentUser.gCalSyncEnabled ? (
                    <>
                      <Button
                        style={{ color: 'black' }}
                        onClick={() => authorizeApp()}
                      >
                        Sync with Google 📅{' '}
                      </Button>{' '}
                      <Button style={{ color: 'black' }} onClick={logOut}>
                        Log Out 👋
                      </Button>
                    </>
                  ) : (
                    <Button style={{ color: 'black' }} onClick={logOut}>
                      Log Out 👋
                    </Button>
                  )
                ) : (
                  <Link to={routes.login()}>
                    <Button style={{ color: 'black' }}>Log In 🖋</Button>
                  </Link>
                )}
              </li>
              {currentUser ? (
                <li
                  style={{ fontSize: '1.7rem', fontWeight: '800' }}
                >{`Signed in as ${currentUser.email}`}</li>
              ) : null}

              <li style={{float:'left', display:'inline', padding:'15px 32px', fontSize:'40px'}}>
                <Link to={routes.landingPage()}>Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="horizontal-bar"></div>
      {!currentUser || !currentUser.gCalSyncEnabled ? (
        <div className="heading">
          <h1>
            {' '}
            Manage <span id="your">your</span> tasks,<br></br>{' '}
            <span id="your">your</span> way
          </h1>
        </div>
      ) : (
        <div></div>
      )}
      {isAuthenticated && currentUser && currentUser.gCalSyncEnabled ? (
        <AppointmentsCell
          start={'2021-11-01T12:00:00Z'}
          end={'2023-11-01T12:00:00Z'}
        />
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default LandingPage
