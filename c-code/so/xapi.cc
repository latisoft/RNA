
#include <iostream>
#include <stdint.h>

#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

using namespace std;

extern "C" EXPORT long initialize(int mode) {
  cout << "api initialize ok! " << mode << endl;
  return 0; // success
}

extern "C" EXPORT int setAction(int cmd) {
  return 0; // success
}
extern "C" EXPORT unsigned long long getStatus(int device) {
  unsigned long long status = 0x0A0B0C0D0E0F0101; // 64 bits
  cout << "api status = " << hex << status << endl;
  return status;
}