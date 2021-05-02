import React from 'react'
import camera from "./images/camera.png"
import upload from "./images/upload.png"

export default function HomeBody() {
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
                                <button className="btn btn-home" style={{position:"relative",left:"50%",
                                transform: "translateX(-50%)"}}>Capture using Webcam</button>
                            </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-box">
                            <div className="card-content">
                                <img src={upload} className="home-icon" /> <br/>
                                <button className="btn btn-home" style={{position:"relative",left:"50%",
                                transform: "translateX(-50%)"}}>Upload the picture</button>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

{/*<span className="home-heading">Hola, Estudiantes</span> <br/>
           <span className="home-para">Let's start solving the equations.</span> <br/>
     <div className="card-box">
                        <div className="card-content">
                            <img src={camera} className="home-icon" /> <br/>
                            <button className="btn btn-home" style={{position:"relative",left:"50%",
                            transform: "translateX(-50%)"}}>Capture using Webcam</button>
                        </div>
                </div>
                <div className="card-box">
                        <div className="card-content">
                            <img src={upload} className="home-icon" /> <br/>
                            <button className="btn btn-home" style={{position:"relative",left:"50%",
                            transform: "translateX(-50%)"}}>Upload the picture</button>
                        </div>
                </div> */}