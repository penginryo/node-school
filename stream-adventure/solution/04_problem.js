var through = require('through2');
var input = process.stdin;

var transform = through(function(buffer, encoding, next){
  var str = buffer.toString().toUpperCase();
  this.push(str);
  next();
});

input.pipe(transform).pipe(process.stdout);
