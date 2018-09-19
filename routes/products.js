const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('../config/admin');
const mongoose = require('mongoose');


//this is getting by Arrival ie Created At   sortBy=createdAt


//this is getting by SELL ie how many sold  sortBy=sold
// api/
router.get('/guitars_by_sales', (req,res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product.find()
        .populate('brand')
        .populate('woods')
        .sort([[sortBy, order]])
        .limit(limit)
        .exec((err, guitars) => {
            if(err){
                return res.status(400).send(err);
            }
            res.status(200).send(guitars);
        })
});

//this method is using query strings get by Id
// ?query=id&type=array  /altered and not put array and still works!

router.get('/guitars_byId', (req, res) => {
    let type = req.query.type;
    let items;
        let ids = req.query.id.split(',');
        items = ids.map(item => {
            return mongoose.Types.ObjectId(item)
        })

    Product.find({'_id':{$in:items}})
    .populate('brand')
    .populate('woods')
        .exec((err,docs) => {
            return res.status(200).send(docs);
            if(err){
                return res.status(400).send(err);
            }

        })
  });



router.post('/guitars', passport.authenticate('jwt', {session:false}), admin, (req, res) => {
            const product = new Product({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                brand:req.body.brand, 
                shipping:req.body.shipping,
                available:req.body.available,
                wood:req.body.wood,
                frets:req.body.frets,
                publish:req.body.publish
            });

            product.save()
                .then(brand => {
                    res.status(200).json({success:true, brand});
                })
                .catch(err => {
                    res.status(404).json({success:false, err});
                })


})





module.exports = router;