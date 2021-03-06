'use strict'

// Core node modules
const path = require('path');

const port = process.env.PORT || 3000;

// Third party libs
const express = require('express');
const bodyParser = require('body-parser');

// Load my routes
const routes = require('./routes');

// initiate express app
const app = express();

// tell express where templates are kept.
app.set('views', './views');
// set template engine to pug
app.set('view engine', 'pug');

// This is where static files are served from
app.use(express.static(path.resolve(__dirname, 'public')));

// supports parsing of application/json type post data
app.use(bodyParser.json());
// supports parsing of application/x-www-form-urlendcoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// my routes
app.use(routes);

app.listen(port, () => console.log(`App listening on port ${port}!`));