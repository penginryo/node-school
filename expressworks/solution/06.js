var express = require('express');
var crypto = require('crypto');
var app = express();
var port = process.argv[2];

app.put('/message/:id', function(req, res){
  var id = req.params.id;
  var data = crypto.createHash('sha1').update(new Date().toDateString()+ id).digest('hex');
  res.send(data);
});
app.listen(port);
