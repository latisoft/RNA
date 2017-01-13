==== web ====
-- $npm install express
-- $mkdir build   (c++/js external)
-- $mkdir public  (img/css/js/react bundle.js)
-- $mkdir views   (index.html)

// App directory
app.use('/', express.static('public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

==== c++ external ====
RNA/web/build/addon.node (js.exe)
RNA/web/build/meta (c.exe)

==== socket.io ====
Socket.IO allows you to emit and receive custom events.

<body>
  <button onclick="test()">Test</button>
  <script src="/socket.io/socket.io.js"></script>
  <script>
    var socket = io();
    function test() {
      this.socket.emit('client event', {socket: 'io'});
      console.log("client emitting ...");
    }
    socket.on('server event', function(data) {
      console.log(data);
      // socket.emit('client event', {socket: 'io'});
    });
  </script>
</body>


==== exe ====
1. launch daemon: ~/RNA/web$ ./build/zserver &
2. launch server: ~/RNA/web$ npm start
3. open-UI: browser[ 192.168.1.12:49400 ]