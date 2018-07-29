var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const donarDetails = require('../Models/donarDetails.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/saveDetails', function(req, res) {
    var donarDetail = new donarDetails(req.body);
    donarDetail.save()
    .then(item => {
        res.send("item saved to database");
        res.end();
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});


router.get('/donardetails', function(req, res) {
    donarDetails.find({}).exec((err, details) => {
        if (err) return next(err);
        res.json(details);
      });
    });

module.exports = router;