import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { useLocation } from '@reach/router'
import cx from 'classnames'
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
          iconCode
        }
      },
      socialItems: allGraphCmsSocialItem {
        nodes {
          id
          url
          iconCode
          classNames
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
  const socialItems = data.socialItems;

  const location = useLocation()

  return (

    <header>

      <div className="navigation flex">

        <div className="logo-wrapper">
          <Link to="/">
            <Img fluid={navLogo.logo.localFile.childImageSharp.fluid} />  
          </Link>
        </div>

        <div className="menu-wrapper">

          {menuItems.nodes.map((menuItem) => {

          const isActive = location.pathname.startsWith(`/${menuItem.slug}`)

              return (

                <Link key={menuItem.id} to={`/${menuItem.slug}`} className={cx(
                  'menu-item',
                  {
                    'active': isActive,
                    '': !isActive,
                  }
                )}>
                  <i className={menuItem.iconCode}/><p className="menu-item">{menuItem.title}</p>
                </Link>

              )
          })}

        </div>

        <div className="social-wrapper">

          {socialItems.nodes.map((socialItem) => {

            return (

              <Link key={socialItem.id} to={socialItem.url} className="social-item" target="_blank">
                <div className={socialItem.classNames}><i className={socialItem.iconCode}/></div>
              </Link>

            )
            })}

        </div>

      </div>
        
    </header>
  )
}

export default Header