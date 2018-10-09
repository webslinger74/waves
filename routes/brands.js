const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('../config/admin');
const validateAddBrand = require('../validation/addbrand');


router.post('/brands', passport.authenticate('jwt', {session:false}), admin, (req, res) => {

          const { errors, isValid } = validateAddBrand(req.body);
             console.log(req.body, "this is the info to be validated")
             if (!isValid) {
                  console.log(errors)
                     return res.status(400).json(errors);
       
                 }

            const brand = new Brand({
                name:req.body.brand
            });

            brand.save()
                .then(brand => {
                    res.status(200).json({success:true, brand});
                })
                .catch(err => {
                    res.status(404).json({success:false, err});
                })


})

router.get('/brands', (req,res) => {
    Brand.find({}).
        then(brands => {
            res.status(200).send(brands);
        })
        .catch((err) => {
            res.status(400).json(err);
        })
})





module.exports = router;