import React from 'react';
import Fade from 'react-reveal/Fade';
import {VenueFooter, VenueDetail, FooterCopyright} from './headerfooter.style';

const Footer = () => {
    return (
        <VenueFooter>
            <Fade delay={500}>
                <div 
                    
                    style={{fontFamily: 'KoolBean'}}
                >
                    Kool-Aid Arena )
                    <div>
                        <VenueDetail>Not and actaul venue. Based on Pinnacle Bank Arena</VenueDetail>
                    </div>
                </div>
                
                <FooterCopyright>
                    Kool-Aid Arena 2018. All rights reserved ER.
                </FooterCopyright>
            </Fade>
        </VenueFooter>
    );
};

export default Footer;