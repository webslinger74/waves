import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getBrands, addBrand, clearErrors } from '../../actions/product_actions';
import TextFieldGroup from '../Inputs/TextFieldGroup';
import TextAreaFieldGroup from '../Inputs/TextAreaFieldGroup';
import SelectListGroup from '../Inputs/SelectListGroup';
import MyButton from '../Inputs/Button';

class ManageBrands extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formSuccess:false,
            brand:'',
            errors:{}
          }
    }
    componentDidUpdate(prevProps) {
        if((prevProps.errors !== this.props.errors) && (Object.keys(this.props.errors).length === 0)){
            this.setState({
                brand: '',
                errors: {},
                formSuccess:true
            })
            setTimeout(() => {
                this.setState({
                    formSuccess:false
                })
            },1500);
        }
        // here is where the component state errors get updated from redux state errors
        if(prevProps.errors !== this.props.errors && Object.keys(this.props.errors).length > 0){
            this.setState({
                errors:this.props.errors
            })
        }   
    }

    

    componentDidMount(){
        this.props.getBrands();

    }
    componentWillUnmount(){
        this.props.clearErrors();
        
  }


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    onSubmit = (e) => {
        e.preventDefault();

       const newState = {};
         for (let key in this.state){
              if( key === "brand" ){
                  this.state[key] = this.state[key].toString();
              }
                         
              newState[key] = this.state[key];
    }
    console.log(newState, "state just before adding brand");
  this.props.addBrand(newState, this.props.brands);

  }

    showCategoryItems = () => (

       this.props.brands && this.props.brands ?
            this.props.brands.map((item) => (
                    <div className="category_item" key={item._id}>
                        {item.name}
                    </div>
            )): null
    )

    render() { 

        const {errors} = this.state;
        return ( 
            <div className="admin_category_wrapper">
                <h1>Brands</h1>
                <div className="admin_two_column">
                <div className="left">
                
                    <div className="brands_container">
                        {this.showCategoryItems()}
                    </div>

                </div>
                <div className="right">
                
                <form onSubmit={(event) => this.onSubmit(event)}>

                      <TextFieldGroup 
                                 type="text"
                                 placeholder="Product Name"
                                 name="brand"
                                 error={errors.name}
                                 value={this.state.brand}
                                 onChange={this.onChange}
                            />

                       <div>
                                 
                                 {this.state.formSuccess === true ? 
                                     (<div className="form_success">
                                         You have succesfully added a New Brand
                                     </div>): null}
     
     
     
                                 { this.state.formError ?
                                     <div className="error_label">
                                         Please check your data
                                     </div>
                                 :null}
                                 </div>
     
                                <input type="submit" className="btn btn-info btn-block mt-4" />
     

                </form>
                </div>
            </div>

            </div>
         );
    }
}

const actions = {
    getBrands,
    addBrand,
    clearErrors
}

const mapStateToProps = (state) => ({
    errors:state.errors,
    brands:state.products.brands
})
 
export default connect(mapStateToProps, actions)(ManageBrands);