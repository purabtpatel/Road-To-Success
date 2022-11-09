import { GoogleLogin } from '@react-oauth/google'

import { MetaTags } from '@redwoodjs/web'

const LoginTestPage = () => {
  return (
    <>
      <MetaTags title="LoginTest" description="LoginTest page" />

      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse)
        }}
        onError={() => {
          console.log('Login Failed')
        }}
        auto_select
      />
    </>
  )
}

export default LoginTestPage
