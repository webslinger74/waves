const Validator = require('validator');
const isEmpty = require('./is-Empty');

const validateAddProduct = (data) => {
    let errors = {};


    data.name = !isEmpty(data.name) ? data.name.toString() : "";
    data.description = !isEmpty(data.description) ? data.description.toString() : "";
    data.price = !isEmpty(data.price) ? data.price.toString() : "";
    data.brand = !isEmpty(data.brand) ? data.brand.toString() : "";
    data.wood = !isEmpty(data.wood) ? data.wood.toString() : "";
    data.shipping = !isEmpty(data.shipping) ? data.shipping.toString() : "";
    data.available = !isEmpty(data.available) ? data.available.toString() : "";
    data.frets = !isEmpty(data.frets) ? data.frets.toString() : "";
    data.publish = !isEmpty(data.publish) ? data.publish.toString() : "";


    if(!Validator.isLength(data.name, {min:2, max:30})){
        errors.name = "Name must be between 2 and 30 characters";
    }
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
    if(!Validator.isLength(data.description, {min:10, max:300})){
        errors.description = "Description must be between 10 and 300 characters";
    }
    if(Validator.isEmpty(data.description)) {
        errors.description = "Description field is required";
    }
    if(Validator.isEmpty(data.price)) {
        errors.price = "Price is required";
    }
    if(Validator.isEmpty(data.brand)) {
        errors.brand = "Brand field is required";
    }
    if(Validator.isEmpty(data.wood)) {
        errors.wood = "Wood field is required";
    }
    if(Validator.isEmpty(data.shipping)) {
        errors.shipping = "Shipping field is required";
    }
    if(Validator.isEmpty(data.frets)) {
        errors.frets = "Frets selection is required";
    }
    if(Validator.isEmpty(data.publish)) {
        errors.publish = "Publish selection is required";
    }
   
            return {
                errors,
                isValid: isEmpty(errors)
            }

}

module.exports = validateAddProduct;