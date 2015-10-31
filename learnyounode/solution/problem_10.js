var net = require('net');
var port = process.argv[2];
var data = '';

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var hour = date.getHours();
var minute = date.getMinutes();

var zero = function(input){
  var zero = '0';
  if(input < 10)
    zero += input++;
  return input;
};

month = zero(month);
minute = zero(minute);

var server = net.createServer(function(socket){
  data = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
  socket.end(data + '\n');
});
server.listen(port, function(){
  console.log('Server is running at port ' + port);
});
