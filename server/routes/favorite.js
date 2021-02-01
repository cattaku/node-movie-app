const express = require('express');
const router = express.Router();
const { Favorite } = require('../models/Favorite');
const { auth } = require('../middleware/auth')


//DB에서 favorite 숫자 가져오기
router.post('/favoriteNumber', (req, res) => {
    Favorite.find({ "movieId" :req.body.movieId })
        .exec((err, info) => {
            if (err) return res.status(400).send(err);
            res.status(200).json({ success:true, favoriteNumber: info.length })
        })
})

//favorite List에 있는지 DB에서 정보 가져오기
router.get('/favorited', (req, res) => {
    Favorite.find({ "movieId":req.body.movieId, "userFrom":req.body.userFrom })
        .exec((err, info) => {
            if (err) return res.status(400).send(err);
            let result = false;
            if (info.length !== 0 ){
                result = true;
            }
            res.status(200).json({ success:true, favorited:result })
        })
})

// favorite 리스트에서 삭제
router.delete('/removeFavorite', (req, res) => {
    Favorite.findOneAndDelete({ movieId:req.body.movieId, userFrom:req.body.userFrom })
        .exec((err, doc) => {
            if (err) return res.status(400).send(err);
            return res.status(200).json({ success:true, doc })
        })
})

// favorite 리스트에서 추가
router.post('/addFavorite', (req, res) => {
    const favorite = new Favorite(req.body);

    favorite.save((err, doc) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success:true, doc })
        
    })
})

module.exports = router;