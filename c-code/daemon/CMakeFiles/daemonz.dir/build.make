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
include CMakeFiles/daemonz.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/daemonz.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/daemonz.dir/flags.make

CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o: CMakeFiles/daemonz.dir/flags.make
CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o: src/cppzmq/daemonzmq.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o -c /home/allen/project/RNA/c-code/src/cppzmq/daemonzmq.cc

CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/cppzmq/daemonzmq.cc > CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.i

CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/cppzmq/daemonzmq.cc -o CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.s

CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.requires:
.PHONY : CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.requires

CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.provides: CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.requires
	$(MAKE) -f CMakeFiles/daemonz.dir/build.make CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.provides.build
.PHONY : CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.provides

CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.provides.build: CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o

# Object files for target daemonz
daemonz_OBJECTS = \
"CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o"

# External object files for target daemonz
daemonz_EXTERNAL_OBJECTS =

/home/allen/project/RNA/web/build/daemonz: CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o
/home/allen/project/RNA/web/build/daemonz: CMakeFiles/daemonz.dir/build.make
/home/allen/project/RNA/web/build/daemonz: /usr/lib/x86_64-linux-gnu/libzmq.so
/home/allen/project/RNA/web/build/daemonz: CMakeFiles/daemonz.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable /home/allen/project/RNA/web/build/daemonz"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/daemonz.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/daemonz.dir/build: /home/allen/project/RNA/web/build/daemonz
.PHONY : CMakeFiles/daemonz.dir/build

CMakeFiles/daemonz.dir/requires: CMakeFiles/daemonz.dir/src/cppzmq/daemonzmq.cc.o.requires
.PHONY : CMakeFiles/daemonz.dir/requires

CMakeFiles/daemonz.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/daemonz.dir/cmake_clean.cmake
.PHONY : CMakeFiles/daemonz.dir/clean

CMakeFiles/daemonz.dir/depend:
	cd /home/allen/project/RNA/c-code && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code/CMakeFiles/daemonz.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/daemonz.dir/depend
