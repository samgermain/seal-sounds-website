import React, {useState} from "react";
import '../styles/layout.scss';
import '../styles/animation.scss';
import { Link, graphql } from "gatsby";

import {EmailForm, Seo, Seal2Animation, Seal1Animation, Soundboard, soundFiles} from '../components'
import SpaceVideo from "../components/SpaceVideo";
import { InstagramLink, TikTokLink, FBLink, GooglePlayLink, AppStoreLink } from "../components/externalLinks";

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

const SocialLinks = ({className, ...props}) => (
    <div className={`w-100 d-flex align-items-center justify-content-center ${className}`} {...props}>
        <div style={styles.bottom}>
            <div 
                style={styles.icons} 
                className="d-flex justify-content-between align-items-center mb-3"
            >
                <InstagramLink />
                <FBLink />
                <TikTokLink />
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
                title="Seal Sounds"
                desc="Seal Sounds, a website that lets you hear seal voices!"
                image="https://sealsounds.site/static/95dc766cf62d4841a4f3b5f9099150a4/f3583/seal-with-whiskers.png"
                url="https://sealsounds.site"
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
                        {/* <SpaceVideo /> */}
                        <div className="d-flex justify-content-around flex-column flex-md-row w-100">
                            {/* <div id="text" className="mt-2">
                                <App />
                                <EmailPrivacyPolicy />
                            </div> */}
                            <div className="w-50 d-flex justify-content-center align-items-center mx-auto my-5">
                                <Seal2Animation />
                            </div>
                            <div id="spinning-circle" className="w-50 my-5">
                                <div id="inner-circle" className="mx-auto d-flex justify-content-center">
                                    <Seal1Animation />
                                </div>
                            </div>
                        </div>
                        <div className="my-5">
                            <SocialLinks    />
                        </div>
                        <div style={{height: "100px"}}></div>
                    </div>
                    <div style={{height: "100px"}}></div>
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

