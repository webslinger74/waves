import React, { Component } from 'react';
import UserLayout from '../User/UserLayout';
import {connect} from 'react-redux';
import {getBrands, getWoods} from '../../actions/product_actions';
import TextFieldGroup from '../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../Inputs/SelectListGroup';

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                description: '',
                price: '',
                brand: '',
                wood: '',
                errors: {}
              };
             
            }
            onChange = (e) => {
              this.setState({ [e.target.name]: e.target.value });
            }
          
            onSubmit = (e) => {
              e.preventDefault();
          
            
          }
    
          componentDidMount(){
              this.props.getBrands();
              console.log("what a fucker")
          }


    render() { 
        const {errors} = this.props;
        console.log(this.props.brands && this.props.brands, "these are brands");
        return (
            
                <UserLayout>
            <div>
                <h1>Add Product</h1>
                <form onSubmit={(event) => this.onSubmit(event)}>
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Product Name"
                                 name="name"
                                 error={errors.name}
                                 value={this.state.name}
                                 onChange={this.onChange}
                            />

                 <TextAreaFieldGroup 
                                 placeholder="Product Description"
                                 name="description"
                                 error={errors.description}
                                 value={this.state.description}
                                 onChange={this.onChange}
                            />
                <TextFieldGroup 
                                 type="text"
                                 placeholder="Product Price"
                                 name="price"
                                 error={errors.price}
                                 value={this.state.price}
                                 onChange={this.onChange}
                            />
            

                </form>
            </div>

                </UserLayout>

           
          );
    }
}
const actions = {
    getBrands,
    getWoods
}

const mapStateToProps = (state) => ({
    products:state.products,
    errors:state.errors,
    brands:state.products.brands

})
 
export default connect(mapStateToProps, actions)(AddProduct);