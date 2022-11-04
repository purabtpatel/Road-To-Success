import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

import AppointmentItem from 'src/components/AppointmentItem/AppointmentItem'


const HomePage = () => {
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color: #717891' }} />

      <div className="body">
        <MetaTags title="Home" description="Home page" />
        <BlogLayout />
      </div>
      <div className="footer"></div>
      <AppointmentItem />
    </>
  )
}

export default HomePage
