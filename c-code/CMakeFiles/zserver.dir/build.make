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
include CMakeFiles/zserver.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/zserver.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/zserver.dir/flags.make

CMakeFiles/zserver.dir/src/zmq/zserver.cc.o: CMakeFiles/zserver.dir/flags.make
CMakeFiles/zserver.dir/src/zmq/zserver.cc.o: src/zmq/zserver.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/zserver.dir/src/zmq/zserver.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/zserver.dir/src/zmq/zserver.cc.o -c /home/allen/project/RNA/c-code/src/zmq/zserver.cc

CMakeFiles/zserver.dir/src/zmq/zserver.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/zserver.dir/src/zmq/zserver.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/zmq/zserver.cc > CMakeFiles/zserver.dir/src/zmq/zserver.cc.i

CMakeFiles/zserver.dir/src/zmq/zserver.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/zserver.dir/src/zmq/zserver.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/zmq/zserver.cc -o CMakeFiles/zserver.dir/src/zmq/zserver.cc.s

CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.requires:
.PHONY : CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.requires

CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.provides: CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.requires
	$(MAKE) -f CMakeFiles/zserver.dir/build.make CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.provides.build
.PHONY : CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.provides

CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.provides.build: CMakeFiles/zserver.dir/src/zmq/zserver.cc.o

# Object files for target zserver
zserver_OBJECTS = \
"CMakeFiles/zserver.dir/src/zmq/zserver.cc.o"

# External object files for target zserver
zserver_EXTERNAL_OBJECTS =

/home/allen/project/RNA/web/build/zserver: CMakeFiles/zserver.dir/src/zmq/zserver.cc.o
/home/allen/project/RNA/web/build/zserver: CMakeFiles/zserver.dir/build.make
/home/allen/project/RNA/web/build/zserver: /usr/lib/x86_64-linux-gnu/libzmq.so
/home/allen/project/RNA/web/build/zserver: CMakeFiles/zserver.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable /home/allen/project/RNA/web/build/zserver"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/zserver.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/zserver.dir/build: /home/allen/project/RNA/web/build/zserver
.PHONY : CMakeFiles/zserver.dir/build

CMakeFiles/zserver.dir/requires: CMakeFiles/zserver.dir/src/zmq/zserver.cc.o.requires
.PHONY : CMakeFiles/zserver.dir/requires

CMakeFiles/zserver.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/zserver.dir/cmake_clean.cmake
.PHONY : CMakeFiles/zserver.dir/clean

CMakeFiles/zserver.dir/depend:
	cd /home/allen/project/RNA/c-code && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code/CMakeFiles/zserver.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/zserver.dir/depend

