var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const donarDetails = require('../Models/donarDetails.js');
const db = require('../index.js')

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/saveDetails', function(req, res, next) {
    var donarDetail = new donarDetails(req.body);
    donarDetail.save()
    .then(function() {
        res.send("Data saved successfully")
    })
    .catch(next)
    });


router.get('/donardetails', function(req, res, next) {
    donarDetails.find({}).exec((err, details) => {
        if(err) res.status(400).send("Error occured")
        res.json(details);
      })
    });

router.delete('/donar/:name', (req, res, next) => {
    donarDetails.find({ name:req.params.name }).remove().exec()
    .then(function() {
        res.send("Data removed successfully")
    })
    .catch(next);
});

router.put('/donar/:name', (req, res, next) => {
    donarDetails.update({contactNo: req.params.name}, {$set:{contactNo: 8013588159}}, {upsert: true}, function(err, doc){
        
    
       res.send(doc)
    });
});

module.exports = router;