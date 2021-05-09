import React, { useState,useEffect } from 'react'
import Webcam from "react-webcam";

export default function Camera() {

  const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user"
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);


    return (
        <div>
            <div className="container-fluid" >
            <Webcam 
            audio={false}
            height={1080}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={1920}
            videoConstraints={videoConstraints}
            className="video-element"/>
            <img src={imgSrc}/>
            <button onClick={capture} className="btn camera-btn" >
            <i class="fas fa-camera"></i> </button>
            </div>

            

        </div>
    )

    }

