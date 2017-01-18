
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

var path        = require('path');
var spawn       = require('child_process').spawn;
var runNo       = 0;
var processMsg  = (msg, response) => {

    let no      = runNo;
    runNo       = (runNo+1)%10;


    let argv2   = __dirname + '/build/tmp/' + no + '/parameter.bsn';
    let argv4   = __dirname + '/build/tmp/' + no + '/result.bsn';
    let argv6   = no;

    msg.context.output_dir = __dirname + 'build/tmp/' + no;
    msg.timeTag = (new Date()).yyyymmdd();
    console.log("=================", msg);
    jsonfile.writeFile(argv2, msg, {spaces: 2}, function(err) {
      console.error(err);
    });


    let command = spawn('build/meta', ['-i', argv2,'-o', argv4, '-n', argv6]);
    command.stdout.on('data', function (data) {
      let obj = { cmd:      msg.func,
                  status:   0,
                  output:   data.toString() };
      console.log("engine output => ", obj);
      require('./server.js').push("engine response", obj);
    });
    command.stderr.on('data', function (data) {
      console.log('stderr: ' + data.toString());
    });
    command.on('exit', function(code) {
      console.log('child process exited with code ' + code.toString());

      // let fResult = path.join('./build/tmp/', no, '/result.bsn');
      let fResult = jsonfile.readFileSync(argv4); //, function(err, settings) {
      let xpath    = fResult.output.genotype[0];
      console.log("---- argv4: ---- ", argv4);
      console.log("---- fResult: -- ", fResult);
      console.log("---- xpath: - ", xpath)

        //if(err)       console.error(err);
////
        let lineNo  = 0;
        var stm     = fs.createReadStream( xpath )
                      .pipe( es.split() )
                      .pipe( es.mapSync(function(line) {
                        // stm.pause();
                        lineNo += 1;
                        let obj = { cmd:      "show",
                                    status:   0,
                                    output:   line.toString() };
                        console.log("engine output => ", line);
                        require('./server.js').push("engine response", obj);
                      })
                      .on('error', function() {
                        console.log('Error while reading file.');
                      })
                      .on('end', function() {
                        console.log('Read entire file.');
                      }) );
////
//      });
    });
}
exports.proc = processMsg;
/*
var processMsg = (msg, response) => {
    var exeFile= '';
    var para   = msg.para;
    switch(msg.func) 
    {
      case 'imgprocess' : exeFile= 'build/meta';
        break;
      case 'pipeline'   : exeFile= 'build/meta';
        break;
    }
    const child = execFile(exeFile, ['--version'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      // response(stdout);

      var obj = { cmd:      msg.func,
                  status:   0,
                  output:  stdout };
      console.log("engine output => ", obj);
      require('./server.js').push("engine response", obj);
      // console.log(stdout);
    });
    // response("Engine is launching the pipeline!");

}
exports.proc = processMsg;
*/