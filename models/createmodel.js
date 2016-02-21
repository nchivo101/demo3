var Bird = require('./models.js');

module.exports.create = function(req,res) {
    var cor = new Bird(req.body); 
    cor.save();
    res.redirect('/');
}
