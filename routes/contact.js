var express = require('express');
var router = express.Router();
var debug = require('debug');

/* GET users listing. */
router.get('/', function(req, res, next) {
    console.log("**************************")
    res.render('contact', { choice: ['y1', 'y2', 'y3'], route: 'form' });

});

router.post('/savedetails', function(req, res, next) {
    console.log(req.data, req.body)
    var details = req.body.name;
    var reply = "Yello " + details + "!  yours details have been registered.";
    res.status(200).send(reply);


});

module.exports = router;