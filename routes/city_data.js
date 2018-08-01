var express = require('express');
var router = express.Router();
var City = require('../models/cities');

router.post('/city-create', (req, res, next) => {
    City.create(req.body, (err, post) => {
        if(err) return next(err);
        res.json(post);
    })
})

router.get('/cities', (req, res, next) => {
    City.find((err, cities) => {
        if(err) return next(err);
        res.json(cities);
    })
})

router.delete('/delete-city/:id', (req, res, next) => {
    City.findByIdAndRemove(req.params.id, (err, post) => {
        if(err) return next(err);
        res.json(post); 
    })
})

module.exports = router;