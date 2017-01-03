/*

// App operation
const execFile = require('child_process').execFile;
app.get('/run/:username', function pipeline(req, res) {

  // var username = req.params.username;

  const child = execFile('build/meta', ['--version'], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
});

// const addon = require('bindings')('addon.node')
// console.log('This should be eight:', addon.add(3, 5))



var io = require('socket.io');
//var gui = io(server);
// var gui = io.listen(app);

export.listen = function(server) {

  var gui = io(server);

  gui.on('connection', function(socket) {
    
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

}


*/