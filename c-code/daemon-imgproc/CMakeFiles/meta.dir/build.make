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
CMAKE_SOURCE_DIR = /home/allen/project/RNA/c-code/engine

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/allen/project/RNA/c-code/engine

# Include any dependencies generated for this target.
include CMakeFiles/meta.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/meta.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/meta.dir/flags.make

CMakeFiles/meta.dir/src/main.cpp.o: CMakeFiles/meta.dir/flags.make
CMakeFiles/meta.dir/src/main.cpp.o: src/main.cpp
	$(CMAKE_COMMAND) -E cmake_progress_report /home/allen/project/RNA/c-code/engine/CMakeFiles $(CMAKE_PROGRESS_1)
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Building CXX object CMakeFiles/meta.dir/src/main.cpp.o"
	/usr/bin/c++   $(CXX_DEFINES) $(CXX_FLAGS) -o CMakeFiles/meta.dir/src/main.cpp.o -c /home/allen/project/RNA/c-code/engine/src/main.cpp

CMakeFiles/meta.dir/src/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/meta.dir/src/main.cpp.i"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -E /home/allen/project/RNA/c-code/engine/src/main.cpp > CMakeFiles/meta.dir/src/main.cpp.i

CMakeFiles/meta.dir/src/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/meta.dir/src/main.cpp.s"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_FLAGS) -S /home/allen/project/RNA/c-code/engine/src/main.cpp -o CMakeFiles/meta.dir/src/main.cpp.s

CMakeFiles/meta.dir/src/main.cpp.o.requires:
.PHONY : CMakeFiles/meta.dir/src/main.cpp.o.requires

CMakeFiles/meta.dir/src/main.cpp.o.provides: CMakeFiles/meta.dir/src/main.cpp.o.requires
	$(MAKE) -f CMakeFiles/meta.dir/build.make CMakeFiles/meta.dir/src/main.cpp.o.provides.build
.PHONY : CMakeFiles/meta.dir/src/main.cpp.o.provides

CMakeFiles/meta.dir/src/main.cpp.o.provides.build: CMakeFiles/meta.dir/src/main.cpp.o

# Object files for target meta
meta_OBJECTS = \
"CMakeFiles/meta.dir/src/main.cpp.o"

# External object files for target meta
meta_EXTERNAL_OBJECTS =

bin/meta: CMakeFiles/meta.dir/src/main.cpp.o
bin/meta: CMakeFiles/meta.dir/build.make
bin/meta: CMakeFiles/meta.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --red --bold "Linking CXX executable bin/meta"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/meta.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/meta.dir/build: bin/meta
.PHONY : CMakeFiles/meta.dir/build

CMakeFiles/meta.dir/requires: CMakeFiles/meta.dir/src/main.cpp.o.requires
.PHONY : CMakeFiles/meta.dir/requires

CMakeFiles/meta.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/meta.dir/cmake_clean.cmake
.PHONY : CMakeFiles/meta.dir/clean

CMakeFiles/meta.dir/depend:
	cd /home/allen/project/RNA/c-code/engine && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/allen/project/RNA/c-code/engine /home/allen/project/RNA/c-code/engine /home/allen/project/RNA/c-code/engine /home/allen/project/RNA/c-code/engine /home/allen/project/RNA/c-code/engine/CMakeFiles/meta.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/meta.dir/depend

