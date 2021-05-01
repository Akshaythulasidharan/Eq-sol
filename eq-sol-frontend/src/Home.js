import React from 'react'
import HomeBody from './HomeBody'
import NavbarHome from './NavbarHome'

export default function Home() {
    return (
        <div className="home-body">
            <div className="home-container">
                <NavbarHome/>
                <HomeBody/>
            </div>
        </div>
    )
}
