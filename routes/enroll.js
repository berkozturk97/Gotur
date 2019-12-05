var express = require('express');
var router = express.Router();
const MainType = require('../models/MainType');
const Product = require('../models/Products');

router.post('/getCategoryItems', (req, res) => {
    const { mainType } = req.body;
    Product.find({ mainType }).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})
module.exports = router;