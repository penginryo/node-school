var fs = require('fs');
var path = process.argv[2];
var file = fs.readFileSync(path);

var splitedString = file.toString().split('\n');
var lines = splitedString.length - 1;
console.log(lines);
