import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/venue_info';
import Highlight from './components/highlights'; 
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="App" style={{backgroundColor: '#FFFFF0'}}>
        <Header/>
        
        <Element className="element"name="featured">
          <Featured/>
        </Element>
        
        <Element className="element" name="venueinfo">
          <VenueInfo/>
        </Element>
        
        <Element className="element" name="highlights">
          <Highlight/>
        </Element>
        
        <Element className="element" name="pricing">
          <Pricing/>
        </Element>
        
        <Element className="element" name="location">
          <Location/>
        </Element>
        
        <Footer/>
      </div>
    );
  }
}

export default App;
