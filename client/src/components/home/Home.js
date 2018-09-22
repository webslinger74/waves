import React, { Component } from 'react';
import HomeSlider from './Home_Slider';
import HomePromotion from './Home_Promotions';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <HomeSlider />
                <HomePromotion />
            </div>
         );
    }
}
 
export default Home;