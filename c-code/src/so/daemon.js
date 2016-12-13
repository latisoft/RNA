

var ffi = require('ffi');
var HAL = ffi.Library('./libmylib.so', {
  'initialize': [ 'long',  [ 'int' ] ],
  'setAction':  [ 'int',  [ 'int' ] ],
  'getStatus':  [ 'ulonglong', [ 'int' ] ]
});

var interval = 2000;
setInterval(function(){
  console.log('--reader status--');
  var sts = HAL.getStatus(0);
}, interval);

console.log('Daemon Server (ms): ', interval);