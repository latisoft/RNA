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
include CMakeFiles/mylib.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/mylib.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/mylib.dir/flags.make

CMakeFiles/mylib.dir/src/myapi.cc.o: CMakeFiles/mylib.dir/flags.make
CMakeFiles/mylib.dir/src/myapi.cc.o: src/myapi.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/mylib.dir/src/myapi.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/mylib.dir/src/myapi.cc.o -c /home/allen/project/RNA/c-code/src/myapi.cc

CMakeFiles/mylib.dir/src/myapi.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/mylib.dir/src/myapi.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/myapi.cc > CMakeFiles/mylib.dir/src/myapi.cc.i

CMakeFiles/mylib.dir/src/myapi.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/mylib.dir/src/myapi.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/myapi.cc -o CMakeFiles/mylib.dir/src/myapi.cc.s

CMakeFiles/mylib.dir/src/myapi.cc.o.requires:
.PHONY : CMakeFiles/mylib.dir/src/myapi.cc.o.requires

CMakeFiles/mylib.dir/src/myapi.cc.o.provides: CMakeFiles/mylib.dir/src/myapi.cc.o.requires
	$(MAKE) -f CMakeFiles/mylib.dir/build.make CMakeFiles/mylib.dir/src/myapi.cc.o.provides.build
.PHONY : CMakeFiles/mylib.dir/src/myapi.cc.o.provides

CMakeFiles/mylib.dir/src/myapi.cc.o.provides.build: CMakeFiles/mylib.dir/src/myapi.cc.o

CMakeFiles/mylib.dir/src/myclass.cc.o: CMakeFiles/mylib.dir/flags.make
CMakeFiles/mylib.dir/src/myclass.cc.o: src/myclass.cc
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/CMakeFiles $(CMAKE_PROGRESS_2)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/mylib.dir/src/myclass.cc.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/mylib.dir/src/myclass.cc.o -c /home/allen/project/RNA/c-code/src/myclass.cc

CMakeFiles/mylib.dir/src/myclass.cc.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/mylib.dir/src/myclass.cc.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/src/myclass.cc > CMakeFiles/mylib.dir/src/myclass.cc.i

CMakeFiles/mylib.dir/src/myclass.cc.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/mylib.dir/src/myclass.cc.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/src/myclass.cc -o CMakeFiles/mylib.dir/src/myclass.cc.s

CMakeFiles/mylib.dir/src/myclass.cc.o.requires:
.PHONY : CMakeFiles/mylib.dir/src/myclass.cc.o.requires

CMakeFiles/mylib.dir/src/myclass.cc.o.provides: CMakeFiles/mylib.dir/src/myclass.cc.o.requires
	$(MAKE) -f CMakeFiles/mylib.dir/build.make CMakeFiles/mylib.dir/src/myclass.cc.o.provides.build
.PHONY : CMakeFiles/mylib.dir/src/myclass.cc.o.provides

CMakeFiles/mylib.dir/src/myclass.cc.o.provides.build: CMakeFiles/mylib.dir/src/myclass.cc.o

# Object files for target mylib
mylib_OBJECTS = \
"CMakeFiles/mylib.dir/src/myapi.cc.o" \
"CMakeFiles/mylib.dir/src/myclass.cc.o"

# External object files for target mylib
mylib_EXTERNAL_OBJECTS =

/home/allen/project/RNA/web/build/libmylib.so: CMakeFiles/mylib.dir/src/myapi.cc.o
/home/allen/project/RNA/web/build/libmylib.so: CMakeFiles/mylib.dir/src/myclass.cc.o
/home/allen/project/RNA/web/build/libmylib.so: CMakeFiles/mylib.dir/build.make
/home/allen/project/RNA/web/build/libmylib.so: CMakeFiles/mylib.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX shared library /home/allen/project/RNA/web/build/libmylib.so"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/mylib.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/mylib.dir/build: /home/allen/project/RNA/web/build/libmylib.so
.PHONY : CMakeFiles/mylib.dir/build

CMakeFiles/mylib.dir/requires: CMakeFiles/mylib.dir/src/myapi.cc.o.requires
CMakeFiles/mylib.dir/requires: CMakeFiles/mylib.dir/src/myclass.cc.o.requires
.PHONY : CMakeFiles/mylib.dir/requires

CMakeFiles/mylib.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/mylib.dir/cmake_clean.cmake
.PHONY : CMakeFiles/mylib.dir/clean

CMakeFiles/mylib.dir/depend:
	cd /home/allen/project/RNA/c-code && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code /home/allen/project/RNA/c-code/CMakeFiles/mylib.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/mylib.dir/depend

