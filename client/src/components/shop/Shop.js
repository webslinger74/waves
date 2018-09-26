import React, { Component } from 'react';
import PageTop from '../../utils/PageTop';
import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../actions/product_actions';
import Frets from './Frets';
import Prices from './Prices';
import CollapseCheckBox from '../Inputs/CollapseCheckBox';
import CollapseRadio from '../Inputs/CollapseRadio';


class Shop extends Component {
        constructor(props){
            super(props);
        
    this.state = {
        grid:'',
        limit:6,
        skip:0,
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

    handleFilters = (filter,title) => {

        const newFilters = this.state.filters;
            console.log(newFilters, "this is pre filters add")
        newFilters[title] = filter

            if(title === "price"){
                let priceValues = this.handlePrice(filter)
                newFilters[title] = priceValues;            }





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
                             <CollapseRadio 
                            initState={false}
                            title="price"
                            names={Prices}  
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