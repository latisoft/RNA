

const execFile = require('child_process').execFile;
var express = require('express');
var app = express();


// App directory
var path= require("path");
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


/*
var server = app.createServer();
var server = app.listen(8000, function() {
  console.log('Server running at http://localhost:8000');
}); */
var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(8000)

io.on('connection', function(socket) {
  
  console.log("connection");
  socket.emit('server event', { foo: 'bar' });

  socket.on('client event', function(data) {
    console.log("==== evt ====");
    console.log(data);
  });



});