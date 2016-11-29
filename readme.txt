==== 
-- $sudo npm install -g express
-- $sudo npm install -g express-generator
-- $mkdir addon   (c++/js module)
-- $mkdir build   (c++ external)
-- $mkdir public  (img/css/js/react bundle.js)
-- $mkdir views   (index.html)

// App directory
app.use('/', express.static('public'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/views/index.html'));
});

==== react project ====
(rebuild)
-- $mkdir ui
-- $npm install
-- $webpack (generate bundle.js to web/public/javascripts/)
-- $chromium-browser index.html

(initial)
-- $npm init -y 
-- $npm i -D webpack webpack-dev-server react-hot-loader
-- $npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
-- $npm i -S react react-dom history react-router

-- $npm i -D css-loader html-loader node-sass sass-loader style-loader
-- $npm i -S event-emitter react-addons-css-transition-group react-draggable react-modal axios

-- $npm install react-bootstrap -S
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">

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


