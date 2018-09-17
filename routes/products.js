const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('../config/admin');

router.post('/guitars', passport.authenticate('jwt', {session:false}, admin, (req, res) => {
            const product = new Product({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                brand:req.body.brand, 
                shipping:req.body.shipping,
                available:req.body.available,
                wood:req.body.wood,
                frets:req.body.frets

            });

            product.save()
                .then(brand => {
                    res.status(200).json({success:true, brand});
                })
                .catch(err => {
                    res.status(404).json({success:false, err});
                })


}))





module.exports = router;