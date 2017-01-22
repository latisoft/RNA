
var express   = require('express'), 
    bodyParser= require('body-parser'),
    jsonfile  = require('jsonfile');
var app = express();
app.use(bodyParser.json());

// App directory
var path= require("path");
app.use('/', express.static('public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});


// Configuration File of Reader
app.get('/read/settings', function(req, res) {
  jsonfile.readFile('./settings.ini', function(err, settings) {
    if(err) 
      console.error(err);
    res.send(settings);
    console.log("read: ", settings);
  });
});
app.post('/write/settings', function(req, res) {
  var settings = req.body;
  jsonfile.writeFile('./settings.ini', settings, {spaces: 2}, function(err) {
    console.error(err);
  });
  console.log('write: ', settings);
});

var http  = require('http').Server(app);
var io    = require('socket.io')(http);

var reader= require('./reader.js');
var engine= require('./engine.js');

// UI (on socket.io): push result and process command.
exports.push    = (who, msg)=> { io.emit(who, msg); };
var uiCommander = (socket)  => {
  console.log("==== connection ====");
  io.emit('server event', {cmd: 'cmd', result: 0, data: 'welcome'} );

  socket.on('toReader', function(msg) {
    console.log('toReader-msg: ', msg);
    reader.proc(msg, null);
  });
  socket.on('toEngine', function(msg) {
    //console.log('toEngine-msg: ', msg);
    engine.proc(msg, null);
  });
  socket.on('disconnect', function() {
    console.log("==== disconnect ====");
  });
}
io.on('connection', uiCommander);

http.listen(8000, ()=>{
  console.log("listening on *:8000");
});