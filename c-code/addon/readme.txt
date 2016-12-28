==== Re-build node.js: ====
$wget http://npmjs.org/install.sh | sh
$tar -xvzf node-v$ver.tar.gz

$sudo npm install -g node-gyp
$node-gyp configure
$node-gyp build (or $npm install)
$node test.js (or $npm start)


==== Call addon.exe from web-server ====
$cp build/Release/addon.node ../../web/build/

$npm install -S bindings nan 
$npm start