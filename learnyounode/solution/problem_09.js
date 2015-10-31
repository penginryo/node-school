var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var list = [url1, url2, url3];
var result = [];
var count = 0;

var getData = function(url, index){
  http.get(url, function(res){
    var ret = '';
    res.setEncoding('utf8');

    res.on('data', function(data){
      ret += data;
    });

    res.on('end', function(){
      result[index] = ret;
      count ++;

      if(count == 3){
        for (var i = 0; i < result.length; i++)
          console.log(result[i]);
      }
    });

    res.on('error', function(err){
      console.log('Error found: ' + err);
    });
  });
}

for (var i = 0; i < list.length; i++) {
  getData(list[i], i);
}
