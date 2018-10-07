const express  = require('express');
const path = require('path');
// const open = require('open');
const bodyParser = require('body-parser');
// const webpack = require('webpack');
const mongoose = require('mongoose');
const products = require('./routes/products');
const users = require('./routes/users');
const brands = require('./routes/brands');
const woods = require('./routes/woods');
const passport = require('passport');
const formidable = require('express-formidable');
const cloudinary = require('cloudinary')

const db = require('./config/keys.js').mongoURI;

//connect to MongoDB

mongoose.connect(db, {server: { auto_reconnect: true, useNewUrlParser: true }})
    .then(()=> console.log('db connected'))
    .catch((error) => console.log(error));


const port = process.env.PORT || 5000;
const app = express();

//require('dotenv').config();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const cloudKeys = require('./config/keys.js');
console.log(cloudKeys.cloud_name)
cloudinary.config({
    cloud_name: cloudKeys.cloud_name,
    api_key: cloudKeys.api_key,
    api_secret: cloudKeys.api_secret
});

//passport middleware
app.use(passport.initialize());

//passport config

require('./config/passport')(passport);

//user routes

app.use('/api/users', users);
app.use('/api/productsBrands', brands);
app.use('/api/productsWoods', woods);
app.use('/api/productsGuitars', products)

app.listen(port, (error)=> {
    if(error){
        console.log(error);
    }  else {
       console.log("server runnning")
   }
})

//Server static assets if in production

if(process.env.NODE_ENV === "production"){
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
})
}

