var myModule = require('./myModule');
var folder = process.argv[2];
var extension = process.argv[3];


myModule(folder, extension, function(err, list){
  if (err)
    console.log("Error:", err);

  for (var i = 0; i < list.length; i++)
    console.log(list[i]);
});
