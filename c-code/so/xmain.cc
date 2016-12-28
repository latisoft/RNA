
#include <iostream>
#include "xclass.h"

using namespace std;

extern "C" long initialize(int);
extern "C" uint64_t getStatus(int);

int main(int argc, char **argv)
{
  cout<< "== Test initalize from js ffi: ==" << endl;
  XClass x;
  x.DoSomething();

  unsigned long long sts = getStatus(4);
  cout << "(" << sts << ")" << endl;

  cout<< endl;
  cout<< "== Call me again from js ffi: ==" << endl;
  cout<< "$npm install" << endl;
  cout<< "$node daemon.js" << endl;
}
