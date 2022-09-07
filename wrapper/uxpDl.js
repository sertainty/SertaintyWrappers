const { uxpDl } = require("./wrapper");

exports.newHandle = (dsHandle) => {
  let dlHandle = uxpDl.newHandle(dsHandle);
  return dlHandle;
};

exports.errorStatus = (dlHandle) => {
  let callStatusHandle = uxpDl.errorStatus(dlHandle);
  return callStatusHandle;
};

exports.freeHandle = (dlHandle) => {
  uxpDl.freeHandle(dlHandle);
};

exports.getDelegates = (dlHandle, sessionId, delegateOwner) => {
  let listHandle = uxpDl.getDelegates(dlHandle, sessionId, delegateOwner);
  return listHandle;
};

exports.getDelegate = (
  dlHandle,
  sessionId,
  delegateOwner,
  delegateName,
  delegateDescription,
  expiration,
  permitOffline,
  offlineDuration,
  accessMax,
  flags,
  uxpIdChecksum,
  uxpId
) => {
  uxpDl.getDelegate(
    dlHandle,
    sessionId,
    delegateOwner,
    delegateName,
    delegateDescription,
    expiration,
    permitOffline,
    offlineDuration,
    accessMax,
    flags,
    uxpIdChecksum,
    uxpId
  );
};

exports.getSubscribers = (dlHandle, sessionId, delegateOwner, delegateName) => {
  let listHandle = uxpDl.getSubscribers(
    dlHandle,
    sessionId,
    delegateOwner,
    delegateName
  );
  return listHandle;
};

exports.newDelegate = (
  dlHandle,
  sessionId,
  owner,
  name,
  description,
  expiration,
  permitOffline,
  offlineDuration,
  accessMax,
  flags
) => {
  return uxpDl.newDelegate(
    dlHandle,
    sessionId,
    owner,
    name,
    description,
    expiration,
    permitOffline,
    offlineDuration,
    accessMax,
    flags
  );
};

exports.subscribe = (
  dlHandle,
  sessionId,
  owner,
  name,
  member,
  expiration,
  permitOffline,
  offlineDuration,
  accessMax,
  accessCount
) => {
  uxpDl.subscribe(
    dlHandle,
    sessionId,
    owner,
    name,
    member,
    expiration,
    permitOffline,
    offlineDuration,
    accessMax,
    accessCount
  );
};

exports.getSubscription = (
  dsHandle,
  sessionId,
  delegateOwner,
  delegateName,
  username,
  expiration,
  permitOffline,
  offlineDuration,
  accessMax,
  accessCount
) => {
  uxpDl.getSubscription(
    dsHandle,
    sessionId,
    delegateOwner,
    delegateName,
    username,
    expiration,
    permitOffline,
    offlineDuration,
    accessMax,
    accessCount
  );
};

exports.getSubscriptions = (dsHandle, sessionId, username) => {
  let listHandle = uxpDl.getSubscriptions(dsHandle, sessionId, username);
  return listHandle;
};

exports.updateDelegate = (delegateServiceHandle, sessionHandle, owner, name, description, expiration, permitOffline, offlineDuration, accessMax, flags) => { 
  uxpDl.updateDelegate(delegateServiceHandle, sessionHandle, owner, name, description, expiration, permitOffline, offlineDuration, accessMax, flags)
}

exports.delegateExists = (delegateServiceHandle, sessionHandle, owner, name) => {
  let idHandle = uxpDl.delegateExists(
    delegateServiceHandle,
    sessionHandle,
    owner,
    name
  );
  return idHandle;
}

exports.deleteDelegate = (serviceHandle, sessionHandle, owner, name) => {
  uxpDl.deleteDelegate(serviceHandle, sessionHandle, owner, name);
};

exports.unsubscribe = (serviceHandle, sessionHandle, owner, name, member) => {
  uxpDl.unsubscribe(serviceHandle, sessionHandle, owner, name, member);
};