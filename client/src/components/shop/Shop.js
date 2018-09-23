import React, { Component } from 'react';
import PageTop from '../../utils/PageTop';
import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../actions/product_actions';



class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        this.props.getBrands();
        this.props.getWoods();
    }



    render() { 

        const { products } = this.props;

        return (
            <div>


                <PageTop  title="BrowseProducts" />

                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            left
                        </div>
                        <div className="right">
                            Right
                        
                        </div>
                    
                    </div>
                
                
                
                </div>



            </div>


          );
    }
}

const actions = {
    getBrands,
    getWoods
}

const mapStateToProps = (state) => ({
    products: state.props
})
 
export default connect(mapStateToProps, actions)(Shop);