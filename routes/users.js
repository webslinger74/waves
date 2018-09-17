const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');

//load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');


router.post('/register', (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
           
        }


    User.findOne({email:req.body.email})
        .then((user) => {
            if(user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    name:req.body.name,
                    lastname:req.body.lastname,
                    email:req.body.email,
                    password:req.body.password
                    
                });

                bcrypt.genSalt(10, (error, salt) => {
                    if(error) throw error;
                    bcrypt.hash(newUser.password, salt, (error, hash) => {
                        if(error) throw error;
                        newUser.password = hash;
                        console.log("about to save")
                        newUser.save()
                        .then((user) => {
                            res.json(user)
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                    })
                })
            }
        })
});

//users/login - that returns the jwt token

router.post('/login', (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);
     if (!isValid) {
        return res.status(400).json(errors);
       
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email})
        .then((user) => {
            if(!user) {
                errors.email = "User not found"
                return res.status(404).json(errors);
            }
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(isMatch) {

                        const payload = {
                            id: user.id,
                            name:user.name,
                            lastname:user.lastname
                        } //creates jwt payload
                        jwt.sign(payload, keys, { expiresIn: 7200 }, (error, token) => {
                            if (error) {console.log(error)} 
                            else {
                                res.json({
                                    success : true,
                                    token: 'Bearer ' + token
                                })
                            }
                        });

             
                    } else {
                        errors.password = "Password incorrect";
                        return res.status(400).json({msg:"password incorrect"});
                    }
                })
        })
});


//returns current user test token payload route is private

router.get('/current', passport.authenticate('jwt', {session:false}), (req, res) => {
    res.json({   id:req.user.id,
                 name:req.user.name,
                 lastname:req.user.lastname,
                 email:req.user.email,
                 isAdmin:req.user.role === 0 ? false : true,
                 isAuth: true,
                 cart: req.user.cart,
                 history: req.user.history

    });
});




module.exports = router;