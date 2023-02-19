var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
   
    cart: {type: Object, required: true},
    email: {type: String, required: true},

    date: {type: String, required: true},
    pollUrl: {type: String, required: true}
});

module.exports = mongoose.model('Order', schema);