import React, { Component } from 'react';
import PageTop from '../../utils/PageTop';
import { connect } from 'react-redux';
import { getBrands, getWoods, getProductsToShop } from '../../actions/product_actions';
import Frets from './Frets';
import Prices from './Prices';
import CollapseCheckBox from '../Inputs/CollapseCheckBox';
import CollapseRadio from '../Inputs/CollapseRadio';
import LoadMoreCarts from './LoadMoreCarts';
import CardBlockShop from '../Inputs/CardBlockShop';

class Shop extends Component {
        constructor(props){
            super(props);
        
    this.state = {
        grid:'',
        limit:6,
        skip:0,
        filters:{
            brand:[],
            frets:[],
            price:[],
            wood:[]
        }
    }
}
  
    componentDidMount(){
        this.props.getBrands();
        this.props.getWoods();
        this.props.getProductsToShop(this.state.skip, this.state.limit, this.state.filters)
    }

    handlePrice = (filts) => {
           const data = Prices;
           let array = [];

           //key will be 0,1,2,3,4
           for(let key in data){
             if(data[key]._id === parseInt(filts,10)){
                array = data[key].array
             }
           }
           return array;
    }



    showFilteredResults = (filters) => {
        this.props.getProductsToShop(0,this.state.limit,filters)
        this.setState({
            ...this.state,
            skip:0
        })
    }

    handleFilters = (filter,title) => {

        const newFilters = this.state.filters;
            console.log(newFilters, "this is pre filters add")
          
            newFilters[title] = filter
            if(title === "price"){
                let priceValues = this.handlePrice(filter)
                newFilters[title] = priceValues;     
            
            }
          
            this.showFilteredResults(newFilters);

            this.setState({ 
                ...this.state,
                filters: newFilters
            })
        }

    render() { 
            
        const { brands, woods } = this.props;
       //     console.log(brands, "this is brandy")
            
        return (


            <div>
                <PageTop  title="BrowseProducts" />

                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckBox 
                            initState={false}
                            title="brand"
                            names={brands}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters,title)}
                            />
                             <CollapseCheckBox 
                            initState={false}
                            title="wood"
                            names={woods}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters, title)}
                            />
                             <CollapseCheckBox 
                            initState={false}
                            title="frets"
                            names={Frets}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters, title)}
                            />
                             <CollapseRadio 
                            initState={true}
                            title="price"
                            names={Prices}  
                            handleFilters={(filters,title) => 
                                this.handleFilters(filters, title)}
                            />
                        </div>
                        <div className="right">
                        <div className="shop_options">
                                <div className="shop_grids clear">
                                    grids
                                
                                </div>
                        
                        </div>
                            <LoadMoreCarts
                                grid={this.state.grid}
                                limit={this.state.limit}
                                size={this.props.products.articleSize}
                                products={this.props.products.articles}
                                loadmore={() => console.log("load more")}
                                />
                        
                        </div>
                    
                    </div>
                
                
                
                </div>



            </div>


          );
    }
}

const actions = {
    getBrands,
    getWoods,
    getProductsToShop
}

const mapStateToProps = (state) => ({
    products: state.products,
    brands: state.products.brands,
    woods:state.products.woods
})
 
export default connect(mapStateToProps, actions)(Shop);