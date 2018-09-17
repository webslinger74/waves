const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique: 1,
        maxlength:100
    },
    description: {
        required: true,
        type:String,
        maxlength:10000
    },
    price:{
        required:true,
        type:Number
    },
    brand:{
        type: Schema.Types.ObjectId,
        ref:'brand',
        required:true
    },
    shipping:{
        required:true,
        type:Boolean
    },
    available:{
        required: true,
        type:Boolean
    },
    wood:{
        type:Schema.Types.ObjectId,
        ref: 'woods',
        required:true
    },
    frets:{
        required:true,
        type:Number
    },
    sold:{
        type:Number,
        maxlength:100,
        default:0
    },
    publish:{
        required: true,
        type: Boolean
    },
    images:{
        type:Array,
        default:[]
    }


},{timestamps:true});

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;