import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/Button';
import {CenterWrapper, DiscountWrapper, DiscountPercent, DiscountDesc} from './highlights.style';

class Discount extends Component {
    
    state = {
        discountStart: 0,
        discountEnd: 22
    }
    
    percentage = () => {
       if(this.state.discountStart < this.state.discountEnd){
           this.setState({
               discountStart: this.state.discountStart + 1
           });
       } 
    }
    
    componentDidUpdate(){
        setTimeout(() => {
            this.percentage()
        }, 30)
    }
    
    render() {
        return (
            <CenterWrapper>
                <DiscountWrapper>
                    
                    <Fade
                        onReveal={() => this.percentage()}
                    >
                        <DiscountPercent>
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </DiscountPercent>
                    </Fade>
                    
                    <Slide right>
                        <DiscountDesc>
                            <h3>Purchase tickets in the first week of sale to get discount</h3>
                            <p>Tickets can be purchased at the Kool-Aid Arena Ticket Office, online at www.ticketmaster.com, or charge by phone at  1-866-448-7777 (Automated) OR 1-800-745-3333 (Live Person).</p>
                            
                            <MyButton
                                text="Purchase tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="http://wwe.com"
                            />
                        </DiscountDesc>
                    </Slide>
                    
                </DiscountWrapper>
            </CenterWrapper>
        );
    }
}

export default Discount;