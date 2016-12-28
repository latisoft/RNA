
==== In directory c-code: ====
(example)
so/  => call dynamic lib
zmg/ => ipc by zmg (zserver/zclient)

(init)
$mkdir bin lib src include unit_test
$cd include
$ln -s ../src META
- create your cpp & hpp in src/
- single cpp single bin

(compile)
$cmake .  (generate Makefile)
$make     (generate ../web/build/meta zserver zclient)

(execute meta)
$../web/build/meta => external binary

(execute zmg)
$../web/build/zserver
$../web/build/zclient

==== In directory web: ====
-- $cd ../web
-- $npm install -S child_process

const execFile = require('child_process').execFile;
const child = execFile('build/meta', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
})

==== Install ZeroMQ ====
sudo apt-get install libtool pkg-config build-essential autoconf automake
sudo apt-get install libzmq-dev
