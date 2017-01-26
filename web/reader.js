
var zmq           = require('zmq');
var requester     = zmq.socket('req');

var pushUI = (cmd, status, output) => {
    require('./server.js').push("reader response", {
      cmd:      cmd,
      status:   status,
      output:   output
    });
}
requester.connect("tcp://localhost:5555");

// synchronize with daemon
var pollingId     = setInterval(() => {
      requester.send('update,0,0');
    }, 500);
var pollingTray   = setInterval(() => {
      requester.send('done,0,0');
    },2000);
// clearInterval(pollingId);

// Forwarding UI command to daemon
//var uiReadChip;
var processMsg = (msg, response) => {
  switch(msg.cmd) {
    case 'done':
      response(subtrays.join(':'));
      break;
    case 'reset':
      requester.send('reset,0,0');
      break;
    case 'assay-start':
      requester.send('start,0,0');
      break;
    case 'assay-stop':
      requester.send('stop,0,0');
      break;
  }
}
exports.proc = processMsg;

// Reader Information
const B00_READY     = 0; // 0:reset, 1:ready 
const B01_ASSAY     = 1; // 0:stop, 1:start
const B02_DONE      = 2; // 1:current chip finished
const B03_MODE      = 3; // 0:automatic next
const B04_VERTICAL  = 4; // 0:horizontal first
const B05_          = 5; // 0: 
const B06_          = 6; // 0:
const B07_COVER     = 7; // 0:close, 1:open
const B08_          = 8; // 0:
const B09_          = 9; // 0:
const B10_          =10; // 0:off, 1:on
const B11_          =11; // 0:off, 1:on
const B12_R         =12; // 0:off, 1:on
const B13_G         =13; // 0:
const B14_B         =14; // 0:
const B15_W         =15; // 0:
const B16_          =16; // 0:
const B17_          =17; // 1:tray changed.
const B1u_          =18; // 0:
var checkbit = (val, n) => { (val & 1 << n) == 0 }

var status30  = 0;
var assayNo   = 0;
var subtrays  = [];
requester.send('done,0,0');
requester.on("message", (buf) => {
    // Parsing message responsed from daemon
    let ss  = buf.toString().split(",");
    let cmd = ss[0];
    let sts = ss[1];
    let out = ss[2];
    switch(cmd) {
      case 'done':  // 8,8,1,0,0...,0 x384 chips
        subtrays = out.split(":");

        // uiReadChip(ss);
        // pushUI(cmd, sts, out);
        break;
      case 'update':  // #9902:5:65:5:6
        let tmp     = out.split(':');
        let newNo   = tmp[1];
        let progress= tmp[2];
        let last    = tmp[3];
        let next    = tmp[4];
        let flag    = (assayNo != newNo)? true: false; // chip changed
        if(0<=assayNo && assayNo <384 )
          subtrays[assayNo] = 8;
        if(0<=  newNo &&   newNo <384 )
          subtrays[  newNo] = 1;
        assayNo  = newNo;
 
        // if( checkbit(status30, B01_ASSAY) ) // status30.has(B01_ASSAY) )
          pushUI(cmd, sts, out);
        // assayNo = out[1];
        break;
    }
});



process.on('SIGINT', function() {
  console.log("== ZMQ socket closed. ==");
  requester.close();
  process.exit(0);
});
console.log("== zmq-requestere@5555 ==");