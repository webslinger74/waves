const express  = require('express');
const path = require('path');
// const open = require('open');
const bodyParser = require('body-parser');
// const webpack = require('webpack');
const mongoose = require('mongoose');
const users = require('./routes/users');
const brands = require('./routes/brands');
const woods = require('./routes/woods');
const passport = require('passport');


const db = require('./config/keys.js').mongoURI;

//connect to MongoDB

mongoose.connect(db, {server: { auto_reconnect: true } } /*{ useNewUrlParser: true }*/)
    .then(()=> console.log('db connected'))
    .catch((error) => console.log(error));


const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//passport middleware
app.use(passport.initialize());

//passport config

require('./config/passport')(passport);

//user routes

app.use('/api/users', users);
app.use('/api/products', brands);
app.use('/api/products', woods);

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

