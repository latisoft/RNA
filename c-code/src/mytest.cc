
#include <iostream>
#include "myclass.h"

using namespace std;

extern "C" uint64_t factorial(int);

int main(int argc, char **argv)
{
    MyClass x;
    x.DoSomething();

    long n = factorial(4);
    cout<<"n="<<n<<endl;
}
