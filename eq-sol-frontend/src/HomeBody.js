
//the module which appears at starting, shows heading and two options ie, capture pic using Webcam and Upload.
//when camera click, HomeBody navigates to Camera.js, visit it.
// when upload click, a Modal ie, a dialog box appears which displays Upload.js, visit it.
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Modal } from 'reactstrap';
import camera from "./images/camera.png"
import upload from "./images/upload.png"
import Upload from './Upload';

export default function HomeBody() {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return (
        <div className="container">
            <div className="row mt-3">
                <p className="home-heading ">
                    Hola, Estudiantes
                    <p className="home-para">Let's start solving the equations.</p>
                </p> 
            </div>
            <div className="row">
                <div className="col">
                    <div className="card-box">
                            <div className="card-content">
                                <img src={camera} className="home-icon" /> <br/>
                                <Link to="/camera">
                                    <button className="btn btn-home" style={{position:"relative",left:"50%",
                                    transform: "translateX(-50%)"}}>Capture using Webcam</button>
                                </Link>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-box">
                            <div className="card-content">
                                <img src={upload} className="home-icon" /> <br/>
                                <Link onClick={toggle}>
                                    <button className="btn btn-home" style={{position:"relative",left:"50%",
                                    transform: "translateX(-50%)"}}>Upload the picture</button>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggle} centered size="xl" >
                <Upload/>
            </Modal>
        </div>
    )
}

