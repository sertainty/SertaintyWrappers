const { uxpSys } = require("./wrapper");

exports.installLicense = (bufferHandle, licenseFile) => {
  let status = uxpSys.installLicense(bufferHandle, licenseFile);
  return status;
};

exports.initLibrary = (
  bufferHandle,
  argc,
  argv,
  licenseFile,
  appKey,
  prefix,
  version
) => {
  let status = uxpSys.initLibrary(
    bufferHandle,
    argc,
    argv,
    licenseFile,
    appKey,
    prefix,
    version
  );
  return status;
};

exports.setLogFile = (prefix, version) => {
  uxpSys.setLogFile(prefix, version);
};

exports.hasError = (handle) => {
  let hasError = uxpSys.hasError(handle);
  return hasError;
};

// exports.setLogging = (handle) => {
//   let hasError = uxpSys.hasError(handle);
//   //return hasError;
// };

exports.getErrorMessage = (handle) => {
  let errorHandle = uxpSys.getErrorMessage(handle);
  return errorHandle;
};

exports.newCallStatusHandle = () => {
  let callStatusHandle = uxpSys.newCallStatusHandle();
  return callStatusHandle;
};

exports.freeCallStatusHandle = (callStatusHandle) => {
  uxpSys.freeCallStatusHandle(callStatusHandle);
};

exports.fileReadAll = (callStatusHandle, fileName, bufferHandle) => {
  uxpSys.fileReadAll(callStatusHandle, fileName, bufferHandle);
};
