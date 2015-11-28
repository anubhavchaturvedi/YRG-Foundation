'use strict';

var mongoose = require('mongoose');

var donor = function() {
    var schema = mongoose.Schema({
        'id': String,
        'name': String,
        'email': String
    });
    return mongoose.model('donor', schema);
};

module.exports = donor();