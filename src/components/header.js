import React, { useEffect, useState } from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import '../styles/style.scss'

function Header() {

  const data  = useStaticQuery(graphql`
    {
      menuItems: allGraphCmsMenuItem {
        nodes {
          id
          title
          slug
        }
      },
      siteLogo: graphCmsSiteId {
        logo {
          localFile {
            childImageSharp {
              fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `)

  const menuItems = data.menuItems;
  const navLogo = data.siteLogo;

  return (

    <header>

      <div className="navigation flex">

        <div className="logo-wrapper">
          <Img fluid={navLogo.logo.localFile.childImageSharp.fluid} />  
        </div>

        <div className="menu-wrapper">

          {menuItems.nodes.map((menuItem) => {

              return (

                <Link key={menuItem.id} to={`/${menuItem.slug}`} className="menu-item"
                >
                  {menuItem.title}

                </Link>

              )
          })}

        </div>

        <div className="social-wrapper">

        </div>

      </div>
        
    </header>
  )
}

export default Header
