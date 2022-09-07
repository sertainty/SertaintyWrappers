const { uxpFile } = require("./wrapper");

exports.newHandle = () => {
  let appHandle = uxpFile.newHandle();
  return appHandle;
};

// openNewFile
exports.openNewFile = (
  uxpHandle,
  fileName,
  idFileName,
  idType,
  mods,
  flags
) => {
  uxpFile.openNewFile(uxpHandle, fileName, idFileName, idType, mods, flags);
};

//
exports.openNewFile2 = (
  uxpHandle,
  fileName,
  idBuffer,
  idLength,
  idType,
  mods,
  flags
) => {
  uxpFile.openNewFile2(
    uxpHandle,
    fileName,
    idBuffer,
    idLength,
    idType,
    mods,
    flags
  );
};
// addVirtualFromFile
exports.addVirtualFromFile = (
  uxpHandle,
  virtualFileName,
  fileName,
  pageSize,
  cacheSize,
  mods
) => {
  uxpFile.addVirtualFromFile(
    uxpHandle,
    virtualFileName,
    fileName,
    pageSize,
    cacheSize,
    mods
  );
};

// openVirtualFile - struct
exports.openVirtualFile = (uxpHandle, name, mode) => {
  let fileHandle = uxpFile.openVirtualFile(uxpHandle, name, mode);
  return fileHandle;
};

// readVirtualFile
exports.readVirtualFile = (uxpHandle, fileHandle, bufferHandle, mx) => {
  let dataLength = uxpFile.readVirtualFile(
    uxpHandle,
    fileHandle,
    bufferHandle,
    mx
  );
  return dataLength;
};

// closeVirtualFile
exports.closeVirtualFile = (uxpHandle, fileHandle) => {
  uxpFile.closeVirtualFile(uxpHandle, fileHandle);
};

// compareExternalFile
exports.compareExternalFile = (uxpHandle, virtualFileName, filename) => {
  let isExact = uxpFile.compareExternalFile(
    uxpHandle,
    virtualFileName,
    filename
  );
  return isExact;
};

// close
exports.close = (uxpHandle) => {
  uxpFile.close(uxpHandle);
};

// openFile - struct
exports.openFile = (uxpHandle, source, mode) => {
  uxpFile.openFile(uxpHandle, source, mode);
};

// uxpfile_authenticate - struct
exports.authenticate = (uxpHandle, useSso) => {
  let status = uxpFile.authenticate(uxpHandle, useSso);
  return status;
};

// getChallengeCount
exports.getChallengeCount = (uxpHandle) => {
  let challengeCount = uxpFile.getChallengeCount(uxpHandle);
  return challengeCount;
};

// getChallenge
exports.getChallenge = (uxpHandle, offset) => {
  let challengeHandle = uxpFile.getChallenge(uxpHandle, offset);
  return challengeHandle;
};

exports.exportVirtualFile = (
  uxpHandle,
  virtualFileName,
  outputFileName,
  mods
) => {
  uxpFile.exportVirtualFile(uxpHandle, virtualFileName, outputFileName, mods);
};

// addResponse
exports.addResponse = (uxpHandle, challengeHandle) => {
  uxpFile.addResponse(uxpHandle, challengeHandle);
};

// freeHandle
exports.freeHandle = (uxpHandle) => {
  uxpFile.freeHandle(uxpHandle);
};

exports.getAccessCount = (uxpHandle) => {
  const count = uxpFile.getAccessCount(uxpHandle);
  return count;
};

exports.cancelOperation = (uxpHandle) => {
  uxpFile.cancelOperation(uxpHandle);
};

exports.checkValidity = (uxpHandle, fileName) => {
  const isValid = uxpFile.checkValidity(uxpHandle, fileName);
  return isValid;
};

exports.deleteVirtualFile = (uxpHandle, virtualFileName, mods) => {
  uxpFile.deleteVirtualFile(uxpHandle, virtualFileName, mods);
};

exports.getAuthenticationMessage = (uxpHandle, bufferHandle) => {
  uxpFile.getAuthenticationMessage(uxpHandle, bufferHandle);
};

exports.errorStatus = (uxpHandle) => {
  let uxpCallStatusHandle = uxpFile.errorStatus(uxpHandle);
  return uxpCallStatusHandle;
};

exports.types = {
  StatusNotAuthorized: 0x00001 /*!< Access to UXP is not authorized */,
  StatusInvalidUsername: 0x00002 /*!< Invalid username was provided */,
  StatusFileMoved: 0x00004 /*!< File has been moved */,
  StatusScheduleViolation: 0x00008 /*!< Schedule violation */,
  StatusAuthorized: 0x00010 /*!< User has been authorized */,
  StatusConfigNotFound: 0x00020 /*!< Address configuration not reconized */,
  StatusLocationNotFound: 0x00040 /*!< Address location not recognized */,
  StatusDeviceNotFound: 0x00080 /*!< Address device not recognized */,
  StatusDeviceLocationFound: 0x00100 /*!< Address location and device pair not recognized */,
  StatusChallenged: 0x00200 /*!< User is challenged */,
  StatusPanic: 0x00400 /*!< User has indicated a panic situation */,
  StatusGlobalSchedViolation: 0x00800 /*!< Global schedule violation */,
  StatusThreat: 0x01000 /*!< Unauthoried access threat detected */,
  StatusCanceled: 0x02000 /*!< User canceled access attempt */,
  StatusLdapViolation: 0x04000 /*!< LDAP approval violation */,
  StatusConfigFound: 0x08000 /*!< Address configuration was recognized */,
  StatusNoSingleSignOn: 0x10000 /*!< Single sign-on attempt failed */,
  ModeRead: 1,
  ModeWrite: 2,
  ModeReadWrite: 3,
  IdFile: 3,
};
