import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Footer from '../components/footer'

function BlogPage({ data: { allGraphCmsPost } }) {

  return (

    <div className="divide-y divide-gray-500">
      
      <div className="section-header pb-5">
        <h1>
          Our Blog
        </h1>
        <h3>
          aka whats good
        </h3>
      </div>

      <div className="post-list py-2">

        <div className="wrapper">

        {allGraphCmsPost.nodes.map((post) => {

          return (

            <article key={post.id} className="item">       

              <div className="image">
                <Link to={`/posts/${post.slug}`} >
                  <Img fluid={post.coverImage.localFile.childImageSharp.fluid}  className="post-image" />
                </Link>
              </div>

              <div className="content">

                <div className="header">

                  <Link to={`/posts/${post.slug}`} > <h2>{post.title}</h2></Link>

                  <time dateTime={post.date}><p>{post.date}</p></time>

                </div>

                <div className="excerpt">

                  {post.excerpt && (
                    <div>
                      <p>{post.excerpt}</p>
                    </div>
                  )}

                </div>

                <div className="link">
                  <Link to={`/posts/${post.slug}`} aria-label={`Read "${post.title}"`} className="button">
                    Read More
                  </Link>   
                </div>

              </div>

            </article>
                 
          )
        })}

      </div>
      </div>

      <Footer/>
      
    </div>
  )
}

export const indexPageQuery = graphql`
  {
    allGraphCmsPost(sort: {fields: date, order: DESC}) {
      nodes {
        id
        date: formattedDate
        excerpt
        slug
        title      
        coverImage {
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
  }
`

export default BlogPage



