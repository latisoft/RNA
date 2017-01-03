
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




var server = require('http').Server(app);
server.listen(8000, ()=>{
  console.log("Server is running. (8000)");
});