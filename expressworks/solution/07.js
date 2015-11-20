var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/search', function(req, res){
  var object = req.query;
  res.send(object);
});
app.listen(port);
