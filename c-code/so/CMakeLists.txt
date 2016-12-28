cmake_minimum_required (VERSION 2.8)
project (so)

set( CMAKE_VERBOSE_MAKEFILE ON )
set( OPTIMIZE -O3 )
set( DEBUG "-g")
set( WARN "-Wno-ignored-attributes -Wno-multichar -Wreturn-type -Wno-terminate" )

set( CMAKE_CXX_FLAGS "-std=c++17 -ftemplate-backtrace-limit=0 ${OPTIMIZE} ${DEBUG} ${WARN} " )

set( CMAKE_LIBRARY_PATH ${CMAKE_LIBRARY_PATH} "/usr/local/lib/" )

if( "${CMAKE_CXX_COMPILER_ID}" MATCHES "GNU" )
    execute_process( COMMAND ${CMAKE_CXX_COMPILER} -dumpversion OUTPUT_VARIABLE GCC_VERSION )
    if( NOT (GCC_VERSION VERSION_GREATER 5.0 OR GCC_VERSION VERSION_EQUAL 5.0) )
        message( FATAL_ERROR "${PROJECT_NAME} requires g++ 5.0 OR greater." )
    endif()
else()
    message( FATAL_ERROR "Your C++ compiler does not support C++14." )
endif()


add_library( x SHARED  ${CMAKE_SOURCE_DIR}/xapi.cc  ${CMAKE_SOURCE_DIR}/xclass.cc)
add_executable( test xmain.cc )
target_link_libraries( test ${Boost_LIBRARIES} ${CURL_LIBRARIES} x) 



