"use strict";
var mongoose = require("mongoose");
var db_1 = require("../db");
var Content = (function () {
    function Content() {
        this.name = 'restaurants';
        this.schema = new mongoose.Schema({
            address: {
                type: Object
            },
            borough: {
                type: String,
                required: true
            },
            cuisine: {
                type: String,
            },
            grades: {
                type: Array
            },
            name: {
                type: String,
                required: true
            },
            restaurantId: {
                type: String
            }
        });
        this.collection = db_1.db.model(this.name, this.schema);
    }
    Content.prototype.getContent = function (selector, callback, limit) {
        this.collection.find(selector, callback).limit(limit);
    };
    Content.prototype.insertContent = function (content, callback) {
        this.collection.create(content, callback);
    };
    Content.prototype.removeContent = function (selector, callback) {
        this.collection.remove(selector, callback);
    };
    Content.prototype.updateContent = function (model, callback) {
        this.collection.update({ _id: model._id }, { $set: model }, callback);
    };
    return Content;
}());
exports.Content = Content;
//# sourceMappingURL=content.js.map