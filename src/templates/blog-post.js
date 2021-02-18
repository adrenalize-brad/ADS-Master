import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PinterestIcon from '@material-ui/icons/Pinterest';
import RedditIcon from '@material-ui/icons/Reddit';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import { FacebookShareButton, FacebookMessengerShareButton, LinkedinShareButton, TwitterShareButton, PinterestShareButton, RedditShareButton, WhatsappShareButton, EmailShareButton } from 'react-share'
import Footer from '../components/footer'

function BlogPostTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextPost, page, previousPost },
}) {

  return (
    <div>

    <article className="post divide-y divide-gray-500">
      
      <header className="header">

        <h1>{page.title}</h1>

        <div className="sub-header pb-2 pb-5">

          <div className="author pt-1">

            <div className="avatar">
              <Img fluid={authorImage.localFile.childImageSharp.fluid} className="rounded-full" fadeIn={false} />
            </div>

            <div className="profile flex-grow">

              <h5>{page.author.name}</h5>

              {page.author.title && (
                  <React.Fragment>    
                    <p>{page.author.title}</p>
                  </React.Fragment>
              )}
                          
            </div>
                
          </div>


          <div className="time">
            <time dateTime={page.date}><p>{page.date}</p></time>
          </div>   

        </div>         

      </header>

      <div className="content py-5">

        <div className="excerpt pb-5 mx-3">
          <p>{page.excerpt}</p>
        </div>

        <div className="image">
          {coverImage && (
              <Img
                fluid={coverImage.localFile.childImageSharp.fluid}
                className="post-image"
                fadeIn={false}
              />
            )}
        </div>

        <div className="body pt-6 pb-2 mx-3">
          <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
        </div>

        

      </div>

      

      <footer>

        {(nextPost || previousPost) && (

          <div className="footer-post-nav pt-2">

             {previousPost && (

                <Link to={`/posts/${previousPost.slug}`}>

                  <div className="previous text-left py-3">
                    
                    <div className="row"> 
                      <ChevronLeftRoundedIcon/><h3>Previous Post</h3>
                    </div>

                    <div className="link ml-6">
                      <h5>{previousPost.title}</h5>
                    </div>
                      
                  </div>

                </Link>

              )}

<div className="social-sharing text-center">

  <div className="wrapper">

<p>Be Cool. Share with your friends.</p>

  <FacebookShareButton 
    url={`/posts/${page.slug}`}
    quote={page.excerpt}
    hashtag={`#${page.title}`}
  ><FacebookIcon/></FacebookShareButton>

  <FacebookMessengerShareButton
    url={`/posts/${page.slug}`}
  ><i className="fab fa-facebook-messenger"/></FacebookMessengerShareButton>

  <LinkedinShareButton 
    url={`/posts/${page.slug}`}
    title={page.title}
    summary={page.excerpt}
    source="https://www.adrenalizedigital.ca"
  ><LinkedInIcon/></LinkedinShareButton>

  <TwitterShareButton 
    url={`/posts/${page.slug}`}
    title={page.title}
    hashtags={["adrenalizeDigital,webDev"]}
  ><TwitterIcon/></TwitterShareButton>

  <PinterestShareButton 
    url={`/posts/${page.slug}`}
    media={coverImage.localFile}
    description={page.excerpt}
  ><PinterestIcon/></PinterestShareButton>

  <RedditShareButton 
    url={`/posts/${page.slug}`}
    title={page.title}
  ><RedditIcon/></RedditShareButton>

  <WhatsappShareButton 
    url={`/posts/${page.slug}`}
    title={page.title}
  ><WhatsAppIcon/></WhatsappShareButton>

  <EmailShareButton 
    url={`https://www.adrenalizedigital.ca/posts/${page.slug}`}
    subject={page.title}
    body={page.excerpt}
  ><EmailIcon/></EmailShareButton>
</div>
</div>


              {nextPost && (
                <Link to={`/posts/${nextPost.slug}`}>

                  <div className="next text-right py-3">

                    <div className="row"> 
                      <h3>Next Post</h3><ChevronRightRoundedIcon/>
                    </div>

                    <div className="link mr-6">
                      <h5>{nextPost.title}</h5>         
                    </div>

                  </div>

                </Link>  

              )}

          </div>
        )}
    
        </footer>

    </article>

    <Footer/>

    </div>
  )
}

export const pageQuery = graphql`
  fragment AssetFields on GraphCMS_Asset {
    id
    localFile {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }

  query BlogPostQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      ...AssetFields
    }
    coverImage: graphCmsAsset(
      coverImagePost: { elemMatch: { id: { eq: $id } } }
    ) {
      ...AssetFields
    }
  }
`

export default BlogPostTemplate

