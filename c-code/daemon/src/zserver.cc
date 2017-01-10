//
//  Hello World server in C++
//  Binds REP socket to tcp://*:5555
//  Expects "Hello" from client, replies with "World"
//
#include <zmq.hpp>
#include <string>
#include <iostream>
#ifndef _WIN32
#include <unistd.h>
#else
#include <windows.h>

#define sleep(n)    Sleep(n)
#endif
/*
int main () {
    //  Prepare our context and socket
    zmq::context_t context (1);
    zmq::socket_t socket (context, ZMQ_REP);
    socket.bind ("tcp://*:5555");

    while (true) {
        zmq::message_t request;

        //  Wait for next request from client
        socket.recv (&request);
        std::cout << "Received Hello" << std::endl;

        //  Do some 'work'
        sleep(1);

        //  Send reply back to client
        zmq::message_t reply (5);
        memcpy (reply.data (), "World", 5);
        socket.send (reply);
    }
    return 0;
}
*/

#include <boost/asio.hpp>
#include <boost/chrono.hpp>
#include <boost/tokenizer.hpp>


int totalCmd = 0;
int assayNum = 1; // 1~384 (16*24)
int percent  = 0; // 0~100 %

inline void setbit(int &num, int x) { num |= 1 << x; }
inline void clrbit(int &num, int x) { num &= ~(1 << x); }
inline void xorbit(int &num, int x) { num ^= 1 << x; }
inline bool chkbit(int &num, int x) { return (num >> x) & 1; }

int status          = 0x00000000; // 32 bits
const int B0_READY = 0; // 0: reset,  1: ready 
const int B1_ASSAY = 1; // 0: stop,   1: start


const int EXPIRE_TIME = 500; // ms
const int RESET_TIME  =   1; // sec
zmq::socket_t* pSocket;

boost::asio::io_service io;
boost::asio::deadline_timer timerWatchDog(io);
boost::chrono::steady_clock::time_point appStart;

void onTimerWatchDog(const boost::system::error_code& error)
{
  assert(!error);
  /*
  if ( chkbit(status, B0_READY) )
  {
    if ( chkbit(status, B1_ASSAY) )
    {
      percent ++;
      if (percent > 100) {
          percent = 0;
          assayNum ++;
          if (assayNum > 384) {
              assayNum = 1;
              clrbit(status, B1_ASSAY);
          }
          std::cout << "timer watch dog: " << assayNum << std::endl;
      }
    }
  }
  */
  std::cout << "Watchdog timer@ " <<
    boost::chrono::duration_cast<boost::chrono::milliseconds>
    (boost::chrono::steady_clock::now() - appStart).count() << " (" << status << ") "
    << "#:" << assayNum << "-" << percent << "% " << std::endl;

  timerWatchDog.expires_from_now(boost::posix_time::millisec(EXPIRE_TIME));
  timerWatchDog.async_wait(onTimerWatchDog);

/*
  char buff[100];
  snprintf(buff, 100, "assay,%d,%d%%:0:0",assayNum,percent);

  int n = sizeof(buff) + 1;
  zmq::message_t buf(n);

  memset (buf.data (), '\0', n);
  memcpy (buf.data (), buff, n);
  pSocket->send (buf);
*/
}

void init()
{
  boost::asio::io_service::work work(io);
  appStart = boost::chrono::steady_clock::now();
  timerWatchDog.expires_from_now(boost::posix_time::millisec(EXPIRE_TIME));
  timerWatchDog.async_wait(onTimerWatchDog);
  io.run();
  std::cout << "Initialze timer: " << EXPIRE_TIME << std::endl;
}
inline int reset() {
  status    = 0x00000000;
  assayNum  = 1;
  sleep(RESET_TIME);
  setbit(status, B0_READY);
  std::cout << "Reset " << "(" << status << "): " 
            << "no." << assayNum << " = " << percent << "%" << std::endl;
  return status;
}
inline int assay(bool start) {
  if(start) setbit(status, B1_ASSAY);
  else      clrbit(status, B1_ASSAY);

  std::cout << "Assay-" << start << "(" << status << "): " 
            << "no." << assayNum << " = " << percent << "%" << std::endl;
  return status;
}

int main () {

  typedef boost::tokenizer<boost::char_separator<char>> tokenizer;
  // reset,10:0:5
  // {cmd:"reset", result:0, data:"" }
  boost::char_separator<char> sep(",");
  boost::char_separator<char> sep2(":");

  //  Prepare our context and socket
  zmq::context_t context (1);
  zmq::socket_t socket (context, ZMQ_REP);
  socket.bind ("tcp://*:5555");
  pSocket = &socket;
  std::cout << "Hello, It is reader daemon 5555!" << std::endl;

  // init();
  int ret; //, i=0;

  while (true)
  {
    zmq::message_t request;
    socket.recv (&request);
    
    std::string cmdString ((char*) request.data());
    
    tokenizer tok(cmdString, sep);
    tokenizer::iterator ti = tok.begin(); 
    std::string cmd = (*ti);
    ++ti;
    std::string data= (*ti);
    

    std::cout << std::endl << "Receive[#" << totalCmd++ << "]: " << cmdString << " => ";

    std::string retString = "error!!!";
    if (cmd == "reset") {
      ret = reset();
    } else if (cmd == "start") {
      ret = assay(true);
    } else if (cmd == "stop") {
      ret = assay(false);
    }
    retString = cmd + ","+\
                std::to_string(ret) + ","+\
                "0:0:0" + ",";

    int n = retString.length() + 1;
    zmq::message_t buf(n);

    memset (buf.data (), '\0', n);
    memcpy (buf.data (), retString.c_str(), n);
    std::cout << "data=" << (char*)buf.data() 
              << ", n=" << n << std::endl;
    socket.send (buf);
  }
  return 0;
}