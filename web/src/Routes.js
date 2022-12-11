import { Router, Route, Set } from '@redwoodjs/router'
import BannerLayout from './layouts/BannerLayout/BannerLayout'

const Routes = () => {
  return (

    <Router>
      <Set wrap={BannerLayout}>
        <Route path="/authcallback" page={AuthCallbackPage} name="authCallback" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Route path="/" page={LandingPage} name="landingPage" />
      </Set>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
