var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about', {
        details: [{
                name: "tyrt",
                email: "wwwk@gmail.com",
                isEditedOnce: 0
            }, {
                name: "ccchg",
                email: "hvhh@gmail.com",
                isEditedOnce: 0
            }, {
                name: "jhcgfcfjhj",
                email: "nbjbh@gmail.com",
                isEditedOnce: 0
            }, {
                name: "hvh",
                email: "nbbj@gmail.com",
                isEditedOnce: 0
            }, {
                name: "v",
                email: "xcgvhb@gmail.com",
                isEditedOnce: 0
            }

        ],
        route: 'table'
    });
});

module.exports = router;