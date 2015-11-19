var express = require('express');
var stylus = require('stylus');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

app.use(stylus.middleware(file));
app.use(express.static(file));
app.listen(port);
