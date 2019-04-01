import React from 'react';
import Fade from 'react-reveal/Fade';
import {CenterWrapper, HighlightH2, HighlightDesc} from './highlights.style';

const Description = () => {
    return (
        <Fade>
            <CenterWrapper>
                <HighlightH2>Highlights</HighlightH2>
                <HighlightDesc>
                    On November 19th, WWE will visit Kool-Aid Arena on the cusp of Survivor Series 2019. This will be your chance to see your favorite WWE Smackdown Superstars LIVE! See AJ Styles, Jeff Hardy, Shinsuke Nakamura, Charlotte Flair, Samoa Joe, New Day, Cesaro and Sheamus, Becky Lynch, Randy Orton, Naomi, and many more of your favorite WWE Smackdown Live and 205 Crusierwieght Live Superstars. 
                </HighlightDesc>
            </CenterWrapper>
        </Fade>
    );
};

export default Description;