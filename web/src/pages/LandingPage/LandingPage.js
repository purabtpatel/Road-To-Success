/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'

import { gapi } from 'gapi-script'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

const LandingPage = () => {
  const [profile, setProfile] = useState([])
  const clientId =
    '1027630562583-sn9u8us2achggafu7pooti5ojjjgvodv.apps.googleusercontent.com'
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      })
    }
    gapi.load('client:auth2', initClient)
  })

  const onSuccess = (res) => {
    setProfile(res.profileObj)
  }

  const onFailure = (err) => {
    console.log('failed', err)
  }

  const logOut = () => {
    setProfile(null)
  }

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
                {/* <Link to={routes.home()}>Log In</Link>: ( */}
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Log In"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
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
