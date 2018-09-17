const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('../config/admin');

router.post('/brands', passport.authenticate('jwt', {session:false}, admin, (req, res) => {
            const brand = new Brand({
                name:req.body.name
            });

            brand.save()
                .then(brand => {
                    res.status(200).json({success:true, brand});
                })
                .catch(err => {
                    res.status(404).json({success:false, err});
                })


}))





module.exports = router;