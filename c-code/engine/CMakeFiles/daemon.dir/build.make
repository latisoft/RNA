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
include CMakeFiles/daemon.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/daemon.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/daemon.dir/flags.make

CMakeFiles/daemon.dir/src/daemon.cc.o: CMakeFiles/daemon.dir/flags.make
CMakeFiles/daemon.dir/src/daemon.cc.o: src/daemon.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/daemon.dir/src/daemon.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/daemon.dir/src/daemon.cc.o -c /home/allen/project/RNA/c-code/src/daemon.cc

CMakeFiles/daemon.dir/src/daemon.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/daemon.dir/src/daemon.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/daemon.cc > CMakeFiles/daemon.dir/src/daemon.cc.i

CMakeFiles/daemon.dir/src/daemon.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/daemon.dir/src/daemon.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/daemon.cc -o CMakeFiles/daemon.dir/src/daemon.cc.s

CMakeFiles/daemon.dir/src/daemon.cc.o.requires:
.PHONY : CMakeFiles/daemon.dir/src/daemon.cc.o.requires

CMakeFiles/daemon.dir/src/daemon.cc.o.provides: CMakeFiles/daemon.dir/src/daemon.cc.o.requires
	$(MAKE) -f CMakeFiles/daemon.dir/build.make CMakeFiles/daemon.dir/src/daemon.cc.o.provides.build
.PHONY : CMakeFiles/daemon.dir/src/daemon.cc.o.provides

CMakeFiles/daemon.dir/src/daemon.cc.o.provides.build: CMakeFiles/daemon.dir/src/daemon.cc.o

# Object files for target daemon
daemon_OBJECTS = \
"CMakeFiles/daemon.dir/src/daemon.cc.o"

# External object files for target daemon
daemon_EXTERNAL_OBJECTS =

/home/allen/project/RNA/web/build/daemon: CMakeFiles/daemon.dir/src/daemon.cc.o
/home/allen/project/RNA/web/build/daemon: CMakeFiles/daemon.dir/build.make
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_date_time.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_program_options.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_filesystem.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_system.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_serialization.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_regex.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_thread.so
/home/allen/project/RNA/web/build/daemon: /usr/local/lib/libboost_iostreams.so
/home/allen/project/RNA/web/build/daemon: /usr/lib/x86_64-linux-gnu/libpthread.so
/home/allen/project/RNA/web/build/daemon: /usr/lib/x86_64-linux-gnu/libcurl.so
/home/allen/project/RNA/web/build/daemon: /home/allen/project/RNA/web/build/libdaemonlib.so
/home/allen/project/RNA/web/build/daemon: CMakeFiles/daemon.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable /home/allen/project/RNA/web/build/daemon"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/daemon.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/daemon.dir/build: /home/allen/project/RNA/web/build/daemon
.PHONY : CMakeFiles/daemon.dir/build

CMakeFiles/daemon.dir/requires: CMakeFiles/daemon.dir/src/daemon.cc.o.requires
.PHONY : CMakeFiles/daemon.dir/requires

CMakeFiles/daemon.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/daemon.dir/cmake_clean.cmake
.PHONY : CMakeFiles/daemon.dir/clean

CMakeFiles/daemon.dir/depend:
	cd /home/allen/project/RNA/c-code && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code/CMakeFiles/daemon.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/daemon.dir/depend
