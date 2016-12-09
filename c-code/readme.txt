
==== In directory c-code: ====
(init)
$mkdir bin lib src include unit_test
$cd include
$ln -s ../src META
- create your cpp & hpp in src/
- single cpp single bin

(compile meta)
$cmake .  (generate Makefile)
$make     (generate ../web/build/meta)
$../web/build/meta

(compile api.so)
$ gcc -shared -fpic src/api.cpp -o api.so


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