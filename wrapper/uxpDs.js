const { uxpDs } = require("./wrapper");

exports.newHandle = () => {
  let dsHandle = uxpDs.newHandle();
  return dsHandle;
};

exports.getService = () => {
  let dsHandle = uxpDs.getService();
  return dsHandle;
};

exports.freeHandle = (dsHandle) => {
  uxpDs.freeHandle(dsHandle);
};

exports.initializeDatabase = (
  dsHandle,
  dbName,
  id,
  username,
  dbModule,
  dbParams
) => {
  uxpDs.initializeDatabase(dsHandle, dbName, id, username, dbModule, dbParams);
};

exports.openDatabase = (dsHandle, dbName, readOnly = 0) => {
  uxpDs.openDatabase(dsHandle, dbName, readOnly);
};

exports.openSession = (dsHandle, username) => {
  let sessionId = uxpDs.openSession(dsHandle, username);
  return sessionId;
};

exports.authenticate = (dsHandle, sessionId) => {
  let status = uxpDs.authenticate(dsHandle, sessionId);
  return status;
};

exports.closeSession = (dsHandle, sessionId) => {
  uxpDs.closeSession(dsHandle, sessionId);
};

exports.closeDatabase = (dsHandle) => {
  uxpDs.closeDatabase(dsHandle);
};

exports.getChallenge = (dsHandle, sessionId, challengeOffSet) => {
  let challengeHandle = uxpDs.getChallenge(
    dsHandle,
    sessionId,
    challengeOffSet
  );
  return challengeHandle;
};

exports.getChallengeCount = (dsHandle, sessionId) => {
  let challengeCount = uxpDs.getChallengeCount(dsHandle, sessionId);
  return challengeCount;
};

exports.addResponse = (dsHandle, sessionId, challengeHandle) => {
  uxpDs.addResponse(dsHandle, sessionId, challengeHandle);
};

exports.setServer = (dsHandle, sessionId, url) => {
  uxpDs.setServer(dsHandle, sessionId, url);
};

exports.newUser = (
  dsHandle,
  sessionId,
  username,
  formalName,
  description,
  email,
  privileges,
  data1,
  data2
) => {
  uxpDs.newUser(
    dsHandle,
    sessionId,
    username,
    formalName,
    description,
    email,
    privileges,
    data1,
    data2
  );
};

exports.newUserId = (
  dsHandle,
  sessionId,
  username,
  idName,
  flags,
  description,
  uxpId,
  source
) => {
  uxpDs.newUserId(
    dsHandle,
    sessionId,
    username,
    idName,
    flags,
    description,
    uxpId,
    source
  );
};

exports.getUsers = (dsHandle, sessionId) => {
  let listHandle = uxpDs.getUsers(dsHandle, sessionId);

  return listHandle;
};

exports.getUser = (
  dsHandle,
  sessionId,
  username,
  formalName,
  description,
  email,
  privileges,
  data1BufferHandle,
  data2BufferHandle
) => {
  uxpDs.getUser(
    dsHandle,
    sessionId,
    username,
    formalName,
    description,
    email,
    privileges,
    data1BufferHandle,
    data2BufferHandle
  );
};

exports.getServer = (dsHandle, sessionId, bufferHandle) => {
  uxpDs.getServer(dsHandle, sessionId, bufferHandle);
};

exports.webService = (
  dsHandle,
  requestBuffer,
  responseBufferHandle,
  callerIpBufferHandle
) => {
  uxpDs.webService(
    dsHandle,
    requestBuffer,
    responseBufferHandle,
    callerIpBufferHandle
  );
};

exports.setValidationCallback = (dsHandle, callbackHandle, userDataHandle) => {
  uxpDs.setValidationCallback(dsHandle, callbackHandle, userDataHandle);
};

exports.errorStatus = (dsHandle) => {
  const callStatusHandle = uxpDs.errorStatus(dsHandle);
  return callStatusHandle;
};

exports.publishUserId = (
  serviceHandle,
  sessionHandle,
  username,
  idName,
  save,
  bufferHandle
) => {
  uxpDs.publishUserId(
    serviceHandle,
    sessionHandle,
    username,
    idName,
    save,
    bufferHandle
  );
};

exports.updateUser = (
  serviceHandle,
  sessionHandle,
  username,
  formalName,
  description,
  email,
  privileges,
  appData1,
  appData2
) => {
  uxpDs.updateUser(
    serviceHandle,
    sessionHandle,
    username,
    formalName,
    description,
    email,
    privileges,
    appData1,
    appData2
  );
};

exports.updateUserId = (
  serviceHandle,
  sessionHandle,
  username,
  idName,
  flags,
  description,
  uxpId,
  source
) => {
  uxpDs.updateUserId(
    serviceHandle,
    sessionHandle,
    username,
    idName,
    flags,
    description,
    uxpId,
    source
  );
};

exports.isDatabaseOpen = (serviceHandle) => {
  let isDatabaseOpen = uxpDs.isDatabaseOpen(serviceHandle);
  return isDatabaseOpen;
};

exports.validateSession = (serviceHandle, sessionHandle) => {
  uxpDs.validateSession(serviceHandle, sessionHandle);
};

exports.types = {
  ID_FLAGS_PRIVATE: 1,
  ID_FLAGS_PUBLIC: 2,
  ID_FLAGS_DELEGATE: 4,
  ID_FLAGS_SESSION: 8,
  PRIV_ADMIN: 2,
  PRIV_ALL: 15,
  PRIV_JOURNAL: 4,
  PRIV_NORMAL: 1,
  PRIV_SYSADMIN: 8,
};
