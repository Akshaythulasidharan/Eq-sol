
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Link } from 'react-router-dom'
import camera from "./images/camera.png"
import upload from "./images/upload.png"


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
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

