
==== In directory c-code: ====

(init)
$mkdir bin lib src include unit_test
$cd include
$ln -s ../src META
- create your cpp & hpp in src/
- single cpp single bin


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


==== Compile Engine ====
// generate meta to directory /engine/bin
$cmake .  (generate Makefile)
$make     (generate ../web/build/meta) => external binary


==== Execute ====
// from ./tmp/demo/result.bsn 
// from ./tmp/demo/genotype.tsv 
// to ./tmp/4

~/RNA/c-code/engine$ cp bin/meta ../../web/build/
~/RNA/c-code/engine$ ../../web/build/meta -i xx -o yy -n 4