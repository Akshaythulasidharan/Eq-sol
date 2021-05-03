import React from 'react'
import NavbarHome from './NavbarHome'
import { useState } from 'react'


import Routes from './Routes';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
      
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="home-body">
            <div className="home-container">
                <NavbarHome/>
                <Routes/>
 
            </div>
        </div>
    )
}
