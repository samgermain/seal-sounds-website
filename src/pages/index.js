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
import {EmailForm, Seo, Seal2Animation, Seal1Animation} from '../components'

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

    const {
        sealIcon:{
            childImageSharp:{
                fluid: sealImageProps
            }
        }
    } = data;

    return (
        <div >
            <Seo 
                title="Seal Sounds Mobile App"
                desc="Seal Sounds, a must have mobile app that lets you hear seal voices!"
                image="https://sealsounds.netlify.app/static/74eacaa540ff549006a61adccc5500e1/73c85/seal-icon-transparent.png"
                url="https://sealsounds.netlify.app"
            />
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
                        <Seal1Animation />
                    </div>
                </div>
            </div>
            <div id="text" className="mt-2">
                <h1 style={styles.title}>Download Seal Sounds</h1>
                <div id="links">
                    <a href="#" id="app-store-link" disabled={true}>
                        <FontAwesomeIcon size="2x" icon={faAppStore} />
                        <span className="link-text">App Store</span>
                        <span>Currently Unavailable</span>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.samgermain.sealsoundsapp&hl=en"
                        id="google-play-link"
                    >
                        <FontAwesomeIcon size="2x" icon={faGooglePlay} />
                        <span className="link-text">Google Play</span>
                    </a>
                </div>
                <div className="w-100 d-flex align-items-center justify-content-center">
                    <div style={styles.bottom}>
                        <div style={styles.icons} className="d-flex justify-content-between align-items-center mb-3">
                            <a href="https://www.facebook.com/SealSounds">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://twitter.com/soundsseal" >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://linkedin.com/sealsoundsapp" >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                        
                    </div>
                </div>
                    <div style={styles.emailForm} className="d-flex flex-column align-items-center justify-content-between">
                        <div className="col-md-8 col-11 mx-auto"><EmailForm /></div>
                        <Link className="mb-5" to="/Privacy">Privacy Policy</Link>
                        {/* <div style={{height: '100px'}}></div> */}
                        <Seal2Animation className="mt-5" />
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

