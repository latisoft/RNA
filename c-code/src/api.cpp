#include <stdint.h>

#if defined(WIN32) || defined(_WIN32)
#define EXPORT __declspec(dllexport)
#else
#define EXPORT
#endif

EXPORT long factorial(int max) {
  int i = max;
  long result = 1;

  while (i >= 2) {
    result *= i--;
  }

  return result;
}