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
include CMakeFiles/main.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/main.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/main.dir/flags.make

CMakeFiles/main.dir/src/main.cc.o: CMakeFiles/main.dir/flags.make
CMakeFiles/main.dir/src/main.cc.o: src/main.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/main.dir/src/main.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/main.dir/src/main.cc.o -c /home/allen/project/RNA/c-code/src/main.cc

CMakeFiles/main.dir/src/main.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/main.dir/src/main.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/main.cc > CMakeFiles/main.dir/src/main.cc.i

CMakeFiles/main.dir/src/main.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/main.dir/src/main.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/main.cc -o CMakeFiles/main.dir/src/main.cc.s

CMakeFiles/main.dir/src/main.cc.o.requires:
.PHONY : CMakeFiles/main.dir/src/main.cc.o.requires

CMakeFiles/main.dir/src/main.cc.o.provides: CMakeFiles/main.dir/src/main.cc.o.requires
	$(MAKE) -f CMakeFiles/main.dir/build.make CMakeFiles/main.dir/src/main.cc.o.provides.build
.PHONY : CMakeFiles/main.dir/src/main.cc.o.provides

CMakeFiles/main.dir/src/main.cc.o.provides.build: CMakeFiles/main.dir/src/main.cc.o

# Object files for target main
main_OBJECTS = \
"CMakeFiles/main.dir/src/main.cc.o"

# External object files for target main
main_EXTERNAL_OBJECTS =

/home/allen/project/RNA/web/build/main: CMakeFiles/main.dir/src/main.cc.o
/home/allen/project/RNA/web/build/main: CMakeFiles/main.dir/build.make
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_date_time.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_program_options.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_filesystem.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_system.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_serialization.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_regex.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_thread.so
/home/allen/project/RNA/web/build/main: /usr/local/lib/libboost_iostreams.so
/home/allen/project/RNA/web/build/main: /usr/lib/x86_64-linux-gnu/libpthread.so
/home/allen/project/RNA/web/build/main: /usr/lib/x86_64-linux-gnu/libcurl.so
/home/allen/project/RNA/web/build/main: lib/libmydll.so
/home/allen/project/RNA/web/build/main: CMakeFiles/main.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable /home/allen/project/RNA/web/build/main"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/main.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/main.dir/build: /home/allen/project/RNA/web/build/main
.PHONY : CMakeFiles/main.dir/build

CMakeFiles/main.dir/requires: CMakeFiles/main.dir/src/main.cc.o.requires
.PHONY : CMakeFiles/main.dir/requires

CMakeFiles/main.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/main.dir/cmake_clean.cmake
.PHONY : CMakeFiles/main.dir/clean

CMakeFiles/main.dir/depend:
	cd /home/allen/project/RNA/c-code && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code/CMakeFiles/main.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/main.dir/depend

