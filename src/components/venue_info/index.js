import React from 'react';
import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';
import Zoom from 'react-reveal/Zoom';
import {BckDark, VenueWrapper, VenueItem, VenueOuter, VenueInner, IconSquare, VenueIcon, VenueTitle, VenueDesc} from './venue.style';
import {CenterWrapper} from '../highlights/highlights.style';

const VenuInfo = () => {
    return (
       <BckDark>
            <CenterWrapper>
                
                <VenueWrapper>
                

                    <Zoom duration={500}>
                        <VenueItem>
                            <VenueOuter>
                                <VenueInner>
                                    <IconSquare></IconSquare>
                                    <VenueIcon
                                        style={{
                                            background: `url(${icon_calendar})`
                                        }}
                                    ></VenueIcon>
                                    <VenueTitle>
                                        Event Date & Time
                                    </VenueTitle>
                                    <VenueDesc>
                                        19 November 2019 @7:30 pm
                                    </VenueDesc>
                                </VenueInner>
                            </VenueOuter>
                        </VenueItem>
                    </Zoom>

                    
                    <Zoom duration={500} delay={500}>
                        <VenueItem>
                            <VenueOuter>
                                <VenueInner>
                                    <IconSquare></IconSquare>
                                    <VenueIcon
                                        style={{
                                            background: `url(${icon_location})`
                                        }}
                                    ></VenueIcon>
                                    <VenueTitle>
                                        Event Location
                                    </VenueTitle>
                                    <VenueDesc>
                                        600 KoolAid Drive Lincoln, NE 68508
                                    </VenueDesc>
                                </VenueInner>
                            </VenueOuter>
                        </VenueItem>
                    </Zoom>
                    
                </VenueWrapper>
                
            </CenterWrapper>
       </BckDark> 
    );
}

export default VenuInfo;