import React, { Component } from 'react';
import PageTop from '../../utils/PageTop';
import { connect } from 'react-redux';
import { getProductDetail, clearProductDetail } from '../../actions/product_actions';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        const id =  this.props.match.params.id;
        this.props.getProductDetail(id);
        console.log(id);

    }

    componentWillUnmount(){
        this.props.clearProductDetail();
    }


    render() { 
        return (

            <div>
                <PageTop 
                title="Product Detail"
                />

            </div>


          );
    }
}

const actions = {
    getProductDetail,
    clearProductDetail
}

const mapStateToProps = (state) => ({
    products: state.products
})
 
export default connect(mapStateToProps, actions)(ProductDetail);