//
//  Hello World server in C++
//  Binds REP socket to tcp://*:5555
//  Expects "Hello" from client, replies with "World"
//
#include <zmq.hpp>
#include <string>
#include <iostream>
#include <thread>
#include <boost/tokenizer.hpp>

#ifndef _WIN32
#include <unistd.h>
#else
#include <windows.h>
#define sleep(n)    Sleep(n)
#endif

inline void setbit(int &num, int x) { num |= 1 << x; }
inline void clrbit(int &num, int x) { num &= ~(1 << x); }
inline void xorbit(int &num, int x) { num ^= 1 << x; }
inline bool chkbit(int &num, int x) { return (num >> x) & 1; }

int totalCmd            = 0;
int assayNum0           = -1;
int assayNum            = 0; // 0~383 (16*24)
int progress            = 0; // 0~100 %
int status              = 0x00000000; // 32 bits


char plateRFID[100]     = "Centrillion SW #ID-6-0000";
int subtrayCnt          = 6;
int stepX               = 0;
int stepY               = 0;
int stepZ               = 0;

int totaImgsTaken       = 1000;
int nowT                = 45;
int maxT                = 53; // temperature record
int minT                = 28;


const unsigned int  READY       = 0;
const unsigned int  ASSAYING    = 1;
const unsigned int  PENDING     = 5;
const unsigned int  EMPTY       = 6;
const unsigned int  SKIP        = 7;
const unsigned int  FINISH      = 8;


const int TOTAL_CHIPS = 384; // 6 subtrays * 64
unsigned int subtrayDone[ TOTAL_CHIPS ];

bool ifDone(unsigned int n) {
  return (subtrayDone[n] == FINISH);
}
void setAssay(unsigned int n) {
  subtrayDone[n] = ASSAYING;
}
void setPending(unsigned int n) {
  subtrayDone[n] = PENDING;
}
void setDone(unsigned int n) {
  subtrayDone[n] = FINISH;
}
void clrDone(unsigned int n) {
  subtrayDone[n] = READY;
}
void clrDone() {
  for(int i=0; i<TOTAL_CHIPS; i++)
    clrDone(i);
}


const int B00_READY     = 0; // 0:reset, 1:ready 
const int B01_ASSAY     = 1; // 0:stop, 1:start
const int B02_DONE      = 2; // 1:current chip finished
const int B03_MODE      = 3; // 0:automatic next
const int B04_VERTICAL  = 4; // 0:horizontal first
const int B05_          = 5; // 0: 
const int B06_          = 6; // 0:
const int B07_COVER     = 7; // 0:close, 1:open
const int B08_          = 8; // 0:
const int B09_          = 9; // 0:
const int B10_          =10; // 0:off, 1:on
const int B11_          =11; // 0:off, 1:on
const int B12_R         =12; // 0:off, 1:on
const int B13_G         =13; // 0:
const int B14_B         =14; // 0:
const int B15_W         =15; // 0:
const int B16_          =16; // 0:
const int B17_          =17; // 1:tray changed. 
const int B1u_          =18; // 0:


inline void dump(std::string x)
{
  char buff[100];
  snprintf(buff, 100, "[#%d sts.%d no.%3d %3d%%]%s",
    totalCmd, status, assayNum, progress, x.c_str());
  std::cout << buff << std::endl;
}
inline void reset() {
  totalCmd              = 0;
  assayNum              = READY;
  progress              = 0;
  status                = 0x00000000;
  std::cout << "==reset==" << std::endl;
}
inline void assay(bool start) {
  if(start) setbit(status, B01_ASSAY);
  else    { clrbit(status, B01_ASSAY); progress = 0; }
  std::cout << "==assay(" << status << ")==" << std::endl;  
}

typedef boost::tokenizer<boost::char_separator<char>> tokenizer;
boost::char_separator<char> sep(",");
boost::char_separator<char> sep2(":");
inline void process(std::string cmdString, char *pBuff, int maxLen)
{
  // reset,10:0:5
  tokenizer tok(cmdString, sep);
  tokenizer::iterator ti = tok.begin(); 
  std::string cmd = (*ti); 
  ++ti;
  std::string data= (*ti);
  totalCmd++;


  if (cmd == "info") {
    snprintf(pBuff, 100, "info,%d,0:0:0:0",
      status);
  } else
  if (cmd == "done") {
  // done,status,8,8, ...8,1,0,0 ...
    int END_CHIP= (TOTAL_CHIPS-1);
    int offset  = snprintf(pBuff+0, maxLen-0, "done,%d,", status);
    for ( int i = 0; i < END_CHIP; i++ ) {
      offset += snprintf(pBuff+offset, maxLen-offset, "%d:", subtrayDone[i]);
    }
    snprintf(pBuff+offset, maxLen-offset, "%d", subtrayDone[END_CHIP]);
  } else
  if (cmd == "update") {
  // update,status,totalCmd:assayNum:progress:last:next  
    snprintf(pBuff, 100, "update,%d,#%d:%d:%d:%d:%d",
      status, totalCmd, assayNum, progress, assayNum0, assayNum+1);
  } else 
  if (cmd == "reset") { 
    reset();
    clrDone();  // clear done-table
    snprintf(pBuff, 100, "reset,%d,0",status);
  } else 
  if (cmd == "start") {
    assay(true);
    snprintf(pBuff, 100, "start,%d,0",status);
  } else 
  if (cmd == "stop") {
    assay(false);
    snprintf(pBuff, 100, "stop,%d,0",status);
  } else 
  if (cmd == "plate") {
  // plate,status,plateRFID:subtrayCnt
    snprintf(pBuff, 100, "plate,%d,%s:%d",status, plateRFID, subtrayCnt);
  } else 
  if (cmd == "position") {
  // position,-,x:y:z (step)
    snprintf(pBuff, 100, "position,%d,%d:%d:%d",status, stepX, stepY, stepZ);
  } else 
  if (cmd == "camera") {
  // camera,-,totalN:z:R:G:B:W
    snprintf(pBuff, 100, "camera,-,%d:%d", totaImgsTaken,stepZ);
  } else 
  if (cmd == "temperature") {
  // temperature,-,nowT:maxT:minT
    snprintf(pBuff, 100, "temperature,-,%d:%d:%d",
      nowT, maxT, minT);
  } else 
  if (cmd == "system") {
  // system,status,0
    snprintf(pBuff, 100, "system,%d,0:0:0",status);
  }
  //std::cout << "...[cmd:" + cmd + ", data:" + data + "]=>" << std::endl;
  dump("*");
}
void listener(zmq::socket_t &socket)
{
  // "reset,10:0:5"
  while (true)
  {
    // receive and process command
    zmq::message_t request;
    socket.recv (&request);

    char retBuff[800];
    process( (char*) request.data(), retBuff, 800);

    // response result: "update,1,0:0:0"
    int n = strlen(retBuff);
    zmq::message_t msg(n);
    memcpy (msg.data (), retBuff, n);
    socket.send (msg);
  }
}
int main () 
{
  zmq::context_t  context(1);
  zmq::socket_t   socket(context, ZMQ_REP);
  socket.bind ("tcp://*:5555");
  std::cout << "== Reader daemon bind socket@tcp://*:5555 ==" << std::endl;
  auto mThread = std::thread(listener, std::ref(socket));

  while(true)
  {
    usleep(70*1000);
    if(chkbit(status, B01_ASSAY))
    {
      // std::cout << "assaying ... ---------------" << progress << std::endl;
      usleep(70*1000);    // move motor and assaying
      setAssay(assayNum);
      if (++progress==100) // percentage
      {
          setDone(assayNum);
          setbit(status, B02_DONE);
          
          // sleep(1);
          progress  = 0;
          sleep(1);

          clrbit(status, B02_DONE);
          assayNum0 = assayNum;
          if (++assayNum==TOTAL_CHIPS) // =16*24 chips
          {
              assayNum = 0;
              clrDone();
              clrbit(status, B01_ASSAY); // auto stop
              sleep(8);   // tray change
          }
      }
      dump("-");
    }
  }
  return 0;
}