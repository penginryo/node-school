var http = require('http');
var through = require('through2');
var port = process.argv[2];

var server = http.createServer(function(req, res){
  var str = '';
  res.writeHead(200, {'Content-Type': 'text/plain'});

  if(req.method === 'POST'){
    req.pipe(through(function(buffer, encoding, next){
      str = buffer.toString().toUpperCase();
      this.push(str);
      next();
    })).pipe(res);
  }
});
server.listen(port);

console.log('Server starting at port ' + port);
