var express = require('express');
const app = express();
const router = require('./Routers/form.js');
const mongoose = require('mongoose');
//var bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//app.use(bodyParser());
mongoose.connect('mongodb://localhost/AltruistsDbDev', function() {
    console.log("Db connected");
});

app.use(router);

app.listen(3000, function() {
    console.log("App listening");
})
