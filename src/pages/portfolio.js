import React, { useState } from "react";
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Flip from 'react-reveal/Flip';
import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Footer from '../components/footer'


function PortfolioPage({ data: { allGraphCmsPortfolioItem } }) {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

    return(

        <div className="divide-y divide-gray-500">
      
            <div className="section-header pb-5">
                <h1>Our Portfolio</h1>
                <h3>a collection of excellence</h3>
            </div>
    
            <div className="wrapper">

                <div className="content-wrapper">

                    <div className="portfolio-items-wrapper">

                        {allGraphCmsPortfolioItem.nodes.map((portfolioItem) => {

                        return(

                        <Flip bottom>

                            <div className="flip-card">
                                                        
                                <div className="flip-card-inner">

                                    <div className="flip-card-front"> 
                                            
                                        <div className="img-text-wrapper">

                                            <div className="portfolio-logo-wrapper">
                                                <Img fluid={portfolioItem.logo.localFile.childImageSharp.fluid}/>
                                            </div>
                                        
                                            <div className="subtitle">

                                                <div className="excerpt">

                                                    <MDXRenderer>{portfolioItem.excerpt.markdownNode.childMdx.body}</MDXRenderer>

                                                </div>
                                                
                                                <div className="portfolio-button-wrapper text-center">
                                                    <div className="button" onClick={handleToggle}  onKeyPress={handleToggle} role="button">Learn More</div>           
                                                </div>

                                            </div>

                                        </div>

                                    </div>   

                                    <div className="portfolio-bg-wrapper">
                                        <Img fluid={portfolioItem.backgroundImage.localFile.childImageSharp.fluid} className="portfolio-img-background" alt=""/>
                                    </div>

                                </div>

                            </div></Flip>

                            
                            )})}

                    </div>

                </div>
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

            

            <Footer/>

        </div>

    )
}

export const indexPageQuery = graphql`
{
  allGraphCmsPortfolioItem {
      nodes {
        logo {
          localFile {
            childImageSharp {
              fluid{
                  ...GatsbyImageSharpFluid
              }
            }
          }
        }
        backgroundImage {
            localFile {
              childImageSharp {
                fluid{
                    ...GatsbyImageSharpFluid
                }
              }
            }
          }
        title
        id
        excerpt {
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

export default PortfolioPage