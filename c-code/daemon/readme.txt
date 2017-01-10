
==== Compile zserver.c and zclient.c ====
// generate zserver/zclient to directory /zmq/bin
// set( EXECUTABLE_OUTPUT_PATH ${CMAKE_SOURCE_DIR}/bin )
$cmake .  
$make

$ ./zserver &
$ ./zclient

$ cp ./bin/zserver ../../web/build/ && ../../web/build/zserver

==== JS communication test ====
$ node i -S express http zmq
$ node web.js

==== Install ZeroMQ ====
sudo apt-get install libtool pkg-config build-essential autoconf automake
sudo apt-get install libzmq-dev
