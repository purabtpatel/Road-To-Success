/*App.js*/

import React, { useState, useEffect } from 'react'

import { gapi } from 'gapi-script'
import { GoogleLogin, GoogleLogout } from 'react-google-login'

function App() {
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
    <div>
      <h2>Your road to success starts here!</h2>
      <br />
      <br />
      {profile ? (
        <div>
          <img src={profile.imageUrl} alt="user" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <GoogleLogout
            clientId={clientId}
            buttonText="Log out"
            onLogoutSuccess={logOut}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  )
}
export default App
