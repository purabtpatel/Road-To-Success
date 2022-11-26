import React, { useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'
import AuthCallbackCell from 'src/components/AuthCallbackCell'
import { useAuth } from '@redwoodjs/auth'

const AuthCallbackPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  console.log("AuthCallbackPage render")
  const queryParams = new URLSearchParams(window.location.search)
  const code = queryParams.get('code')

  if(isAuthenticated && currentUser){
  	  return <AuthCallbackCell code={code}/>
  }
  return <div></div>
}

export default AuthCallbackPage
