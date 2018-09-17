const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    date: {
        type:Date,
        default:Date.now
    },
    cart:{
        type: Array,
        default:[]
    },
    history: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default:0    // 0 is for user 1 is for admin-person
    },
    token: {
        type:String
    }
});
const User = mongoose.model('users', UserSchema);
module.exports = User;