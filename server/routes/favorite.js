const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');
const { auth } = require('../middleware/auth')


router.post('/favoriteNumber', (req, res) => {

    
    //DB에서 favorite 숫자 가져오기
    Favorite.find({ "movieId" :req.body.movieId })
        .exec((err, subscribe) => {
            if (err) return res.status(400).send(err);
        
            res.status(200).json({ success:true, favoriteNumber: info.length })
        
        })

})

module.exports = router;