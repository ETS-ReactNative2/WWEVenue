import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slide_one.png';
import slide_two from '../../resources/images/slide_two.png';
import slide_three from '../../resources/images/slide_three.png';
import slide_four from '../../resources/images/slide_four.png';

import {CarrouselWrapper, CarrouselImg, Styles, Lynch, NewDay, Shinsuke} from './featured.style';

const Carrousel = () => {
    
    const settings = {
        dots:false,
        infinite:true,
        autoplay:true, 
        speed:500
    }
    
    return (
        <CarrouselWrapper
            style={{
                overflow:'hidden',
                
            }}
        >
        
            <Slider {...settings}>
                
                <Styles>
                    <CarrouselImg 
                        style={{
                            background:`url(${slide_one})`,
                            height:'100vh',
                            width: '100%'
                        }}
                    >
                    </CarrouselImg>
                </Styles>
                
                <Lynch>
                    <CarrouselImg 
                        style={{
                            background:`url(${slide_two})`,
                            height:'100vh',
                            width: '100%'
                        }}
                    >
                    </CarrouselImg>
                </Lynch>
                
                <NewDay>
                    <CarrouselImg 
                        style={{
                            background:`url(${slide_three})`,
                            height:'100vh',
                            width: '100%'
                        }}
                    >
                    </CarrouselImg>
                </NewDay>
                
                <Shinsuke>
                    <CarrouselImg 
                        style={{
                            background:`url(${slide_four})`,
                            height:'100vh',
                            width: '100%'
                        }}
                    >
                    </CarrouselImg>
                </Shinsuke>
                
            </Slider>
        
        </CarrouselWrapper>
    );
};

export default Carrousel;