"use strict";
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test');
exports.db = mongoose.connection;
//# sourceMappingURL=db.js.map