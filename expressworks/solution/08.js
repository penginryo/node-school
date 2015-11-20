var express = require('express');
var fs = require('fs');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

app.get('/books', function(req, res){
  fs.readFile(file, function(err, data){
    var object = JSON.parse(data);
    res.json(object);
  });
});
app.listen(port);
