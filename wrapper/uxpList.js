const { uxpList } = require("./wrapper");

exports.getByteArray = (listHandle, elementNumber) => {
  let bufferHandle = uxpList.getByteArray(listHandle, elementNumber);
  return bufferHandle;
};
exports.count = (listHandle) => {
  let count = uxpList.count(listHandle);
  return count;
};
exports.freeList = (listHandle) => {
  uxpList.freeList(listHandle);
};
