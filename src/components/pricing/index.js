import React, { Component } from 'react';
import MyButton from '../utils/Button';
import Zoom from 'react-reveal/Zoom';
import {PricingSection, PricingInnerWrapper, PricingTitle, PricingDesc, PricingButton} from './pricing.style';
import {BckDark} from '../venue_info/venue.style';

class Pricing extends Component {
    
    state = {
        prices:[18,48,108],
        positions:['Upper Concourse', 'Main Concourse', 'Floor Seatings'],
        desc:[
            'Seats are located at the upper level of the arena circling around the venue. No seats availble behind the stage',
            'Seats are mid-section level and is handicap accessible. Seats available behind the stage',
            'Seats here will be right infront of the action, ringside seating can take home commemorative WWE chair'
        ],
        linkto:['http://ticketmaster.com', 'hhtp://ticketmaster.com', 'http://ticketmaster.com'],
        delay:[500,0,500]
    }
    
    showBoxes = () => (
        this.state.prices.map((box, i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
                <div className="pricing_item">
                    <PricingInnerWrapper>
                        <PricingTitle>
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </PricingTitle>
                        <PricingDesc>
                            {this.state.desc[i]}
                        </PricingDesc>
                        <PricingButton>
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />
                        </PricingButton>
                    </PricingInnerWrapper>
                </div>
            </Zoom>
        ))
    )
    
    render() {
        return (
            <BckDark>
                <PricingSection>
                    <h2>Pricing</h2>
                    
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </PricingSection>
            </BckDark>
        );
    }
}

export default Pricing;