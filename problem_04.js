var fs = require('fs');
var file = process.argv[2];

fs.readFile(file, function(err, data){
  if(err) throw err;
  var splitedString = data.toString().split('\n');
  var lines = splitedString.length - 1;
  console.log(lines);
});
