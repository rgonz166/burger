var express = require('express');
var router = express.Router();
// Import burger.js to use database functions (../models/burger.js)
var burger = require('../models/burger.js');

// Routes
// =============================================
// Get Route
router.get("/",function(req,res){
    burger.viewAll(function(burgerData){
        console.log(burgerData);
        res.render('index',{
            burger_data:burgerData
        })
    })
});
// Post Route
router.post("/burgers/create",function(req,res){
    burger.insert(req.body.burger_name,function(result){
        res.redirect("/");
    });
});
// Put Route
router.post("/burgers/update/:id",function(req,res){
    burger.update(req.params.id,function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;