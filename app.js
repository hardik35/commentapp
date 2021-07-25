const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
// random comment
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Require our routes into the application.
require('./routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'deployed again',
}));

module.exports = app;