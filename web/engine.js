


var processMsg = (msg, response) => {
    // msg.func == 'imgprocess' || msg.func == 'pipeline'    
    var spawn   = require('child_process').spawn;
    var command = spawn('build/meta', [msg.para]);
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