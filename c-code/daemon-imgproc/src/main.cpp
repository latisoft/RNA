

#include <iostream>
#include <fstream>
#include <vector>
#include <map>
#include <unistd.h>
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

template <std::size_t len>
static int lengthOfArr(const std::string (&array)[len]) { return len; }
std::string demoArr[] = {
   " 1 -0.902627   10.5435 2   0.666667    AFFX-SNP-000002 GSM2066969_301-054_CHB",
   " 2 0.903679    10.6975 0   0.666667    AFFX-SNP-000003 GSM2066969_301-054_CHB",
   " 3 0.0976733   9.75483 1   0.666667    AFFX-SNP-000004 GSM2066969_301-054_CHB"
};
int a[10] = {1,2,3,4,5,6,7,8,9,10};

// $./build/meta -i ./tmp/0/parameter.bsn -o ./tmp/0/result.bsn -n 0
int main(int argc, char* argv[])
{
  if(argc<2) {
    std::cout << argv[0] << ": need argument (JSON)." << std::endl;

    std::cout << "toWeb$: cp bin/meta ../../web/build/" << "\n";
    std::cout << "usage$: ../../web/build/meta -i xx -o yy -n 4" << "\n";
    std::cout << "exist$: ../../web/build/tmp/4" << "\n";
    return 1;
  }
  std::cout << "Factorial<4>::value = " << Factorial<4>::value << "\n";

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
  std::cout << "\n" << "length of array: " << lengthOfArr( demoArr ) << "\n";

  for(int i=0; i<100; i++)
  {
    usleep(10000);
    std::cout << "stage #" << i << std::endl;
  }


  
  time_t rawTime;
  struct tm * timeInfo;
  time (&rawTime);
  timeInfo = localtime(&rawTime);

  char buf[80]; 
  strftime(buf, 80, "%d%m%Y-%I:%M:%S-allen", timeInfo);
  std::string tag(buf);

  std::string pathWorking   = "/home/allen/project/RNA/web/build/";
  std::string fromResult    = pathWorking + "tmp/demo/result.bsn";
  std::string fromGenotype  = pathWorking + "tmp/demo/genotype.tsv";
  std::string toResult      = pathWorking + "tmp/" + argv[6] + "/result.bsn";
  std::string toGenotype    = pathWorking + "tmp/" + argv[6] + "/genotype.tsv";


  std::ifstream src0(fromGenotype, std::ios::binary);
  std::ofstream dst0(toGenotype  , std::ios::binary);
  dst0 << src0.rdbuf();
  dst0.close();
  //std::cout << "== Copy genotype.tsv:   " <<  fromGenotype << " => " << toGenotype  << std::endl;

  std::string src1 
    = "{\n  \"tag\": \"" + tag + "\",\n" +
      "  \"output\": {\n" + 
      "    \"genotype\":[\"/home/allen/project/RNA/web/build/tmp/" + argv[6] + "/genotype.tsv\"]\n" + 
      "  }\n" + 
      "}";
  std::ofstream dst1(toResult  , std::ios::binary);
  dst1 << src1;
  dst1.close();
  //std::cout << "== Build result.bsn:   " <<  src1 << " => " << toResult  << std::endl;

  std::cout << "argv[2] = " << argv[2] << std::endl;
  std::cout << "argv[4] = " << argv[4] << std::endl;
  std::cout << "argv[6] = " << argv[6] << std::endl;
  std::cout << "== Generating toResult:   " << toResult   << std::endl;
  std::cout << "== Generating toGenotype: " << toGenotype << std::endl;
  return 0;
}