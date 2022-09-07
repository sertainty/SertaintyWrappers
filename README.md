# Prerequisites

1. Sertainty UXP Tools (SertaintyUXPTools-V3.5.2-1182-linux)
2. Sertainty License Key 
3. [Python 2.x.x](https://www.python.org/downloads/release/python-272/)
4. [NodeJS 10.x.x](https://nodejs.org/en/download/releases/)
5. [node-gyp](https://github.com/nodejs/node-gyp)
6. Necessary build tools
   1. Windows - [Windows build tools](https://www.npmjs.com/package/windows-build-tools)
   2. Linux - [gcc](https://linuxize.com/post/how-to-install-gcc-on-ubuntu-20-04/)


# How to install 

Windows only: Set SERTAINTY_HOME env variable

`setx SERTAINTY_HOME /M "%ProgramFiles%\Sertainty"`


run `npm intall` inside the root directory
   
# How to run

1. `cd examples`
2. Windows - `node initializeSertainty.js'
3. Linux - `LD_LIBRARY_PATH=~/Sertainty/developer/bin node initializeSertainty.js`
4. macOS - `DYLD_LIBRARY_PATH=~/Sertainty/developer/bin node initializeSertainty.js`
    
# Developer Documentation

path: Sertainty/developer/documents