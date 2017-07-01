var express = require("express");
var router  = express.Router();

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

module.exports = router;
