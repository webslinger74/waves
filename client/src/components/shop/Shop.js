import React, { Component } from 'react';
import PageTop from '../../utils/PageTop';
import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../actions/product_actions';
import Frets from './Frets';
import CollapseCheckBox from '../Inputs/CollapseCheckBox';

class Shop extends Component {
        constructor(props){
            super(props);
        
    this.state = {
        filters:{
            brands:[],
            frets:[],
            price:[],
            woods:[]
        }
    }
}
  
    componentDidMount(){
        this.props.getBrands();
        this.props.getWoods();
    }

    handleFilters = (filter,title) => {

        const newFilters = this.state.filters;
            console.log(newFilters, "this is pre filters add")
        newFilters[title] = filter
            console.log(newFilters, "this is post add of filter")
            this.setState({ 
                ...this.state,
                filters: newFilters
            })
            
        console.log(this.state, "state of shop")
    }

    render() { 
            
        const { brands, woods } = this.props;
            console.log(brands, "this is brandy")
            
        return (


            <div>
                <PageTop  title="BrowseProducts" />

                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckBox 
                            initState={true}
                            title="brands"
                            names={brands}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters,title)}
                            />
                             <CollapseCheckBox 
                            initState={true}
                            title="woods"
                            names={woods}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters, title)}
                            />
                             <CollapseCheckBox 
                            initState={true}
                            title="frets"
                            names={Frets}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters, title)}
                            />
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
    products: state.products,
    brands: state.products.brands,
    woods:state.products.woods
})
 
export default connect(mapStateToProps, actions)(Shop);