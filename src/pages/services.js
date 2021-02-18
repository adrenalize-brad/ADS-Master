import React from 'react'
import { graphql, Link } from 'gatsby'
import { Accordion, AccordionTab } from 'primereact/accordion';
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Footer from '../components/footer'


function ServicesPage({ data: { allGraphCmsService } }) {

    return(

        <div className="divide-y divide-gray-500">
      
            <div className="section-header pb-5">
                <h1>Our Services</h1>
                <h3>how can we help?</h3>
            </div>
    
            <div className="wrapper">

                <div className="content-wrapper">

                    <div className="services-caption py-3">

                        <div className="more pb-3">
                        <h5>To find out a little more about the dynamic services we offer, click on any one of our specialties below:</h5>
                        </div>

                        <Accordion activeIndex={0} className="services-accordion py-5" expandIcon="fas fa-plus-square" collapseIcon="fas fa-minus-square">

                        {allGraphCmsService.nodes.map((service) => {

                            return(

                            <AccordionTab header={service.title} key={service.id}>

                                <h3>{service.tagline}</h3>

                                <div className="services-list-item py-5">

                                    <div className="services-item-image">
                                        <Img fluid={service.image.localFile.childImageSharp.fluid}/>
                                    </div>

                                    <div className="services-list-item-caption">

                                    <MDXRenderer>{service.content.markdownNode.childMdx.body}</MDXRenderer>
                                        
                                        <div className="button-wrapper text-center">
                                            <Link to={`/${service.slug}`} className="button">
                                                Learn More
                                            </Link> 
                                        </div>

                                    </div>

                                </div>

                            </AccordionTab>

                            
                            )})}

                        </Accordion>

                    
                                    <div className="more pt-4 justify-start">
                                        <h4>The Adrenalize Mindset</h4><i class="fas fa-angle-double-right"/>
                                    </div>
                                
                                    <p className="pb-4">Our approach is simple - honest, with no-strings-attached. We have specific core values that our company has been structured and built around, and we stay true to them. They exemplify our committment not only to our clients but to ourselves, and it's how we asure you we have your best interests in mind. At the end of the day your success is our success, and we put 100% into achieving that. </p>

                                    <div className="more justify-start">
                                        <h4>Our Methods</h4><i class="fas fa-angle-double-right"/>
                                    </div>
                                
                                    <p>When you approach us to work together on any project, we do the hard work right away to get things moving in the right direction. Every project initiation follows a proven process to ensure we have all the information we need to efficiently make your dreams a reality.</p>

                                    <p className="pb-4">Throughout the project we provide regular progress updates and collect as much on-the-fly feedback from you as possible to avoid stagnation. We make a point to include you in every important step along the way so you can stay excited knowing precisely what's waiting for you at project turnover.</p>
                                
                                    <div className="more justify-start">
                                        <h4>Our Pricing Philosophy</h4><i class="fas fa-angle-double-right"/>
                                    </div>
                    
                                    <p className="pb-5">Say goodbye to tiered price plans and so-called one-size-fits-all packages that try to fit your needs within them and charge your for a bunch of other stuff you don't need. With us, each proposal is designed specifically around your project goals and priced accordingly, so you can rest easy knowing you're getting exactly what you're paying for.</p>
                                

                                    <div className="services-caption portfolio-caption py-5">
            
            <Fade delay={200}>
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

                </div>
 
            </div>

            <Footer/>

        </div>

    )
  }

  export const indexPageQuery = graphql`
  {
    allGraphCmsService {
        nodes {
          image {
            localFile {
              childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
          title
          tagline
          id
          slug
          content {
            markdownNode {
              childMdx {
                body
              }
            }
          }
        }
      }
  }
`

export default ServicesPage