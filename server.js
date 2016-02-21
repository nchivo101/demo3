var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var create = require('./models/createmodel.js');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
mongoose.connect('mongodb://localhost/demo3');

app.set('view engine', 'jade');

app.get('/', function(req,res) {
    res.render('layout');
});
app.post('/', create.create);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log("Running on port 5000...");
});
