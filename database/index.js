var mongoose = require("mongoose");
var contexto = require("./../config/context");
mongoose.connect(contexto.mongo);
mongoose.Promise = global.Promise;

module.exports = mongoose;