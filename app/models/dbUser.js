var mongoose = require('mongoose');

module.exports = mongoose.model('dbUser', {
    name : {type : String, default: ''}
});