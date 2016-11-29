// Call C/C++ addon.node
const spawn = require('child_process').spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});
ls.stderr.on('data', (data) => {
  console.log(`stderr: ${data}`);
});
ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

const execFile = require('child_process').execFile;
const child = execFile('bin/meta', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
})


var express = require('express');
var app = express()

app.get('/', function (req, res) {
  res.send('Hello, world4!')
})

var server = app.listen(8000, function() {
  console.log('Server running at http://localhost:8000');
})