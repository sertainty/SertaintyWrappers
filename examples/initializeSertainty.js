const { uxpBa, uxpSys } = require("../index");

// initialize sertainty
const main = () => {
  let license = "sertainty.lic";
  let appKey = "SertintyONE";
  let prefix = "sertainty";
  let version = "1.0.0";
  let bufferHandle = null;

  try {
    console.log("initializing sertainty");
    bufferHandle = uxpBa.newHandle();
    uxpSys.initLibrary(bufferHandle, 0, [], license, appKey, prefix, version);
    console.log("sertainty initialized");
    console.log("Success");
  } catch (error) {
    console.log(`failed to initialize sertainty: ${error.message}`);
  } finally {
    console.log("cleaning handles");
    uxpBa.freeHandle(bufferHandle);
    console.log("*******************************");
  }
};

// run the program
main();
