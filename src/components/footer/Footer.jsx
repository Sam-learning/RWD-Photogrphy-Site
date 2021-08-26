import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer">
            <div className="left">
                <h2>PHOTOSNAP</h2>
                <p>ICONS</p>
            </div>
            <div className="middle">
                <ul>
                    <li>HOME</li>
                    <li>STORIES</li>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                </ul>
            </div>
            <div className="right">
                <h5>Get An Invite</h5>
            </div>
            </div>
        </div>
    );
};

export default Footer;