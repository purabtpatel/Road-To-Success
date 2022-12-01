import { Button } from '@chakra-ui/react'
import { useGoogleLogin } from '@react-oauth/google'

import { MetaTags } from '@redwoodjs/web'

const LoginTestPage = () => {
  const response = (tokenResponse) => {
    console.log(tokenResponse)
  }

  const login = useGoogleLogin({
    onSuccess: response,
    scope: 'https://www.googleapis.com/auth/calendar',
  })

  return (
    <>
      <MetaTags title="LoginTest" description="LoginTest page" />

      <Button onClick={() => login()}>Sign in with Google 🚀 </Button>
    </>
  )
}

export default LoginTestPage
