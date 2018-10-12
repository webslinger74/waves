import React, { Component } from 'react';
import { getIndProd, clearProductDetail } from '../../actions/product_actions';
import PageTop from '../../utils/PageTop';
import { connect } from 'react-redux';
import ProductInfo from './ProductInfo';
import ProductImg from './ProductImg';

class ProductDetail extends Component {
   
       
    componentDidMount(){
        const id =  this.props.match.params.id;
        this.props.getIndProd(id);
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
            <div className="container">
            
            
            {
                this.props.productDetail  && Object.keys(this.props.productDetail).length > 0 ?
                    <div className="product_detail_wrapper">
                        <div className="left">

                        <div style={{width:'500px'}}>
                            <ProductImg
                                detail={this.props.productDetail}
                            />
                        </div>
                        </div>
                        <div className="right">
                        <ProductInfo 
                        detail={this.props.productDetail}
                        addToCart={(id)=> this.addToCartHandler(id)}
                        
                        
                        />
                        </div>
                    
                    
                    </div>

                :"loading"
            }
            
            </div>






            </div>


          );
    }





    
}

const actions = {
    getIndProd,
    clearProductDetail
}

const mapStateToProps = (state) => ({
    products: state.products,
    productDetail:state.products.productDetail
})
 
export default connect(mapStateToProps, actions)(ProductDetail);