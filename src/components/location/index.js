import React from 'react';
import {LocationWrapper, LocationTag} from './location.style';

const Location = () => {
    return (
        <LocationWrapper>
            <iframe title="This is a unique title" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57454.998508904406!2d-96.74762051462197!3d40.81464245635636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796bf1b978d799f%3A0x473f6808c6c2af8e!2s400+Pinnacle+Arena+Dr%2C+Lincoln%2C+NE+68508!5e0!3m2!1sen!2sus!4v1536367000860" 
                width="100%" 
                height="500px" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            
            <LocationTag>
                <div>Location</div>
            </LocationTag>
        </LocationWrapper>
    );
};

export default Location;