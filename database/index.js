var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/watson');
mongoose.Promise = global.Promise;

module.exports = mongoose;