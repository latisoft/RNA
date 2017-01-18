var zmq           = require('zmq');
var requester     = zmq.socket('req');

var pushUI  = (cmd, status, output) => {
    require('./server.js').push("reader response", {
      cmd:      cmd,
      status:   status,
      output:   output
    });
};
requester.connect("tcp://localhost:5555");
requester.on("message", function(buf) {
    var ss  = buf.toString().split(",");
    pushUI(ss[0], ss[1], ss[2]);
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