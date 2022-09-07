const { uxpCh } = require("./wrapper");

exports.newHandle = () => {
  let challengeHandle = uxpCh.newHandle();
  return challengeHandle;
};

// freeHandle
exports.freeHandle = challengeHandle => {
  uxpCh.freeHandle(challengeHandle);
};

// getPrompt
exports.getPrompt = (challengeHandle, bufferHandle) => {
  uxpCh.getPrompt(challengeHandle, bufferHandle);
};

// setValueString
exports.setValueString = (challengeHandle, value) => {
  uxpCh.setValueString(challengeHandle, value);
};

// startTimer
exports.startTimer = challengeHandle => {
  uxpCh.startTimer(challengeHandle);
};

// endTimer
exports.endTimer = challengeHandle => {
  uxpCh.endTimer(challengeHandle);
};
