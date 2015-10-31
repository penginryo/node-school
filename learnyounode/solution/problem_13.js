var http = require('http');
var url = require('url');
var port = process.argv[2];

function time(time){
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
}

function unixtime(time){
  return {
    unixtime: time.getTime()
  };
}

var server = http.createServer(function(req, res){
  var inputUrl = req.url;
  var parsedUrl = url.parse(inputUrl, true);
  var data = '';

  var d = new Date(parsedUrl.query.iso);

  if(parsedUrl.pathname == '/api/parsetime'){
    data = time(d);
  } else if(parsedUrl.pathname == '/api/unixtime'){
    data = unixtime(d);
  }
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
});
server.listen(port);

console.log('Server starting at port ' + port);
