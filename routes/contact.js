var express = require('express');
var router = express.Router();
var debug = require('debug');

/* GET users listing. */
router.get('/', function(req, res, next) {
	debug("here")
    res.render('contact');

});

router.post('/savedetails', function(req, res, next) {
    var details = req.body;
    var reply = "Yello! " + details.name + "  yours details have been registered.";
    res.render('contact', { reply: reply });

});

module.exports = router;