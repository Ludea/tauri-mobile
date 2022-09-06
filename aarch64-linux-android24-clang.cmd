@echo off
setlocal
call :find_bin
if "%1" == "-cc1" goto :L

set "_BIN_DIR=C:/hostedtoolcache/windows/ndk/r25b/x64/toolchains/llvm/prebuilt/windows-x86_64/bin/clang.exe" --target=aarch64-linux-android24 %*
if ERRORLEVEL 1 exit /b 1
goto :done

:L
rem Target is already an argument.
set "_BIN_DIR=C:/hostedtoolcache/windows/ndk/r25b/x64/toolchains/llvm/prebuilt/windows-x86_64/bin/clang.exe" %*
if ERRORLEVEL 1 exit /b 1
goto :done

:find_bin
rem Accommodate a quoted arg0, e.g.: "clang"
rem https://github.com/android-ndk/ndk/issues/616
set _BIN_DIR=C:/hostedtoolcache/windows/ndk/r25b/x64/toolchains/llvm/prebuilt/windows-x86_64/bin/clang.exe
exit /b

:done
