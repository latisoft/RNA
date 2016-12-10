
var ffi = require('ffi');
var HAL = ffi.Library('./build/libmylib.so', {
  'factorial': [ 'long', [ 'int' ] ]
});



var SystemInfo = {
  "MicorarrayNo": 0,
  "x": 100,
  "y": 200
};

process.on('message', function(cmd) {
  console.log('CHILD got message:', cmd.hello);
});

var output = HAL.factorial(4);
//console.log('Your output: ' + output);
process.send({status: 'finished',
value: output});
