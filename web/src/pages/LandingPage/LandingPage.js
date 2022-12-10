/* eslint-disable no-unused-vars */
import { Button } from '@chakra-ui/react'
import React, { useCallback } from 'react';
import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

import AppointmentsCell from 'src/components/AppointmentsCell'
import TasksCell from 'src/components/TasksCell'
import TaskView from 'src/components/TaskView/TaskView'
import CalendarView from 'src/components/CalendarView'
import { Toaster } from '@redwoodjs/web/toast'
import { toast } from '@redwoodjs/web/toast'

import './styles.css'

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

const LandingPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <Toaster />
      <header>
        <nav className="mb-nav">
          <Link to={routes.landingPage()} className="mb-nav-logo">GYST</Link>
          <div className="mb-nav-link-container">
            {isAuthenticated
            ? currentUser.gCalSyncEnabled
              ? <Button onClick={()=>{toast('✌️ see you later', {duration:2000}); logOut();}}>Log Out</Button>
              : <><Button onClick={() => authorizeApp()}>Sync with Google</Button><Button onClick={()=>{toast('✌️ see you later', {duration:2000}); logOut();}}>Log Out</Button></>
            : <Link to={routes.login()}><Button>Log In</Button></Link>
            }
          </div>
        </nav>
      </header>
      {isAuthenticated
        ? <div className="mb-main ml-1"><div id="calendarContainer"><CalendarView/></div><div id="taskviewContainer"><TaskView/></div></div>
        : renderGreeting()
      }
    </>
  )
}

export default LandingPage

