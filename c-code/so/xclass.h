#ifndef __XCLASS_H__
#define __XCLASS_H__

class XClass
{
public:
  XClass();

  /* use virtual otherwise linker will try to perform static linkage */
  virtual void DoSomething();

private:
  int x;
};

#endif
