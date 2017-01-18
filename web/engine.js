
// For writing parameter file: parameter.bsn
var jsonfile= require('jsonfile');

// For reading result file: result.bsn
var fs      = require('fs')
    , util  = require('util')
    , stream= require('stream')
    , es    = require('event-stream');

console.log("currentDirectory: ", __dirname);

for (let i=0; i<10; i++) {
  let dir = './build/tmp/'+i;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

Date.prototype.yyyymmdd = function() {
  let yyyy  = this.getFullYear();
  let mm    = ('0' +(this.getMonth() + 1)).slice(-2);
  let dd    = ('0' + this.getDate()).slice(-2);
  let h     = ('0' + this.getHours()).slice(-2);
  let m     = ('0' + this.getMinutes()).slice(-2);
  let s     = this.getSeconds();
  return [yyyy, mm, dd, '-', h, m, s].join('');
};

var pushUI  = (cmd, status, output) => {
    require('./server.js').push("engine response", {
      cmd:      cmd,
      status:   status,
      output:   output
    });
};

var path        = require('path');
var spawn       = require('child_process').spawn;
var runNo       = 0;
var processMsg  = (msg, response) => {

    let no      = runNo;
    let runDir  = __dirname + '/build/tmp/' + no;
    let argv2   = runDir + '/parameter.bsn';
    let argv4   = runDir + '/result.bsn';
    runNo       = (runNo+1)%10;

    msg.context.output_dir = runDir;
    msg.timeTag = (new Date()).yyyymmdd();
    jsonfile.writeFile(argv2, msg, {spaces: 2}, function(err) {
      console.log("-i argv2: ", argv2);
      console.error(err);
    });

    let command = spawn('build/meta', ['-i', argv2,'-o', argv4, '-n', no]);
    command.stdout.on('data', function (data) {
      pushUI('progress', 0, data.toString());
    });
    command.stderr.on('data', function (data) {
      console.log('stderr: ' + data.toString());
    });
    command.on('exit', function(code) {
      console.log('child process exited: ' + code.toString());
      console.log("-o argv4: ", argv4);
      let fResult = jsonfile.readFileSync(argv4);
      let lineNo  = 0;
      var stm     = fs.createReadStream( fResult.output.genotype[0] )
                    .pipe( es.split() )
                    .pipe( es.mapSync(function(line) {
                      pushUI('plot', no+":"+lineNo, line.toString());
                      lineNo += 1;
                    })
                    .on('error', function() {
                      console.log('Error while reading file!!');
                    })
                    .on('end', function() {
                      console.log('Read entire file, lineNo=', lineNo);
                    }) );
    });
}
exports.proc = processMsg;