
// Displays About Us info eg Logo and use of app, team members etc.That's it.
import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './images/EQ-Sol Logo.svg'

export default function About() {
    return (
        <div className="container" >
            <div className="row" style={{height:"50px"}} ></div>
            <div className="row justify-content-center "  >
                <div className="col-md-4 " >
                    <img src={Logo} className="about-logo  vert-center" />
                </div>
                <div className="col-md-7 about-box">
                    <p className="home-para">
                        EQ-Sol is a Web Application where the user scans handwritten mathematical equations, and the corresponding solutions are displayed.
                            <br/> <br/>
                        EQ-Sol is created as a part of Final year Project by Students of GEC Barton Hill, Thiruvananthapuram.
                            <br/> <br/>
                        Team: Karun, Akshay, Omkar, Adhithya
                    </p>
                    <Link to="/"><button className="btn btn-home center" >Go back to Home</button></Link>
                </div>
            </div>
        </div>
    )
}
