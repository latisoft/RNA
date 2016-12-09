

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

const addon = require('bindings')('addon.node')
console.log('This should be eight:', addon.add(3, 5))


var ffi = require('ffi');
var api = ffi.Library('./build/api', {
  'factorial': [ 'uint64_t', [ 'int' ] ]
});
var output = api.factorial(4);
console.log('Your output: ' + output);


/*
var server = app.createServer();
var server = app.listen(8000, function() {
  console.log('Server running at http://localhost:8000');
}); */
var server = require('http').Server(app);
var io = require('socket.io')(server);
io.on('connection', function(socket) {
  
  console.log("connection");
  socket.emit('server event', { foo: 'bar' });

  socket.on('client event', function(from, msg) {
    console.log("==== evt ====");
    console.log('I received a private message by ', from, ' saying ', msg);
    socket.emit("server event", { my: 'data'});
  });
  socket.on('disconnect', function() {
    console.log("==== disconnect ====");
  });

});
server.listen(8000, ()=>{
  console.log("Server is running. (8000)");
});