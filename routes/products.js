const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('../config/admin');
const mongoose = require('mongoose');
const validateAddProduct = require('../validation/addproduct');

//this is getting by Arrival ie Created At   sortBy=createdAt


//this is getting by SELL ie how many sold  sortBy=sold
// api/
router.get('/guitars_by_sortby', (req,res) => {
    let order = req.query.order ? req.query.order : 'asc';
    let sortBy = req.query.sortBy ? req.query.sortBy : '_id';
    let limit = req.query.limit ? parseInt(req.query.limit) : 100;

    Product.find()
        .populate('brand')
        .populate('wood')
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
    .populate('wood')
        .exec((err,docs) => {
            return res.status(200).send(docs);
            if(err){
                return res.status(400).send(err);
            }

        })
  });



router.post('/guitars', passport.authenticate('jwt', {session:false}), admin, (req, res) => {

    const { errors, isValid } = validateAddProduct(req.body);
    console.log(req.body, "this is the info to be validated")
    if (!isValid) {
        console.log(errors)
        return res.status(400).json(errors);
       
    }

        console.log(req.body, "this is the request inside route")
            const product = new Product({
                name:req.body.name,
                description:req.body.description,
                price:req.body.price,
                brand:req.body.brand, 
                shipping:req.body.shipping,
                available:req.body.available,
                wood:req.body.wood,
                frets:req.body.frets,
                publish:req.body.publish,
                images:req.body.images
            });
            console.log(product, "this is the product")
            product.save()
                .then(brand => {
                    res.status(200).json({success:true, brand});
                })
                .catch(err => {
                    res.status(404).json({success:false, err});
                })


})


// needs to return data.size, data.articles
router.post('/shop', (req, res) => {

        

        let order = req.body.order ? req.body.order : "desc";
        let sortBy = req.body.sortBy ? req.body.sortBy :"_id";
        let limit = req.body.limit ? parseInt(req.body.limit) : 100;
        const skip = parseInt(req.body.skip);
        const filters = req.body.filters;
        let findArgs = {};  // this will find all if not arrays are greater than 0

        for(let key in filters){
            if(filters[key].length > 0){
                if(key === "price"){
                    findArgs[key] = {
                        $gte:req.body.filters[key][0],
                        $lte:req.body.filters[key][1]
                    }
                } else {
                    findArgs[key] = filters[key];
                }
            }
        }
            console.log(findArgs, "this is the args pre mongo req");


            Product.find(findArgs)
            .populate('brand')
            .populate('wood')
            .sort([[sortBy, order]])
            .skip(skip)
            .limit(limit)
            .exec((err, articles) => {
                if(err) return res.status(400).send(err);
                res.status(200).json({
                        size:articles.length,
                        articles
                });

            })
        })
            
    

module.exports = router;