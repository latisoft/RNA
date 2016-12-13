
#include <iostream>
#include "myclass.h"

using namespace std;

extern "C" uint64_t initialize(int);

int main(int argc, char **argv)
{
    MyClass x;
    x.DoSomething();

    long ret = initialize(4);
    cout<<"return "<<ret <<endl;
}
