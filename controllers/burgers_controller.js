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
            burger:burgerData
        })
    })
});
// Post Route
router.post("/burgers/create",function(req,res){
    burger.insert(req.params.burger_name,function(result){
        console.log(result);
        res.redirect("/");
    });
});
// Put Route
router.put("/burgers/update",function(req,res){
    burger.update(req.params.burger_id,function(result){
        console.log(result);
        res.redirect("/");
    });
});

module.exports = router;