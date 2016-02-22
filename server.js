var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var create = require('./models/createmodel.js');
var Bird = require('./models/models.js');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
var uristring = process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/demo3';
mongoose.connect(uristring);

app.set('view engine', 'jade');

app.get('/', function(req,res) {
    res.render('layout');
});
app.get('/about', function(req,res) {
    Bird.find( {}, function(err,docs) {
        if (err) throw err;
        res.render('about', {
            'hey': docs
        });
    });
});
app.post('/', create.create);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log("Running on port 5000...");
});
