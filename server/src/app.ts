import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import {Api} from './api';

// import w/o typings
const ejs = require('ejs');

const PORT = 9999;
var app = express();

// views
app.set('views', path.join(__dirname, '../../client/src/'));
app.set ('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// static folder
app.use(express.static(path.join(__dirname, '../../client/src')));
app.use('/node_modules', express.static(path.join(__dirname, '../../client/node_modules')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve frontend
app.get('/', (req, res, next) => {
  res.render('index.html');
});

// create api
var api = new Api(app);

app.listen(PORT, (err: any) => {
  if (!err) console.log('Server started on port ' + PORT);
});
