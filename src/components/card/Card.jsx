import React from 'react';
import './Card.css'

const Card = () => {
    return (
        <>
        <div className='card-wrapper'>
            <div className="contentbox">
                <div className="content">
                    <h1>Create And Share Your Photo Series</h1>
                    <p>PhotoSnap is a platform for photographer and visual story teller. We make it easy to share photo, tell store and share with others</p>
                    <h4>GET AN INVITE --{'>'} </h4>
                </div>
            </div>
            <div className="img-wrapper"></div>
        </div>
        <div id='card-wrapper2' className='card-wrapper'>
            <div className="img-wrapper2"></div>
            <div id='contentbox2' className="contentbox">
                <div className="content">
                    <h1>Beautiful Stories Every Time</h1>
                    <p>We provide design templetes to ensure your stories look terrific. Easily add photo, text, embeded map and media from other networks. Then share your story with everyone.</p>
                    <h4>VIEW THE STORIES --{'>'} </h4>
                </div>
            </div>
        </div>
        <div className='card-wrapper'>
            <div className="contentbox">
                <div className="content">
                    <h1>Designed for everyone</h1>
                    <p>PhotoSnap can help you create stories that resonate with your audience. Our tool is design for photographers of all levels, brand, business you named it.</p>
                    <h4>GET AN INVITE --{'>'} </h4>
                </div>
            </div>
            <div className="img-wrapper3"></div>
        </div>
        </>
        
    );
};

export default Card;