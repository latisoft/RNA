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
}, 100);
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