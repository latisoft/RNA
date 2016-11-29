-- $sudo npm install -g express
-- $sudo npm install -g express-generator
-- $express -e web
-- $cd web; npm i; 
(web/web/bin/www/process.env.PORT 8000, 140.113.29.228:8000)
-- $mkdir addon build; cd ..
(addon for c/c++ module, build c/c++ binary)

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