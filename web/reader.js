// For writing parameter file: parameter.bsn
var jsonfile= require('jsonfile');

// For reading result file: result.bsn
var fs      = require('fs')
    , util  = require('util')
    , stream= require('stream')
    , es    = require('event-stream');



for (let i=1; i<=384; i++) {
  
  let str = "" + i, pad = "000";
  let no  = pad.substring(0, pad.length-str.length) + str;
  let dir = './build/assay/output/' + trayRFID + '/' + no;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

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
requester.send('done,0,0');

// synchronize with daemon
// clearInterval(pollingId);
var pollingId     = setInterval(() => {
      requester.send('update,0,0');
    }, 500);

// Forwarding UI command to daemon
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


var spawn       = require('child_process').spawn;


var processImg  = (no) => {

    let str = "" + (++no), pad = "000";
    no = pad.substring(0, pad.length-str.length) + str;

    let runDir  = __dirname + '/build/assay/output/sn-000000/' + no;
    let argv2   = runDir + '/parameter.bsn';
    let argv4   = runDir + '/result.bsn';

    let msg = {
      comment: "merge 16 images => 1 images(2000x2000) + 400M values",
      output_dir: runDir,
      timeTag: (new Date()).yyyymmdd()
    };
    console.log("argv2: ", argv2);
    console.log("msg: ", msg);

    jsonfile.writeFile(argv2, msg, {spaces: 2}, function(err) {
      console.log("-i argv2: ", argv2);
      console.error(err);
    });

    let command = spawn('build/prml', ['-i', argv2,'-o', argv4, '-n', no]);
    command.stdout.on('data', function (data) {
      pushUI('progress', 0, data.toString());
    });
    command.stderr.on('data', function (data) {
      console.log('stderr: ' + data.toString());
    });
    command.on('exit', function(code) {
      pushUI('probe', status30, no );
      /*
      console.log('child process exited: ' + code.toString());
      console.log("-o argv4: ", argv4);
      let fResult = jsonfile.readFileSync(argv4);
      let lineNo  = 0;
      var stm     = fs.createReadStream( fResult.data )
                    .pipe( es.split() )
                    .pipe( es.mapSync(function(line) {
                      pushUI('probe', 'no:'+lineNo, line.toString());
                      lineNo += 1;
                    })
                    .on('error', function() {
                      console.log('Error while reading file!!');
                    })
                    .on('end', function() {
                      console.log('CEN file, lineNo=', lineNo);
                    }) );
      */
    });
}

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
var trayRFID  = "sn-000000";
var subtrays  = [];

requester.send('done,0,0');
requester.on("message", (buf) => {
    // Parsing message responsed from daemon
    let ss  = buf.toString().split(",");
    let cmd = ss[0];
    let sts = ss[1];
    let out = ss[2];
    switch(cmd) {
      case 'done':  // 8:8:1:0:0...,0 = 384 chips
        let mapChar = {
          0: "r",
          1: "a",
          8: "f"
        };
        subtrays = out.replace(/0|1|8/gi, function(matched) { 
          return mapChar[matched]; }).split(":");
        break;

      case 'update':  // #9902:5:65:5:6

        // update trayRFID if tray change
        
        // update assayNo and analyze image if chip change

        let tmp     = out.split(':');
        let newNo   = tmp[1];
        let progress= tmp[2];
        let last    = tmp[3];
        let next    = tmp[4];
        let flag    = (assayNo != newNo)? true: false; // chip changed
        if(flag) processImg(assayNo);

        subtrays[assayNo] = 'f';
        subtrays[  newNo] = 'a';
        assayNo  = newNo;
 
        pushUI(cmd, sts, out);
        break;
    }
});
process.on('SIGINT', function() {
  console.log("== ZMQ socket closed. ==");
  requester.close();
  process.exit(0);
});
console.log("== zmq-requestere@5555 ==");