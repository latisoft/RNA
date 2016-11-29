

const execFile = require('child_process').execFile;
var express = require('express');
var app = express();

var path= require("path");

// App directory
app.use('/', express.static('public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
// App operation
app.get('/run/:username', function pipeline(req, res) {

  // var username = req.params.username;

  const child = execFile('build/meta', ['--version'], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
});

var server = app.listen(8000, function() {
  console.log('Server running at http://localhost:8000');
});

var io = require('socket.io')(server);
io.on('connection', function(socket) {
  socket.emit('server event', { foo: 'bar' });
  socket.on('client event', function(data) {
    console.log(data);
  });
  socket.on('client event', function(data) {
    console.log("==== evt ====");
    console.log(data);
  });

});