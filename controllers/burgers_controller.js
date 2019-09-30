var express = require('express');
var router = express.Router();
// Import burger.js to use database functions (../models/burger.js)
var burger = require('../models/burger.js');

// Routes
// =============================================
// Get Route
router.get("/",function(req,res){

});
// Put Route
router.put("/burgers/update",function(req,res){

});
// Post Route
router.post("/burgers/create",function(req,res){

});

module.exports = router;