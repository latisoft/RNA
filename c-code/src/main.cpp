

#include <iostream>
#include <vector>
#include <map>

#include <META/func.hpp>

template<int N>
class Factorial {
public:
    enum { value = N * Factorial<N-1>::value };
};
template<>
class Factorial<1> {
public:
    enum { value = 1 };
};

template<typename T, int N, int n, T ARR[N]>
class RevPrinter {
public:
  static inline void print() {
    std::cout << ARR[n-1] << ',';
    RevPrinter<T, N, n-1, ARR>::print();
  }
};
template<typename T, int N, T ARR[N]>
class RevPrinter<T, N, 1, ARR> {
public: 
  static inline void print() {
    std::cout << ARR[0] << '\n';  
  }
};
template<typename T, int N, int n, T (&Q)[N]>
class QuePrinter {
public:
  static inline void print() {
    std::cout << Q[N-n] << ',';
    QuePrinter<T, N, n-1, Q>::print();
  }
};
template<typename T, int N, T (&Q)[N]>
class QuePrinter<T, N, 1, Q> {
public: 
  static inline void print() {
    std::cout << Q[N-1] << '\n';
  }
};

template <typename A>
bool EQUAL(const A& a) { return false; }

template <typename A, typename... Ts>
bool EQUAL(const A& a, const Ts&... rest)
{
  if(EQUAL(rest...)) return true;
  else {
    int n = sizeof...(Ts);
    int tmp[n] = {rest...};   
    while(n)
      if(a==tmp[--n]) return true;
  }
    return false;
}

template <typename... Ts>
void printer(const Ts&... rest) {
  int dummy[sizeof...(Ts)] = { (std::cout << rest << " ",0)... };
};

template <template <typename...> class CONTer, typename T>
class back_inserter
{
    CONTer<T> m_container;
public:
  void insert_100k() {

    m_container.insert();
  }    
};

int a[10] = {1,2,3,4,5,6,7,8,9,10};
int main()
{
  std::cout << "Hello World!\n";
  std::cout << Factorial<4>::value << "\n";

  std::cout << "----Homework 7\n";
  std::cout << "RevPrinter<int, 10, 10, a>::print(); ";
  RevPrinter<int, 10, 10, a>::print(); 
  std::cout << "QuePrinter<int, 10, 10, a>::print(); "; 
  QuePrinter<int, 10, 10, a>::print();

  std::cout << "\n";
  std::cout << "EQUAL(1,2,4,5,5,2)=" << EQUAL(1,2,4,5,5,2) << "\n";
  std::cout << "EQUAL(3,4,5,6)="     << EQUAL(3,4,5,6)     << "\n";

  std::cout << "----Homework 8 a----\n";  
  
  printer("tuple", 1, 2.3, "456");
  back_inserter<std::vector, int> vi;
  std::cout << "\n";  

  return 0;
}