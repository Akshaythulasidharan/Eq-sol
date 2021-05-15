import React, { useState,useEffect } from 'react'
import Webcam from "react-webcam";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Link} from 'react-router-dom'

export default function Camera() {

  
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
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
            <button onMouseDown={capture} onMouseUp={toggle} className="btn camera-btn" >
            <i class="fas fa-camera"></i> </button>
            </div>

            <Modal size="xl"  centered fade isOpen={modal} toggle={toggle} >
              <ModalBody  >
                <div style={{height:"50px"}} ></div>
                <div className="container">
                <img src={imgSrc} height="450" className="modal-img" />
                </div>
                <div style={{height:"20px"}} ></div>
                  <div className="text-center">
                  <button onClick={toggle} className="btn btn-home"  style={{margin:"20px"}} >Take Another Pic</button>
                  <Link to={{
                    pathname: `/api`,
                    state: {imgSrc},
                    test: "hii"
                  }}>
                    <button className="btn btn-home" style={{margin:"20px"}} >Proceed</button>
                  </Link>
                  </div>

              </ModalBody>
            </Modal>


            

        </div>
    )

    }

