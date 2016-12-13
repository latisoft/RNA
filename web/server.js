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


console.log("===== zmq =====");
// Hello World client
// Connects REQ socket to tcp://localhost:5555
// Sends "Hello" to server.

var zmq = require('zmq');

// socket to talk to server
console.log("Connecting to hello world server…");
var requester = zmq.socket('req');

var x = 0;
requester.on("message", function(reply) {
  console.log("Received reply", x, ": [", reply.toString(), ']');
  x += 1;
  if (x === 10) {
    requester.close();
    process.exit(0);
  }
});

requester.connect("tcp://localhost:5555");

for (var i = 0; i < 10; i++) {
  console.log("Sending request", i, '…');
  requester.send("Hello");
}

process.on('SIGINT', function() {
  requester.close();
});
