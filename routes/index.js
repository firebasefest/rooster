var express = require("express");
var router  = express.Router();
var firebase = require('firebase');

//root route
router.get("/", function(req, res){
    res.render("splash");
});

router.get("/home", function(req, res){
    res.render("home");
});

router.get("/roostie", function(req, res){
    res.render("roostie");
});

router.get("/confirm", function(req, res){
    res.render("confirm");
});

module.exports = router;
