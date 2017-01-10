
==== react project ====
(rebuild)
-- $mkdir ui
-- $npm install
-- $webpack (generate bundle.js to web/public/javascripts/)
-- $chromium-browser index.html
-- $RNA/web/npm start

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
