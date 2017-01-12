/*


// ====
console.log("===== zmq =====");
// Hello World client
// Connects REQ socket to tcp://localhost:5555
// Sends "Hello" to server.

var zmq = require('zmq');

// socket to talk to server
console.log("Connecting to hello world server…");
var requester = zmq.socket('req');

var x = 0;
requester.on("message", function(reply) {
  console.log("Received reply", x, ": [", reply.toString(), ']');
  x += 1;
  if (x === 10) {
    requester.close();
    process.exit(0);
  }
});

requester.connect("tcp://localhost:5555");

for (var i = 0; i < 10; i++) {
  console.log("Sending request", i, '…');
  requester.send("Hello");
}

process.on('SIGINT', function() {
  requester.close();
  process.exit(0);
});
*/

var zmq           = require('zmq');

var requester     = zmq.socket('req');
requester.connect("tcp://localhost:5555");
requester.on("message", function(buf) {
    var ss  = buf.toString().split(",");
    var obj = { cmd:      ss[0],
                status:   ss[1],
                payload:  ss[2] };
    console.log("reader reply => ", obj);
    require('./server.js').push("reader response", obj);
});
var intervalId    = setInterval(()=>{
    let cmdString = 'update,0,\0';
    requester.send(cmdString);
}, 700);
// clearInterval(intervalId);


var processMsg = (msg, response) => {
    var cmdString= '';
    switch(msg.cmd) {
      case 'reset':       cmdString= 'reset,0,\0';    break;
      case 'assay-start': cmdString= 'start,0:1,\0';  break;
      case 'assay-stop' : cmdString= 'stop,0,\0';     break;
    }
    requester.send(cmdString);
}
exports.proc = processMsg;

process.on('SIGINT', function() {
  console.log("== ZMQ socket closed. ==");
  requester.close();
  process.exit(0);
});
console.log("== zmq-requestere@5555 ==");