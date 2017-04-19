const express = require('express');
const http = require('http');
const morgan = require('morgan'); //http request logger middleware
const bodyParser = require('body-parser');
const router = require('./router');
const config = require('./config');
const mongoose = require('mongoose'); //schema based CRUD for mongodb

const app = express();

mongoose.connect(config.dbConnectionString);

app.use(morgan('combined'));
app.use(bodyParser.json({type: "*/*"}));

router(app);

const port = process.env.PORT || 3080;
const server = http.createServer(app);

server.listen(port);
console.log(`Server listening on ${port}`);
