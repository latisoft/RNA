
==== In directory c-code: ====
// generate dynamic library (*.so) to directory /so

$cmake .        // generate test and libx.so
$make
$./test         // call libx.so

$npm init -y
$npm install -s ffi
$node daemon.js // from js