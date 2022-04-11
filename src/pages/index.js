import React from "react";
import '../styles/layout.scss';
import '../styles/animation.scss';
import { Link, graphql } from "gatsby";

import {EmailForm, Seo, Seal2Animation, Seal1Animation} from '../components'
import SpaceVideo from "../components/SpaceVideo";
import { FBLink, TwitterLink, LinkedInLink, GooglePlayLink, AppStoreLink } from "../components/externalLinks";

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

    // const {
    //     sealIcon:{
    //         childImageSharp:{
    //             fluid: sealImageProps
    //         }
    //     }
    // } = data;

    return (
        <div >
            <Seo 
                title="Seal Sounds Mobile App"
                desc="Seal Sounds, a must have mobile app that lets you hear seal voices!"
                image="https://sealsounds.netlify.app/static/74eacaa540ff549006a61adccc5500e1/73c85/seal-icon-transparent.png"
                url="https://sealsounds.netlify.app"
            />
            <div>
                <SpaceVideo />
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
                            <AppStoreLink />
                            <GooglePlayLink />
                        </div>
                        <div className="w-100 d-flex align-items-center justify-content-center">
                            <div style={styles.bottom}>
                                <div 
                                    style={styles.icons} 
                                    className="d-flex justify-content-between align-items-center mb-3"
                                >
                                    <FBLink />
                                    <TwitterLink />
                                    <LinkedInLink />
                                </div>               
                            </div>
                        </div>
                        <div 
                            style={styles.emailForm} 
                            className="d-flex flex-column align-items-center justify-content-between"
                        >
                            <div className="col-md-8 col-11 mx-auto">
                                <EmailForm />
                            </div>
                            <Link className="mb-5" to="/Privacy">Privacy Policy</Link>
                            <Seal2Animation className="mt-5" />
                        </div>
                    </div>
                    {/* <div id="cover">LOADING</div> */}
                </div>
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

