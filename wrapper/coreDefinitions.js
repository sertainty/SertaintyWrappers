const {
  intType,
  longType,
  voidType,
  stringType,
  boolType,
  stringArrType,
  longlongType,
  ucharType,
  intPtrType,
  voidPtrType,
  uintType,
} = require("./dataTypes");
/**
 * UXP_SYS
 */

// setLogFile
exports.uxpsys_setLogFile = [voidType, [stringType, stringType]];
// installLicense
exports.uxpsys_installLicense = [boolType, [intPtrType, stringType]];
// hasError
exports.uxpsys_hasError = [boolType, [voidPtrType]];
// getErrorMessage
exports.uxpsys_getErrorMessage = [stringType, [intPtrType]];
// initLibrary
exports.uxpsys_initLibrary = [
  boolType,
  [
    intPtrType,
    intType,
    stringArrType,
    stringType,
    stringType,
    stringType,
    stringType,
  ],
];
// uxpsys_newCallStatusHandle
exports.uxpsys_newCallStatusHandle = [intPtrType, []];
exports.uxpsys_newCallStatusHandle = [intPtrType, []];
// freeCallStatusHandle
exports.uxpsys_freeCallStatusHandle = [voidType, [intPtrType]];
// fileReadAll
exports.uxpsys_fileReadAll = [voidType, [intPtrType, stringType, intPtrType]];

/**
 * UXP_BA
 */

// newHandle
exports.uxpba_newHandle = [intPtrType, []];
// getData
exports.uxpba_getData = [intPtrType, [intPtrType]];
// getSize
exports.uxpba_getSize = [longlongType, [intPtrType]];
// setData
exports.uxpba_setData = [voidType, [intPtrType, stringType, intType]];
// clearData
exports.uxpba_clearData = [voidType, [intPtrType]];
// freeHandle
exports.uxpba_freeHandle = [voidType, [intPtrType]];

/**
 * UXP_FILE
 */

// newHandle
exports.uxpfile_newHandle = [intPtrType, []];
// openNewFile
exports.uxpfile_openNewFile = [
  voidType,
  [intPtrType, stringType, stringType, intType, intType, intType],
];
//
exports.uxpfile_openNewFile2 = [
  voidType,
  [intPtrType, stringType, stringType, longType, intType, intType, intType],
];
// addVirtualFromFile
exports.uxpfile_addVirtualFromFile = [
  voidType,
  [intPtrType, stringType, stringType, longType, longType, intType],
];
// openVirtualFile - struct
exports.uxpfile_openVirtualFile = [
  intPtrType,
  [intPtrType, stringType, ucharType],
];
// readVirtualFile
exports.uxpfile_readVirtualFile = [
  longlongType,
  [intPtrType, intPtrType, intPtrType, longlongType],
];
// closeVirtualFile
exports.uxpfile_closeVirtualFile = [voidType, [intPtrType, intPtrType]];
// compareExternalFile
exports.uxpfile_compareExternalFile = [
  boolType,
  [intPtrType, stringType, stringType],
];
// close
exports.uxpfile_close = [voidType, [intPtrType]];
// openFile - struct
exports.uxpfile_openFile = [voidType, [intPtrType, stringType, ucharType]];
// uxpfile_authenticate - struct
exports.uxpfile_authenticate = [intType, [intPtrType, boolType]];
// getChallengeCount
exports.uxpfile_getChallengeCount = [intType, [intPtrType]];
// getChallenge
exports.uxpfile_getChallenge = [intPtrType, [intPtrType, intType]];
// uxpfile_exportVirtualFile
exports.uxpfile_exportVirtualFile = [
  voidType,
  [intPtrType, stringType, stringType, intType],
];
// addResponse
exports.uxpfile_addResponse = [voidType, [intPtrType, intPtrType]];
// freeHandle
exports.uxpfile_freeHandle = [voidType, [intPtrType]];
//getAccessCount
exports.uxpfile_getAccessCount = [longType, [intPtrType]];
//
exports.uxpfile_cancelOperation = [voidType, [intPtrType]];
//
exports.uxpfile_checkValidity = [boolType, [intPtrType, stringType]];
//
exports.uxpfile_deleteVirtualFile = [
  voidType,
  [intPtrType, stringType, intType],
];
//
exports.uxpfile_getAuthenticationMessage = [
  stringType,
  [intPtrType, intPtrType],
];
//
exports.uxpfile_errorStatus = [intPtrType, [intPtrType]];
/**
 * UXP_ID
 */

// addConfigurations - done
exports.uxpid_addConfigurations = [
  voidType,
  [intPtrType, intPtrType, stringType, stringType],
];

// addUsers - done
exports.uxpid_addUsers = [
  voidType,
  [intPtrType, intPtrType, stringType, stringType],
];

// appyRules - done
exports.uxpid_applyRules = [
  voidType,
  [intPtrType, intPtrType, stringType, stringType, stringType],
];

// applyRulesByName - done
exports.uxpid_applyRulesByName = [
  voidType,
  [intPtrType, intPtrType, stringType, stringType, stringType],
];

// freeHandle - done
exports.uxpid_freeHandle = [voidType, [intPtrType]];

// getConfiguration - done
exports.uxpid_getConfiguration = [voidType, [intPtrType, intPtrType]];

// getUsers - done
exports.uxpid_getUsers = [voidType, [intPtrType, intPtrType, intPtrType]];
//
exports.uxpid_getChallengeCount = [intType, [intPtrType]];
//
exports.uxpid_getChallenge = [intPtrType, [intPtrType, uintType]];
//
exports.uxpid_addResponse = [voidType, [intPtrType, intPtrType]];
// newHandle - done
exports.uxpid_newHandle = [intPtrType, []];

// openSessionFromBuffer - done
// stop time should be int right?
exports.uxpid_openSessionFromBuffer = [
  voidType,
  [intPtrType, stringType, longlongType, stringType, intType, intType],
];

// openSessionFromFile - done
// stop time should be int right?
exports.uxpid_openSessionFromFile = [
  voidType,
  [intPtrType, stringType, intType, intType],
];
//
exports.uxpid_authenticate = [intType, [intPtrType]];

// publishToBuffer - done
exports.uxpid_publishToBuffer = [
  voidType,
  [intPtrType, intPtrType, stringType],
];

// publishToFile - done
exports.uxpid_publishToFile = [
  voidType,
  [intPtrType, stringType, stringType, intType],
];
// uxpid_authenticate - struct
exports.uxpid_authenticate = [intType, [intPtrType]];
// getChallengeCount
exports.uxpid_getChallengeCount = [intType, [intPtrType]];
// getChallenge
exports.uxpid_getChallenge = [intPtrType, [intPtrType, intType]];
// addResponse
exports.uxpid_addResponse = [voidType, [intPtrType, intPtrType]];
//open uxp from file
exports.uxpid_openUxpFromFile = [intPtrType, [intPtrType, intPtrType, stringType, intType]];
//uxpid validate
exports.uxpid_validate = [voidType, [intPtrType, stringType, intPtrType]];
//close session
exports.uxpid_closeSession = [voidType, [intPtrType]];


exports.uxlmsg_getSecureText = [voidType, [intPtrType, intPtrType, stringType, intType]];

exports.uxlmsg_loadSecureText = [voidType, [intPtrType, stringType, stringType, stringType, intType]];

/**
 * UXP_CH
 */
exports.uxpch_newHandle = [intPtrType, []];
// freeHandle
exports.uxpch_freeHandle = [voidType, [intPtrType]];
// getPrompt
exports.uxpch_getPrompt = [stringType, [intPtrType, intPtrType]];
// setValueString
exports.uxpch_setValueString = [voidType, [intPtrType, stringType]];
//SetName
exports.uxpch_setName = [voidType, [intPtrType, stringType]];
//SetPrompt
exports.uxpch_setPrompt = [voidType, [intPtrType, stringType]];
//SetValue
//exports.uxpch_SetValue = [voidType, [intPtrType, stringType]];
// setKey
exports.uxpch_setKey = [voidType, [intPtrType, stringType]];
// startTimer
exports.uxpch_startTimer = [voidType, [intPtrType]];
// endTimer
exports.uxpch_endTimer = [voidType, [intPtrType]];
//


/**
 * UXP LIST
 */
// getByteArray
exports.uxplist_getByteArray = [intPtrType, [intPtrType, intType]];
// freeList
exports.uxplist_freeList = [voidType, [intPtrType]];
// uxplist_count
exports.uxplist_count = [intType, [intPtrType]];

/**
 * UXP_MESSAGE_ID 
 */
// newHandle
exports.uxpmsgid_newHandle = [intPtrType, []];
//set linked id
exports.uxpmsgid_setLinkedID = [voidType, [intPtrType, intPtrType]];
//open new buffer
exports.uxpmsgid_openNewBuffer = [intPtrType, [intPtrType, intPtrType, intType, intType, intType, intType]];
//uxp message append
exports.uxpmsgid_append = [intType, [intPtrType, intPtrType, stringType, intType]];
//message close
exports.uxpmsgid_close = [voidType, [intPtrType, intPtrType]];
//open buffer
exports.uxpmsgid_openBuffer = [intPtrType, [intPtrType, stringType, intType]];
//get properties
exports.uxpmsgid_getProperties = [voidType, [intPtrType, intPtrType, intPtrType]];
// read
exports.uxpmsgid_read = [intType, [intPtrType, intPtrType, intPtrType, intType]];


// export all as one object
module.exports = exports;
