"use strict";
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var api_1 = require("./api");
// import w/o typings
var ejs = require('ejs');
var PORT = 9999;
var app = express();
// views
app.set('views', path.join(__dirname, '../../client/src/'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
// static folder
app.use(express.static(path.join(__dirname, '../../client/src')));
app.use('/node_modules', express.static(path.join(__dirname, '../../client/node_modules')));
// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// serve frontend
app.get('/', function (req, res, next) {
    res.render('index.html');
});
// create api
var api = new api_1.Api(app);
app.listen(PORT, function (err) {
    if (!err)
        console.log('Server started on port ' + PORT);
});
//# sourceMappingURL=app.js.map