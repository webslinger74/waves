const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys').secretOrKey;
const passport = require('passport');
const admin = require('../config/admin');
const formidable = require('express-formidable');
//load input validation
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');
const cloudinary = require('cloudinary');

router.post('/register', (req, res) => {
        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
            console.log(errors)
            return res.status(400).json(errors);
           
        }

        console.log(req, "this is the request before the db")
    User.findOne({email:req.body.email})
        .then((user) => {
            if(user) {
                errors.email = 'Email already exists';
                return res.status(400).json(errors);
            } else {
                const newUser = new User({
                    name:req.body.name,
                    lastname:req.body.lastName,
                    email:req.body.email,
                    password:req.body.password,
                    role:req.body.role ? req.body.role : 0
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
                            lastname:user.lastname,
                            email:user.email
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

router.post('/uploadimage', passport.authenticate('jwt', {session:false}),admin, formidable(), (req, res) => {
    console.log(req.files.file.path, "request file path")
    cloudinary.uploader.upload(req.files.file.path,(result) => {
            console.log(result, "this is something back from cloudinary");
            res.status(200).send({
               public_id:result.public_id,
               url:result.url 
            })
    },{
        public_id: `${Date.now()}`,
        resource_type:'auto'
    })
})

router.get('/removeimage', passport.authenticate('jwt', {session:false}), admin, (req,res) => {
    let image_id = req.query.public_id;
    cloudinary.uploader.destroy(image_id, (error, result) => {
        if(error){
            return res.json({success:false});
        }
        res.status(200).send(console.log("successful delete!"));
    })
})


module.exports = router;