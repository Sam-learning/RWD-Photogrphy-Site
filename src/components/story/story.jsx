import React from 'react';
import './story.css'
import SingleStory from './SingleStory/SingleStory';

const Story = () => {
    return (
        <div className='story-wrapper'>
            <SingleStory img='https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' title='The Mountains' name='by FrankLin' />
            <SingleStory img='https://images.pexels.com/photos/3125171/pexels-photo-3125171.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' title='Sunset Cityscape' name='by Benjamin' />
            <SingleStory img='https://images.pexels.com/photos/4040433/pexels-photo-4040433.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' title='18 Days Voyage' name='by Borodin' />
            <SingleStory img='https://images.pexels.com/photos/3790058/pexels-photo-3790058.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' title='Architectuals' name='by Samantha' />
        </div>
    );
};

export default Story;