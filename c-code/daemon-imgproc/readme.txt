
==== In directory c-code: ====

(init)
$mkdir bin lib src include unit_test
$cd include
$ln -s ../src PRML
- create your cpp & hpp in src/
- single cpp single bin


==== In directory web: ====
-- $cd ../web
-- $npm install -S child_process

const execFile = require('child_process').execFile;
const child = execFile('build/prml', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
})


==== Compile Engine ====
// generate meta to directory /daemon-imgproc/bin
$cmake .  (generate Makefile)
$make     (generate ../web/build/prml) => external binary


==== Execute ====
// generate ./assay/output/sn-000000/1/result.bsn
// generate ./assay/output/sn-000000/1/sample.cen
// generate ./assay/output/sn-000000/1/sample.png

~/RNA/c-code/engine$ cp bin/prml ../../web/build/
~/RNA/c-code/engine$ ../../web/build/prml -i xx -o yy -n 1
xx = ./assay/output/sn-000000/001/parameter.bsn
yy = ./assay/output/sn-000000/001/result.bsn


Just call me by "$prml -i xx -o yy -n 1"
and check ./assay/output/sn-000000/001/sample.*