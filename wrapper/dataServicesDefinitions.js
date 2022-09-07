const {
  intType,
  voidType,
  stringType,
  intPtrType,
  voidPtrType,
  boolType,
} = require("./dataTypes");

/**
 * UXP_DS
 */

exports.uxpds_newHandle = [intPtrType, []];
exports.uxpds_getService = [intPtrType, []];
exports.uxpds_setValidationCallback = [
  voidType,
  [intPtrType, voidPtrType, voidPtrType],
];
exports.uxpds_freeHandle = [voidType, [intPtrType]];
exports.uxpds_initializeDatabase = [
  voidType,
  [intPtrType, stringType, intPtrType, stringType, stringType, stringType],
];
exports.uxpds_openDatabase = [voidType, [intPtrType, stringType, intType]];
exports.uxpds_openSession = [intPtrType, [intPtrType, stringType]];
exports.uxpds_validateSession = [voidType, [intPtrType, intPtrType]];
exports.uxpds_authenticate = [intType, [intPtrType, intPtrType]];
exports.uxpds_closeSession = [voidType, [intPtrType, intPtrType]];
exports.uxpds_closeDatabase = [voidType, [intPtrType]];
exports.uxpds_setServer = [voidType, [intPtrType, intPtrType, stringType]];
exports.uxpds_getChallenge = [intPtrType, [intPtrType, intPtrType, intType]];
exports.uxpds_getChallengeCount = [intType, [intPtrType, intPtrType]];
exports.uxpds_addResponse = [voidType, [intPtrType, intPtrType, intPtrType]];
exports.uxpds_newUser = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    stringType,
    stringType,
    stringType,
    intType,
    stringType,
    stringType,
  ],
];
exports.uxpds_getUsers = [intPtrType, [intPtrType, intPtrType]];
exports.uxpds_getUser = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
  ],
];
// newUserId
exports.uxpds_newUserId = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    stringType,
    intType,
    stringType,
    intPtrType,
    intPtrType,
  ],
];
exports.uxpds_getServer = [voidType, [intPtrType, intPtrType, intPtrType]];
exports.uxpds_webService = [
  voidType,
  [intPtrType, intPtrType, intPtrType, stringType],
];
exports.uxpds_errorStatus = [intPtrType, [intPtrType]];
exports.uxpds_publishUserId = [voidType, [intPtrType, intPtrType, stringType, stringType, intType, intPtrType]];
exports.uxpds_updateUser = [voidType, [intPtrType, intPtrType, stringType, stringType, stringType, stringType, intType, stringType, stringType]];
exports.uxpds_updateUserId = [voidType, [intPtrType, intPtrType, stringType, stringType, intType, stringType, intPtrType, intPtrType]]; 
exports.uxpds_isDatabaseOpen = [boolType, [intPtrType]];
/**
 * UXP_DL
 */
exports.uxpdl_newHandle = [intPtrType, [intPtrType]];
exports.uxpdl_errorStatus = [intPtrType, [intPtrType]];
exports.uxpdl_freeHandle = [voidType, [intPtrType]];
exports.uxpdl_getDelegate = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    stringType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
  ],
];
exports.uxpdl_getDelegates = [intPtrType, [intPtrType, intPtrType, stringType]];
exports.uxpdl_getSubscribers = [
  intPtrType,
  [intPtrType, intPtrType, stringType, stringType],
];
exports.uxpdl_newDelegate = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    stringType,
    stringType,
    intType,
    intType,
    intType,
    intType,
    intType,
  ],
];
exports.uxpdl_setDelegateCallback = [voidType, [intPtrType, intPtrType]];
exports.uxpdl_subscribe = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    stringType,
    stringType,
    intType,
    intType,
    intType,
    intType,
    intType,
  ],
];
exports.uxpdl_getSubscription = [
  voidType,
  [
    intPtrType,
    intPtrType,
    stringType,
    stringType,
    stringType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
    intPtrType,
  ],
];
exports.uxpdl_getSubscriptions = [
  intPtrType,
  [intPtrType, intPtrType, stringType],
];
exports.uxpdl_delegateExists = [intPtrType, [intPtrType, intPtrType, stringType, stringType]];
exports.uxpdl_updateDelegate = [voidType, [intPtrType, intPtrType, stringType, stringType, stringType, intType, intType, intType, intType, intType]];
exports.uxpdl_deleteDelegate = [
  voidType,
  [intPtrType, intPtrType, stringType, stringType],
];
exports.uxpdl_unsubscribe = [
  voidType,
  [intPtrType, intPtrType, stringType, stringType, stringType],
];


// export all as one object
module.exports = exports;
