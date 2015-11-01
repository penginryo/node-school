var through = require('through2');
var split = require('split');
var input = process.stdin;
var cnt = 0;

var transform = through(function(buffer, encoding, next){
  cnt++;
  var str = buffer.toString();
  if(cnt % 2 === 0)
    str = str.toUpperCase();
  else
    str = str.toLowerCase();
  this.push(str + '\n');
  next();
});

input.pipe(split()).pipe(transform).pipe(process.stdout);
