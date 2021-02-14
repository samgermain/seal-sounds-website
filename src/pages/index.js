import React from "react";
import '../styles/layout.scss';
import '../styles/animation.scss';
import { Link, graphql } from "gatsby";

import { 
    faFacebook,
    faTwitter,
    faLinkedin,
    faGooglePlay,
    faAppStore
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import Image from "gatsby-image";
import SEO from "../components/seo";
import EmailForm from "../components/EmailForm";

const styles = {
    bottom:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position:"absolute",
        bottom: 0,
        color: "white"
    },
    img:{
        zIndex: 1000
    },
    emailForm:{
        backgroundColor: "black",
        padding: 100,
        marginTop: -80
    },
    icons: {
        width: 250,
    },
    title: {
        fontSize: 50
    }
};

const IndexPage = ({data}) => {
    console.log(data)
    const {
        sealIcon:{
            childImageSharp:{
                fluid: sealImageProps
            }
        }
    } = data;

    return (
        <div >
            <SEO title="Seal Sounds Mobile App" />
            <div dangerouslySetInnerHTML={{ __html: `
            <video
                loop
                muted
                autoplay
                playsinline
                src="https://seal-sounds.s3.us-east-2.amazonaws.com/flashy-star-background.webm"
                class='background-video'
            ></video>
            `}}>
            </div>
            <div className="d-flex flex-column">
            <div id='container'>
                <div id="spinning-circle">
                    <div id="inner-circle">
                        <Image
                            className=".img"
                            fluid={sealImageProps}
                            alt="A transparent background vector graphic of a seal"
                        />
                    </div>
                </div>
            </div>
            <div id="text" className="mt-2">
                <h1 style={styles.title}>Download Seal Sounds</h1>
                <div id="links">
                    <a href="#" id="app-store-link" disabled={true}>
                        <FontAwesomeIcon
                            size="2x"
                            icon={faAppStore}
                        />
                        <span className="link-text">App Store</span>
                        <span>Currently Unavailable</span>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.samgermain.sealsoundsapp&hl=en"
                        id="google-play-link"
                    >
                        <FontAwesomeIcon
                            size="2x"
                            icon={faGooglePlay}
                        />
                        <span className="link-text">Google Play</span>
                    </a>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div style={styles.bottom}>
                        <div style={styles.icons} className="d-flex justify-content-between align-items-center mb-3">
                            <a href="https://www.facebook.com/SealSounds">
                                <FontAwesomeIcon
                                    
                                    icon={faFacebook}
                                />
                            </a>
                            <a href="https://twitter.com/soundsseal" >
                                <FontAwesomeIcon
                                    
                                    icon={faTwitter}
                                />
                                
                            </a>
                            <a href="https://linkedin.com/sealsoundsapp" >
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                />
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div style={styles.emailForm} className="d-flex flex-column align-items-center justify-content-between">
                    <div className="col-md-8 col-11 mx-auto"><EmailForm /></div>
                    <Link to="/Privacy">Privacy Policy</Link>
                </div>
                </div>
                {/* <div id="cover">LOADING</div> */}
            </div>
        </div>
    );
};

export default IndexPage;

export const query = graphql`
    query MyQuery {
        sealIcon: file(name: {eq: "seal-icon-transparent"}) {
            childImageSharp {
                fluid(maxWidth: 700) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
    }  
`;

