import { MetaTags } from '@redwoodjs/web'
import { Helmet } from '@redwoodjs/web'

import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'

const HomePage = () => {
  return (
    <>
      <Helmet bodyAttributes={{ style: 'background-color: #717891' }} />

      <div className="body">
        <MetaTags title="Home" description="Home page" />
        <BlogLayout />
      </div>
    </>
  )
}

export default HomePage
