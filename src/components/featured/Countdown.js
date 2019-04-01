import React, { Component } from 'react';
import Bounce from 'react-reveal/Bounce';
import {CountdownWrapper, CountdownTop, CountdownBottom, CountdownItem, CountdownTag, CountdownTime} from './featured.style';

class Countdown extends Component {
    
    state = {
        deadline: 'Oct, 5, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }
    
    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0) {
            alert('Date passed');
        } else {
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24);
            const days = Math.floor(time/(1000*60*60*24));
            
            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
    }
    
    componentDidMount(){
        setInterval(() => this.getTimeUntil(this.state.deadline), 1000)
    }
    
    render () {
        return (
            <Bounce bottom delay={1000}>
                <CountdownWrapper>
                    <CountdownTop>
                        Tickets go on sale in
                    </CountdownTop>
                    
                    <CountdownBottom>
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.days}
                            </CountdownTime>
                            
                            <CountdownTag>
                                Days
                            </CountdownTag>
                        </CountdownItem>
                        
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.hours}
                            </CountdownTime>
                            
                            <CountdownTag>
                                Hours
                            </CountdownTag>
                        </CountdownItem>
                        
                        <CountdownItem>
                            <CountdownTime>
                                {this.state.minutes}
                            </CountdownTime>
                            
                            <CountdownTag>
                                Minutes
                            </CountdownTag>
                        </CountdownItem>
                        
                        <CountdownItem>
                            <CountdownTime style={{borderRight: 'none'}}>
                                {this.state.seconds}
                            </CountdownTime>
                            
                            <CountdownTag>
                                Seconds
                            </CountdownTag>
                        </CountdownItem>
        
                    </CountdownBottom>
                </CountdownWrapper>
            </Bounce>
        );
    }
}

export default Countdown;