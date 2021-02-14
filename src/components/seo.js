/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const  SEO = ({ desc, image, url, title, lang }) => {


  return (
    <Helmet
    htmlAttributes={{ lang: "en" }}
    > 
    
      <meta charSet="utf-8" />
      <link rel="canonical" href={url} />

      <script defer src={`https://www.google.com/recaptcha/api.js? r=${Math.random()}`} ></script>

      {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self'" />;//* img-src https://*; child-src 'none';"> */}
      {/* <meta name="google-site-verification" content="6Le1Y1caAAAAAE-SskS-F9EHwsxdwi_MlJN5UF8q" /> */}

      <meta name="description" content={desc} />
      <meta name="theme-color" content={"#fff"} />
      <meta name="author" content="Sam Germain" />
      
      <meta name="og:url" content={url} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={desc} />
      <meta property='og:type' content='website' />
      <meta property="og:image" content={image} />
      
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  title: "Seal Sounds Mobile App",
  desc: "Seal Sounds, a must have mobile app that lets you hear seal voices!",
  image: "https://sealsounds.netlify.app/static/74eacaa540ff549006a61adccc5500e1/73c85/seal-icon-transparent.png",
  url: "https://sealsounds.netlify.app"
}

SEO.propTypes = {
  desc: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default SEO
