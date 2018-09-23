import React, { Component } from 'react';
import HomeSlider from './Home_Slider';
import HomePromotion from './Home_Promotions';
import CardBlock from './Card_Block';
import { connect } from 'react-redux';
import { getProductsByArrival, getProductsBySell } from '../../actions/product_actions';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    componentDidMount(){
        this.props.getProductsByArrival();
        this.props.getProductsBySell();
    }




    render() { 
        const { products, sold } = this.props;

        return ( 
            <div>
                <HomeSlider  />
                <CardBlock item={sold} title={"Most Popular Selling Guitars"} />
                <HomePromotion />
                <div></div>
                <CardBlock  item={products} title={"New Arrivals In Store"} />
            </div>
         );
    }
}

const actions = {
    getProductsByArrival,
    getProductsBySell
}

const mapStateToProps = (state) => ({
    products: state.products.arrival,
    sold: state.products.sold
})
 
export default connect(mapStateToProps, actions)(Home);