var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', { details: [{ name: "tyrt", email: "wwwk@gmail.com" }, { name: "tyrt", email: "wwwk@gmail.com" }, { name: "tyrt", email: "wwwk@gmail.com" }, { name: "tyrt", email: "wwwk@gmail.com" }] });
});

module.exports = router;