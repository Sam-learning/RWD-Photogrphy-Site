import React from 'react';
import './SingleStory.css'

const SingleStory = ({img, title, name}) => {
    return (
        <div style={{backgroundImage:`url(${img})`}} className='single-story'>
            <div className="text">
                <h3>{title}</h3>
                <p>{name}</p>
                <div className='line'>_______________</div>
                <h4>Read Story</h4>
            </div>
        </div>
    );
};

export default SingleStory;