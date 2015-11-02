var concat = require('concat-stream');
var input = process.stdin;

input.pipe(concat(function(data){
  var str = data.toString().split('').reverse().join('');
  console.log(str);
}));
