"use strict";
var content_1 = require("./models/content");
var Api = (function () {
    function Api(app) {
        var _this = this;
        this.content = new content_1.Content();
        app.get('/api', function (req, res) {
            _this.content.getContent({}, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(result);
            }, 10);
        });
        app.get('/api/borough/:borough', function (req, res) {
            _this.content.getContent({
                borough: new RegExp(req.params.borough, 'i')
            }, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(result);
            });
        });
        app.get('/api/:id', function (req, res) {
            _this.content.getContent({
                _id: req.params.id
            }, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(result);
            });
        });
        app.post('/api', function (req, res) {
            _this.content.insertContent(req.body, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(result);
            });
        });
        app.put('/api', function (req, res) {
            _this.content.updateContent(req.body, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(result);
            });
        });
        app.delete('/api/:id', function (req, res) {
            _this.content.removeContent({ _id: req.params.id }, function (err, result) {
                if (err)
                    res.status(500).send(err);
                else
                    res.json(result);
            });
        });
    }
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=api.js.map