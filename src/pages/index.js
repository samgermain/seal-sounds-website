import React, {useState} from "react";
import '../styles/layout.scss';
import '../styles/animation.scss';
import { Link, graphql } from "gatsby";

import {EmailForm, Seo, Seal2Animation, Seal1Animation, Soundboard, soundFiles} from '../components'
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

const SocialLinks = () => (
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
);

const App = () => (
    <>
        <h1 style={styles.title}>Download Seal Sounds</h1>
        <div id="links">
            <AppStoreLink />
            <GooglePlayLink />
        </div>
        <SocialLinks />
    </>
)

const EmailPrivacyPolicy = () => (
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
);

// for (sealType, soundList) of Object.entries(soundNames) {
//     for (name in soundList) {
//         import 
//     }
// }

const IndexPage = ({data}) => {

    // const {
    //     sealIcon:{
    //         childImageSharp:{
    //             fluid: sealImageProps
    //         }
    //     }
    // } = data;

    const [ sealType, setSealType ] = useState('Weddell');

    const SealTypeButton = ({name}) => (
        <button
            className="seal-type-button"
            onClick={() => setSealType(name)}
        >
            {name}
        </button>
    );

    return (
        <div style={{backgroundColor: "black"}}>
            <Seo 
                title="Seal Sounds Mobile App"
                desc="Seal Sounds, a must have mobile app that lets you hear seal voices!"
                image="https://sealsounds.netlify.app/static/fefaa2ae86fc90bac38df5dd68d88ef3/f3583/seal-with-whiskers.png"
                url="https://sealsounds.netlify.app"
            />
            <div>
                <div className="d-flex flex-column">
                    <div style={{height: "100px"}} className="d-flex justify-content-between align-items-center w-100 px-5">
                        <SealTypeButton name="Grey"></SealTypeButton>
                        <span className="divider">|</span>
                        <SealTypeButton name="Weddell"></SealTypeButton>
                        <span className="divider">|</span>
                        <SealTypeButton name="Harp"></SealTypeButton>
                    </div>
                    <Soundboard sounds={soundFiles[sealType]}></Soundboard>
                    <div className="position-relative">
                        <SpaceVideo />
                        <div id='container'>
                            <div id="text" className="mt-2">
                                <App />
                                <EmailPrivacyPolicy />
                            </div>
                            <div id="spinning-circle">
                                <div id="inner-circle">
                                    <Seal1Animation />
                                </div>
                            </div>
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
        sealIcon: file(name: {eq: "seal-with-whiskers"}) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                }
            }
        }
    }  
`;

