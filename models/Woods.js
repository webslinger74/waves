const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const WoodSchema = new Schema({
    name: {
        type:String,
        required:true,
        unique:1,
        maxlength:70
    },
   
});
const Wood = mongoose.model('woods', WoodSchema);
module.exports = Wood;
