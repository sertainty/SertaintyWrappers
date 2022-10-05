const ref = require("ref");
const ffi = require("ffi");
const readBytes = require('@arunwij/read-bytes');
const {
  intType,
  voidPtrType,
  stringType,
  intPtrType,
} = require("./wrapper/dataTypes");
const { uxpSys } = require("./wrapper");

// read buffer as string
const readAsString = function readAsString(handle) {
  const string = ref.readCString(handle, 0);
  return string;
};

const readAsBuffer = function readAsBuffer(handle, size) {
  const buffer = readBytes(handle, size);
  return buffer;
};

const checkError = (handle, errorPrefix = null) => {
  if (uxpSys.hasError(handle)) {
    const error = uxpSys.getErrorMessage(handle);
    let errorMessage = errorPrefix ? `${errorPrefix}: ${error}` : error;
    throw new Error(errorMessage);
  }
};

const defaultValidationCallback = (username, data) => {
  console.log("VALIDATION CALLBACK CALLED");
  return 1;
};

const getValidationCallback = (callback = defaultValidationCallback) => {
  return ffi.Callback(intType, [stringType, voidPtrType], callback);
};

const defaultDelegateLookupCallback = (
  username,
  data1,
  data2,
  owner,
  delegate
) => {
  console.log("DELEGATE LOOKUP CALLBACK CALLED");
  console.log("\n********************************************\n");
  console.log("  Delegate lookup callback:\n\n");
  console.log("    Username:       %s\n", username);
  console.log("    App data1:      %s\n", data1);
  console.log("    App data2:      %s\n", data2);
  console.log("    Delegate owner: %s\n", owner);
  console.log("    Delegate name:  %s\n", delegate);
  console.log("********************************************\n\n");

  return 1;
};

const getDelegateLookupCallback = (
  callback = defaultDelegateLookupCallback
) => {
  return ffi.Callback(
    intType,
    [intPtrType, intPtrType, intPtrType, intPtrType, intPtrType],
    callback
  );
};

module.exports = {
  readAsBuffer,
  readAsString,
  checkError,
  getDelegateLookupCallback,
  getValidationCallback,
};
