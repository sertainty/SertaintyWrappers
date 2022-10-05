const { uxpId } = require("./wrapper");

//
exports.authenticate = (idHandle) => {
  let status = uxpId.authenticate(idHandle);
  return status;
};
//
exports.getChallenge = (idHandle, offset) => {
  let challengeHandle = uxpId.getChallenge(idHandle, offset);
  return challengeHandle;
};
//
exports.addResponse = (idHandle, challengeHandle) => {
  uxpId.addResponse(idHandle, challengeHandle);
};
//
exports.getChallengeCount = (idHandle) => {
  let count = uxpId.getChallengeCount(idHandle);
  return count;
};
// addConfigurations - done
exports.addConfigurations = (callStatusHandle, doc, buf, user) => {
  uxpId.addConfigurations(callStatusHandle, doc, buf, user);
};

// addUsers - done
exports.addUsers = (callStatusHandle, doc, users, filter) => {
  uxpId.addUsers(callStatusHandle, doc, users, filter);
};

// appyRules - doneuse
exports.applyRules = (callStatusHandle, doc, user, presetDoc, ruleList) => {
  uxpId.applyRules(callStatusHandle, doc, user, presetDoc, ruleList);
};

// applyRulesByName - done
exports.applyRulesByName = (
  callStatusHandle,
  doc,
  user,
  presetName,
  ruleList
) => {
  uxpId.applyRulesByName(callStatusHandle, doc, user, presetName, ruleList);
};

// freeHandle - done
exports.freeHandle = (idHandle) => {
  uxpId.freeHandle(idHandle);
};

// getConfiguration - done
exports.getConfiguration = (callStatusHandle, config) => {
  uxpId.getConfiguration(callStatusHandle, config);
};

// getUsers - done
exports.getUsers = (callStatusHandle, users, id) => {
  uxpId.getUsers(callStatusHandle, users, id);
};

// newHandle - done
exports.newHandle = () => {
  let idHandle = uxpId.newHandle();
  return idHandle;
};

// openSessionFromBuffer - done
// stop time should be int right?
exports.openSessionFromBuffer = (
  idHandle,
  id,
  idlen,
  filename,
  share,
  stopTime
) => {
  uxpId.openSessionFromBuffer(idHandle, id, idlen, filename, share, stopTime);
};

// openSessionFromFile - done
// stop time should be int right?
exports.openSessionFromFile = (idHandle, id, share, stopTime) => {
  uxpId.openSessionFromFile(idHandle, id, share, stopTime);
};

// publishToBuffer - done
exports.publishToBuffer = (callStatusHandle, id, doc) => {
  uxpId.publishToBuffer(callStatusHandle, id, doc);
};

// publishToFile - done
exports.publishToFile = (callStatusHandle, id, doc, mods) => {
  uxpId.publishToFile(callStatusHandle, id, doc, mods);
};

exports.validate = (callStatusHandle, doc, messages) => {
  uxpId.validate(callStatusHandle, doc, messages);
};

exports.authenticate = (uxpHandle) => {
  let status = uxpId.authenticate(uxpHandle);
  return status;
};

// getChallengeCount
exports.getChallengeCount = (uxpHandle) => {
  let challengeCount = uxpId.getChallengeCount(uxpHandle);
  return challengeCount;
};

// getChallenge
exports.getChallenge = (uxpHandle, offset) => {let challengeHandle = uxpId.getChallenge(uxpHandle, offset);
  return challengeHandle;
};


exports.getSecureText = (callStatusHandle, buff, domain, id) =>
{uxpId.getSecureText(callStatusHandle, ba, domain, id);};

//Loads secure text strings.  Secure messages are construct
exports.LoadSecureText = (callStatusHandle, domain, fileName, buff, key_size ) =>
{uxpId.LoadSecureText (callStatusHandle, domain, fileName, buff, key_size );};


// addResponse
exports.addResponse = (uxpHandle, challengeHandle) => {uxpId.addResponse(uxpHandle, challengeHandle);};
//open uxp fom file
exports.openUxpFromFile = (idHande, uxpHandle, source, mode) => {uxpId.openUxpFromFile(idHande, uxpHandle, source, mode);};
exports.closeSession = (idHande) => {uxpId.closeSession(idHande);};
