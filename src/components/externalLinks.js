import {
    faFacebook,
    // faTwitter,
    faLinkedin,
    faGooglePlay,
    faAppStore
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome'
import React from 'react';

export const FBLink = () => (
    <a href="https://www.facebook.com/SealSounds">
        <FontAwesomeIcon icon={faFacebook} />
    </a>
);

// export const TwitterLink = () => (
//     <a href="https://twitter.com/soundsseal" >
//         <FontAwesomeIcon icon={faTwitter} />
//     </a>
// );

export const LinkedInLink = () => (
    <a href="https://www.linkedin.com/company/sealsoundsapp" >
        <FontAwesomeIcon icon={faLinkedin} />
    </a>
);

export const AppStoreLink = () => (
    <a 
        href="/"
        id="app-store-link" 
        disabled={true}
    >
        <FontAwesomeIcon size="2x" icon={faAppStore} />
        <span className="link-text">App Store</span>
        <span>Currently Unavailable</span>
    </a>
);

export const GooglePlayLink = () => (
    <a
        href="https://play.google.com/store/apps/details?id=com.samgermain.sealsoundsapp&hl=en"
        id="google-play-link"
        disabled={true}
    >
        <FontAwesomeIcon size="2x" icon={faGooglePlay} />
        <span className="link-text">Google Play</span>
        <span>Currently Unavailable</span>
    </a>
);