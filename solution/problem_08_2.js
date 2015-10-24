var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
  res.setEncoding('utf8');
  var result = '';

  res.on('data', function(data){
    result += data;
  });
  res.on('end', function(){
    console.log(result.length);
    console.log(result);
  });
  res.on('error', function(err){
    console.log('Error found: ' + err);
  });
});
