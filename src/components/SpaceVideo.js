import React from 'react';

const SpaceVideo = () => ( 
    <div dangerouslySetInnerHTML = {
        { __html: `
                <video
                    loop
                    muted
                    autoplay
                    playsinline
                    src="https://seal-sounds.s3.us-east-2.amazonaws.com/flashy-star-background.webm"
                    class='background-video'
                ></video>
            ` }
    } >
    </div>
);

export default SpaceVideo;