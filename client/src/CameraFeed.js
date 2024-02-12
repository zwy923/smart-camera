// src/CameraFeed.js
import React, { useRef, useEffect } from 'react';

const CameraFeed = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(stream => {
                    let video = videoRef.current;
                    if (video) {
                        video.srcObject = stream;
                        video.play();
                    }
                })
                .catch(err => {
                    console.error("Error accessing the camera: ", err);
                });
        }
    }, []);

    return (
        <div>
            <video ref={videoRef} width="720" height="560" />
        </div>
    );
};

export default CameraFeed;
