import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';
import {Artist, Wrapper, Hero} from './featured.style'

const Featured = () => {
    return (
        <Hero style={{position: 'relative'}}>
        
            <Carrousel />
            
            <Artist>
                
                <Wrapper>
                    
                </Wrapper>
                
            </Artist>
            
            <Countdown />
            
        </Hero>
    );
};

export default Featured;