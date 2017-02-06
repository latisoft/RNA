

#include <iostream>
#include <fstream>
#include <vector>
#include <map>
#include <unistd.h>
#include <META/func.hpp>

// $./build/prml 
// -i ./assay/output/sn-000000/001/parameter.bsn 
// -o ./assay/output/sn-000000/001/result.bsn 
// -n 0
int main(int argc, char* argv[])
{
  if(argc<2) {
    std::cout << argv[0] << ": need argument (JSON)." << std::endl;

    std::cout << "toWeb$: cp bin/prml ../../web/build/" << "\n";
    std::cout << "usage$: ../../web/build/prml -i xx -o yy -n 1" << "\n";
    std::cout << "exist$: ../../web/build/assay/output/sn-0000000/1" << "\n";
    return 1;
  }



  
  time_t rawTime;
  struct tm * timeInfo;
  time (&rawTime);
  timeInfo = localtime(&rawTime);

  char buf[80];
  strftime(buf, 80, "%d%m%Y-%I:%M:%S-allen", timeInfo);
  std::string tag(buf);

  std::string _workDir   = "/home/allen/project/RNA/web/build/assay/output/sn-000000/";
  std::string pathResult = _workDir + argv[6] + "/result.bsn";
  std::string pathImg    = _workDir + argv[6] + "/sample.png";
  std::string pathData   = _workDir + argv[6] + "/sample.cen";

  std::ofstream dst0(pathData  , std::ios::binary);
  
  int rows = 500, columns = 500;
  for(int r=0; r<rows; r++) {
    for(int i=0; i<columns; i++)
    {
      dst0 << rand()%256;
      if(i != (columns-1)) 
        dst0 << ", ";
    }
    dst0 << std::endl;
  }
  dst0.close();

  std::string src1 
    = "{\n  \"tag\"    : \"" + tag                     + "\",\n" +
         "  \"img\"    : \"" + pathImg                 + "\",\n" + 
         "  \"data\"   : \"" + pathData                + "\",\n" + 
         "  \"rows\"   : \"" + std::to_string(rows)    + "\",\n" + 
         "  \"columns\": \"" + std::to_string(columns) + "\" \n" +
      "}";
  std::ofstream dst1(pathResult  , std::ios::binary);
  dst1 << src1;
  dst1.close();

  std::cout << "argv[2] = " << argv[2] << std::endl;
  std::cout << "argv[4] = " << argv[4] << std::endl;
  std::cout << "argv[6] = " << argv[6] << std::endl;
  std::cout << "== Generating result.bsn to:   " << pathResult  << std::endl;
  return 0;
}