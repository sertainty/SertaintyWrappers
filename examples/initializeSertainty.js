const { uxpBa, uxpSys, uxpFile } = require("../index");
const fs = require('fs');
const { uxpId } = require("../wrapper/wrapper");
const { readAsString, readAsBuffer } = require("./utils");
// initialize sertainty
const main = () => {
  let license = "sertainty.lic";
  let appKey = "SertintyONE";
  let prefix = "sertainty";
  let version = "1.0.0";
  let bufferHandle = null;
  let fileHandle = null;
  let appHandle = null;
  const idXmlSpec = "sampleid.xml";
  const uxpFileSpec = "sample.uxp";
  const idFileSpec = "sampleid.iic";
  const copy1Spec = "dogCopy.png";
  const data2Spec = 'dogCopy.png';
  let error = null;

  var callStatusHandle = uxpSys.newCallStatusHandle();

  try {
    console.log("initializing sertainty");
    bufferHandle = uxpBa.newHandle();
    uxpSys.initLibrary(bufferHandle, 0, [], license, appKey, prefix, version);
    console.log("sertainty initialized");
    console.log("Success");
    uxpSys.fileReadAll(callStatusHandle, idXmlSpec, bufferHandle);
    error = uxpSys.hasError(callStatusHandle);
    console.log(error)

    const dataHandle = uxpBa.getData(bufferHandle);
    const doc = readAsString(dataHandle);
    // generate the iic file
    uxpId.publishToFile(callStatusHandle, idFileSpec, doc, 1)
    error = uxpSys.hasError(callStatusHandle);
    console.log(error)


    appHandle = uxpFile.newHandle()
    //core.uxpfile_openNewFile(appHandle, uxpFileSpec, idFileSpec, 3, 1, 0);
    uxpFile.openNewFile(appHandle, uxpFileSpec, idFileSpec, 3, 1, 0)

    uxpFile.addVirtualFromFile(appHandle, "dog.png", data2Spec, -1, -1 - 8)
    //core.uxpfile_addVirtualFromFile(appHandle, "data.pdf", dataPdfSpec, -1, -1, 8);
    error = uxpSys.hasError(appHandle);
    console.log("addVirtualFromFile", error)



    // Now open the first virtual file and write it out to a temporary file.
    //MODE.ReadOnly = 1
    fileHandle = uxpFile.openVirtualFile(appHandle, "dog.png", 1);

    // check if opening virtual file have any error
    error = uxpSys.hasError(appHandle);
    console.log("addVirtualFromFile", error)

    const wstream = fs.createWriteStream(copy1Spec);

    while (isEndOfFile(appHandle, fileHandle, bufferHandle)) {
      const length = uxpBa.getSize(bufferHandle);
      const dataHandle = uxpBa.getData(bufferHandle);
      const data = readAsBuffer(dataHandle, length);
      wstream.write(Uint8Array.from(data));
    }
    wstream.end();
    uxpFile.closeVirtualFile(appHandle, fileHandle)

    if (
      uxpFile.compareExternalFile(
        appHandle,
        "dog.png",
        copy1Spec
      )
    ) {
      console.log(`Comparison of dog.png to dogCopy.png: successful`);
    } else {
      console.log(`Comparison of dog.png to dogCopy.png: failed`);
    }

    // close the UXP. This will delete the handle as well
    uxpFile.close(appHandle)

  } catch (error) {
    console.log(`failed to initialize sertainty: ${error.message}`);
  } finally {
    console.log("cleaning handles");
    uxpBa.freeHandle(bufferHandle);
    uxpFile.freeHandle(fileHandle)
    console.log("*******************************");
  }
};

// run the program
main();


function getError(handle) {
  const errorHandle = uxpSys.getErrorMessage(handle);
  const errorText = readAsString(errorHandle);
  return errorText;
};

function isEndOfFile(appHandle, fileHandle, bufferHandle) {
  const readLength = 1000;
  const dataLength = uxpFile.readVirtualFile(
    appHandle,
    fileHandle,
    bufferHandle,
    readLength
  );
  return dataLength > 0;
};