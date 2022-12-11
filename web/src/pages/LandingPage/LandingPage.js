
/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react'
import React, { useCallback } from 'react';
import { useAuth } from '@redwoodjs/auth'

import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

import TaskView from 'src/components/TaskView/TaskView'
import CalendarView from 'src/components/CalendarView'




import './../../styles.css'

const authorizeApp = () => {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https://www.googleapis.com/auth/calendar.events&include_granted_scopes=true&response_type=code&client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URL}`
}

const renderGreeting = () => {

  return (
    <div className="col-flex p-30">
      <h1 className="mb-heading">
        Manage your tasks,<br></br>our way
      </h1>
      <h3 className="sub-header">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt bibendum scelerisque. In at ante tincidunt nisi porta laoreet. Quisque hendrerit turpis quis urna volutpat eleifend. Maecenas porttitor commodo tristique. Ut sit amet dignissim lectus.
      </h3>
    </div>
  )
}
const renderAuthenticated = () => {

  return (
    <div className="mb-main">
      <div id="calendarContainer" style={{ position: "relative" }}>
        <CalendarView />
      </div>
      <div id="taskviewContainer" style={{ position: "relative" }}>
        <TaskView />
      </div>
    </div>
  )
}


const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      {isAuthenticated
        ? renderAuthenticated()
        : renderGreeting()
      }
    </>
  )
}

export default LandingPage


