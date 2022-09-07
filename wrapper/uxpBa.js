const { uxpBa } = require("./wrapper");

exports.newHandle = () => {
  let bufferHandle = uxpBa.newHandle();
  return bufferHandle;
};

exports.getData = bufferHandle => {
  let dataHandle = uxpBa.getData(bufferHandle);
  return dataHandle;
};

exports.getSize = bufferHandle => {
  let size = uxpBa.getSize(bufferHandle);
  return size;
};

exports.setData = (bufferHandle, src, len) => {
  uxpBa.setData(bufferHandle, src, len);
};

exports.clearData = bufferHandle => {
  uxpBa.clearData(bufferHandle);
};

exports.freeHandle = bufferHandle => {
  uxpBa.freeHandle(bufferHandle);
};
