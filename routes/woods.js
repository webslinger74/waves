const express = require('express');
const router = express.Router();
const Wood = require('../models/Woods');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const admin = require('../config/admin');

router.post('/woods', passport.authenticate('jwt', {session:false}, admin, (req, res) => {
            const wood = new Wood({
                name:req.body.name
            });

            wood.save()
                .then(wood => {
                    res.status(200).json({success:true, wood});
                })
                .catch(err => {
                    res.status(404).json({success:false, err});
                })


}))


router.get('/woods',  (req, res) => {
    Wood.find({})
        .then(woods => {
            res.status(200).json({success:true, woods});
        })
        .catch(err => {
            res.status(400).json({success:false, err});
        })
    });

   
    
module.exports = router;