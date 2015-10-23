var fs = require('fs');
var path = require('path');
var folderPath = process.argv[2];
var extension = process.argv[3];

fs.readdir(folderPath, function(err, list){
  var i = 0;

  for (var i = 0; i < list.length; i++) {
    var fileExtension = path.extname(list[i]);
    if(fileExtension === '.'+extension ) console.log(list[i]);
  }
});
