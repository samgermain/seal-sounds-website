import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const  SEO = ({ 
  desc = "Seal Sounds, a must have mobile app that lets you hear seal voices!",
  image = "https://sealsounds.netlify.app/static/95dc766cf62d4841a4f3b5f9099150a4/f3583/seal-with-whiskers.png",
  url = "https://sealsounds.netlify.app",
  title = "Seal Sounds",
  lang = 'en',
}) => {

  return (
    <Helmet htmlAttributes={{ lang: lang }}> 
    
      <title>
        {title}
      </title>
      <meta name="author" content="Sam Germain" />

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
      {/* <meta property="og:image:alt" content="Seal Sounds logo" key="og:image:alt" />, */}
      
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={desc} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:card" content="summary" />


    </Helmet>
  )
};

SEO.propTypes = {
  desc: PropTypes.string,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SEO;
