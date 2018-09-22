import React, { Component } from 'react';
import HomeSlider from './Home_Slider';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <HomeSlider />
            </div>
         );
    }
}
 
export default Home;