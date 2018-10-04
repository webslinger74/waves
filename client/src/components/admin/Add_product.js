import React, { Component } from 'react';
import UserLayout from '../User/UserLayout';
import {connect} from 'react-redux';
import {getBrands, getWoods, addProduct} from '../../actions/product_actions';
import TextFieldGroup from '../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../Inputs/SelectListGroup';
import Frets from '../shop/Frets';


const Bool = [
    {
        "name":"YES",
        "_id":1
    },
    {
        "name":"NO",
        "_id":0
    }
]

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
                name: '',
                description: '',
                price: '',
                brand: '',
                wood: '',
                shipping:'',
                available:'',
                frets:'',
                publish:'',
                errors: {}
              };
             
            }
            onChange = (e) => {
              this.setState({ [e.target.name]: e.target.value });
            }
          
            onSubmit = (e) => {
              e.preventDefault();
                const newProduct = this.state;

             const newState = {};
               for (let key in this.state){
              
                    if(this.state[key] === "YES"){
                        this.state[key] = true;
                    }
                    if(this.state[key] === "NO"){
                        this.state[key] = false;
                    }
                    if( key === "price" ){
                        this.state[key] = parseFloat(this.state[key])
                    }

                    
                    if(key === "brand"){
                        console.log("true", key)
                     const getId = this.props.brands.filter((brandobj) => {
                            console.log(this.state[key],"the pissing") 
                            console.log(brandobj.name)  
                        if(brandobj.name === this.state[key]){
                            console.log("true");
                            console.log(brandobj._id), "this should be the id";
                                return brandobj._id;
                            }
                            console.log(getId, "this is get id")
                           
                        })
                        this.state[key] = getId[0]._id;
                    }
                    if(key === "wood"){
                        console.log("true", key)
                     const getId = this.props.woods.filter((woodobj) => {
                            console.log(this.state[key]) 
                            console.log(woodobj.name)  
                        if(woodobj.name === this.state[key]){
                            console.log("true");
                            console.log(woodobj._id), "this should be the id";
                                return woodobj._id;
                            }
                            console.log(getId, "this is get id")
                           
                        })
                        this.state[key] = getId[0]._id;
                    }


                    newState[key] = this.state[key];

                
                console.log(newState, "does this have true and false")
               this.props.addProduct(newState);
 
          }
        }
          componentDidMount(){
              this.props.getBrands();
              this.props.getWoods();
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

                <div className="form_devider"></div>
                            {this.props.brands ?
                <SelectListGroup 
                                 name="brand"
                                 value={this.state.brand}
                                 error={errors.brands}
                                 onChange={this.onChange}
                                 options={this.props.brands}
                                 placeholder="Guitar Brands"
                            
                            
                            />: null}


                               {this.props.woods ?
                            <SelectListGroup 
                                             name="wood"
                                             value={this.state.wood}
                                             error={errors.brands}
                                             onChange={this.onChange}
                                             options={this.props.woods}
                                             placeholder="Type of Wood"
                                        
                                        
                                        />: null}
                                        
                                   <div className="form_devider"></div>

                                     <SelectListGroup 
                                 type="text"
                                 placeholder="Shipping"
                                 name="shipping"
                                 error={errors.shipping}
                                 value={this.state.shipping}
                                 onChange={this.onChange}
                                 options={Bool}
                            />
                                  <SelectListGroup
                                 type="text"
                                 placeholder="Available"
                                 name="available"
                                 error={errors.available}
                                 value={this.state.available}
                                 onChange={this.onChange}
                                 options={Bool}
                            />
                              <SelectListGroup
                                 type="text"
                                 placeholder="Frets"
                                 name="frets"
                                 error={errors.frets}
                                 value={this.state.frets}
                                 onChange={this.onChange}
                                 options={Frets}
                            />
                            <div className="form_devider"></div>
                            <SelectListGroup
                                 type="text"
                                 placeholder="Publish"
                                 name="publish"
                                 error={errors.publish}
                                 value={this.state.publish}
                                 onChange={this.onChange}
                                 options={Bool}
                            />

                <input type="submit" className="btn btn-info btn-block mt-4" />

                </form>
            </div>

                </UserLayout>

           
          );
    }
}
const actions = {
    getBrands,
    getWoods,
    addProduct
}

const mapStateToProps = (state) => ({
    products:state.products,
    errors:state.errors,
    brands:state.products.brands,
    woods:state.products.woods

})
 
export default connect(mapStateToProps, actions)(AddProduct);