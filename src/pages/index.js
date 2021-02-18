import React from 'react'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import { Link } from 'gatsby'
import Footer from '../components/footer'


function IndexPage(){


    return(

<div className="divide-y divide-gray-500">
      
      <div className="section-header pb-5">
          <h1>Welcome</h1>
          <h3>to Adrenalize Digital</h3>
      </div>

      <div className="wrapper">

          <div className="content-wrapper">

              <div className="construction mx-auto py-5">
                  <h3 className="text-center pt-5">This page is</h3>
                  <h2 className="text-center">Under Construction</h2>
                  <p className="text-center pt-3">Check back soon!</p>
              </div>

          </div>

          <div className="services-caption portfolio-caption py-5">
      
                      <Fade delay={300}>
                      <div className="more flex flex-row justify-center w-100">
                          <h4>Ready to reap the benefits of working with people who truly care</h4><i className="fas fa-question ml-0 faa-slow faa-pulse animated"/>
                      </div>
                      </Fade>

                      <Bounce up delay={200}>
                          <div className="more flex flex-row justify-center w-100">
                              <Link to="/contact" smooth={true} duration={500} className="portfolio-connect-link py-3"><i className="fas fa-comments"/><h3>Click here to connect with us today!</h3></ Link>
                          </div>
                      </Bounce>
                  </div>

      </div>

      <Footer/>

  </div>

    )
}



export default IndexPage