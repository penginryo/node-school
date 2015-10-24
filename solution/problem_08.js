var http = require('http');
var bl = require('bl');
var url = process.argv[2];

// http(url).pipe(bl(function(err, data){
//   console.log(data);
// }));
http.get(url, function(res){
  res.pipe(bl(function(err, data){
    if(err)
      console.log('Error found: ' + err);
    console.log(data.length);
    console.log(data.toString());
  }));
});
