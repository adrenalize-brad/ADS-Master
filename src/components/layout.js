import React from 'react'
import Header from './header'
import SEO from './seo'

function Layout({ children, pageContext: { page } }) {
  return (
    <React.Fragment>
      <SEO {...page} />
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow w-full">
          <Header />
          <main className="flex-grow page-wrapper">
            {children}
          </main>   
        </div>
      </div>
    </React.Fragment>
  )
}

export default Layout

