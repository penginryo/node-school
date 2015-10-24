var fs = require('fs');
var path = require('path');

module.exports = function(folder, extension, callback){
  fs.readdir(folder, function(err, list){
    if(err)
      return callback(err);

    var arr = [];

    for (var i = 0; i < list.length; i++) {
      var fileExtension = path.extname(list[i]);
      if(fileExtension === '.'+extension )
        arr.push(list[i]);
    }

    callback(null, arr);
  });
};
