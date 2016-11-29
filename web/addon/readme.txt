==== In directory addon: ====
-- $wget http://npmjs.org/install.sh | sh
-- $tar -xvzf node-v$ver.tar.gz
-- $sudo npm install -g node-gyp
-- $npm install -S bindings nan

0. $cd addon
1. $node-gyp configure
2. $node-gyp build (or $npm install)
3. $node test.js (or $npm start)
(testing)

4. $cp build/Release/addon.node ../build/
5. $npm start 
(launch server.js)

