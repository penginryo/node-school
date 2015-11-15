var express = require('express');
var app = express();
var port = process.argv[2];
var filePath = process.argv[3];

app.set('views', filePath);
app.set('view engine', 'jade');

app.get('/home', function(req, res){
  res.render('index', {date: new Date().toDateString()});
});
app.listen(port);
