
var express = require('express');
var app = express();


// App directory
var path= require("path");
app.use('/', express.static('public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});
var server = require('http').Server(app);

server.listen(8000, ()=>{
  console.log("Server is running. (8000)");
});