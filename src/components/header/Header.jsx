import React, { useState } from 'react';
import './Header.css'

const Header = () => {
    const [sidebarOpen, setSideBarOpen] = useState(false)

    const navslide=()=>{
        const nav = document.querySelector('.navbar-ul')

        nav.classList.toggle('navbar-ul-active')
    }

    return (
        <div className='header-wrapper'>
            <div className="header">
                <h1>PHOTOSNAP</h1>
            </div>
            
            <nav className="navbar">
                <ul className='navbar-ul'>
                    <li>STORIES</li>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                </ul>
            </nav>
            <div id='invite-btn' className='invite-btn'><h6>Get An Invite</h6></div>
            <div className="burger" onClick={navslide}>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export default Header;