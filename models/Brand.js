const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const BrandSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:1,
        maxlength:70
    }
});
const Brand = mongoose.model('brand', BrandSchema);
module.exports = Brand;