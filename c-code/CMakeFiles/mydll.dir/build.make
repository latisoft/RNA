# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.2

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list

# Produce verbose output by default.
VERBOSE = 1

# Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/allen/project/RNA/c-code

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/allen/project/RNA/c-code

# Include any dependencies generated for this target.
include CMakeFiles/mydll.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/mydll.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/mydll.dir/flags.make

CMakeFiles/mydll.dir/src/myclass.cc.o: CMakeFiles/mydll.dir/flags.make
CMakeFiles/mydll.dir/src/myclass.cc.o: src/myclass.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/mydll.dir/src/myclass.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/mydll.dir/src/myclass.cc.o -c /home/allen/project/RNA/c-code/src/myclass.cc

CMakeFiles/mydll.dir/src/myclass.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/mydll.dir/src/myclass.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/myclass.cc > CMakeFiles/mydll.dir/src/myclass.cc.i

CMakeFiles/mydll.dir/src/myclass.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/mydll.dir/src/myclass.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/myclass.cc -o CMakeFiles/mydll.dir/src/myclass.cc.s

CMakeFiles/mydll.dir/src/myclass.cc.o.requires:
.PHONY : CMakeFiles/mydll.dir/src/myclass.cc.o.requires

CMakeFiles/mydll.dir/src/myclass.cc.o.provides: CMakeFiles/mydll.dir/src/myclass.cc.o.requires
	$(MAKE) -f CMakeFiles/mydll.dir/build.make CMakeFiles/mydll.dir/src/myclass.cc.o.provides.build
.PHONY : CMakeFiles/mydll.dir/src/myclass.cc.o.provides

CMakeFiles/mydll.dir/src/myclass.cc.o.provides.build: CMakeFiles/mydll.dir/src/myclass.cc.o

# Object files for target mydll
mydll_OBJECTS = \
"CMakeFiles/mydll.dir/src/myclass.cc.o"

# External object files for target mydll
mydll_EXTERNAL_OBJECTS =

/home/allen/project/RNA/web/build/libmydll.so: CMakeFiles/mydll.dir/src/myclass.cc.o
/home/allen/project/RNA/web/build/libmydll.so: CMakeFiles/mydll.dir/build.make
/home/allen/project/RNA/web/build/libmydll.so: CMakeFiles/mydll.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX shared library /home/allen/project/RNA/web/build/libmydll.so"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/mydll.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/mydll.dir/build: /home/allen/project/RNA/web/build/libmydll.so
.PHONY : CMakeFiles/mydll.dir/build

CMakeFiles/mydll.dir/requires: CMakeFiles/mydll.dir/src/myclass.cc.o.requires
.PHONY : CMakeFiles/mydll.dir/requires

CMakeFiles/mydll.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/mydll.dir/cmake_clean.cmake
.PHONY : CMakeFiles/mydll.dir/clean

CMakeFiles/mydll.dir/depend:
	cd /home/allen/project/RNA/c-code && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code/CMakeFiles/mydll.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/mydll.dir/depend
