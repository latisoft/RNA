
This is C++ binding for 0MQ
The contribution policy is at: http://rfc.zeromq.org/spec:22

==== JS communication test ====
$ node i -S express http zmq
$ node web.js

==== Install ZeroMQ ====
sudo apt-get install libtool pkg-config build-essential autoconf automake
sudo apt-get install libzmq-dev

==== Compile zserver.c and zclient.c ====
// generate zserver/zclient to directory /daemon/bin
// set( EXECUTABLE_OUTPUT_PATH ${CMAKE_SOURCE_DIR}/bin )
$cmake .  
$make

$ ./zserver &
$ ./zclient

~/RNA/c-code/daemon$ cp ./bin/zserver ../../web/build/ && ../../web/build/zserver